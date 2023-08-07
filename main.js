/*const http = require("http");

const server = http.createServer((req, res) =>{
    res.end("Desde Node")
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
 })
 */

const express = require("express")

const app = express()

const PORT = 8080;

const productos = require("./entregable2")



//Configurando Paths

app.get("/productos", async (req, res) => {
    try {
      const products = await productos.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).send("Error al obtener los productos");
    }
  });


  app.get("/productoRandom", async (req, res) => {
    try {
      const products = await productos.getAll();
      if (products.length === 0) {
        res.status(404).send("No hay productos disponibles");
      } else {
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        res.json(randomProduct);
      }
    } catch (error) {
      res.status(500).send("Error al obtener el producto aleatorio");
    }
  });

const server = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en servidor ${error}`))