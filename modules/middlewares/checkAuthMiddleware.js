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
const midd_LoggedUser_try_NOT_protected_route = (req,res,next)=>{
    if(req.isAuthenticated())
        return res.json({message:'Brak uprawnień'})
    return next()
}
const midd_NOT_LoggedUser_try_PROTECTED_route = (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
    return res.json({message:'Brak uprawnień'})
}
module.exports = {
    isUserAuthTrue,
    isUserNotAuthFalse,
    midd_LoggedUser_try_NOT_protected_route,
    midd_NOT_LoggedUser_try_PROTECTED_route
}