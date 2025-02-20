const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const AddOrRemove_Page = require('../src/Pages/AddOrRemove_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let addOrRemove_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    addOrRemove_Page = new AddOrRemove_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
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