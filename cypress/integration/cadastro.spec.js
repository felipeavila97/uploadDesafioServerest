/// <reference types="cypress" />

import Cadastro from "../support/Cadastro";

const faker = require('faker');

describe("Cadastro", () => {
    it("Realizar cadastro COM sucesso.", () => {           
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro("Fulano Borges", faker.internet.email(), "teste"); 
    });
    
    it("Listar Produto.", () => {
        cy.get("#root > div > div > div.container-fluid > div > section > div:nth-child(7) > div > div > a:nth-child(3) > button").click();
    });
    
    it("Validar Produto.", () => {
        cy.contains('Produto:Where Angels Fear to Tread').should('be.visible'); 
    });
 });

