const bcrypt = require('bcrypt')
const {User} = require('../authSchema/user-schema')
const authUserLocal = async(email,password,done)=>{
    console.log(email,'email')
    console.log(password,'password')
    const user = await User.findOne({email: email}).exec();
    console.log(user)
    if(user == null)
        return done('Konto z takim email nie istnieje',false)
    //jeśli user ma inny provider
    if(user.provider.name != 'local')
        return done('Konto zostało utworzonę za pomocą innych metod logowania',false)
    try {
        if(await bcrypt.compare(password,user.password))
            return done(null,user)
        console.log('nope')
        return done('Hasło jest nieprawidłowe',false)
    } catch (error) {
        return done(error)
    }
}
module.exports = {
    authUserLocal
}