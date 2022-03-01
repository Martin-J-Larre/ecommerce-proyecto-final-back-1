const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    title:{ type: String, required:true, unique:true },
    price:{ type: Number, required:true },
    description:{ type: String, required:true },
    img:{ type: String, required:true },
    stock:{ type: Number, required:true },
},{
    timestamps: true,
    versionKey: false 
});

module.exports = mongoose.model("Product", ProductSchema);