const {register} = require('./routers/localStrategy/register')
const {login} = require('./routers/localStrategy/login')
const {logOut} = require('./routers/logout')
const {loginGoogle} = require('./routers/google/loginGoogle')
const {isUserNotAuthFalse,
    isUserAuthTrue,
    midd_LoggedUser_try_NOT_protected_route,
    midd_NOT_LoggedUser_try_PROTECTED_route
} = require('../middlewares/checkAuthMiddleware')
const initAuth = (app)=>{
        /**
         * Register
         */
    app.post('/auth/register',midd_LoggedUser_try_NOT_protected_route,register)
    app.get('/register',isUserNotAuthFalse,register)

    //logowanie
    app.post('/auth/login',midd_LoggedUser_try_NOT_protected_route,login)
    app.get('/login',isUserNotAuthFalse,login)


    //Google provider
    app.get('/auth/google',isUserNotAuthFalse,loginGoogle)
    app.get('/auth/google/callback',isUserNotAuthFalse,loginGoogle)
    //wylogowanie
    app.post('/auth/logout',midd_NOT_LoggedUser_try_PROTECTED_route,logOut)

}
module.exports = {initAuth}