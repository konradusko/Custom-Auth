const {register} = require('./routers/register')
const {login} = require('./routers/login')
const initAuth = (app)=>{
        /**
         * Register
         */
    app.post('/auth/register',register)
    app.get('/register',register)

    //logowanie
    app.post('/auth/login',login)
    app.get('/login',login)

}
module.exports = {initAuth}