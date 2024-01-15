import express from 'express'
// permite cargar varibles de entorno para pruebas en development en produccion no es necesario
import {config } from 'dotenv' 
// pg es un modulo para conectarse a PostgreSQL
import pg from 'pg'
config()
const app = express()
const conexion = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // solo necesario en DEVELOPMENT
    ssl:true
})
// rutas
app.get('/',(req,res)=>{
    res.send("Respuesta send texto ")
})

app.get('/conexion', async(req,res)=>{
    const resultado =  await conexion.query('SELECT NOW()')
    return res.json(resultado.rows[0])
})

// app.listen( 3000)
// console.log("Sirviendo en puerto 3000")

app.listen( process.env.PORT || 3000)
console.log("Escucha por" ,process.env.PORT || 3000)