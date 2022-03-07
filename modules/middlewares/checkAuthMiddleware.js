const isUserAuthTrue = (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
   return res.redirect('/login')
}
const isUserNotAuthFalse = (req,res,next)=>{
    if(req.isAuthenticated())
        return res.redirect('/')
    return next()
}
module.exports = {
    isUserAuthTrue
}