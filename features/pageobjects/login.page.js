import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get loginButton() { 
        return $('#login-button'); 
    }
    get errorMessage() { 
        return $('[data-test="error"]'); 
    }  

    async open() {
        return super.open('/');
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }    
    
}

export default new LoginPage();
