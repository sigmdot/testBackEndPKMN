const store = require("./store");

function list() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function filtById(idQuestion) {
  return new Promise((resolve, reject) => {
    if (idQuestion === "" || !idQuestion) return reject("Invalid id");
    resolve(store.filterId(idQuestion));
  });
}

function getByNrandom(number) {
  return new Promise(async (resolve, reject) => {
    const questions = await list();
    if (questions == "" || !questions || questions == []) {
      reject("No hay preguntas");
    }
    var  len = questions.length;

    if (number > len){
      reject("Menos elementos de los que se quieren tomar.");
    }

    var result = new Array(number);
    var  taken = new Array(len);
    
    while (number--) {
      var x = Math.floor(Math.random() * len);
      result[number] = questions[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    resolve(result);
  });
}

function post(question) {
  return new Promise(async (resolve, reject) => {
    if (!question || !question.question || !question.answers.length === 0) {
      return reject("Invalid data");
    }
    const questionData = {
      question: question.question,
      answers: question.answers,
    };
    console.log(questionData);
    resolve(store.add(questionData));
  });
}

function patchData(id, questionData) {
  return store.patch(id, questionData);
}

module.exports = {
  list,
  post,
  filtById,
  patchData,
  getByNrandom,
};
