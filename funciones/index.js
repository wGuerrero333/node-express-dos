const pg = require('pg')

const conexion = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // solo necesario en DEVELOPMENT
    ssl:true
})

const getSimple = (req,res)=>{
    res.send("Respuesta send texto ");
}

const conexionPG = async(req,res)=>{
    const resultado =  await conexion.query('SELECT NOW()')
    return res.json(resultado.rows[0])
}

module.exports = {
    getSimple,
    conexionPG
}