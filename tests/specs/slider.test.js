import Slider from "../pageobject/slider.page.js"

beforeEach(() => {
    Slider.open()    
})


describe("should log the value of the elements", () => {
    step("should log the value", () => {

        var elem = $('//*[text() = "Payment Breakdown"]//following::span[1]').getAttribute("style").match(/\d+/g)[0]


/*         for(var i=0; i<elem.length; i++){
            console.log(elem[i].getText())
        } */
/*         Slider.clearInput(Slider.eTotalPriceInput)
        browser.pause(3000)
        Slider.setValue(Slider.eTotalPriceInput, 1000000) */
        console.log(Slider.eTotalPriceButton.getAttribute("style").match(/\d+/g))
        //browser.pause(10000)
    })
})