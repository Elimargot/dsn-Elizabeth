const express = require("express");//requerimos el modulo express
const app = express();//creamos objeto de la aplicacion
const path = require("path");//requerimos el modulo path

//middleware de /index, muestra contenido de index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
});

//de /productos, muestra contenido de productos.html
app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname + "/productos.html"))
});

//de /clientes, muestra contenido de clientes.html
app.get("/clientes", (req, res) => {
    res.sendFile(path.join(__dirname + "/clientes.html"))
});

//El servidor escuchará por el puerto 5000 
app.listen(5000, () => {
    //en consola imprime este mensaje
    console.log("server listening on port", 5000)
});

