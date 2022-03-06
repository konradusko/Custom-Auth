const {register} = require('./routers/register')
const initAuth = (app)=>{

    app.post('/auth/register')
    app.get('/',(req,res)=>{
        res.send('xd')
    })
}
module.exports = {initAuth}