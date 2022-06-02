const express = require('express');
const {config} = require('dotenv');
const dbConnect = require('./db');
const authRoutes = require('./routes/auth');
const refreshTokenRoutes = require('./routes/refreshToken');
const userRoutes = require('./routes/user');


const app = express();

config();
dbConnect();

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/refreshToken', refreshTokenRoutes);
app.use('/api/users', userRoutes); 

const port = process.env.PORT || 8080;

app.listen(port, ()=>console.log(`Listening on port ${port}`));