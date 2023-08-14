/// <reference types="cypress" />

describe("Test de SERVICIOS", () => {
    it("Verificar servicio Inicio - 200", () => {
      cy.request(
        "GET",
        "https://tienda.claro.com.ar/_next/data/i5erFDIn5zrlPzYMxhxi4/pdp/equipos/moto-g42-128gb.json?color=&index=pdp&index=equipos&index=moto-g42-128gb"
      ).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
      cy.log("el servicio de celular motorola paso correctamente");
    });
    });
});
