require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const refreshTokenRoutes = require('./routes/refreshToken');

//database connection 
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/refreshToken', refreshTokenRoutes);
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}..`)
})

