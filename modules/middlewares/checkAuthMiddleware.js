//kiedy uzytkownik nie jest zalogowany a powinien byc
const isUserAuthTrue = (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
   return res.redirect('/login')
}
//Jeśli użytkownik jest zalogowany a nie powinien być
const isUserNotAuthFalse = (req,res,next)=>{
    if(req.isAuthenticated())
        return res.redirect('/')
    return next()
}
//Kiedy uzytkownik wysyla zapytanie jak jest zalogowany do routu ktory jest dla niezalogowanych uzytkownikow
const postReqIfUserIsLogginAndNotShould = (req,res,next)=>{
    if(req.isAuthenticated())
        return res.json({message:'Brak uprawnień'})
    return next()
}
const postReqIfUserIsNOTLoggedAndShouldBe = (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
    return res.json({message:'Brak uprawnień'})
}
module.exports = {
    isUserAuthTrue,
    isUserNotAuthFalse,
    postReqIfUserIsLogginAndNotShould,
    postReqIfUserIsNOTLoggedAndShouldBe
}