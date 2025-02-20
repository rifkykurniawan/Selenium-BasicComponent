const {By} = require('selenium-webdriver');

class HomePage_Page {
    constructor(driver) {
        this.driver = driver;
        this.addOrRemoveElementsButton = By.xpath('//*[@id="content"]/ul/li[2]/a');
        this.basicAuthButton = By.xpath('//*[@id="content"]/ul/li[3]/a');
        this.brokenImagesButton = By.xpath('//*[@id="content"]/ul/li[4]/a');
        this.challengingDomButton = By.xpath('//*[@id="content"]/ul/li[5]/a');
        this.checkboxesButton = By.xpath('//*[@id="content"]/ul/li[6]/a');
        this.contextMenuButton = By.xpath('//*[@id="content"]/ul/li[7]/a');
        this.digestAuthenticationButton = By.xpath('//*[@id="content"]/ul/li[8]/a');
        this.disappearingElementsButton = By.xpath('//*[@id="content"]/ul/li[9]/a');
        this.dragAndDropButton = By.xpath('//*[@id="content"]/ul/li[10]/a');
        this.dropdownButton = By.xpath('//*[@id="content"]/ul/li[11]/a');
        this.dynamicContentButton = By.xpath('//*[@id="content"]/ul/li[12]/a');
        this.dynamicControlsButton = By.xpath('//*[@id="content"]/ul/li[13]/a');
        this.dynamicLoadingButton = By.xpath('//*[@id="content"]/ul/li[14]/a');
        this.entryAdButton = By.xpath('//*[@id="content"]/ul/li[15]/a');
        this.exitIntentButton = By.xpath('//*[@id="content"]/ul/li[16]/a');
        this.fileDownloadButton = By.xpath('//*[@id="content"]/ul/li[17]/a');
        this.fileUploadButton = By.xpath('//*[@id="content"]/ul/li[18]/a');
        this.floatingMenuButton = By.xpath('//*[@id="content"]/ul/li[19]/a');
        this.forgotPasswordButton = By.xpath('//*[@id="content"]/ul/li[20]/a');
        this.formAuthenticationButton = By.xpath('//*[@id="content"]/ul/li[21]/a')
        this.framesButton = By.xpath('//*[@id="content"]/ul/li[22]/a');
        this.geoLocationButton = By.xpath('//*[@id="content"]/ul/li[23]/a');
        this.horizontalSliderButton = By.xpath('//*[@id="content"]/ul/li[24]/a');
        this.hoversButton = By.xpath('//*[@id="content"]/ul/li[25]/a');
        this.infiniteScrollButton = By.xpath('//*[@id="content"]/ul/li[26]/a');
        this.inputsButton = By.xpath('//*[@id="content"]/ul/li[27]/a');
        this.jQueryUIMenuButton = By.xpath('//*[@id="content"]/ul/li[28]/a');
        this.javascriptAlertsButton = By.xpath('//*[@id="content"]/ul/li[29]/a');
        this.javascriptOnloadButton = By.xpath('//*[@id="content"]/ul/li[30]/a');
        this.keyPressesButton = By.xpath('//*[@id="content"]/ul/li[31]/a');
        this.largeAndDeepDOMButton = By.xpath('//*[@id="content"]/ul/li[32]/a');
        this.multipleWindowsButton = By.xpath('//*[@id="content"]/ul/li[33]/a')
        this.nestedFramesButton = By.xpath('//*[@id="content"]/ul/li[34]/a');
        this.notificationMessagesButton = By.xpath('//*[@id="content"]/ul/li[35]/a');
        this.redirectLinkButton = By.xpath('//*[@id="content"]/ul/li[36]/a');
        this.secureFileDownloadButton = By.xpath('//*[@id="content"]/ul/li[37]/a');
        this.shadowDomButton = By.xpath('//*[@id="content"]/ul/li[38]/a');
        this.shiftingContentButton = By.xpath('//*[@id="content"]/ul/li[39]/a');
        this.slowResourcesButton = By.xpath('//*[@id="content"]/ul/li[40]/a');
        this.sortableDataTablesButton = By.xpath('//*[@id="content"]/ul/li[41]/a');
        this.statusCodesButton = By.xpath('//*[@id="content"]/ul/li[42]/a');
        this.typosButton = By.xpath('//*[@id="content"]/ul/li[43]/a');
        this.wysiwygEditorButton = By.xpath('//*[@id="content"]/ul/li[44]/a');
    
    }

