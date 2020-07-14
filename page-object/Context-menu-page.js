/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Admin Dashboard webpage
*/

import { Selector, t } from 'testcafe'

class Context {
    constructor() {
        this.context = Selector('li:nth-of-type(7) > a')
        this.context_box = Selector(`[oncontextmenu]`)
    }

    async goToContext(){
        await t.hover(this.context)
                .click(this.context)
                .setNativeDialogHandler(() => true)
                .rightClick(this.context_box)
    }
}

export default Context