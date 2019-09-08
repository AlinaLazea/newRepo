import Page from "./page.js"

class Filters extends Page{
    get sFindBtn(){ 
        return $("//*[@aria-label = 'Find button']")
    }

    get sLocationInput(){
        return $("//*[@aria-label = 'Location input']")
    }

    get eBeds() {
        return $("//*[@aria-label = 'Beds filter']")
    }


        chooseBedOption(selectedBedOption) {
        // getText() appears to get all text in all children of element 
        // e.g: 
        // console.log(this.eBeds.getText());

        const eBedsChildElement =  this.eBeds.element('div');
        eBedsChildElement.waitForExist(200);
        const listBoxDivs = eBedsChildElement.$$('div');

        for (var index = 0; index < listBoxDivs.length; index++) {

            if (listBoxDivs[index].getAttribute('role') === 'listbox') {
                // we found the listbox

                const bedOptions = listBoxDivs[index].$$(`span`);
                console.log('Bed options length', bedOptions.length);
                for (var optionIndex = 0; optionIndex < bedOptions.length; optionIndex ++) {
                    const bedOptionsItem = bedOptions[optionIndex];
                    console.log(bedOptionsItem.getText() + '  ==  ' + selectedBedOption);
                    if (bedOptionsItem.getText() == selectedBedOption) {
                        console.log('Found the bed option with values equal to ', selectedBedOption);
                        bedOptionsItem.click();

                        break;
                    }
                }
                break;
            }
        }
    }



    /**
     * Function that returns the beds option element that has a specific number of beds
     * 
     * @param {*} bedOptionsElement HTML element that contains bed options
     * @param {*} numberOfBeds Number of beds that we use to select that specific option
     */
    chooseBeds(bedOptionsElement, numberOfBeds) {
        // // return bedOptionsElement.$(`//*[@aria-label = '${numberOfBeds}']`);

        // const spanChildren = bedOptionsElement.$('span');
        // console.log(spanChildren)
    }

    open() {
        super.open('https://www.bayut.com/');
    }

    submitLocation(){
        this.sFindBtn.click()
    }
}

export default new Filters();