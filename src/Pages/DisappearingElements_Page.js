const {By} = require('selenium-webdriver');

class DisappearingElements_Page {
    constructor(driver) {
        this.driver = driver;
        this.pageTitle = By.xpath('//*[@id="content"]/div/h3');
        this.subTitle = By.xpath('//*[@id="content"]/div/p');
        this.homeButton = By.xpath('//*[@id="content"]/div/ul/li[1]/a');
        this.aboutButton = By.xpath('//*[@id="content"]/div/ul/li[2]/a');
        this.contactUsButton = By.xpath('//*[@id="content"]/div/ul/li[3]/a');
        this.portfolioButton = By.xpath('//*[@id="content"]/div/ul/li[4]/a');
        this.galleryButton = By.xpath('//*[@id="content"]/div/ul/li[5]/a');
        this.notFoundText = By.xpath('/html/body/h1');
        
    }

    async getPageTitle() {
        const title = await this.driver.findElement(this.pageTitle);
        return await title.getText();
    }
    async getSubTitle() {
        const subTitle = await this.driver.findElement(this.subTitle);
        return await subTitle.getText();
    }
    async homeButtonVisible() {
        const homeButton = await this.driver.findElement(this.homeButton);
        return await homeButton.isDisplayed();
    }
    async aboutButtonVisible() {
        const aboutButton = await this.driver.findElement(this.aboutButton);
        return await aboutButton.isDisplayed();
    }
    async contactUsButtonVisible() {
        const contactUsButton = await this.driver.findElement(this.contactUsButton);
        return await contactUsButton.isDisplayed();
    }
    async portfolioButtonVisible() {
        const portfolioButton = await this.driver.findElement(this.portfolioButton);
        return await portfolioButton.isDisplayed();
    }
    async galleryButtonVisible() {
        const galleryButton = await this.driver.findElement(this.galleryButton);
        return await galleryButton.isDisplayed();
    }
    async clickHomeButton() {
        const homeButton = await this.driver.findElement(this.homeButton);
        await homeButton.click();
    }
    async clickAboutButton() {
        const aboutButton = await this.driver.findElement(this.aboutButton);
        await aboutButton.click();
    }
    async clickContactUsButton() {
        const contactUsButton = await this.driver.findElement(this.contactUsButton);
        await contactUsButton.click();
    }
    async clickPortfolioButton() {
        const portfolioButton = await this.driver.findElement(this.portfolioButton);
        await portfolioButton.click();
    }
    async clickGalleryButton() {
        const galleryButton = await this.driver.findElement(this.galleryButton);
        await galleryButton.click();
    }
    async getNotFoundText() {
        const notFoundText = await this.driver.findElement(this.notFoundText);
        return await notFoundText.getText();
    }
}

module.exports = DisappearingElements_Page;