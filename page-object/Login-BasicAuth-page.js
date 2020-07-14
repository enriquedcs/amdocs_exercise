/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class LoginAction {
    constructor() {
        this.loginsucess = Selector('p')
    }
    async login(){
        await t.expect(this.loginsucess.innerText).eql('Congratulations! You must have the proper credentials.')

    }

}

export default LoginAction