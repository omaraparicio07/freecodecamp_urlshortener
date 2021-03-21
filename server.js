require('dotenv').config();

const express = require('express'),
      mongo = require('mongodb'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true });

app.use(cors());

/* This project needs to parse POST bodies */
// You should mount body-parser here

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
