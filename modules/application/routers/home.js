const home = require('express').Router()

home.get('/',(req,res)=>{
    res.render('application/home.ejs',{ name: req.user.displayName })
})

module.exports = {
    home
}