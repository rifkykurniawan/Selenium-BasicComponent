const {By} = require('selenium-webdriver');

class Checkboxes_Page {
    constructor(driver) {
        this.driver = driver;
        this.pageTitle = By.xpath('//*[@id="content"]/div/h3');
        this.checkBox1 = By.xpath('//*[@id="checkboxes"]/input[1]');
        this.checkBox2 = By.xpath('//*[@id="checkboxes"]/input[2]');
    }
    async getPageTitle() {
        const pageTitle = await this.driver.findElement(this.pageTitle);
        return await pageTitle.getText();
    }
    async clickCheckBox1() {
        const checkBox1 = await this.driver.findElement(this.checkBox1);
        await checkBox1.click();
    }
    async clickCheckBox2() {
        const checkBox2 = await this.driver.findElement(this.checkBox2);
        await checkBox2.click();
    }
    async isCheckBox1Checked() {
        const checkBox1 = await this.driver.findElement(this.checkBox1);
        return await checkBox1.isSelected();
    }
    async isCheckBox2Checked() {
        const checkBox2 = await this.driver.findElement(this.checkBox2);
        return await checkBox2.isSelected();
    }
}

module.exports = Checkboxes_Page;