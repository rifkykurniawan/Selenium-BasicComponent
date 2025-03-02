const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const ContextMenu_Page  = require('../src/Pages/ContextMenu_Page');
const HomePage_Page = require('../src/Pages/HomePage_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let contextMenu_Page, homePage_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    contextMenu_Page = new ContextMenu_Page(driver);
    homePage_Page = new HomePage_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    this.timeout(10000);
    await driver.sleep(2000);
    await driver.quit();
});

describe('Context Menu', function() {
    it('CM001 - Verify Context Menu Page', async function () {
        await homePage_Page.clickContextMenuButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/context_menu');
        assert.strictEqual(await contextMenu_Page.getPageTitle(), 'Context Menu');
        assert.strictEqual(await contextMenu_Page.getText1(), 'Context menu items are custom additions that appear in the right-click menu.');
        assert.strictEqual(await contextMenu_Page.getText2(), "Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert.");
    });
    it('CM002 - Verify Right Click', async function () {
        await contextMenu_Page.rightClickClickableObject();
    })
});