import Filters from "./pageobject/bayutFilters.page.js"
require('mocha-steps')
const errArray = []

describe("It should complete the location input and press the 'Find' button", () => {
    step("should complete the location field", () => {
        Filters.open();
        Filters.sLocationInput.waitForExist(1000) ? Filters.sLocationInput.setValue("Dubai Marina") : errArray.push("The 'Location' field is not displayed!")
        Filters.sLocationInput.click()
    })

    step("should press the 'Find' button", () => {
        //Filters.sFindBtn.waitForExist(1000) ? Filters.sFindBtn.click() : errArray.push("The 'Find' button is not displayed")
    
        //Filters.sBeds.waitForDisplayed(5000) 
        browser.pause(3000)
        Filters.sBeds.click()
        console.log($("//*[@role = 'listbox']/child::li"))
    
    
    })
})