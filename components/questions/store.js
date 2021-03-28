const Model = require("./model");

function listQuestion() {
  return new Promise((resolve, reject) => {
    Model.find()
      .exec((e, populated) => {
        if (e) {
          reject(e);
          return false;
        }
        resolve(populated);
      });
  });
}

function addQuestion(questionData) {
  return new Promise((resolve, reject) => {
    const myQuestion = new Model(questionData);
    myQuestion.save(function (err, question) {
      if (err) return reject(err);
      resolve(question)
    });
  });
}

function filterById(idQuestion) {
  return new Promise((resolve, reject) => {
    Model.findOne({ _id: idQuestion })
      .exec((e, populated) => {
        if (e) {
          reject(e);
          return false;
        }
        resolve(populated);
      });
  });
}

function patchQuestion(id, companyData) {
  return new Promise((resolve, reject) => {
    resolve(Model.findOneAndUpdate({ _id: id }, companyData, { new: true }));
  });
}

module.exports = {
  list: listQuestion,
  add: addQuestion,
  filterId: filterById,
  patch: patchQuestion,
};
