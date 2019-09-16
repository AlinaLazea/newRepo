import Page from "./page.js"
import Assert from 'assert';

class Results extends Page{
    get sTotalResults(){
        if(!this.errorMessage.isExisting()){
            this.waitUntilIsDisplayed($("//*[@aria-label = 'Summary text']"))
            return $("//*[@aria-label = 'Summary text']")
        }else return undefined;
    }

    get nTotalResults(){
        return parseInt($(`${this.sTotalResults.selector}`).getText().toString().split("of ")[1].split(" Prop")[0]);
    }

    get nShowingResults(){
        return parseInt($(`${this.sTotalResults.selector}`).getText().toString().split(" - ")[1].split(" of")[0]);
    }

    get errorMessage(){
        return $("//*[@aria-label = 'Error message']")
    }

    get pageItemsLi(){
        return $("//*[@aria-label = 'Search results header']");
    }

    get eAdBeds(){
        return $('//*[@aria-label = "Beds"]')
    }

    get eAdStudio(){
        return $('//*[@aria-label = "Studio"]')
    }

    get ad(){
        return $("//*[@role = 'article']")
    }

    get adTitle(){
        return $("//*[@aria-label='Listing title']")
    }

    get allAds(){
        return $('//*[@aria-label = "Search results header"]//following-sibling::ul').$$("article")
    }

    get eNextPage(){
        return $("//div[@title = 'Next']")
    }

    getAllAds(resultsObj, bedOption){
        var studioOpt;
        bedOption == "Studio" ? studioOpt = true : studioOpt = false;
        var pageCounter = 0
        var totalResults = this.nTotalResults;

        if(!this.errorMessage.isExisting()){
            do {
                pageCounter++
                console.log("Page: ", pageCounter)
                
                this.waitUntilIsDisplayed(this.pageItemsLi)
                this.getAds(resultsObj, studioOpt)
    
                if(totalResults !== this.nShowingResults){
                    this.notificationPopup()
                    this.waitForElementAndClick(this.eNextPage)
                }
    
                if(totalResults == this.nShowingResults){
                    this.getAds(resultsObj, studioOpt)
                    console.log("showingResults: ", this.nShowingResults, "   |   totalResults: ", totalResults, "   Page: ", pageCounter)
                }
            } while (totalResults !== this.nShowingResults);
        }
    }

    getTheAdTitle(index){
        var adTitle = $(`${this.ad.selector}[${index}]${this.adTitle.selector}`)
        if(adTitle.isExisting()){
            return adTitle.getText()
        }
    }

    getTheAdBeds(index, studio){
        var bedOpt;
        studio ? bedOpt = this.eAdStudio.selector : bedOpt = this.eAdBeds.selector;

        var adBeds = $(`${this.ad.selector}[${index}]${bedOpt}`)
        if(adBeds.isExisting()){
            return adBeds.getText()
        }
    }

    getAds(resultsObj, studio){
        var adName, bedsOption;
        for(var i=1; i< this.allAds.length + 1; i++){
            adName = this.getTheAdTitle(i);
            bedsOption = this.getTheAdBeds(i, studio)

            resultsObj[adName] = bedsOption
        }
    }

    notificationPopup(){
        const maybeLaterBtn = $("//*[text() = 'Maybe Later']")
        if(maybeLaterBtn.isExisting()){
            maybeLaterBtn.click()
        }
    }

    verifyBedsOption(resultsObject, bedsOpt){
        var errorsArray = []
        var result;

        for(var key in resultsObject){
            if(resultsObject[key].toString() !== bedsOpt.toString()){
                errorsArray.push(key)
            }
        }
        errorsArray.length !== 0 ? result = false : result = true;
        
        var errorMsg = "Apartments with invalid number of beds (expected: "+ bedsOpt +"): " + JSON.stringify(errorsArray)
        Assert(result, errorMsg)
    }

    waitForElementAndClick(element){
        this.waitUntilIsDisplayed(element);
        element.click()
    }

    waitUntilIsDisplayed(element){
        super.waitUntilIsDisplayed(element)
    }

    convertMS( milliseconds ) {
        var day, hour, minute, seconds;
        seconds = Math.floor(milliseconds / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;
        return {
            day: day,
            hour: hour,
            minute: minute,
            seconds: seconds
        };
    }
}
export default new Results();