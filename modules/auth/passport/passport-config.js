const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {User} = require('../authSchema/user-schema')
const {authUserLocal} = require('./authUserLocalS')
const { googleProviderFunction} = require('./authGoogleProvider')
const initializePassport = (passport)=>{
   /**
    * Local strategy
    */
    passport.use(new LocalStrategy({usernameField:'email'}, authUserLocal ))

    /**
     * Google auth
     */
    passport.use(new GoogleStrategy({
        clientID: `512522830802-eh9ms0pipob8kjf5lv729bo5kcbohh79.apps.googleusercontent.com`,
        clientSecret: `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`,
        callbackURL: "http://localhost:3000/auth/google/callback"
      },
      googleProviderFunction
    ));

    //Serialize deserialize user
    passport.serializeUser((user,done)=> done(null,user._id))
    passport.deserializeUser(async(id,done)=>{
        const user = await User.findOne({_id: id}).exec();
        return done(null,user)
    })
}
module.exports = {
    initializePassport
}

