const express = require("express");

const response = require("../../network/response");
const Controller = require("./controller");

const router = express.Router();

router.get("/", list);
router.get("/:id", filterID);
router.get("/nature/:nature",fitlerByNature);


router.post("/", post);

router.patch("/:id", patch);

function list(req, res, next) {
  Controller.list()
    .then((pokemons) => {
      response.succes(req, res, pokemons, 200);
    })
    .catch((e) => {
      console.error(e);
      response.error(req, res, "Error en el servidor", 500);
    });
}

function filterID(req, res, next) {
  Controller.filtById(req.params.id)
    .then((user) => {
      response.succes(req, res, user, 200);
    })
    .catch((e) => {
      response.error(req, res, e, 500);
    });
}

function fitlerByNature(req, res, next) {
  Controller.filterByNature(req.params.nature)
  .then((pokemons)=>{
    response.succes(req,res,pokemons,200);
  })
  .catch((e)=>{
    response.error(req,res,e,500);
  })
}

function post(req, res, next) {
  Controller.post(req.body)
    .then((user) => {
      response.succes(req, res, user, 201);
    })
    .catch((e) => {
      response.error(req, res, e, 500);
    });
}

function patch(req, res, next) {
  Controller.patchData(req.params.id, req.body)
    .then((user) => {
      response.succes(req, res, user, 201);
    })
    .catch((e) => {
      response.error(req, res, e, 500);
    });
}

module.exports = router;
