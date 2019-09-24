import Page from "./page.js"


class Slider extends Page{
    get eTotalPriceInput(){
        return $('//*[text() = "Total Price"]//following::input[1]')
    }

    get eTotalPriceButton(){
        return $('//*[text() = "Total Price"]//following::button[1]')
    }

    get sTotalPriceValue(){
        return this.eTotalPriceInput.getValue()
    }

    get sTotalPriceSliderWidth(){
        return this.eTotalPriceButton.getAttribute("style").match(/\d+/g)[0]
    }

    get sTotalPriceSliderValue(){
        return this.eTotalPriceButton.getAttribute("aria-valuenow")
    }

    get eLoanPeriodInput(){
        return $('//*[text() = "Loan Period"]//following::input[1]')
    }

    get eLoanPeriodButton(){
        return $('//*[text() = "Loan Period"]//following::button[1]')
    }

    get sLoanPeriodValue(){
        return this.eLoanPeriodInput.getValue()
    }

    get eDownPaymentInput(){
        return $('//*[text() = "Down Payment"]//following::input[1]')
    }

    get eDownPaymentButton(){
        return $('//*[text() = "Down Payment"]//following::button[1]')
    }

    get sDownPaymentValue(){
        return this.eDownPaymentInput.getValue()
    }

    get sDownPaymentPercentValue(){
        return $('//*[text() = "Down Payment"]//following::input[2]').getValue()
    }

    get eInterestRateInput(){
        return $('//*[text() = "Interest Rate"]//following::input[1]')
    }

    get eInterestRateButton(){
        return $('//*[text() = "Interest Rate"]//following::button[1]')
    }

    get sInterestRateValue(){
        return this.eInterestRateInput.getValue()
    }

    get sPerMonthAEDValue(){
        return $$('//*[text()= "AED"]//following-sibling::span[1]')[1].getText()
    }

    get sTotalLoanAEDAmount(){
        return $$('//*[text()= "AED"]//following-sibling::span[1]')[2].getText()
    }

    get sPaymentBreakdownWidth(){
        return $('//*[text() = "Payment Breakdown"]//following::span[1]').getAttribute("style").match(/\d+/g)[0]
    }

    setValue(elementInput, value){
        elementInput.setValue(value)
        $('//*[text() = "Payment Breakdown"]').click()
    }

    clearInput(element){
        var length = element.getValue().length
        element.click()
        for(var i=0; i < length+1; i++){
            browser.keys("Backspace")
        }
    }

    

















    open(){
        super.open("https://sl:getin1@bayut-development.herokuapp.com/property/details-4201508.html")
    }
}
export default new Slider()
