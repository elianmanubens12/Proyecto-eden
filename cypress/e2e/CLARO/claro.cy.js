/// <reference types="cypress" />

const { default: claroHeader } = require("../../Page/claroHeader");

it("Verificar Menu", { tags: "@regression" }, () => {
    const menuBtn = [
      "Inicio",
      "Celulares",
      "Accesorios",
      "Ayuda",
      
    ];
    claroHeader.getMenuButtons().each((button, inx) => {
      cy.wrap(button).should("contain.text", menuBtn[inx]);
    });
  });
