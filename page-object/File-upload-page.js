/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class FileUpload {
    constructor() {
        this.fileUpload = Selector('li:nth-of-type(18) > a')
        this.fileuploaded = Selector('#uploaded-files')
        this.upload = Selector('input#file-submit')
    }
    async goToFileUpload(){
        await t.hover(this.fileUpload)
                .click(this.fileUpload)
        await t.setFilesToUpload(Selector('input[type="file"]'), [
                    './qa_icon.png'
                ])
        await t.click(this.upload)
    }

}

export default FileUpload