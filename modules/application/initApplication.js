const {home} = require('./routers/home')
const {isUserAuthTrue} = require('../middlewares/checkAuthMiddleware')
const initApplication = (app)=>{
    console.log('x')
    app.get('/',isUserAuthTrue,home)
}
module.exports={
    initApplication
}