const { Builder, By, until } = require('selenium-webdriver');

async function automateWebsiteOnEmulator() {
  const driver = await new Builder()
    .usingServer('http://localhost:4723/wd/hub') // Appium server address
    .withCapabilities({
      platformName: 'Android',
      deviceName: 'emulator-5554', // Your emulator/device name
      browserName: 'Chrome',
    })
    .build();
  try {
    for (let i = 0; i < 10; i++) {
      // Navigate to your website
      await driver.get('https://scanformenu.online');

      await driver.sleep(5000);

      // Perform interactions and assertions
      const element = await driver.findElement(By.className('amazon_ad2'));
      await element.click();

      // Wait for an element to be visible
      await driver.wait(until.elementIsVisible(element), 5000);
      await driver.sleep(5000);

      // Go back to the previous page
      await driver.navigate().back();
      await driver.sleep(2000);

      // Reload the page
      await driver.navigate().refresh();
    }
  } finally {
    // Quit the driver
    await driver.quit();
  }
}

automateWebsiteOnEmulator();
