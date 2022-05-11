const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 4000;

// Creat server
const app = express();

// Connect to our DB
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/duties', require('./routes/duty'));

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})