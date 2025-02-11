const {By} = require('selenium-webdriver');

class BrokenImages_Page {
    constructor(driver) {
        this.driver = driver;
        this.brokenImagesButton = By.xpath('//*[@id="content"]/ul/li[4]/a');
        this.brokenImage1 = By.xpath('//*[@id="content"]/div/img[1]');
        this.brokenImage2 = By.xpath('//*[@id="content"]/div/img[2]');
        this.normalImage = By.xpath('//*[@id="content"]/div/img[3]');
    }
    async clickBrokenImagesButton() {
        const brokenImagesButton = await this.driver.findElement(this.brokenImagesButton);
        await brokenImagesButton.click();
    }
    async isBrokenImage1Visible() {
        const brokenImage1 = await this.driver.findElement(this.brokenImage1);
        return await brokenImage1.isDisplayed();
    }
    async isBrokenImage2Visible() {
        const brokenImage2 = await this.driver.findElement(this.brokenImage2);
        return await brokenImage2.isDisplayed();
    }
    async isNormalImageVisible() {
        const normalImage = await this.driver.findElement(this.normalImage);
        return await normalImage.isDisplayed();
    }
}
module.exports = BrokenImages_Page;