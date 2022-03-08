const {User} = require('../authSchema/user-schema')
const googleProviderFunction = (accessToken, refreshToken, profile, done)=>{
    User.findOne({'provider.providerID':profile.id},async(err,user)=>{
        //mamy błąd
        if(err)
          return done(err)
        //mamy uzytkownika
        if(user)
          return done(null,user)
        
        if(!user){
            const newUser = new User({
              displayName:profile._json.name,
              password:'x', // ustawić losowe hasło
              email:profile._json.email,
              provider:{
                name:profile.provider,
                providerID:profile._json.sub
              }
            })
            try {
                await newUser.save((err,userDB)=>{
                  if(err)
                    return done(err)
                return done(null,userDB)
                })
            } catch (error) {
              return done(error)
            }
        }
    })
}
module.exports = {
    googleProviderFunction
}