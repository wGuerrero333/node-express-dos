const express = require('express');
// import express from 'express'
// permite cargar varibles de entorno para pruebas en DEVelopment en produccion no es necesario
const {config} = require('dotenv')
// pg es un modulo para conectarse a PostgreSQL
config()
const app = express()

// rutas con Modulo  ROUTER
app.use(require('./routes/index.js'));


app.listen( process.env.PORT || 3000)
console.log("Escucha por" ,process.env.PORT || 3000)