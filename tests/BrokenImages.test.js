const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const BrokenImages_Page = require('../src/Pages/BrokenImages_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let brokenImages_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    brokenImages_Page = new BrokenImages_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Broken Images', function() {
    it('BRI001 - Verify Broken Images Page', async function () {
        await brokenImages_Page.clickBrokenImagesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/broken_images');
        assert.strictEqual(await brokenImages_Page.isBrokenImage1Visible(), true);
        assert.strictEqual(await brokenImages_Page.isBrokenImage2Visible(), true);
        assert.strictEqual(await brokenImages_Page.isNormalImageVisible(), true);
    });
    after(async function() {
        await driver.navigate().back();
    });
});