//import assert from "assert";
import {expect} from "chai";


describe("Test home page", function(){
    //this.retries(2)
    
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
        expect(title).to.equal("WebdriverIO · Next-gen WebDriver test framework for Node.js") //to.not etc
        //expect([2,5,6]).to.include(5)
        //expect($(".projectTitle").isVisible()).to.equal(true)
        expect($(".projectTitle").isVisible(), "projectTitle is not displayed").to.equal(false)
    })
/* 
    it("should get the correct page title", () => {
        const title = browser.getTitle();
        console.log("retries")
        assert.equal(title, "WebdverIO · Next-gen WebDriver test framework for Node.js")
        browser.pause(10)
    }) */

    xit("get website text", () => { // pending or skiped
        const title = $(".projectTitle").getText()
        assert.equal(title, "WEBDRIVER I/O");
    })
})