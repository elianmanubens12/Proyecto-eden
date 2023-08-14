/// <reference types="cypress" />

class claroHeaderLocators {
    constructor() {
      this.menuButtons = "#navbar a";
      this.imgLogo = "#header-logo";
      this.searchInput = "#espectaculoList";
      this.searchSuggestion = "li.ui-menu-item";
    }
  }
  
  export default class claroHeader {
    constructor() {
      this.locators = new claroHeaderLocators();
    }
  
    getMenuButtons() {
      return cy.get(this.locators.menuButtons);
    }
  
    getImgLogo() {
      return cy.get(this.locators.imgLogo);
    }
  
    getSearchInput() {
      return cy.get(this.locators.searchInput);
    }
  
    getSearchSuggestion() {
      return cy.get(this.locators.searchSuggestion);
    }
  }