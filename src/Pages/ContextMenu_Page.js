const {By} = require('selenium-webdriver');

class ContextMenu_Page {
    constructor(driver) {
        this.driver = driver;
        this.title = By.xpath('//*[@id="content"]/div/h3')
        this.clickableObject = By.id('hot-spot');
        this.text1 = By.xpath('//*[@id="content"]/div/p[1]');
        this.text2 = By.xpath('//*[@id="content"]/div/p[2]');
    }
    async rightClickClickableObject() {
        const clickableObject = await this.driver.findElement(this.clickableObject);
        const actions = this.driver.actions({ async: true });
        await actions.contextClick(clickableObject).perform();
    }
    async getPageTitle() {
        const pageTitle = await this.driver.findElement(this.title);
        return await pageTitle.getText();
    }
    async getText1() {
        const text1 = await this.driver.findElement(this.text1);
        return await text1.getText();
    }
    async getText2() {
        const text2 = await this.driver.findElement(this.text2);
        return await text2.getText();
    }
    
}

module.exports = ContextMenu_Page;