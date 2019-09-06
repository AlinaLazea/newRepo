// login.page.js
import Page from "./page.js"

class LoginPage extends Page {
    get username() { return $('//*[@type="text" and @name="username"]'); }
    get password() { return $('//*[@type="password" and @name="password"]'); }
    get submitBtn() { return $('//*[@class ="radius" and @type="submit"]'); }
    get flash() { return $('#flash'); }
    get headerLinks() { return $$('#header a'); }

    open() {
        super.open('http://the-internet.herokuapp.com/login');
    }

    submit() {
        this.submitBtn.click();
    }

}

export default new LoginPage();