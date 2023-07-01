import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    lname: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    date: {
        type: Date,
        dafault: Date.now()
    }
})


const User = mongoose.model('User', userSchema);
export default User;