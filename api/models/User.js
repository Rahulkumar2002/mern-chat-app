const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    img: {
        type: String
    },
    bio: {
        type: String,
        default: "Add your bio here"
    },
    city: {
        type: String,
        default: "Write your current residing city here"
    },
    from: {
        type: String,
        default: "Write your home state here"
    },
    relationship: {
        type: String,
        default: "Write current relationship status here"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);