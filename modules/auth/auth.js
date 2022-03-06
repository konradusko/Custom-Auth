const {register} = require('./routers/register')
const initAuth = (app)=>{

    app.post('/auth/register',register)
    app.get('/',(req,res)=>{
        res.send('xd')
    })
}
module.exports = {initAuth}