const Order = require('../models/OrderModel');

//-------- Create order
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        console.log(savedOrder);
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

//-------- Update order
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json( updatedOrder );
    } catch (err) {
        res.status(500).json(err);
    }
}

//--------- Delete order
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted!!!")
    } catch (err) {
        res.status(500).json(err)
    }
}

//------- Get user orders
const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json( orders );
    } catch (err) {
        res.status(500).json(err)
    }
}

// Get all orders 
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json( orders )
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { 
    createOrder, 
    updateOrder, 
    deleteOrder, 
    getUserOrders, 
    getAllOrders 
}