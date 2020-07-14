/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Goop Search webpage
*/

import { Selector, t } from 'testcafe'

class SearchGoop {
    constructor() {
        //SearchBar    
        this.searchBar = Selector('.SearchBar')
        this.searchDropdown = Selector('.SearchBar-dropdownButton')
        this.saveSearch = Selector('.SearchBar-saveSearchButton')
        this.searchButton =  Selector('.SearchBar-searchButton')
        this.saveSearchInput = Selector('.is-paddedRight')
        this.saveButton = Selector('.is-normal')
        this.cancelButton = Selector('.is-cancel')
        this.itemCount = Selector('.PageBar-info div')
        this.savedSearch = Selector('#SearchFiltersDropdown-saved_search .SVGInline-svg')
        this.lastSavedSearch = Selector('.open li:nth-last-child(1)')
        this.deleteButton = Selector('.DropdownPanel-buttons .SVGInline')
        this.startDate = Selector('#SearchFiltersDropdown-uploaded-start-date-id')
        this.endDate = Selector('#SearchFiltersDropdown-uploaded-end-date-id')
        this.todayBtn = Selector('.is-normal:nth-child(1)')
        this.yesterdayBtn = Selector('.Button:nth-child(2)')
        this.last7Btn = Selector('.is-normal:nth-child(3)')
        this.last30Btn = Selector('.is-normal:nth-child(4)')
        this.monthBtn = Selector('.Button:nth-child(5)')
        //Assertions Date Picker
        this.todayAssert = Selector('is-selected:nth-child(1)')
        this.last7Assert = Selector('.is-selected:nth-child(3)')
        this.last30Assert = Selector('.is-selected:nth-child(4)')
        //Sort
        //.SortDropdown-arrowIcon-svg
        this.sortIconDown = Selector(`[aria-label='arrowDown']`)
        this.sortIconUp = Selector(`[aria-label='arrowUp']`)
        this.sortDropdown = Selector('#SortDropdown')
        //Asset View
        this.assetViewIcon = Selector('a:nth-child(1) > .SideNav-link .SVGInline-svg')
        this.oneSelection = Selector('.AssetCard:nth-of-type(1) .AssetCard-wrapper')
        this.galleryViewIcon = Selector('.GalleryViewer-controls-icon')
        this.galleryViewPrev = Selector('.GalleryViewer-previous')
        this.galleryViewNext = Selector('.GalleryViewer-next')
        //Videos
        this.videoBtn = Selector(`[aria-label='play']`)
        this.sceneCuts = Selector('.TimelineEvent-label')
        //Assert Regular User
        this.noResults = Selector('.Error-Header')


    }

    async goToSearch(search){
        await t.hover(this.searchBar)
                .click(this.searchBar)
                .typeText(this.searchBar, search, {paste:true})
                .pressKey('enter')

    }

    async goToSort(){
        await t.hover(this.sortIconUp)
                .click(this.sortIconUp)
    }

    async goToSaveSearch(search2){
        await t.hover(this.searchBar)
                .click(this.searchBar)
                .typeText(this.searchBar, search2, {paste:true})
                .pressKey('enter')
        await t.hover(this.searchDropdown)
                .click(this.searchDropdown)
        await t.click(this.saveSearch)
        await t.typeText(this.saveSearchInput, 'XAutomated-Search', {paste:true})
                .click(this.saveButton)
    }

    async deleteSavedSearch(){
        await t.hover(this.searchDropdown)
                .click(this.searchDropdown)
        await t.click(this.savedSearch)
        await t.hover(this.lastSavedSearch)
                .click(this.lastSavedSearch)
                .click(this.deleteButton)
    }

    async goToGalleryView(){
        await t.hover(this.oneSelection)
                .click(this.oneSelection)
        await t.hover(this.galleryViewIcon)
                .click(this.galleryViewIcon)
    }

    async goToDatePicker(search, varName){
        await t.hover(this.searchBar)
                .click(this.searchBar)
                .typeText(this.searchBar, search, {paste:true})
                .hover(this.searchDropdown)
                .click(this.searchDropdown)
                .click(this.startDate)

        switch(varName)
                {
                        case 'today':
                                await t.click(this.todayBtn)
                                        .click(this.startDate)
                                        break
                        case 'last7':
                                await t.click(this.last7Btn)
                                        .click(this.startDate)
                                        break
                        case 'last30':
                                await t.click(this.last30Btn)
                                        .click(this.startDate)
                                        break
                }
    }
    async goToSearchVisual(){
        await t.hover(this.searchDropdown)
                .click(this.searchDropdown)
    }
}

export default SearchGoop