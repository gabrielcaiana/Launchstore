const express = require("express")
const routes = express.Router()
const ProductController = require('./app/controllers/ProductController')

routes.get('/', function(req, res) {
    return res.render("layout.njk")
})

routes.get('/products/create', ProductController.create)
routes.get('/products/:id/edit', ProductController.edit)
routes.post('/products/create', ProductController.post)

//Alias
routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create")
})

routes.get("/accounts", function(req, res) {
    return res.send("Minha conta")
})

module.exports = routes