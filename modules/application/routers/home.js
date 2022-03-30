const home = require('express').Router()

home.get('/',(req,res)=>{
    console.log(req.user)
    res.render('application/home.ejs',{ name: req.user.displayName })
})

module.exports = {
    home
}