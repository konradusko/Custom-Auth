require('dotenv').config()
const express = require('express')
const app = express()
// const flash = require('connect-flash')
const session = require('express-session')
//init session
app.use(
    session({
        secret:process.env.SESSION_SERVER,
        resave:false,
        saveUninitialized:false
    })
)
//init flash
// app.use(flash())
// const flashMessageMiddleware = require('./modules/flashMessages/flashMessages');
// app.use(flashMessageMiddleware.flashMessage)

//Init passport
const passport = require('passport')
const {initializePassport} = require('./modules/auth/passport/passport-config')
initializePassport(passport)
app.use(passport.initialize())
app.use(passport.session())
// app.set('layout', './layouts/full-width') set layout aplikacji
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
module.exports = {app,passport}