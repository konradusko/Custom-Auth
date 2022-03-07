const { 
    mongoose
} = require('../../mongoose/mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    displayName:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    created: { 
        type: Date, 
        default: Date.now },
    profilePicture:{
        type:String,
        default:'/Link do podstawowego pliku img'
    }
})
const User = mongoose.model('User',userSchema)
module.exports ={User}