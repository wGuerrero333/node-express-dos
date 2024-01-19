const {Router} = require('express');
// import { Router } from "express";

const router = Router();

const { getSimple, conexionPG } = require("../funciones/index")

router.get('/simple', getSimple)

router.get('/conexion', conexionPG)

module.exports = router;

