class claroHeader2 {
    getMenuButtons() {
      return cy.get("[data-test='mt-link']");
    }
  
    /*getImgLogo() {
      return cy.get("#header-logo");
    }*/
  }
  
  export default new claroHeader2();

  