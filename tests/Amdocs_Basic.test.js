/*
Author: Enrique Decoss

@package: tests
All test for Exercise
*/

import LoginAction from '../page-object/Login-BasicAuth-page'
import Checboxes from '../page-object/Checkboxes-page'
import Context from '../page-object/Context-menu-page'
import Dropdown from "../page-object/Dropdown-page"
import FileUpload from "../page-object/File-upload-page"
import Frames from "../page-object/Frames-page"
import config from './config'

const loginAction = new LoginAction()
const checkBox = new Checboxes()
const context = new Context()
const dropdown = new Dropdown()
const fileupload = new FileUpload()
const frames = new Frames()

fixture`Tests`
.page`${config.baseUrl}`

test("Should validate Basic Auth", async t => {
    await t.navigateTo(`${config.BaseAuthUrl}`)
    await loginAction.loginsucess()
    //Assertions
})
test("Should validate Checkboxes", async t => {
    await checkBox.goToCheckbox1()
    await t.navigateTo(`${config.baseUrl}`)
    await checkBox.goToCheckbox2()
    //Assertions
})
test("Should validate Context Menu", async t => {
    await context.goToContext()
    //Assertions
})
test("Should validate Dropdown Option 1", async t => {
    await dropdown.goToDropdownOptions1()
    //Assertions
    await t.expect(dropdown.dropdown_option1.exists).ok()
})
test("Should validate Dropdown Option 2", async t => {
    await dropdown.goToDropdownOptions2()
    //Assertions
    await t.expect(dropdown.dropdown_option2.exists).ok()
})
test("Should validate File Upload", async t => {
    await fileupload.goToFileUpload()
    //Assertions
    await t.expect(fileupload.fileuploaded.exists).ok()
})
test("Should validate Frames", async t => {
    await frames.goToFrames()
    //Assertions
    await t.expect(frames.iframeinput.exists).ok()
})



