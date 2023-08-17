import ClaroHeader2 from "../../Page/claro/claroHeader2";
const { default: claroHeader } = require("../../Page/claro/claroHeader");
const claroHeader2 = require("../../Page/claro/claroHeader2");

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


  
  it.only("Verificar pagina de celulares", () => {
    cy.visit("https://tienda.claro.com.ar/");
    cy.viewport(1200,900)
    const newUrl = "https://tienda.claro.com.ar/plp/equipos";
    claroHeader2.getMenuButtons().contains("Celulares").click();
    cy.url().should("eq", newUrl);
    cy.url().should("include", "/plp/equipos");
    cy.log("La pagina de Celulares - 200")
  });
});
