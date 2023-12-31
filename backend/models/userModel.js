import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim : true,
        maxlength: 12
    },
    email: {
        type:String,
        required: true,
        unique: 32
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type:String
    },
    role:{
        type: Number,
        default: 0,
    },
    salt: String,
    history: {
        type: Array,
        default: []
    },
},
{
    timestamps: true,
}
);

userSchema.methods.matchPassword = async function (enterPassword) {
    return 
}

const User = mongoose.model('User', userSchema);

export default User;
