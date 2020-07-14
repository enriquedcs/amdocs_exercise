/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Admin Dashboard webpage
*/

import { Selector, t } from 'testcafe'

class Dropdown {
    constructor() {
        this.dropdown = Selector('li:nth-of-type(11) > a')
        this.dropdown_inside = Selector('#dropdown')
        this.dropdown_option1 = Selector(`select#dropdown > option[value='1']`)
        this.dropdown_option2 = Selector(`select#dropdown > option[value='2']`)
    }

    async goToDropdownOptions1(){
        await t.hover(this.dropdown)
                .click(this.dropdown)
                .click(this.dropdown_inside)
                .click(this.dropdown_option1)
    }
    async goToDropdownOptions2(){
        await t.hover(this.dropdown)
                .click(this.dropdown)
                .click(this.dropdown_inside)
                .click(this.dropdown_option2)
    }
}

export default Dropdown