const { Builder, By, Key } = require('selenium-webdriver');
async function example() {
let driver = await new Builder().forBrowser('chrome').build(); 
try {
// Navigate to Google
await driver.get('https://www.google.com'); 
console.log('Opened Google homepage.');
// Find the search box and perform a search
let searchBox = await driver.findElement(By.name('q'));
await searchBox.sendKeys('Selenium WebDriver', Key.RETURN); 
console.log('Search 
performed successfully.');
} finally {
// Close the browser
await driver.quit(); console.log('Browser closed.');
}
}example();
