const Model = require("./model");

function listPokemons() {
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

function filterNature(naturaleza) {
  return new Promise((resolve, reject) => {
    Model.find({ nature: naturaleza })
      .exec((e, populated) => {
        if (e) {
          reject(e);
          return false;
        }
        resolve(populated);
      });
  });
}

function addPokemon(pokemonData) {
  return new Promise((resolve, reject) => {
    console.log(pokemonData, " pokemonData");
    const myPokemon = new Model(pokemonData);
    myPokemon.save(function (err, pokemon) {
      if (err) reject(err);
      resolve(pokemon)
    });
  });
}

function filterById(idPokemon) {
  return new Promise((resolve, reject) => {
    Model.findOne({ _id: idPokemon })
      .exec((e, populated) => {
        if (e) {
          reject(e);
          return false;
        }
        resolve(populated);
      });
  });
}

function patchPokemon(id, pokemonData) {
  return new Promise((resolve, reject) => {
    resolve(Model.findOneAndUpdate({ _id: id }, pokemonData, { new: true }));
  });
}

module.exports = {
  list: listPokemons,
  add: addPokemon,
  filterId: filterById,
  patch: patchPokemon,
  filterNatu: filterNature,
};
