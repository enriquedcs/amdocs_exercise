/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Admin Dashboard webpage
*/

import { Selector, t } from 'testcafe'

class Checboxes {
    constructor() {
        this.checkBoxes = Selector('li:nth-of-type(6) > a')
        this.checkBox1 = Selector(`#checkboxes [type='checkbox']:nth-of-type(1)`)
        this.checkBox2 = Selector(`#checkboxes [type='checkbox']:nth-of-type(2)`)
    }

    async goToCheckbox1(){
        await t.hover(this.checkBoxes)
                .click(this.checkBoxes)
        await t.hover(this.checkBox1)
                .click(this.checkBox1)
                .expect(this.checkBox1.checked).ok()
    }
    async goToCheckbox2(){
        await t.hover(this.checkBoxes)
                .click(this.checkBoxes)
        await t.hover(this.checkBox1)
                .expect(this.checkBox2.checked).ok()
    }
}

export default Checboxes