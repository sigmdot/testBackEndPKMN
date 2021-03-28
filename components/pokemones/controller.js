const store = require("./store");

function list() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function filterByNature(nature) {
  return new Promise((resolve, reject) => {
    if(!nature || nature === ''){
      return reject('No hay naturaleza');
    }
    resolve(store.filterNatu(nature));
  });
}

function filtById(idPokemon) {
  return new Promise((resolve, reject) => {
    if(idPokemon === '' || !idPokemon ) return reject('Invalid id');
    resolve(store.filterId(idPokemon));
  });
}

function post(pokemon) {
  return new Promise(async (resolve, reject) => {
    if (!pokemon) {
      return reject("Invalid data");
    }
    const pokemonData = {
      pokemon: pokemon.pokemon,
      gender: pokemon.gender,
      nature: pokemon.nature
    };
    console.log(pokemonData);
    resolve(store.add(pokemonData));
  });
}

function patchData(id, pokemonData) {
  return store.patch(id, pokemonData);
}

module.exports = {
  list,
  post,
  filtById,
  patchData,
  filterByNature
};
