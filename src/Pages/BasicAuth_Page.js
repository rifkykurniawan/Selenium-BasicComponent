const {By} = require('selenium-webdriver');

class BasicAuth_Page {
    constructor(driver) {
        this.driver = driver;
        this.basicAuthButton = By.xpath('//*[@id="content"]/ul/li[3]/a');
    }
    async clickBasicAuthButton() {
        const basicAuthButton = await this.driver.findElement(this.basicAuthButton);
        await basicAuthButton.click();
    }
}
module.exports = BasicAuth_Page;