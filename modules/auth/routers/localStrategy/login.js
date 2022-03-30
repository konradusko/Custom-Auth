const login = require('express').Router()
const {passport} = require('../../../../app')

login.post('/auth/login',(req,res)=>{
    passport.authenticate('local',(err,user)=>{
        if(err)
        return res.json({message:err})
        if(!user)
        return res.json({message:'Nie udało się zalogować, spróbuj ponownie.'})
        if(user){
            req.login(user,{},(err)=>{
                console.log(err)
                if(err)
                    return res.json({message:err})
                return res.json({message:'Udało się zalogować',sucess:true})
            })
        }
    
    })(req,res)
})
login.get('/login',(req,res)=>{
    res.render('auth/login.ejs')
})
module.exports={
    login
}