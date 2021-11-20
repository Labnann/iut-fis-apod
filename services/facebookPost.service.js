
const FB = require('fb');
const axios = require('axios');
const { response } = require('express');

async function getFBPageAccessToken(userAccessToken, page_id) {
    try {
        const response = await axios.get(`https://graph.facebook.com/${page_id}?fields=access_token&access_token=${userAccessToken}`);
        return response.data.access_token;
    }
    catch (err) {
        console.log(err);
    }
}

async function makePost(post) {

    const ACCESS_TOKEN = await getFBPageAccessToken(process.env.USER_ACCESS_TOKEN, process.env.PAGE_ID);

    FB.setAccessToken(ACCESS_TOKEN);
    FB.api(
        `/${process.env.PAGE_ID}/photos`,
        'POST',
        post,
        function (response) {
            if (response.error) {
                console.log('error occurred: ' + JSON.stringify(response.error))
                return;
            }
            console.log('successfully posted to page!!');
        }
    );

}


module.exports = {
    makePost, getFBPageAccessToken
}