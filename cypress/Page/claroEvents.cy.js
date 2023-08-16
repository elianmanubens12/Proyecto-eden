/// <reference types="cypress" />

class claroEventLocators {
    constructor() {
      this.eventTitle = "Celulares";
    }
  }
  
  export default class claroEvent {
    constructor() {
      this.locators = new claroEventLocators();
    }
  
    getEventTitle() {
      return cy.get(this.locators.eventTitle).first();
    }
  }