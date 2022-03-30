const loginGoogle = require('express').Router()
const {passport} = require('../../../../app')
loginGoogle.get('/auth/google',
passport.authenticate('google', { scope: ['profile','email','openid'] }));
loginGoogle.get('/auth/google/callback',(req,res)=>{
  console.log('eee')
  passport.authenticate('google', (err,user)=>{
    console.log('XDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
    if(err)
      return res.redirect(`/login?error=${err}`)
    if(!user)
      return res.redirect(`/login?error=Nie udało się zalogować używając google`)
    console.log('ten route')
      console.log(err)
      console.log(user)
            req.login(user,{},(err)=>{
            if(err)
            return res.redirect(`/login?error=${err}`)
            return res.redirect('/')
        })
    
  })(req,res)
})
module.exports={
    loginGoogle
}