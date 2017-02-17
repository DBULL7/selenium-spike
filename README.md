# Selenium Spike

***

Step 1: Go to github.com/DBULL7/selenium-spike and clone it down

Step 2: `cd` into selenium-spike and run `npm install selenium-webdriver`
(Back-End users may need to install npm)

Step 3: Open the files with `atom .`

Step 4: In atom look at test1.js
It should look like this:
```javascript
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


searchTest(driver_chr);


function searchTest(driver) {
  driver.get('http://www.google.com');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnG')).click();

  driver.sleep(3000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'webdriver - Google Search') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
    });
  });

  driver.quit();
}
```

Step 6: In the terminal run `node test1.js` Chrome should open, run enter 'webdriver' and click it. From there it should close and give you a `Test passed` in the terminal


##Next Up
***
