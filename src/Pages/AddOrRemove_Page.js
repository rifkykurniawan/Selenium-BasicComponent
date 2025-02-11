const {By} = require('selenium-webdriver');

class AddOrRemove_Page {
    constructor(driver) {
        this.driver = driver;
        this.addRemoveElementsButton = By.xpath('//*[@id="content"]/ul/li[2]/a');
        this.addElementButton = By.xpath('//*[@id="content"]/div/button');
        this.deleteButton1 = By.xpath('//*[@id="elements"]/button');
        this.deleteButton2 = By.xpath('//*[@id="elements"]/button[2]');
        this.deleteButton3 = By.xpath('//*[@id="elements"]/button[3]');
        this.deleteButton4 = By.xpath('//*[@id="elements"]/button[4]');
        this.deleteButton5 = By.xpath('//*[@id="elements"]/button[5]');
    }

    async clickAddRemoveElementsButton() {
        const addRemoveElementsButton = await this.driver.findElement(this.addRemoveElementsButton);
        await addRemoveElementsButton.click();
    }
    async clickAddElementButton() {
        const addElementButton = await this.driver.findElement(this.addElementButton);
        await addElementButton.click();
    }
    
    async isDeleteButton1Visible() {
        const deleteButton1 = await this.driver.findElement(this.deleteButton1);
        return await deleteButton1.isDisplayed();
    }
    async isDeleteButton2Visible() {
        const deleteButton2 = await this.driver.findElement(this.deleteButton2);
        return await deleteButton2.isDisplayed();
    }
    async isDeleteButton3Visible() {
        const deleteButton3 = await this.driver.findElement(this.deleteButton3);
        return await deleteButton3.isDisplayed();
    }
    async isDeleteButton4Visible() {
        const deleteButton4 = await this.driver.findElement(this.deleteButton4);
        return await deleteButton4.isDisplayed();
    }
    async isDeleteButton5Visible() {
        const deleteButton5 = await this.driver.findElement(this.deleteButton5);
        return await deleteButton5.isDisplayed();
    }
    async clickDeleteButton() {
        const deleteButton1 = await this.driver.findElement(this.deleteButton1);
        await deleteButton1.click();
    }
    async clickDeleteButton2() {
        const deleteButton2 = await this.driver.findElement(this.deleteButton2);
        await deleteButton2.click();
    }
    async clickDeleteButton3() {
        const deleteButton3 = await this.driver.findElement(this.deleteButton3);
        await deleteButton3.click();
    }
    async clickDeleteButton4() {
        const deleteButton4 = await this.driver.findElement(this.deleteButton4);
        await deleteButton4.click();
    }
    async clickDeleteButton5() {
        const deleteButton5 = await this.driver.findElement(this.deleteButton5);
        await deleteButton5.click();
    }
}

module.exports = AddOrRemove_Page;
