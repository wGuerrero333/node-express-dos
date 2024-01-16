const {Router} = require('express');
// import { Router } from "express";
const pg = require('pg')

const conexion = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // solo necesario en DEVELOPMENT
    ssl:true
})
const router = Router();

router.get('/',(req,res)=>{
    res.send("Respuesta send texto ")
})

router.get('/conexion', async(req,res)=>{
    const resultado =  await conexion.query('SELECT NOW()')
    return res.json(resultado.rows[0])
})

module.exports = router;

