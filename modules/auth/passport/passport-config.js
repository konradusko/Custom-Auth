const LocalStrategy = require('passport-local').Strategy

const initializePassport = (passport)=>{
    passport.use(new LocalStrategy({usernameField:'name',passwordField:'password'}),(email,password,done)=>{
        
    })
    passport.serializeUser((user,done)=>{

    })
    passport.deserializeUser((id,done)=>{

    })
}