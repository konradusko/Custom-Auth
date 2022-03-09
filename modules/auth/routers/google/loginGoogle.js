const loginGoogle = require('express').Router()
const {passport} = require('../../../../app')
loginGoogle.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email','openid'] }));

//   passport.authenticate('local',(err,user)=>{
//     if(err)
//     return res.json({message:err})
//     if(!user)
//     return res.json({message:'Nie udało się zalogować, spróbuj ponownie.'})
//     if(user){
//         req.login(user,{},(err)=>{
//             console.log(err)
//             if(err)
//                 return res.json({message:err})
//             return res.json({message:'Udało się zalogować',sucess:true})
//         })
//     }

// })(req,res)


loginGoogle.get('/auth/google/callback',(req,res)=>{
  console.log('eee')
  passport.authenticate('google', (err,user)=>{
    console.log(err,user)
  })(req,res)
})
// loginGoogle.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

module.exports={
    loginGoogle
}