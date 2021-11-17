
const FB = require('fb');
function makePost(post) {
    const ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
    const PAGE_ID = process.env.PAGE_ID;
    FB.setAccessToken(ACCESS_TOKEN);
    FB.api(
        `/${PAGE_ID}/photos`,
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
    makePost
}