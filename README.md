# Selenium Spike


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

Step 6: In the terminal run `node test1.js` Chrome should open, enter 'webdriver' in the search field and click it. From there it should close and give you a `Test passed` in the terminal


##Next Up test2.js

Step 1: Go to test2.js

Step 2: You can either use the github page setup in the test or you can replace it with a github page of your own project.

Step 3: On line 21 there is an important method missing: use the docs to find it. (Hint: you need to get the text value). Here's the only [doc](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html) you need. Then go to the github page you're using and open dev tools in chrome `cmd + shift + c` . Find the element in the card (hint: you have to make a card to see it in the dev tools)

## Test 3

Step 1: Go to test3.js

Step 2: Repeat steps for test2 but get the body text of the card and check it.

## Test 4

Step 1: Go to test4.js

Step 2: Goal :Have selenium refresh the page. Check if the card persists.

Step 3: Google `selenium webdriver refresh page` Read the stackoverflow. After refresh, validate that the card we made persisted. You can have it check either the card title or the card body.


## Test 5

Pro Challenge, if scared go to Test 6
Step 1: Go to test5.js

Step 2: Use the docs to have Selenium delete the card and validate it doesn't exist.

# Test 6

Step 1: Go to test6.js

Step 2: Use the docs to test if the save button is disabled
