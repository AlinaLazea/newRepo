
describe("Fetch element(s)", () => {
    it("should...", () => {
        browser.url("https://the-internet.herokuapp.com/")
        
        //get the element $
        //$("heading").getText();
        //$("heading").waitForVisible(); //etc

        const links = $$("a")
        links.forEach(link => console.log(link.getText()))
    })
})