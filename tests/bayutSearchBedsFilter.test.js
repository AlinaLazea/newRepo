import Filters from "./pageobject/bayutSearchFilters.page.js"
import Results from "./pageobject/bayutSearchResults.page.js"
require('mocha-steps')

//
const bedsOptionArr = ["Studio", 1, 2, 3, 4, 5, 6, 7, "8+"]
const desiredLocation = "Dubai Marina"
const startDate = new Date().getTime()

bedsOptionArr.forEach(bedOption => {
    describe("It should complete the location input, set the beds option to: " + bedOption + " and press the 'Find' button", () => {
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
            Filters.chooseBedOption(bedOption)

            Filters.verifyTheSelectedNumberOfBeds(bedOption)
        })

        step("should press the 'Find' button", () => {
            var eFindButton = Filters.eFindBtn
            Filters.waitForElementAndClick(eFindButton)
            Filters.verifyThatFindBtnWasPressed()
        })
    })

    describe("It should get all the items, and verify if there are only " + bedOption + " bed apartments", () => {
        step("should get all the items, and verify if there are only " + bedOption + " bed apartments", () => {
            if (Results.sTotalResults !== undefined) {
                var counter = 1;
                Filters.waitUntilIsDisplayed(Results.sTotalResults)
                const totalResults = parseInt(Results.nTotalResults)
                const showingResults = parseInt(Results.nShowingResults);

                console.log("total res: ", totalResults)
                const object = {}

                do {
                    Results.notificationPopup();
                    console.log("page: ", counter);
                    counter++
                    const showingResults = parseInt(Results.nShowingResults);

                    Results.getThePageItems(object, bedOption);

                    if (totalResults !== showingResults) {
                        Filters.waitForElementAndClick(Results.eNextPage)
                        Filters.waitUntilIsDisplayed(Results.pageItemsLi)
                    }

                    if (totalResults == showingResults) {
                        Results.getThePageItems(object, bedOption);
                        break;
                    }
                } while (totalResults !== showingResults)

                console.log("obj: " + JSON.stringify(object))

                Results.verifyBedsOption(object, bedOption)
            } else console.log("0 results")
        })
    })
});

after(() => {
    const endDate = new Date().getTime()
    const runtime = Results.convertMS(endDate - startDate)
    console.log("run time: ", runtime)
})


