const bcrypt = require('bcrypt')
const {User} = require('../authSchema/user-schema')
const authUserLocal = async(email,password,done)=>{
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
module.exports = {
    authUserLocal
}