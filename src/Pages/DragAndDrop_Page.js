const {By} = require('selenium-webdriver');

class DragAndDrop_Page {
    constructor(driver) {
        this.driver = driver;
        this.pageTitle = driver.findElement(By.xpath('//*[@id="content"]/div/h3'));
        this.dragableA = driver.findElement(By.id('column-a'));
        this.dragableB = driver.findElement(By.id('column-b'));
    }

    async getPageTitle() {
        const title = await this.pageTitle.getText();
        return await title;
    }
    async dragAtoB() {
        const dragAtoB = await this.driver.actions().dragAndDrop(this.dragableA, this.dragableB).perform();
        return await dragAtoB;
    }

}

module.exports = DragAndDrop_Page;