const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const Checkboxes_Page = require('../src/Pages/Checkboxes_Page');
const HomePage_Page = require('../src/Pages/HomePage_Page');
const { it, describe, afterEach, after } = require('mocha');

let driver;
let checkboxes_Page, homePage_Page;

before(async function() {
    this.timeout(100000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    checkboxes_Page = new Checkboxes_Page(driver);
    homePage_Page = new HomePage_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Checkboxes', function() {
    it('CB001 - Verify Checkboxes component', async function () {
        this.timeout(100000);
        await homePage_Page.clickCheckboxesbutton();
        assert.equal(await checkboxes_Page.getPageTitle(), 'Checkboxes');
    })
    it('CB002 - Verify Click Checkboxes', async function () {
        await checkboxes_Page.clickCheckBox1();
        assert.equal(await checkboxes_Page.isCheckBox1Checked(), true);
        assert.equal(await checkboxes_Page.isCheckBox2Checked(), true);
    });
    it('CB003 - Verify Unselect Checkboxes', async function () {
        await checkboxes_Page.clickCheckBox1();
        await checkboxes_Page.clickCheckBox2();
        assert.equal(await checkboxes_Page.isCheckBox1Checked(), false);
        assert.equal(await checkboxes_Page.isCheckBox2Checked(), false);
    })

});
