import Filters from "./pageobject/bayutFilters.page.js"
require('mocha-steps')
const errArray = []

const numberOfBeds = 3;


describe("It should complete the location input and press the 'Find' button", () => {
    step("should complete the location field", () => {
        Filters.open();
        Filters.sLocationInput.waitForExist(1000) ? Filters.sLocationInput.setValue("Dubai Marina") : errArray.push("The 'Location' field is not displayed!")
        Filters.sLocationInput.click()
    })

    step("should set the number of beds", () => {
        browser.pause(1000);
        const bedsElement = Filters.eBeds;
        bedsElement.click();

        Filters.chooseBedOption(3);
    })

    step("should press the 'Find' button", () => {
        Filters.sFindBtn.waitForExist(1000) ? Filters.sFindBtn.click() : errArray.push("The 'Find' button is not displayed")
        browser.pause(3000)
    })
})