import Filters from "../pageobject/bayutSearchFilters.page.js"
import Results from "../pageobject/bayutSearchResults.page.js"

const bedsOptionArr = ["Studio", 1 , 2, 3, 4, 5, 6 , 7, "8+"]
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
            browser.pause(500)
            browser.keys("\uE007")

            Filters.verifyTheLocationInput(desiredLocation)
        });

        step("should set the number of beds", () => {
            var eBeds = Filters.eBeds

            Filters.waitForElementAndClick(eBeds)
            Filters.setDropDownListOption(bedOption)
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
            console.log("----------------------------------------bed option: ", bedOption)
            
            const adsObj = {}
            if(!Results.errorMessage.isExisting()){
                Results.getAllAds(adsObj, bedOption)
                Results.verifyBedsOption(adsObj, bedOption)
            }
            console.log(adsObj)
        })
    })
})

after(() => {
    const endDate = new Date().getTime()
    const runtime = Results.convertMS(endDate - startDate)
    console.log("run time: ", runtime)
})


