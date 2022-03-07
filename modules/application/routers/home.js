const home = require('express').Router()

home.get('/',(req,res)=>{
    res.render('application/home.ejs')
})

module.exports = {
    home
}