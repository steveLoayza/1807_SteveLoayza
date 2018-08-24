// spec.js
describe('revature login should happen', function() {
  it('should login', function() {
    browser.get('https://assignforce-client.cfapps.io');
    browser.driver.sleep(1000);
    element(By.name('email')).sendKeys('svp@revature.com');
    element(By.name('password')).sendKeys('p@$$w0rd');
    element(By.name('submit')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/overview');  
    
 
  });
});
describe('change to the batches page', function() {
  it('should change page', function() {
  //  browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-1')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/batches');
    //browser.driver.sleep(1000);
  });
});
describe('change to the overview page', function() {
  it('should change page', function() {
    //browser.driver.sleep(2000);
    element(By.id('mat-tab-label-0-0')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/overview');
   // browser.driver.sleep(1000);
  });
});
describe('change to the locations page', function() {
  it('should change page', function() {
   // browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-2')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/locations');
   // browser.driver.sleep(1000);
  });
});
describe('change to the curricula page', function() {
  it('should change page', function() {
    //browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-3')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/curricula');
   // browser.driver.sleep(1000);
  });
});
describe('change to the trainers page', function() {
  it('should change page', function() {
    //browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-4')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/trainers');
   // browser.driver.sleep(1000);
  });
});
describe('change to the profile page', function() {
  it('should change page', function() {
   // browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-5')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/profile/svp@revature.com');
   // browser.driver.sleep(1000);
  });
});
describe('change to the reports page', function() {
  it('should change page', function() {
    //browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-6')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/reports');
   // browser.driver.sleep(1000);
  });
});
describe('change to the settings page', function() {
  it('should change page', function() {
    //browser.driver.sleep(1000);
    element(By.id('mat-tab-label-0-7')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/settings');
    //browser.driver.sleep(1000);
  });
});
describe('revature logout should happen', function() {
  it('should logout', function() {
   // browser.driver.sleep(1000);
    element(By.id('logoutBTN')).click();
    browser.driver.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual('https://assignforce-client.cfapps.io/login');
  });
});