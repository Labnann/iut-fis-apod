const fbManager = require('../../services/facebookPost.service');
const screenshotService = require("../../services/apodScreenshotService");
require('dotenv').config({ path: "../../.env" });

async function testFB() {
    const data = await fbManager.getFBPageAccessToken(process.env.USER_ACCESS_TOKEN, process.env.PAGE_ID);
    console.log(data);
}

async function testScreenshot(){
    console.log(await screenshotService.getScreenshot());

}

testFB();
testScreenshot();