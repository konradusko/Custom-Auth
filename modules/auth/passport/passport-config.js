const LocalStrategy = require('passport-local').Strategy
const {User} = require('../authSchema/user-schema')
const bcrypt = require('bcrypt')
const initializePassport = (passport)=>{
    const authUser = async(email,password,done)=>{
        console.log(email)
        console.log(password)
        const user = await User.findOne({email: email}).exec();
        console.log(user)
        if(user == null)
            return done(null,false,{message:'Taki mail nie istnieje'})

        try {
            if(await bcrypt.compare(password,user.password))
                return done(null,user)
            return done(null,false,{message:'password inncorrect'})
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStrategy({usernameField:'email'}, authUser ))
    passport.serializeUser((user,done)=> done(null,user._id))
    passport.deserializeUser(async(id,done)=>{
        const user = await User.findOne({_id: id}).exec();
        return done(null,user)
    })
}
module.exports = {
    initializePassport
}