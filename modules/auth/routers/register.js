const register = require('express').Router()
const {User} = require('../authSchema/user-schema')
register.post('/auth/register',async(req,res)=>{
    //zrobic validację
    console.log(req.body)
    const user = new User({
        displayName:req.body.name,
        password: await bcrypt.hash(req.body.password, 10),
        email:req.body.email
    })
    user.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((er)=>{
            console.log(er)
        })

    // async function  auth() {
    //     const doc = await User.findOne({email: 'dsadsaddsadasd@gmail.com'}).exec();
    //     console.log(doc)
    //     return doc;
    //   }
    // auth()
})
register.get('/register',(req,res)=>{
    res.render('auth/register.ejs')
})
module.exports ={
    register
}