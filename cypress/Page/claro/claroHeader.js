/// <reference types="cypress" />

class claroHeaderLocators {
    constructor() {
      this.menuButtons = "#main_menu_tienda.MenuTienda_nav__jOsM2";
      //this.imgLogo = "#header-logo";
      this.searchInput = ".MenuTienda_btn_search_mobile__rUb9O > .MuiSvgIcon-fontSizeMedium.MuiSvgIcon-root.css-vubbuv";
      //this.searchSuggestion = "li.ui-menu-item";
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