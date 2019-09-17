import assert from 'assert';
import Page from '../pageobject/page';

class HomePage extends Page{
    get bayutLogo(){
        return '//*[@title="Bayut.com UAE Property Portal"]'
    }

    get navigationBar(){
        return '//*[@aria-label="Navigation bar"]'
    }

    get homeTitle(){
        return '//*[@aria-label="Home Title"]'
    }

    get searchForm(){
        return '//*[@aria-label="Mini form"]'
    }

    get rentSaleOption(){
        return '//*[@aria-label="Mini search form"]/div[1]'
    }

    get footer(){
        return '//*[@aria-label="Footer"]'
    }

    diff(results) {
        results.forEach((result) => assert.ok(result.isExactSameImage, "Image isn't the same"));
    }

    verifyElement(elem){
        let report = browser.checkElement(elem)
        console.log(report)
        this.diff(report)
    }

    open(){
        super.open('https://sl:getin1@bayut-development.herokuapp.com')
    }













}
export default new HomePage()