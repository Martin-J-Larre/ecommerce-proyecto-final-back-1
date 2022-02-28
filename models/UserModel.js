const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({

    name:{ type: String, required:true, unique:true },
    email:{ type: String, required:true, unique:true },
    password:{ type: String, required:true },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
    versionKey: false 
});


module.exports = mongoose.model("User", UserSchema);