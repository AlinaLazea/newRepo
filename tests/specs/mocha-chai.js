//import assert from "assert";
import {expect} from "chai";


describe("Test home page", function(){   
    before(() => {
        //create new users
    })
    
    beforeEach(() => {
        browser.url("https://webdriver.io")
        console.log("beforeEach")
    })

    after(() =>{
        console.log("after all")
    })

    afterEach(() => {
        console.log("after each")
    }) 

    it("should get the correct page title", () => {
        const title = browser.getTitle();
        expect(title).to.equal("WebdriverIO · Next-gen WebDriver test framework for Node.js")
        expect($(".projectTitle").isVisible(), "projectTitle is not displayed").to.equal(false)
    })
    xit("get website text", () => { // pending
        const title = $(".projectTitle").getText()
        assert.equal(title, "WEBDRIVER I/O");
    })
})