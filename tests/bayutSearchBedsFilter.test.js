import Filters from "./pageobject/bayutSearchFilters.page.js"
import Results from "./pageobject/bayutSearchResults.page.js"
require('mocha-steps')

//
const bedsOption = "Studio";
const desiredLocation = "Al Reem Island"

describe("It should complete the location input, select the 3 beds option and press the 'Find' button", () => {
    step("should complete the location field", () => {
        Filters.open();
        var eLocationInputField = Filters.eLocationInput
        Filters.waitForElementAndClick(eLocationInputField)

        browser.waitUntil(() => {
            return eLocationInputField.setValue(desiredLocation)
        })

        //var searchResSpan = $("//li[@data-selected = 'true']")
        //Filters.waitUntilIsDisplayed(searchResSpan)
        browser.pause(500)

        browser.keys("\uE007")

        Filters.verifyTheLocationInput(desiredLocation)
    });

    step("should set the number of beds", () => {
        //open the beds dropdown
        var eBeds = Filters.eBeds
        Filters.waitForElementAndClick(eBeds)

        //choose the desired number of beds
        Filters.chooseBedOption(bedsOption)

        Filters.verifyTheSelectedNumberOfBeds(bedsOption)
    })

    step("should press the 'Find' button", () => {
        var eFindButton = Filters.eFindBtn
        Filters.waitForElementAndClick(eFindButton)
        Filters.verifyThatFindBtnWasPressed()
    })
})

describe("It should get all the items, and verify if there are only 3 bed apartments", () => {
    step("should get all the items, and verify if there are only 3 bed apartments", () => {
        var counter = 1;
        Filters.waitUntilIsDisplayed(Results.sTotalResults)
        const totalResults = parseInt(Results.nTotalResults)
        const showingResults = parseInt(Results.nShowingResults);

        console.log("total re: ", totalResults)
        const object = {}

        do {
            Results.notificationPopup();
            console.log("page: ", counter); 
            counter++
            const showingResults = parseInt(Results.nShowingResults);

            Results.getThePageItems(object, bedsOption);

            if(totalResults !== showingResults){
                Filters.waitForElementAndClick(Results.eNextPage)
                Filters.waitUntilIsDisplayed(Results.pageItemsLi)
            }

            if(totalResults == showingResults){
                Results.getThePageItems(object, bedsOption);
                break;
            }
        } while (totalResults !== showingResults)

        console.log("obj: " + JSON.stringify(object))

        Results.verifyBedsOption(object, bedsOption)
    })
})