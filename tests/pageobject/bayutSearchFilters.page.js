import Page from "./page.js"
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions
import Assert from 'assert';

class Filters extends Page{
    get eFindBtn(){ 
        return $("//*[@aria-label = 'Find button']")
    }

    get eLocationInput(){
        return $("//input[@type = 'text']")
    }

    get eBeds() {
        return $("//*[@aria-label = 'Beds filter']")
    }

    setDropDownListOption(bedOption){
        return $(`//*[@role = "listbox"]//*[@aria-label = "${bedOption}"]`).click()
    }

    open() {
        super.open('https://sl:getin1@bayut-development.herokuapp.com/');
    }

    waitUntilIsDisplayed(element){
        super.waitUntilIsDisplayed(element)
    }

    waitForElementAndClick(element){
        this.waitUntilIsDisplayed(element);
        element.click()
    }

    verifyTheLocationInput(desiredLocation){
        const filledLocationField = $("//*[@aria-label = 'Active filter label']/child::span").getText()
        Assert.equal(filledLocationField, desiredLocation, "Incorrect location text. Expected: " + desiredLocation + " /Received: " + filledLocationField)
    }

    verifyTheSelectedNumberOfBeds(bedsOption){
        const nrOfBeds = $(`${this.eBeds.selector}//*[@class = "fontCompensation"]`).getText()
        Assert.equal(nrOfBeds, bedsOption, "Invalid number of beds. Expected: " + bedsOption + " /Received: " + nrOfBeds)
    }

    verifyThatFindBtnWasPressed(){
        var nextPage = $("//*[@aria-label = 'Search results header']")
        Assert(nextPage !== undefined)
    }
}

export default new Filters();

