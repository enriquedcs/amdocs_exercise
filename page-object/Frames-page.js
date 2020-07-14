/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class Frames {
    constructor() {
        this.frame = Selector('li:nth-of-type(22) > a')
        this.iframeLink = Selector('li:nth-of-type(2) > a')
        this.iframe = Selector('#mce_0_ifr')
        this.iframeinput = Selector('#tinymce')
    }
    async goToFrames(){
        await t.hover(this.frame)
                .click(this.frame)
        await t.click(this.iframeLink)
        await t.switchToIframe(this.iframe)
                .click(this.iframeinput)
                .selectText(this.iframeinput)
                .pressKey('delete')
                .typeText(this.iframeinput, 'This text is from automation script', {paste:true})
                .pressKey('enter')


    }

}

export default Frames