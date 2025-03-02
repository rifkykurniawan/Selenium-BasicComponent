const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const ChallengingDom_Page = require('../src/Pages/ChallengingDom_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let challengingDom_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    challengingDom_Page = new ChallengingDom_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Challenging Dom', function() {
    it('CD001 - Verify Challenging Dom Page', async function () {
        await challengingDom_Page.clickChallengingDomButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/challenging_dom');
        assert.strictEqual(await challengingDom_Page.getPageHeading(), 'Challenging DOM');
        await challengingDom_Page.clickEditButton0();
    });
    after(async function() {
        await driver.navigate().back();
    });
});