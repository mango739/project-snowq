const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const schools = require('./routes/schools');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed:'));
db.once('open', () => console.log('MongoDB connection established'));

app.use('/schools', schools);

if (process.env.NODE_ENV ===  'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`)
})