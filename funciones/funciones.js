const pg = require('pg')
// Importando solo el Módulo
// const { Pool} } = require('pg') 

// conexion a la db postgres creada en RENDER 
const conexion = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // solo necesario en DEVELOPMENT
    ssl:true
})
// esta es la conexion a la db local
const poolLocal = new pg.Pool({
    host:'localhost',
    user:'postgres',
    password:'delcamino333',
    database:'node_express',
    port:4000
})

const getSimple = (req,res)=>{
    res.send("Respuesta send texto ");
}

const conexionPG = async(req,res)=>{
    const resultado =  await conexion.query('SELECT NOW()')
    return res.json(resultado.rows[0])
}
const conexionLocal = async(req,res)=>{
    const resultado =  await poolLocal.query('select * from registro2')
    return res.json(resultado.rows)
}

const postearJson = async(req,res)=>{
const {nombre} = req.body
const email = req.body.email
console.log(nombre, email)
const respuesta = await poolLocal.query('INSERT INTO registro2 (nombre,email) VALUES($1, $2)', [nombre, email]);
console.log(respuesta)
res.json({
    message: 'Agregado succefully',
    body: {
        user:{nombre,email}
    }
})

}
const getUserById = async(req,res)=>{
    const id =req.params.id;
    const searchId = await poolLocal.query('SELECT * FROM registro2 WHERE id = $1', [id]);
    console.log(searchId);
    res.json(searchId.rows)
}

const eliminarById = async (req,res) => {
    const id =req.params.id;
    const borrarId = await poolLocal.query('DELETE FROM registro2 WHERE id = $1', [id])
    res.send('Eliminado id: ' + id)
}
const actualizar = async(req,res) =>{
    const id = req.params.id;
    const {nombre, email} = req.body;
    const actulizacion = await poolLocal.query('UPDATE registro2 SET nombre = $1, email = $2',
    [ 
        nombre, email
    ])
    console.log(actulización)
    res.send('Actulizado id:' +id)
}

module.exports = {
    getSimple,
    conexionPG,
    conexionLocal,
    postearJson,
    getUserById,
    eliminarById,
    actualizar
}