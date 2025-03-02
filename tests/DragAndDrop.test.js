const {Builder, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const DragAndDrop_Page  = require('../src/Pages/DragAndDrop_Page');
const HomePage_Page = require('../src/Pages/HomePage_Page');
const { it, describe, afterEach, after } = require('mocha');
const { beforeEach } = require('mocha');
const { Timeouts } = require('selenium-webdriver/lib/capabilities');

let driver;
let dragAndDrop_Page, homePage_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    dragAndDrop_Page = new DragAndDrop_Page(driver);
    homePage_Page = new HomePage_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('DragAndDrop', function() {
    it('Drag A to B', async function() {
        await homePage_Page.clickDragAndDropButton();
        assert.strictEqual(await dragAndDrop_Page.getPageTitle(), 'Drag and Drop');
    });
});