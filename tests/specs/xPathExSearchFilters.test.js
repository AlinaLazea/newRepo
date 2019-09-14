import xPathFilters from "../pageobject/bayutPropertyPageSearchFilters.page.js"
import { step } from "mocha-steps"

describe("it should log the xpaths", () => {
    step("log the xpath types", () => {
        xPathFilters.open()

        xPathFilters.eBedsFilter.click()
        browser.pause(2000)
        var whatXpath = xPathFilters.setBedOption("3")
        browser.pause(3000)
        console.log(whatXpath)   
    })
})

