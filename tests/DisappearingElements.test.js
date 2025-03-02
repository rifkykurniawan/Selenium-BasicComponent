const {Builder, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const DisappearingElements_Page  = require('../src/Pages/DisappearingElements_Page');
const HomePage_Page = require('../src/Pages/HomePage_Page');
const { it, describe, afterEach, after } = require('mocha');
const { beforeEach } = require('mocha');
const { Timeouts } = require('selenium-webdriver/lib/capabilities');

let driver;
let disappearingElements_Page, homePage_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    disappearingElements_Page = new DisappearingElements_Page(driver);
    homePage_Page = new HomePage_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Disappearing Elements', function() {
    it('TC-01 Verify disappearing message page', async function() {
        await homePage_Page.clickDisappearingElementsButton();
        assert.equal(await disappearingElements_Page.getPageTitle(), 'Disappearing Elements');
        assert.equal(await disappearingElements_Page.getSubTitle(), 'This example demonstrates when elements on a page change by disappearing/reappearing on each page load.');
        assert.equal(await disappearingElements_Page.homeButtonVisible(), true);
        assert.equal(await disappearingElements_Page.aboutButtonVisible(), true);
        assert.equal(await disappearingElements_Page.contactUsButtonVisible(), true);
        assert.equal(await disappearingElements_Page.portfolioButtonVisible(), true);
        assert.equal(await disappearingElements_Page.galleryButtonVisible(), true);
    });
    it('TC-02 Verify click home button', async function() {
        await disappearingElements_Page.clickHomeButton();
        assert.equal(await homePage_Page.getPageTitle(), 'Welcome to the-internet');
    })
    it('TC-03 Verify click about button', async function() {
        await homePage_Page.clickDisappearingElementsButton();
        await disappearingElements_Page.clickAboutButton();
        assert.equal(await disappearingElements_Page.getNotFoundText(), 'Not Found');
        driver.navigate().back();
        assert.equal(await disappearingElements_Page.homeButtonVisible(), true);
        assert.equal(await disappearingElements_Page.aboutButtonVisible(), true);
        assert.equal(await disappearingElements_Page.contactUsButtonVisible(), true);
        assert.equal(await disappearingElements_Page.portfolioButtonVisible(), true);
    })
});