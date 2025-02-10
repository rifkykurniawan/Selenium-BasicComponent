const {By} = require('selenium-webdriver');

class BrokenImages_Page {
    constructor(driver) {
        this.driver = driver;
        this.brokenImagesButton = By.xpath('//*[@id="content"]/ul/li[4]/a');
    }
    async clickBrokenImagesButton() {
        const brokenImagesButton = await this.driver.findElement(this.brokenImagesButton);
        await brokenImagesButton.click();
    }
}
module.exports = BrokenImages_Page;