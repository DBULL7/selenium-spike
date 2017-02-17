var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


searchTest(driver_chr);


function searchTest(driver) {
  driver.get('https://dbull7.github.io/ideabox/');
  driver.findElement(By.className('user-title')).sendKeys('plz');
  driver.findElement(By.className('user-body')).sendKeys('work');
  driver.findElement(By.className('save-button')).click();
  driver.findElement(By.className('delete-button')).click();

  driver.sleep(3000).then(function() {
    var tryAgain = expect(browser.isElementPresent(element(By.className('body-text')))).toBe(false);
    if (tryAgain = false) {
      console.log('test passed')
    } else {
      console.log('test failed damnit')
    }
    // driver.findElement(By.className('body-text')).then(function(text) {
    //   if() {
    //     console.log('Test passed');
    //   } else {
    //     console.log('Test failed');
    //   }
    // });
  });

  driver.quit();
}
