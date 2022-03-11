const {User} = require('../authSchema/user-schema')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const googleProviderFunction = (accessToken, refreshToken, profile, done)=>{


    //Po pierwsze sprawdzic czy ten mail jest już w użyciu
    //Po drugie sprawdzić provider czy się zgadza

    User.findOne({'email':profile._json.email},async(err,user)=>{
        //mamy błąd
        if(err)
          return done(err)
        //mamy uzytkownika
        if(user){
          //Sprawdzić tutaj provider
          if(user.provider.name != 'google')
            return done('Konto zostało założone z użyciem tradycyjnych metod logowania')
          if(user.provider.name == 'google' && 'providerID' in user.provider && user.provider.providerId === profile._json.sub)
            return done(null,user) 
          return done('Nie udało się zalogować')
      
        }
        
        if(!user){
            const newUser = new User({
              displayName:profile._json.name,
              email:profile._json.email,
              password:await bcrypt.hash(crypto.randomBytes(28).toString('hex'), 10),
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