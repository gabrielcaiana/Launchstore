const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true })) // linha responsável por fazer funcionar o req.body
server.use(express.static('public'))
server.use(methodOverride('_method')) // sobrescrevendo  o tipo do método por exemplo POST para PUT
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(9000, function() {
    console.log("Server is Running")
})