const login = require('express').Router()
const {passport} = require('../../../../app')

login.post('/auth/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}))

login.get('/login',(req,res)=>{
    res.render('auth/login.ejs')
})
module.exports={
    login
}