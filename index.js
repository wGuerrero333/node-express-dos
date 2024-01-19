const express = require('express');
// import express from 'express'
// permite cargar varibles de entorno para pruebas en DEVelopment en produccion no es necesario
const {config} = require('dotenv')
// pg es un modulo para conectarse a PostgreSQL
config()
const app = express()

// middleware: funciones que se ejecutan ANTES de que lleguen a las rutas
// esta funcion de express hace que cuando el cliente me envie info este la convirta a json
app.use(express.json())
// esta funcion util para los datos de formulario {extended:false} garantiza que el archivo NO sea extenso e.g .jpg  
app.use(express.urlencoded())

// rutas con Modulo  ROUTER
app.use(require('./routes/index.js'));


app.listen( process.env.PORT || 3000)
console.log("Escucha por" ,process.env.PORT || 3000)