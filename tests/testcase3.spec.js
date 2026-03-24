import {test, expect} from '@playwright/test';  

test(' TC001 -verify header of the page', async ({ page }) => {
      // tc1 
    // Arrangement
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // Actions(CSS selector) 
    //tagName[attribute=value]
    //<h1>Practice Page</h1>
    let headingElement = await page.locator('h1')
    let text = await headingElement.textContent()
    // Assertion 
    console.log(text)
    await expect(text).toEqual('Practice Page')


// testcase2
 // <input id="name" name="enter-name" class="inputs" placeholder="Enter Your Name" type="text">
    let inputElement = page.locator('#name')
    let inputElementByClassFirst  = page.locator('.inputs').first()
    let inputElementByClassLast  = page.locator('.inputs').last()
    let inputElementByClassSecond  = page.locator('.inputs').nth(2)
    let inputElementByClassThird  = page.locator('.inputs').nth(3)

    })