const {By} = require('selenium-webdriver');

class BasicAuth_Page {
    constructor(driver) {
        this.driver = driver;
        this.basicAuthButton = By.xpath('//*[@id="content"]/ul/li[3]/a');
        this.congratulationMessage = By.xpath('//*[@id="content"]/div/p');
        
    }
    async clickBasicAuthButton() {
        const basicAuthButton = await this.driver.findElement(this.basicAuthButton);
        await basicAuthButton.click();
    }

    async getCongratulationMessage() {
        const congratulationMessage = await this.driver.findElement(this.congratulationMessage);
        return await congratulationMessage.getText();
    }
}
module.exports = BasicAuth_Page;