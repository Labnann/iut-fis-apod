require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const axios = require('axios');

const fbPoster = require('./services/facebookPost.service');

const APOD_API_KEY = process.env.APOD_API_KEY;
const FLASH_API_KEY = process.env.FLASH_API_KEY;

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(process.env.PORT);

app.get('/apod',  (req, res) => {
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APOD_API_KEY}`)
     .then(data =>{
        res.render('apod.ejs', {data});
     })
   
})

app.get('/fb-publish',()=>{
    fbPoster.makePost({
        message: "APOD",
        url:`https://api.apiflash.com/v1/urltoimage?access_key=${FLASH_API_KEY}&full_page=true&url=https://iutfis-apod.herokuapp.com/apod`   });

})

app.use(express.static("./static/"));




