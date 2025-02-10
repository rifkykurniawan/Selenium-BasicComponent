const {By} = require('selenium-webdriver');

class ChallengingDom_Page {
    constructor(driver) {
        this.driver = driver;
        this.challengingDomButton = By.xpath('//*[@id="content"]/ul/li[5]/a');
    }
    async clickChallengingDomButton() {
        const challengingDomButton = await this.driver.findElement(this.challengingDomButton);
        await challengingDomButton.click();
    }
}
module.exports = ChallengingDom_Page;
