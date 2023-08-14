const claroHeader2 = require("../../Page/claroHeader2");

//esta comentado porq estoy probando

describe("Test sobre la página de Claro Tienda", () => {
    beforeEach(() => {
      cy.visit("https://tienda.claro.com.ar/");
    });
    
it("Verificar Menu", { tags: "@regresion" }, () => {
    cy.visit("https://tienda.claro.com.ar/");

    const menuBtn = [
      "Inicio",
      "Celulares",
      "Accesorios",
      "Ayuda",
    
    ];

    claroHeader2.getMenuButtons().each((button, inx) => {
      cy.wrap(button).should("contain.text", menuBtn[inx]);
    });
  });

  it("Verificar pagina de Accesorios", () => {
    cy.visit("https://tienda.claro.com.ar/");
    claroHeader2.getMenuButtons().eq(0).click();
  });


  it.skip("Hacer clic pagina de Accesorios", () => {
    cy.visit("https://tienda.claro.com.ar/");
    const newUrl = `${Cypress.config().baseUrl}/plp/accesorios`;
    claroHeader2.getMenuButtons().contains("Accesorios").click();
    cy.url().should("eq", newUrl);
    cy.url().should("include", "/plp/accesorios");
  });


});


