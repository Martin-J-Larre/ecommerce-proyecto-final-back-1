//----------Imports
const express = require('express');
const app = express();
require('dotenv').config()

const { dbConnect } = require('./config/mongoose');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRouter');

const PORT = process.env.PORT || 8082;
//-------------Middlewares
app.use(express.json())

// ------------Routes
app.use('/user', userRoute);
app.use('/', authRoute);


dbConnect()
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
