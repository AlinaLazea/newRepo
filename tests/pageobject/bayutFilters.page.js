import Page from "./page.js"

class Filters extends Page{
    get sFindBtn(){ 
        return $("//*[@aria-label = 'Find button']")
    }

    get sLocationInput(){
        return $("//*[@aria-label = 'Location input']")
    }

    get sBeds() {
        return $("//*[text() = 'Beds' or text() = 'عدد الغرف']")
    }

    open() {
        super.open('https://www.bayut.com/');
    }

    submitLocation(){
        this.sFindBtn.click()
    }
}

export default new Filters();