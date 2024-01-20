const {Router} = require('express');
// import { Router } from "express";

const router = Router();

const { getSimple, conexionPG, conexionLocal, postearJson, getUserById, eliminarById, actualizar } = require("../funciones/funciones")

router.get('/simple', getSimple)

router.get('/conexiontest', conexionPG)

router.get('/conexionLocal', conexionLocal)

router.post('/publicar', postearJson)
// id se pasara por parametro en la ruta mediante la URL 
router.get('/ById/:id', getUserById )

router.delete('/borrar/:id', eliminarById)

router.put('/put/:id', actualizar)

module.exports = router;

