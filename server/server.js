const express = require('express');
const app = express();
const authRouter = require('./router/auth-router');
const connectDB = require('./utils/db');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



connectDB();
app.use('/api', authRouter);

app.get('/', (req, res) => {
    res.send('Home Page');
    }
    );
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    });
