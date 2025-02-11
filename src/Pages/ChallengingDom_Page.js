const {By} = require('selenium-webdriver');

class ChallengingDom_Page {
    constructor(driver) {
        this.driver = driver;
        this.challengingDomButton = By.xpath('//*[@id="content"]/ul/li[5]/a');
        this.pageHeading = By.xpath('//*[@id="content"]/div/h3');
        this.editButton0 = By.xpath('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[7]/a[1]');
    }
    async clickChallengingDomButton() {
        const challengingDomButton = await this.driver.findElement(this.challengingDomButton);
        await challengingDomButton.click();
    }

    async getPageHeading() {
        const pageHeading = await this.driver.findElement(this.pageHeading);
        return await pageHeading.getText();
    }
    async clickEditButton0() {
        const editButton0 = await this.driver.findElement(this.editButton0);
        await editButton0.click();
    }
}
module.exports = ChallengingDom_Page;
