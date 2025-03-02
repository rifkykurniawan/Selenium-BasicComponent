const {Builder, Alert} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const BasicAuth_Page = require('../src/Pages/BasicAuth_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let basicAuth_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    basicAuth_Page = new BasicAuth_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Basic Auth', function() {
    it('BA001 - Verify Basic Auth Page', async function () {
        await basicAuth_Page.clickBasicAuthButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/basic_auth');
    });
    it('BA002 - Verify Basic Auth with Valid Credentials', async function () {
        await driver.get('https://admin:admin@the-internet.herokuapp.com/basic_auth');        
        assert.strictEqual(await basicAuth_Page.getCongratulationMessage(), 'Congratulations! You must have the proper credentials.');    
    });
});