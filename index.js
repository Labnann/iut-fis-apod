require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const axios = require('axios');

const APOD_API_KEY = process.env.APOD_API_KEY;

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(process.env.PORT);

app.get('/apod',  (req, res) => {
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}`)
     .then(data =>{
        res.render('apod.ejs', {data});
     })
   
})

app.use(express.static("./static/"));




