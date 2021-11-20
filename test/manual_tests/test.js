const fbManager = require('../../services/facebookPost.service');
const screenshotService = require("../../services/apodScreenshotService");
require('dotenv').config({ path: "../../.env" });

async function testFBCredentials() {
    const data = await fbManager.getFBPageAccessToken(process.env.USER_ACCESS_TOKEN, process.env.PAGE_ID);
    console.log(data);
}

async function testFBPost(){
    const data ={
        message: "Test APOD",
        url: await screenshotService.getScreenshot()
    }

    console.log(data);
    fbManager.makePost(data);
}

async function testScreenshot(){
    console.log(await screenshotService.getScreenshot());

}




testFBCredentials();
testScreenshot();
testFBPost();