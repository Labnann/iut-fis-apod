const axios = require('axios');

async function getScreenshot() {
    try {
        const response = await axios.get(`https://api.apiflash.com/v1/urltoimage?access_key=${process.env.FLASH_API_KEY}&format=jpeg&full_page=true&response_type=json&ttl=86400&url=https%3A%2F%2Fiutfis-apod.herokuapp.com%2Fapod`);
        return response.data.url;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports={
    getScreenshot
}