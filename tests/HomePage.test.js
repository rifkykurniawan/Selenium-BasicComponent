const {Builder, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const HomePage_Page = require('../src/Pages/HomePage_Page');
const { it, describe, afterEach, after, beforeEach } = require('mocha');

let driver;
let homePage_Page;

before(async function() {
    this.timeout(500000);
    const options = new chrome.Options();
    options.addArguments('--start-maximized');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    homePage_Page = new HomePage_Page(driver);
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().setTimeouts({ pageLoad: 20000 });
    await driver.manage().setTimeouts({ script: 15000 });
    await driver.get('http://the-internet.herokuapp.com');
});

after(async function() {
    await driver.quit();
});

describe('Click each menu', function() {
    it('TC1 - Verify click button Add Element', async function () {
        await homePage_Page.clickAddOrRemoveElementsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/add_remove_elements/');
        await driver.navigate().back();
    });
    it('TC2 - Verify click Basic Auth', async function () {
        await homePage_Page.clickBasicAuthButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/basic_auth');
        await driver.navigate().back();
    });
    it('TC3 - Verify click Broken Images', async function () {
        await homePage_Page.clickBrokenImagesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/broken_images');
        await driver.navigate().back();
    });
    it('TC4 - Verify click Challenging Dom', async function () {
        await homePage_Page.clickChallengingDomButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/challenging_dom');
        await driver.navigate().back();
    });
    it('TC5 - Verify click Checkboxes', async function (){
        await homePage_Page.clickCheckboxesbutton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/checkboxes')
        await driver.navigate().back();
    });
    it('TC6 - Verify click Context Menu', async function () {
        await homePage_Page.clickContextMenuButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/context_menu');
        await driver.navigate().back();
    })
    it('TC7 - Verify click digest Authentication', async function () {
        await homePage_Page.clickDigestAuthenticationButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/digest_auth');
        await driver.navigate().back();
    })
    it('TC8 - Verify click Disappearing Elements', async function () {
        await homePage_Page.clickDisappearingElementsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/disappearing_elements');
        await driver.navigate().back();
    })
    it('TC9 - Verify click Drag and Drop', async function () {
        await homePage_Page.clickDragAndDropButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/drag_and_drop');
        await driver.navigate().back();
    })
    it('TC10 - Verify click Dropdown', async function () {
        await homePage_Page.clickDropdownButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/dropdown');
        await driver.navigate().back();
    })
    it('TC11 - Verify click Dynamic Content', async function () {
        await homePage_Page.clickDynamicContentButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/dynamic_content');
        await driver.navigate().back();
    })
    it('TC12 - Verify click Dynamic Controls', async function () {
        await homePage_Page.clickDynamicControlsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/dynamic_controls');
        await driver.navigate().back();
    })
    it('TC13 - Verify click Dynamic Loading', async function () {
        await homePage_Page.clickDynamicLoadingButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/dynamic_loading');
        await driver.navigate().back();
    })
    it('TC14 - Verify click Entry Ad', async function () {
        await homePage_Page.clickEntryAdButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/entry_ad');
        await driver.navigate().back();
    })
    it('TC15 - Verify click Exit Intent', async function () {
        await homePage_Page.clickExitIntentButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/exit_intent');
        await driver.navigate().back();
    })
    it('TC16 - Verify click File Download', async function () {        
        await homePage_Page.clickFileDownloadButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/download');
        await driver.navigate().back();
    })
    it('TC17 - Verify click File Upload', async function () {        
        await homePage_Page.clickFileUploadButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/upload');
        await driver.navigate().back();
    })
    it('TC18 - Verify click Floating Menu', async function () {        
        await homePage_Page.clickFloatingMenuButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/floating_menu');
        await driver.navigate().back();
    })
    it('TC19 - Verify click Forgot Password', async function () {        
        await homePage_Page.clickForgotPasswordButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/forgot_password');
        await driver.navigate().back();
        this.timeout(100000);
    })
    it('TC20 - Verify click Form Authentication', async function () {  
        this.timeout(100000);      
        await homePage_Page.clickFormAuthenticationButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/login');
        await driver.navigate().back();
    })
    it('TC21 - Verify click Frames', async function () {        
        await homePage_Page.clickFramesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/frames');
        await driver.navigate().back();
    })
    it('TC22 - Verify click Infinite Scroll', async function () {        
        await homePage_Page.clickInfiniteScrollButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/infinite_scroll');
        await driver.navigate().back();
    })
    it('TC23 - Verify click Input Buttons', async function () {        
        await homePage_Page.clickInputButtonsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/inputs');
        await driver.navigate().back();
    })
    it('TC24 - Verify click JQuery UI Menu', async function () {        
        await homePage_Page.clickJQueryUIButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/jqueryui/menu');
        await driver.navigate().back();
    })
    it('TC25 - Verify click Javascript alert', async function () {        
        await homePage_Page.clickJavaScriptAlertsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/javascript_alerts');
        await driver.navigate().back();
    })
    it('TC26 - Verify click Javacript onload', async function () {        
        await homePage_Page.clickJavaScriptOnloadButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/javascript_error');
        await driver.navigate().back();
    })
    it('TC27 - Verify click Key Presses', async function () {        
        await homePage_Page.clickKeyPressesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/key_presses');
        await driver.navigate().back();
        this.timeout(10000);
    })
    it('TC28 - Verify click Large & Deep DOM', async function () {        
        await homePage_Page.clickLargeAndDeepDOMButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/large');
        await driver.navigate().back();
    })
    it('TC29 - Verify click Multiple Windows', async function () {        
        await homePage_Page.clickMultipleWindowsButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/windows');
        await driver.navigate().back();
        this.timeout(10000);
    })
    it('TC30 - Verify click Nested Frames', async function () {        
        await homePage_Page.clickNestedFramesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/nested_frames');
        await driver.navigate().back();
    })
    it('TC31 - Verify click Notification Messages', async function () {        
        await homePage_Page.clickNotificationMessagesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/notification_message_rendered');
        await driver.navigate().back();
    })
    it('TC32 - Verify click Redirects link button', async function () {        
        await homePage_Page.clickRedirectLinkButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/redirector');
        await driver.navigate().back();
    })
    it('TC33 - Verify click Secure File Download', async function () {        
        await homePage_Page.clickSecureFileDownloadButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/download_secure');
        await driver.navigate().back();
    })
    it('TC34 - Verify click Shifting Content', async function () {        
        await homePage_Page.clickShiftingContentButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/shifting_content');
        await driver.navigate().back();
    })
    it('TC35 - Verify click Slow Resources', async function () {        
        await homePage_Page.clickSlowResourcesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/slow');
        await driver.navigate().back();
    })
    it('TC36 - Verify click Sortable Data', async function () {        
        await homePage_Page.clickSortableDataTablesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/tables');
        await driver.navigate().back();
        this.timeout(1000000);
    })
    it('TC37 - Verify click Status Codes', async function () {        
        await homePage_Page.clickStatusCodesButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/status_codes');
        await driver.navigate().back();        
    })
    it('TC38 - Verify click Typos', async function () {        
        await homePage_Page.clickTyposButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://the-internet.herokuapp.com/typos');
        await driver.navigate().back();
    })
    it('TC39 - Verify click WYSIWYG Editor', async function() {
        this.timeout(100000);
        await homePage_Page.clickWysiwygEditorButton();
    });
    
});