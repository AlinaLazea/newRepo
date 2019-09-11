import Page from "./page.js"
import Assert from 'assert';

class Results extends Page{
    get sTotalResults(){
        if(!this.errorMessage.isExisting()){
            return $("//*[@aria-label = 'Summary text']")
        }else return undefined;
    }

    get nTotalResults(){
        if(!this.errorMessage.isExisting()){
            return parseInt($("//span[@aria-label = 'Summary text']").getText().toString().split("of ")[1].split(" Prop")[0]);
        }
    }

    get nShowingResults(){
        if(!this.errorMessage.isExisting()){
            return parseInt($("//span[@aria-label = 'Summary text']").getText().toString().split(" - ")[1].split(" of")[0]);
        }
    }

    get errorMessage(){
        return $("//*[@aria-label = 'Error message']")
    }

    get pageItemsLi(){
        return $("//*[@aria-label = 'Search results header']");
    }
    
    getThePageItems(resultsObj, bedsOpt){
        const pageItems = $("//*[@aria-label = 'Search results header']/following-sibling::ul").$$("li");
        //console.log("items/ page: ", pageItems.length)
        var itemName, itemBeds;
        for (var index = 0; index < pageItems.length; index++) {
            //console.log(pageItems[index].getAttribute('role'))
            if (pageItems[index].getAttribute('role') === "article") {
                var newIndex = index+ 1
                //this.waitUntilIsDisplayed(pageItems)

                itemName = $("//*[@aria-label = 'Search results header']/following-sibling::ul/child::li["+ newIndex + "]/child::article/child::div[3]/child::div[3]//*[@aria-label = 'Listing title']").getText()
                bedsOpt == "Studio" ? itemBeds = $("//*[@aria-label = 'Search results header']/following-sibling::ul/child::li["+ newIndex + "]/child::article/child::div[3]/child::div[3]/child::div[3]/div/span[1]//*[@aria-label = 'Studio']").getText() : itemBeds = $("//*[@aria-label = 'Search results header']/following-sibling::ul/child::li["+ newIndex + "]/child::article/child::div[3]/child::div[3]/child::div[3]/div/span[1]//*[@aria-label = 'Beds']").getText()
                
                resultsObj[itemName] = itemBeds;
            }
        }
        //console.log("items/ page obj: ", JSON.stringify(oPageItems))
    }

    get eNextPage(){
        return $("//div[@title = 'Next']")
    }

    notificationPopup(){
        const maybeLaterBtn = $("//button[text() = 'Maybe Later']")

        if(maybeLaterBtn.isExisting()){
            maybeLaterBtn.click()
        }
        //maybeLaterBtn.isExisting() ? maybeLaterBtn.click() : console.log("The notification popup is not displayed!")
    }

    verifyBedsOption(resultsObject, bedsOpt){
        var errorsArray = []
        var result

        for(var key in resultsObject){
            if(resultsObject[key].toString() !== bedsOpt.toString()){
                errorsArray.push(key)
            }
        }
        errorsArray.length !== 0 ? result = false : result = true;
        
        var errorMsg = "Apartments with invalid number of beds (expected: "+ bedsOpt +"): " + JSON.stringify(errorsArray)
        Assert(result, errorMsg)

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