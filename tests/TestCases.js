const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const AddOrRemove_Page = require('../src/Pages/AddOrRemove_Page');
const BasicAuth_Page = require('../src/Pages/BasicAuth_Page');
const BrokenImages_Page = require('../src/Pages/BrokenImages_Page');
const ChallengingDom_Page = require('../src/Pages/ChallengingDom_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let addOrRemove_Page;
let brokenImages_Page;
let challengingDom_Page;
let basicAuth_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    addOrRemove_Page = new AddOrRemove_Page(driver);
    basicAuth_Page = new BasicAuth_Page(driver);
    brokenImages_Page = new BrokenImages_Page(driver);
    challengingDom_Page = new ChallengingDom_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
})

describe('Click each menu', function() {
    it('TC1 - Verify click button Add Element', async () => {
        await addOrRemove_Page.clickAddRemoveElementsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/add_remove_elements/');
        await driver.navigate().back();
    });
    it('TC2 - Verify click Basic Auth', async () => {
        await basicAuth_Page.clickBasicAuthButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/basic_auth');
        await driver.navigate().back();
    });

    it('TC3 - Verify click Broken Images', async () => {
        await brokenImages_Page.clickBrokenImagesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/broken_images');
        await driver.navigate().back();
    });
    it('TC4 - Verify click Challenging Dom', async () => {
        await challengingDom_Page.clickChallengingDomButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/challenging_dom');
        await driver.navigate().back();
    });
});

describe('Add/Remove Elements', function() {
    it('ARE001 - Verify click button Add Element', async () => {
        await addOrRemove_Page.clickAddRemoveElementsButton();
        await addOrRemove_Page.clickAddElementButton();
        await addOrRemove_Page.clickAddElementButton();
        await addOrRemove_Page.clickAddElementButton();
        await addOrRemove_Page.clickAddElementButton();
        await addOrRemove_Page.clickAddElementButton();
        await driver.sleep(1000);
        assert.strictEqual(await addOrRemove_Page.isDeleteButton1Visible(), true);
        assert.strictEqual(await addOrRemove_Page.isDeleteButton2Visible(), true);
        assert.strictEqual(await addOrRemove_Page.isDeleteButton3Visible(), true);
        assert.strictEqual(await addOrRemove_Page.isDeleteButton4Visible(), true);
        assert.strictEqual(await addOrRemove_Page.isDeleteButton5Visible(), true);
    });
    it('ARE002 - Verify click button Delete Element', async() => {
        addOrRemove_Page.clickDeleteButton();
        addOrRemove_Page.clickDeleteButton2();
        addOrRemove_Page.clickDeleteButton3();
        addOrRemove_Page.clickDeleteButton4();
        addOrRemove_Page.clickDeleteButton5();
        await driver.sleep(1000);
    });
    it('ARE003 - Verify click button Add Element', async () => {
        
    });

    after(async function() {
        await driver.navigate().back();
    });
});

describe('Broken Images', function() {
    it('BRI001 - Verify Broken Images Page', async () => {
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

describe('Challenging Dom', function() {
    it('CD001 - Verify Challenging Dom Page', async () => {
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