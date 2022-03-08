const register = require('express').Router()
const {User} = require('../../authSchema/user-schema')
const bcrypt = require('bcrypt')
register.post('/auth/register',async(req,res)=>{
    //zrobic validację
    console.log(req.body)
    const user = new User({
        displayName:req.body.name,
        password: await bcrypt.hash(req.body.password, 10),
        email:req.body.email
    })
    user.save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((er)=>{
            console.log(er)
            // res.render('auth/register.ejs',{messages:'errorxD'})
            // res.json({message: 14,messages:req.flash('error','Takie email jest juz zajetydasdsada')})
            // res.render('auth/register.ejs',{messages:'test'})
            let test={
                userName:'test222'
            }
            req.flash('user', test.userName);
            res.redirect('/register');
            
        })


})
register.get('/register',(req,res)=>{
    let test={
        userName:'test'
    }
    req.flash('user', test.userName);
    res.render('auth/register.ejs')
})
module.exports ={
    register
}