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
        return $("//*[@aria-label = 'Beds filter']") //type ELEMENT
    }

    get dropDownList(){
        return $("//*[@aria-label = 'Beds filter']/child::div/child::div[2]/child::div/child::div[1]/child::div").$$(`span`)
    }

    get dropDownList1(){
        const eBedsChildDivElement =  this.eBeds.element('div');
        eBedsChildDivElement.waitForExist(200);
        const optionsDiv = eBedsChildDivElement.$$('div');

        for (var index = 0; index < optionsDiv.length; index++) {
            if (optionsDiv[index].getAttribute('role') === 'listbox') {
                // we found the listbox
                const bedOptions = optionsDiv[index].$$(`span`);
                return bedOptions
            }
        }
    }

    chooseBedOption(selectedBedOption){
        var bedsOpt = this.selectBeds(this.dropDownList, selectedBedOption)
        bedsOpt.click()
    }

    selectBeds(list, selectedBedOption){
        const bedOptions = list;
        for (var optionIndex = 0; optionIndex < bedOptions.length; optionIndex ++) {
            const bedOptionsItem = bedOptions[optionIndex];
            if (bedOptionsItem.getText() == selectedBedOption) {
                //console.log('Found the bed option with value equal to ', selectedBedOption);
                return bedOptionsItem
            }
        }
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
        const filledLocationField = $("//li[@aria-label = 'Active filter label']/child::span").getText()
        Assert.equal(filledLocationField, desiredLocation, "Incorrect location text. Expected: " + desiredLocation + " /Received: " + filledLocationField)
    }

    verifyTheSelectedNumberOfBeds(bedsOption){
        const nrOfBeds = $("//*[@aria-label = 'Beds filter']/child::div/child::div/child::span/child::span").getText()
        Assert.equal(nrOfBeds, bedsOption, "Invalid number of beds. Expected: " + bedsOption + " /Received: " + nrOfBeds)
    }

    verifyThatFindBtnWasPressed(){
        var nextPage = $("//*[@aria-label = 'Search results header']")
        Assert(nextPage !== undefined)
    }
}

export default new Filters();