const logOut = require('express').Router()

logOut.post('/auth/logout',(req,res)=>{
    req.session.destroy((e)=>{
        req.logOut()
        return res.json({message:"Zostałeś wylogowany",sucess:true})
    })
  
})
module.exports = {
    logOut
}