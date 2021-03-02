const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const schools = require('./routes/schools');

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

app.get('/', (req, res) => res.send('Hello'));

app.use('/schools', schools);

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`)
})