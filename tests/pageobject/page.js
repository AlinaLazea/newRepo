export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }

    convertSelectorToElement(element) {
        if (typeof element === 'string') {
            browser.waitForVisible(element);
            element = $(element);
        }
        return element;
    }
   

    waitUntilIsDisplayed(element){
        //const elem  = $(element)
        
        browser.waitUntil(() => {
            return browser.waitForExist(element.selector, 10000, false)
        })
        
        
        
        //element.waitForDisplayed()
        //element = this.convertSelectorToElement(element);

/*         element = this.convertSelectorToElement(element);
        element.waitForVisible(browser.options.waitForElements); */



/*         element = this.convertSelectorToElement(element);
        browser.waitForVisible(element) */
/*         var elem = browser.element(element);
        elem.waitForExist(10000); */

/*         element = $(element)
        console.log("type of element: " + typeof(element)) */
        //element.waitForVisible(browser.options.waitForElements);
/*          browser.waitUntil(() => {
            return JSON.stringify(element).isVisible()
        }, 10000, "The element: " + element + " is not displayed!")   */

/*       browser.waitUntil(function() {
            return doesNotExist.$$(element).isVisible() 
              && browser.$$(element).isVisible()
          }) */
    }
}