const { 
    mongoose
} = require('../../mongoose/mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    displayName:{
        type:String,
        required:true,
        trim:true,
        
    },
    userPublicName:{
        type:String,
        required:false,
        unique:true,
        sparse:true
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
        default: Date.now 
    },
    profilePicture:{
        type:String,
        default:'/Link do podstawowego pliku img',
    },
    provider:{
        name:{
            type:String,
            required:true
        },
        providerID:{
            type:String,
            unique:true,
            required:false
        }
    }
})
const User = mongoose.model('User',userSchema)
module.exports ={User}