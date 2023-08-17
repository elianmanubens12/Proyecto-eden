/// <reference types="cypress" />

describe("Test de SERVICIOS", () => {
  it("Verificar servicio Celular Motorola - 200", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/pdp/equipos/moto-e22-32gb?color=negro"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
      cy.log("el servivio de celular motorola - 200")
    });
  });
  it("Verificar servicio de Logo Claro", () => {
    cy.request(
      "GET",
      "https://www.claro.com.ar/static/claro-logo.svg"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de logo paso correctamente");
  });
 });

 it("Verificar servicio de Asistencia de Claro", () => {
    cy.request(
      "GET",
      "https://asistencia.claro.com.ar/_next/static/media/AMX-Bold.cf298dface9f9ec844734a88c2c1d8f3.woff2"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de asistencia de la pagina de claro -200");
  });
 });
 it("Verificar servicio de Index MiClaro", () => {
    cy.request(
      "GET",
      "https://m-miclaro.claro.com.ar/static/index.css?v=0.34.0"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de Index de la pagina MiClaro - 200");
  });
 });

 it("Verificar servicio de Lanzamiento de Moto razr 40 Ultra 5g", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/lanzamiento-motorola-razr-40-y-40-ultra"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de lanzamiento del dispositivo Motorola -200");
  });
 });
 it("Verificar servicio de Catalogo TiendaClaro", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/plp/catalogo"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de catalogo -200");
  });
});

});