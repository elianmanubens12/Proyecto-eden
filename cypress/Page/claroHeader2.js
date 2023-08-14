class claroHeader2 {
    getMenuButtons() {
      return cy.get("#main_menu_tienda.MenuTienda_nav__jOsM2");
    }
  
    getImgLogo() {
      return cy.get("#header-logo");
    }
  }
  
  export default new claroHeader2();