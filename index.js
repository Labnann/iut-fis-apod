require('dotenv').config();
const FB = require('fb');




const ACCESS_TOKEN =  process.env.PAGE_ACCESS_TOKEN;
const PAGE_ID = process.env.PAGE_ID;
FB.setAccessToken(ACCESS_TOKEN);
FB.api(
 `/${PAGE_ID}/photos`,
 'POST',
 { "message": "Testing with api!" , url:"https://apod.nasa.gov/apod/image/2111/NGC3314_HubbleOstling_2014.jpg"},
 function (response) {
  if (response.error) {
   console.log('error occurred: ' + JSON.stringify(response.error))
   return;
  }
  console.log('successfully posted to page!!');
 }
);