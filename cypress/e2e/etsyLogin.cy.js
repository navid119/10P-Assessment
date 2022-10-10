/// <reference types="cypress" />
import Login from "./PageObject/etsyLogin";

const etLogin = new Login();
const Users = require('../fixtures/etsyUsers.json')
describe("Etsy multiple users login", function () {
    beforeEach(() => {
        cy.visit('https://etsy.com');        
    });
    Users.forEach(user => {
        it(user.userNumber,() => {
            etLogin.loginButton().click();
            etLogin.emailField().clear().type(user.username);
            etLogin.passField().clear().type(user.password);
            etLogin.signinButton();
            cy.wait(4000);
            cy.get('.welcome-message-text').should('contain.text', user.expectedString);        
            etLogin.userMenu();
            etLogin.signOut();
        });       
    });
        
});   
        
    

   

