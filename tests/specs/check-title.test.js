import assert from "assert";

describe("Test home page", () => {
    it("should get the correct page title", () => {
        browser.url("https://www.google.com");
        const title = browser.getTitle();

        assert.equal(title, "Google")
        browser.pause(10)
    })
})