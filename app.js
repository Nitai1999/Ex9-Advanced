const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const articles = require('./routes/article');
const categories = require('./routes/category');

require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING);

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/articles', articles);
app.use('/categories', categories);

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB Atlas!');
});
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});