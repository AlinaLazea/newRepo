export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }
   
    waitUntilIsDisplayed(element){  
        browser.waitUntil(() => {
            return browser.waitForExist(element.selector, 10000, false)
        })
    }
}