import Page from "./page.js"
const { waitFor, ExpectedConditions } = require('webdriverio-explicit-waits')
const EC = ExpectedConditions

class Filters extends Page{
    get eFindBtn(){ 
        return $("//*[@aria-label = 'Find button']")
    }

    get eLocationInput(){
        return $("//*[@aria-label = 'Location input']")
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

    convertSelectorToElement(element) {
        if (typeof element === 'string') {
            browser.waitForVisible(element);
            element = $(element);
        }
        return element;
    }

    clickElement(element) {
        element = this.convertSelectorToElement(element);
        element.waitForVisible(browser.options.waitForElement);
        element.click();
    }

    chooseBedOption(selectedBedOption){
        console.log("drop down: " , this.dropDownList.length )
        console.log("drop down1: " , this.dropDownList1.length )
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
        super.open('https://www.bayut.com/');
    }
}

export default new Filters();