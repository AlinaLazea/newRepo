import Page from "./page.js"

class xPathFilters extends Page{
    //element, type object, methods getText, etc
    /**
     * out: value: 
        { ELEMENT: '0.6471768287987443-1',
            'element-6066-11e4-a52e-4f735466cecf': '0.6471768287987443-1' },
            selector: '//a[contains(@title, "Bayut.com")]',
            _status: 0 
        } */

    get eBayutLogo(){
        return $(`//*[contains(@title, "Bayut.com")]`)
    }


    // selector type string
    /**
     * out: //a[contains(@title, "Bayut.com")
     */
    get selectorBayutLogo(){
        return $(`//a[contains(@title, "Bayut.com")]`).selector
    }

    //element type function
    /**
     * out; function () { [native code] }
     */
    get elementFunctionBayutLogo(){
        return $(`//a[contains(@title, "Bayut.com")]`).element
    }

//-------------------------------------------------------------------------------------------------

    // get the buy btn
    get ebuyBtn(){
        return $(`${this.eBayutLogo.selector}/following-sibling::div/span[1]`)
    }

    get eRentBtn(){
        return $(`${this.eBayutLogo.selector}/following-sibling::div/span[2]`)
    }

    get eblogBtn(){
        return $('//*[@aria-label = "Blogs" and @title = "MyBayut"]')
    }

    get eAreaGuides(){
        return $('//*[@title = "Area Guides"]')
    }

    get eAgents(){
        return $('//*[@title = "Agents"]')
    }

    get eFloorPlans(){
        return $('//*[@title = "Floor plans"]')
    }

    get eLanguageBtn(){
        return $('//*[@aria-label = "Switch brand"]')
    }

    get eLanguageSwitch(){
        return $('//*[@aria-label = "العربية language switch button"]')
    }

    get eSettingsBtn(){
        return $('//*[@aria-label = "Settings button"]')
    }

    get eLoginBtn(){
        return $('//*[@aria-label = "Login button"]')
    }

    get ePurposeFilter(){
        return $('//*[@aria-label = "Purpose filter"]')
    }

    get eLocationFilter(){
        return $('//*[@aria-label = "Location filter"]')
    }

    get ePropertyFilter(){
        return $('//*[@aria-label = "Category filter"]')
    }

    get eRentFreqFilter(){
        return $('//*[@aria-label = "Frequency filter"]')
    }

    get ePriceFilter(){
        return $('//*[@aria-label = "Price filter"]//*[@role = "button"]')
    }

    get eBedsFilter(){
        return $('//*[@aria-label = "Beds filter"]//*[@role = "button"]')
    }
    
    get eAreaFilter(){
        return $('//*[@aria-label = "Area filter"]//*[@role = "button"]')
    }

    get eBathsFilter(){
        return $('//*[@aria-label = "Baths filter"]//*[@role = "button"]')
    }

    get eKeywordFilter(){
        return $('//*[@aria-label = "Keyword filter"]//input')
    }

    get eAgencyfilter(){
        return $('//*[@aria-label = "Agency input"]')
    }

/*     get eBuyActiveFilters(){
        return $('//*[@aria-label = "Header links dropdown"]//descendant::a')
    }

    setBuyOption(buyOptionIndex){
        return $(`${this.eBuyActiveFilters.selector}[${buyOptionIndex}]`).click()
    } */

    get erentOptionBtn(){
        return $('//*[@aria-label = "Rent"]')
    }

    get ebuyOptionBtn(){
        return $('//*[@aria-label = "Buy"]')
    }

    get ePropertyTypeList(){
        return $('//*[@name = "Category picker"]')
    }

    get eCommercialBtn(){
        return $(`${this.ePropertyTypeList.selector}//*[text() = "Commercial"]`)
    }

    // text - property type name: shop, apartment, etc
    setPropertyType(text){
        return $(`${this.ePropertyTypeList.selector}//*[contains(text(),"${text}")]`).click()
    }

    setRentFrequency(rentFreq){
        return $(`//*[@aria-label = "${rentFreq}"]`).click()
    }

    get eMinPriceValueInput(){
        return $(`//*[@placeholder = "0"]`)
    }

    get eMaxPriceValue(){
        return $(`//*[@placeholder = "Any"]`)
    }

    setBedOption(bedOption){
        return $(`//*[@role = "listbox"]//*[@aria-label = "${bedOption}"]`).click()
    }


































    open(){
        super.open('https://sl:getin1@bayut-development.herokuapp.com/to-rent/property/uae/')
    }


}
export default new xPathFilters()