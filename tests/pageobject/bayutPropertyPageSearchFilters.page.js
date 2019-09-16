import Page from "./page.js"

class SearchPageFilters extends Page{
    get eBayutLogo(){
        return $(`//*[contains(@title, "Bayut.com")]`)
    }

    get selectorBayutLogo(){
        return $(`//a[contains(@title, "Bayut.com")]`)
    }

    get elementFunctionBayutLogo(){
        return $(`//a[contains(@title, "Bayut.com")]`)
    }

    get ebuyBtn(){
        return $('//*[text() = "Buy"]')
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

    setPropertyType(text){
        return $(`${this.ePropertyTypeList.selector}//*[contains(text(),"${text}")]`).click()
    }

    setRentFrequency(rentFreq){
        return $(`//*[@aria-label = "${rentFreq}"]`).click()
    }

    get eMinValueInput(){
        return $(`//*[@placeholder = "0"]`)
    }

    get eMaxValueInput(){
        return $(`//*[@placeholder = "Any"]`)
    }

    setDropDownListOption(bedOption){
        return $(`//*[@role = "listbox"]//*[@aria-label = "${bedOption}"]`).click()
    }

    get eSortOptionBtn(){
        return $(`//*[@aria-label = "Sort by filter"]`)
    }

    sortBy(sortOption){
        return $(`//*[@role = "listbox"]//*[@value = "${sortOption}"]`)
    }

    get eSaveSearchBtn(){
        return $('//*[@aria-label = "Save search button"]')
    }

    get eGridBtn(){
        return $('//*[@aria-label = "Search results header"]//span[@role = "button"][2]')
    }

    get eCallBtn(){
        return $('//*[@aria-label = "Call"]')
    }

    get eEmailBtn(){
        return $('//*[@aria-label = "Email"]')
    }

    get eAgencylogo(){
        return $('//*[@aria-label = "Listing agency photo"]')
    }

    get eAdBeds(){
        return $('//*[@aria-label = "Beds"]')
    }

    get eAdBaths(){
        return $('//*[@aria-label = "Baths"]')
    }

    get eAdLocation(){
        return $('//*[@aria-label = "Listing location"]')
    }

    get eAdTitle(){
        return $('//*[@aria-label = "Listing title"]')
    }

    get eAdListedCategory(){
        return $('//*[@aria-label = "Listing category"]')
    }

    get eAdListedCurrency(){
        return $('//*[@aria-label = "Listing currency"]')
    }

    get eAdListedPrice(){
        return $('//*[@aria-label = "Listing price"]')
    }

    get eAdListedFrequency(){
        return $('//*[@aria-label = "Listing frequency"]')
    }

    get eAdSurface(){
        return $('//*[@aria-label = "Area"]/span')
    }

    get ePromo(){
        return $('//*[@class = "callToAction"]')
    }

    get eActiveFilters(){
        $('//*[@aria-label = "Active filter label"]')
    }

    get eClearAllFilters(){
        return $('//*[@role = "listbox"]//*[contains(text(), "Reset")]')
    }

    get eNextBtn(){
        return $('//div[@title = "Next"]')
    }

    get eNewPropAlert(){
        return $('//*[@aria-label = "Alert properties button"]')
    }

    get eSearchLinks(){
        return $('//*[@aria-label = "Search links"]')
    }

    get eAboutUs(){
        return $('//*[@title = "ABOUT US"]')
    }

    get eContactUs(){
        return $('//*[@title = "CONTACT US]')
    }

    get eTermsNPrivacyPolicy(){
        return $('//*[@title = "TERMS & PRIVACY POLICY"]')
    }

    get eITunes(){
        return $('//*[@title = "Open ITunes to Download and Install this App"]/div')
    }

    get eGooglePlay(){
        return $('//*[@title = "Open Google Play to Download and Install this App"]/div')
    }

    open(){
        super.open('https://sl:getin1@bayut-development.herokuapp.com/to-rent/property/uae/')
    }
}
export default new SearchPageFilters()