    async clickAddOrRemoveElementsButton() {
        const addOrRemoveElementsButton = await this.driver.findElement(this.addOrRemoveElementsButton);
        await addOrRemoveElementsButton.click();
    }
    async clickBasicAuthButton() {
        const basicAuthButton = await this.driver.findElement(this.basicAuthButton);
        await basicAuthButton.click();
    }
    async clickBrokenImagesButton() {
        const brokenImagesButton = await this.driver.findElement(this.brokenImagesButton);
        await brokenImagesButton.click();
    }
    async clickChallengingDomButton() {
        const challengingDomButton = await this.driver.findElement(this.challengingDomButton);
        await challengingDomButton.click();
    }
    async clickCheckboxesbutton(){
        const checkboxesButton = await this.driver.findElement(this.checkboxesButton);
        await checkboxesButton.click();
    }
    async clickContextMenuButton(){
        const contextMenuButton = await this.driver.findElement(this.contextMenuButton);
        await contextMenuButton.click();
    }
    async clickDigestAuthenticationButton(){
        const digestAuthenticationButton = await this.driver.findElement(this.digestAuthenticationButton);
        await digestAuthenticationButton.click();
    }
    async clickDisappearingElementsButton(){
        const disappearingElementsButton = await this.driver.findElement(this.disappearingElementsButton);
        await disappearingElementsButton.click();
    }
    async clickDragAndDropButton(){
        const dragAndDropButton = await this.driver.findElement(this.dragAndDropButton);
        await dragAndDropButton.click();
    }
    async clickDropdownButton(){
        const dropdownButton = await this.driver.findElement(this.dropdownButton);
        await dropdownButton.click();
    }
    async clickDynamicContentButton(){
        const dynamicContentButton = await this.driver.findElement(this.dynamicContentButton);
        await dynamicContentButton.click();
    }
    async clickDynamicControlsButton(){
        const dynamicControlsButton = await this.driver.findElement(this.dynamicControlsButton);
        await dynamicControlsButton.click();
    }
    async clickDynamicLoadingButton(){
        const dynamicLoadingButton = await this.driver.findElement(this.dynamicLoadingButton);
        await dynamicLoadingButton.click();
    }
    async clickEntryAdButton(){
        const entryAdButton = await this.driver.findElement(this.entryAdButton);
        await entryAdButton.click();
    }
    async clickExitIntentButton(){
        const exitIntentButton = await this.driver.findElement(this.exitIntentButton);
        await exitIntentButton.click();
    }
    async clickFileDownloadButton(){
        const fileDownloadButton = await this.driver.findElement(this.fileDownloadButton);
        await fileDownloadButton.click();
    }
    async clickFileUploadButton(){
        const fileUploadButton = await this.driver.findElement(this.fileUploadButton);
        await fileUploadButton.click();
    }
    async clickFloatingMenuButton(){
        const floatingMenuButton = await this.driver.findElement(this.floatingMenuButton);
        await floatingMenuButton.click();
    }
    async clickForgotPasswordButton(){
        const forgotPasswordButton = await this.driver.findElement(this.forgotPasswordButton);
        await forgotPasswordButton.click();
    }
    async clickFormAuthenticationButton(){
        const formAuthenticationButton = await this.driver.findElement(this.formAuthenticationButton);
        await formAuthenticationButton.click();
    }  
    async clickFramesButton(){
        const framesButton = await this.driver.findElement(this.framesButton);
        await framesButton.click();
    }
    async clickGeoLocationButton(){
        const geoLocationButton = await this.driver.findElement(this.geoLocationButton);
        await geoLocationButton.click();
    }
    async clickHorizontalSliderButton(){
        const horizontalSliderButton = await this.driver.findElement(this.horizontalSliderButton);
        await horizontalSliderButton.click();
    }
    async clickHoversButton(){
        const hoversButton = await this.driver.findElement(this.hoversButton);
        await hoversButton.click();
    }
    async clickInfiniteScrollButton(){
        const infiniteScrollButton = await this.driver.findElement(this.infiniteScrollButton);
        await infiniteScrollButton.click();
    }
    async clickInputButtonsButton(){
        const inputButtonsButton = await this.driver.findElement(this.inputsButton);
        await inputButtonsButton.click();
    }
    async clickJQueryUIButton(){
        const jQueryUIButton = await this.driver.findElement(this.jQueryUIMenuButton);
        await jQueryUIButton.click();
    }
    async clickJavaScriptAlertsButton(){
        const javaScriptAlertsButton = await this.driver.findElement(this.javascriptAlertsButton);
        await javaScriptAlertsButton.click();
    }
    async clickJavaScriptOnloadButton(){
        const javaScriptOnloadButton = await this.driver.findElement(this.javascriptOnloadButton);
        await javaScriptOnloadButton.click();
    }
    async clickKeyPressesButton(){
        const keyPressesButton = await this.driver.findElement(this.keyPressesButton);
        await keyPressesButton.click();
    }
    async clickLargeAndDeepDOMButton(){
        const largeAndDeepDOMButton = await this.driver.findElement(this.largeAndDeepDOMButton);
        await largeAndDeepDOMButton.click();
    }
    async clickMultipleWindowsButton(){
        const multipleWindowsButton = await this.driver.findElement(this.multipleWindowsButton);
        await multipleWindowsButton.click();
    }
    async clickNestedFramesButton(){
        const nestedFramesButton = await this.driver.findElement(this.nestedFramesButton);
        await nestedFramesButton.click();
    }
    async clickNotificationMessagesButton(){
        const notificationMessagesButton = await this.driver.findElement(this.notificationMessagesButton);
        await notificationMessagesButton.click();
    }
    async clickRedirectLinkButton(){
        const redirectLinkButton = await this.driver.findElement(this.redirectLinkButton);
        await redirectLinkButton.click();
    }
    async clickSecureFileDownloadButton(){
        const secureFileDownloadButton = await this.driver.findElement(this.secureFileDownloadButton);
        await secureFileDownloadButton.click();
    }
    async clickShadowDomButton(){
        const shadowDomButton = await this.driver.findElement(this.shadowDomButton);
        await shadowDomButton.click();
    }
    async clickShiftingContentButton(){
        const shiftingContentButton = await this.driver.findElement(this.shiftingContentButton);
        await shiftingContentButton.click();
    }
    async clickSlowResourcesButton(){
        const slowResourcesButton = await this.driver.findElement(this.slowResourcesButton);
        await slowResourcesButton.click();
    }
    async clickSortableDataTablesButton(){
        const sortableDataTablesButton = await this.driver.findElement(this.sortableDataTablesButton);
        await sortableDataTablesButton.click();
    }
    async clickStatusCodesButton(){
        const statusCodesButton = await this.driver.findElement(this.statusCodesButton);
        await statusCodesButton.click();
    }
    async clickTyposButton(){
        const typosButton = await this.driver.findElement(this.typosButton);
        await typosButton.click();
    }
    async clickWysiwygEditorButton(){
        const wysiwygEditorButton = await this.driver.findElement(this.wysiwygEditorButton);
        await wysiwygEditorButton.click();
    }
}

module.exports = HomePage_Page;