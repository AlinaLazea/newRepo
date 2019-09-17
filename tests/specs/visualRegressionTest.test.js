import HomePage from "../visualPageObjects/homePage.page.js"

beforeEach(() => {
    HomePage.open()    
})

describe("Home Page", () => {
    it("should display the bayut logo", () => {
        HomePage.verifyElement(HomePage.bayutLogo)
    });

    it("should display the navigation bar", () => {
        HomePage.verifyElement(HomePage.navigationBar)
    })

    it("should display the home title", () => {
        HomePage.verifyElement(HomePage.homeTitle)
    })

    it("should display the search form", () => {
        HomePage.verifyElement(HomePage.searchForm)
    })

    it("should display the rent and sale options", () => {
        HomePage.verifyElement(HomePage.rentSaleOption)
    })

    it("should display the footer", () => {
        HomePage.verifyElement(HomePage.footer)
    })
})