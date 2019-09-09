import Page from "./page.js"

class Results extends Page{
    get sTotalResults(){
        return $("//*[@aria-label = 'Summary text']")
    }

    get nTotalResults(){
        if(!this.errorMessage.isExisting()){
            return parseInt($("//*[@aria-label = 'Summary text']").getText().toString().split("of ")[1].split(" Prop")[0]);
        }
    }

    get errorMessage(){
        return $("//*[@aria-label = 'Error message']")
    }

    
    getThePageItems(resultsObj){
        const pageItems = $("//*[@aria-label = 'Search results header']/following-sibling::ul").$$("li");
        console.log("items/ page: ", pageItems.length)
        var itemName, itemBeds;
        for (var index = 0; index < pageItems.length; index++) {
            //console.log(pageItems[index].getAttribute('role'))
            if (pageItems[index].getAttribute('role') === "article") {
                var newIndex = index+ 1
                var itemName = $("//*[@aria-label = 'Search results header']/following-sibling::ul/child::li["+ newIndex + "]/child::article/child::div[3]/child::div[3]//*[@aria-label = 'Listing location']").getText()

                var itemBeds = $("//*[@aria-label = 'Search results header']/following-sibling::ul/child::li["+ newIndex + "]/child::article/child::div[3]/child::div[3]/child::div[3]/div/span[1]//*[@aria-label = 'Beds']").getText()
                
                resultsObj[itemName] = itemBeds;
            }
        }
        //console.log("items/ page obj: ", JSON.stringify(oPageItems))
    }

    get eNextPage(){
        return $("//div[@title = 'Next']")
    }

    only3BedsProperties(resultsObject){
        var errorsArray = []

        for(var key in resultsObject){
            if(parseInt(resultsObject[key]) !== 3){
                errorArray.push(key)
            }
        }
        errorsArray.length !== 0 ? new Error("Apartments with more/less than 3 beds: " , errorArray) : console.log("Only 3 beds apartments available!")
    }
























}
export default new Results();