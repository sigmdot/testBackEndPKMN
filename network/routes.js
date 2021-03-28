const questions = require('../components/questions/network');
const pokemons = require('../components/pokemones/network');

const routes = function (server) {
    server.use('/questions',questions);
    server.use('/pokemons',pokemons)
}

module.exports = routes;