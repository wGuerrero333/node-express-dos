import express from 'express'

const app = express()

// rutas
app.get('/',(req,res)=>{
    res.send("Respuesta texto")
})

app.listen( 3000)
console.log("Sirviendo en puerto 3000")

