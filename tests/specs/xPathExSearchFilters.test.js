import xPathFilters from "../pageobject/bayutPropertyPageSearchFilters.page.js"
import { step } from "mocha-steps"
import Filters from "../pageobject/bayutSearchFilters.page.js"


describe("it should log the xpaths", () => {
    step("log the xpath types", () => {
        xPathFilters.open()

        //xPathFilters.ePropertyFilter.click()
        xPathFilters.eBedsFilter.click()
        browser.pause(2000)
        var whatXpath = xPathFilters.setBedOption("3")

        
        browser.pause(3000)

        //console.log(xPathFilters.eBuyActiveFilters.length)
        //onsole.log($('//*[@aria-label = "Header links dropdown"]//descendant::a/parent::div[1]').click())
        console.log(whatXpath)

        //Filters.waitForElementAndClick(whatXpath)
    
    
    })
})

