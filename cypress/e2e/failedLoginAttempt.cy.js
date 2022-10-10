/// <reference types="cypress" />
import Login from "./PageObject/etsyLogin";
describe("Test for failed login", function () {
    beforeEach(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
            cy.visit(this.testdata.adminUrl)
        })    
})
    it("Test for invalid email", function () {
        
        const etLogin = new Login();    
        etLogin.loginButton().click();
        etLogin.emailField().clear().type(this.testdata.invalidUser);
        etLogin.passField().clear().type(this.testdata.invalidPass);
        etLogin.signinButton();
        cy.wait(2000);
        etLogin.invalidEmailError().should('contain.text', "Email address is invalid.");
    });

    it("Test for invalid password", function () {
        const et1Login = new Login();     
        et1Login.loginButton().click();   
        et1Login.emailField().clear().type(this.testdata.testEmail);
        et1Login.passField().clear().type(this.testdata.invalidPass);
        et1Login.signinButton();
        cy.wait(2000);
        et1Login.invalidPasswordError().should('contain.text', "Password was incorrect")

    });
});