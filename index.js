//----------Imports
require('dotenv').config()
const express = require('express');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session');
const methodOverride = require('method-override');
const bcrypt = require("bcryptjs");

const { dbConnect } = require('./config/mongoose');
const User = require('./models/UserModel');
// const userRoute = require('./routes/userRoutes');
const { checkNotAuthenticated ,checkAuthenticated } = require('./middlewares/auth');
const authRoute = require('./routes/authRouter');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');
const orderRoute = require('./routes/orderRoutes');


const app = express();
const PORT = process.env.PORT || 8082;



// ------------ Passport
const initializePassport = require("./config/passport");
initializePassport(
    passport,
    async (email) => {
        const userFound = await User.findOne({ email });
        return userFound;
    },
    async (id) => {
        const userFound = await User.findOne({ _id: id });
        return userFound;
    }
);
//---
app.set("view engine", "ejs");
app.set("views", "./views/pages");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use(express.static("public"));


app.get('/', checkAuthenticated, (req, res) =>{
    res.render('index', { name: req.user.name })
});

app.get('/cart', (req, res) =>{
    res.render('cart')
});

app.get('/register', checkNotAuthenticated, (req, res) =>{
    res.render('register')
})

app.get('/login', checkNotAuthenticated, (req, res) =>{
    res.render('login')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
})
);

app.post("/register", checkNotAuthenticated, async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email });

    if (userFound) {
        req.flash("error", "User with that email already exists");
        res.redirect("/register");
    } else {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            });

            await user.save();
            res.redirect("/login");
        } catch (error) {
            console.log(error);
            res.redirect("/register");
        }
    }
});

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login')
});



// ------------Routes
// app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/carts', cartRoute);
app.use('/orders', orderRoute);


dbConnect()
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
