const express = require('express')
const mongoose = require('mongoose');

//
require('dotenv').config()

//
const app = express()
const port = process.env.PORT || 5000

//
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed:'));
db.once('open', () => console.log('MongoDB connection established'));

//

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`)
})