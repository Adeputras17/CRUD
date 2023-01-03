import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'field nama harus ada'],
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max: 1000000
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('Users', User)
