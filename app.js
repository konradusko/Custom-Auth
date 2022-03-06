const express = require('express')
const app = express()
const flash = require('express-flash')
const session = require('express-session')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
module.exports = {app}