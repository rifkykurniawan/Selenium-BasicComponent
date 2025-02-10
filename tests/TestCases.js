const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const AddOrRemove_Page = require('../src/Pages/AddOrRemove_Page');
const BasicAuth_Page = require('../src/Pages/BasicAuth_Page');
const BrokenImages_Page = require('../src/Pages/BrokenImages_Page');
const ChallengingDom_Page = require('../src/Pages/ChallengingDom_Page');

describe('Click each menu', function() {
    let driver;
    let addOrRemove_Page;
    let basicAuth_Page;
    let brokenImages_Page;
    let challengingDom_Page;

    this.timeout(100000);
    before(async function() {
        const options = new chrome.Options();
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();     
        addOrRemove_Page = new AddOrRemove_Page(driver);
        basicAuth_Page = new BasicAuth_Page(driver);
        brokenImages_Page = new BrokenImages_Page(driver);
        challengingDom_Page = new ChallengingDom_Page(driver);
        await driver.get('http://the-internet.herokuapp.com');
    });

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
    after(() => {
        driver.quit();
    });
    
});

// describe('Add/Remove Elements 2', function() {
//     let driver;
//     let addOrRemove_Page;

//     this.timeout(100000);
//     beforeEach(async function() {
//         const options = new chrome.Options();
//         driver = await new Builder()
//             .forBrowser('chrome')
//             .setChromeOptions(options)
//             .build();     
//         addOrRemove_Page = new AddOrRemove_Page(driver);
//         await driver.get('http://the-internet.herokuapp.com');
//     });

//     it('TC2 - Verify click button Add Element', async () => {
//         await addOrRemove_Page.clickAddRemoveElementsButton();
//         await addOrRemove_Page.clickAddElementButton();
//         await addOrRemove_Page.clickAddElementButton();
//         await addOrRemove_Page.clickAddElementButton();
//         await addOrRemove_Page.clickAddElementButton();
//         await addOrRemove_Page.clickAddElementButton();
//         await driver.sleep(1000);
//         assert.strictEqual(await addOrRemove_Page.isDeleteButton1Visible(), true);
//         assert.strictEqual(await addOrRemove_Page.isDeleteButton2Visible(), true);
//         assert.strictEqual(await addOrRemove_Page.isDeleteButton3Visible(), true);
//         assert.strictEqual(await addOrRemove_Page.isDeleteButton4Visible(), true);
//         assert.strictEqual(await addOrRemove_Page.isDeleteButton5Visible(), true);
//     });

//     after(() => {
//         driver.quit();
//     });
// });