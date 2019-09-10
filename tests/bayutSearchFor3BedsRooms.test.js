import Filters from "./pageobject/bayutSearchFilters.page.js"
import Results from "./pageobject/bayutSearchResults.page.js"
require('mocha-steps')
const errArray = []

const numberOfBeds = 3;


describe("It should complete the location input, select the 3 beds option and press the 'Find' button", () => {
    step("should complete the location field", () => {
        Filters.open();
        //Filters.sLocationInput.waitForExist(1000) ? Filters.sLocationInput.setValue("Dubai Marina") : errArray.push("The 'Location' field is not displayed!")
        var eLocationInput = Filters.eLocationInput;
        eLocationInput.click()
        eLocationInput.setValue("Dubai Marina")
        browser.pause(1000)
        browser.keys("\uE007"); 
        browser.pause(1000)
    });

    step("should set the number of beds", () => {
        //open the beds dropdown
        var eBeds = Filters.eBeds
        Filters.clickElement(eBeds)
        
        //choose the desired number of beds
        Filters.chooseBedOption(numberOfBeds)
        browser.pause(1000)
    })

    step("should press the 'Find' button", () => {
        var eFindButton = Filters.eFindBtn
        Filters.clickElement(eFindButton)
        browser.pause(1000)
    })
})

describe("It should get all the items, and verify if there are only 3 beds apartments", () => {
    step("should get all the items, and verify if there are only 3 beds apartments", () => {
        console.log("total results: ", Results.nTotalResults)
        const object = {}
        do {
            Results.getThePageItems(object);

            Filters.clickElement(Results.eNextPage)
            //Results.eNextPage.click()
            browser.pause(3000)

            console.log("obj: " + JSON.stringify(object))
            console.log("obj length: ", Object.keys(object).length)

        } while (parseInt(Results.nTotalResults) !== parseInt(Object.keys(object).length));
        
        console.log("obj: " + JSON.stringify(object))


        Results.only3BedsProperties(object)
    })
})