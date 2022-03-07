const logOut = require('express').Router()

logOut.post('/auth/logout',(req,res)=>{
    req.session =null
    req.logOut()
    return res.redirect('/login')
})
module.exports = {
    logOut
}