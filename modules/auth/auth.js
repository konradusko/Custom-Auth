const {register} = require('./routers/localStrategy/register')
const {login} = require('./routers/localStrategy/login')
const {logOut} = require('./routers/logout')
const {loginGoogle} = require('./routers/google/loginGoogle')
const {isUserNotAuthFalse,isUserAuthTrue} = require('../middlewares/checkAuthMiddleware')
const initAuth = (app)=>{
        /**
         * Register
         */
    app.post('/auth/register',isUserNotAuthFalse,register)
    app.get('/register',isUserNotAuthFalse,register)

    //logowanie
    app.post('/auth/login',isUserNotAuthFalse,login)
    app.get('/login',isUserNotAuthFalse,login)


    //Google provider
    app.get('/auth/google',isUserNotAuthFalse,loginGoogle)
    app.get('/auth/google/callback',isUserNotAuthFalse,loginGoogle)
    //wylogowanie
    app.post('/auth/logout',isUserAuthTrue,logOut)

}
module.exports = {initAuth}