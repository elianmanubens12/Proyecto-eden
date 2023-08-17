/// <reference types="cypress" />

describe("Test de SERVICIOS", () => {
    it("Verificar servicio de Celular Motorola", () => {
      cy.request(
        "GET",
        "https://tienda.claro.com.ar/_next/data/i5erFDIn5zrlPzYMxhxi4/pdp/equipos/moto-g42-128gb.json?color=&index=pdp&index=equipos&index=moto-g42-128gb"
      ).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
      cy.log("el servicio de celular motorola -200");
    });
  });
  it("Verificar servicio de Logo Claro", () => {
    cy.request(
      "GET",
      "https://www.claro.com.ar/static/claro-logo.svg"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de celular motorola paso correctamente");
    cy.log("el servicio es de la pagina de Claro, porque ClaroTienda -200");
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
 it("Verificar servicio de Index TiendaClaro", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/_next/data/i5erFDIn5zrlPzYMxhxi4/index.json"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    cy.log("el servicio de Index de la pagina TiendaClaro -200");
  });
 });

});




