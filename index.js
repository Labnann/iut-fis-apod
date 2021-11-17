require('dotenv').config();
const fbPoster = require('./services/facebookPost.service');

fbPoster.makePost({ "message": "Testing with api!", url: "https://apod.nasa.gov/apod/image/2111/NGC3314_HubbleOstling_2014.jpg" });