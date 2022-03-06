const {app} = require('./app')
/**
 * Init mongoose
 */
const { 
    mongoose,
    mongoDB
} = require('./modules/mongoose/mongoose')
/**
 * Init auth routers
 */
const {initAuth} = require('./modules/auth/auth')
initAuth(app)
mongoose.connect(mongoDB)
    .then((result)=>{
        app.listen(3000,()=>{
            console.log(`app is listening`)
        })
    })
    .catch((er)=>{
        console.log('an error occur while connect to databse')
    })