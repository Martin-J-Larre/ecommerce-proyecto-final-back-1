//----------Imports
const express = require('express');
const app = express();
require('dotenv').config()
const passport = require('passport');
const flash = require('express-flash');
const session = require('session');

const { dbConnect } = require('./config/mongoose');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRouter');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');
const orderRoute = require('./routes/orderRoutes');


const PORT = process.env.PORT || 8082;


//-------------Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//---------------EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/register', (req, res) =>{
    res.render('register')
})

// ------------Routes
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/carts', cartRoute);
app.use('/orders', orderRoute);


dbConnect()
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
