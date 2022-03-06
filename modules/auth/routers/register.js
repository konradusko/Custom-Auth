const register = require('express').Router()
const {User} = require('../authSchema/user-schema')
register.post('/auth/register',(req,res)=>{
    //zrobic validację
    console.log(req.body)
    console.log(req.headers)
    // const user = new User({
    //     displayName:req.body.displayName,
    //     password:req.body.password,
    //     email:req.body.email
    // })
    // user.save()
    //     .then((result)=>{
    //         res.send(result)
    //     })
    //     .catch((er)=>{
    //         console.log(er)
    //     })
})
module.exports ={
    register
}