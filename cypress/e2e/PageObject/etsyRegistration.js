class etsyRegistration{
    navigate(URL) {

        cy.visit(URL)
    }
    loginButton(){

        cy.get('button:contains("Sign in")').click();
    }
    registerButton(){

        cy.get('button:contains("Register")').click();
    }
    emailAddress(email){

        return cy.get('#join_neu_email_field').clear().type(email);
    }
    firstName(){

        return cy.get('#join_neu_first_name_field').clear();
    }
    password(){

        return cy.get('#join_neu_password_field').clear();
    }
    submitButton(){

        return cy.get('.wt-btn').contains('Register');
    
    }
    emailFieldError(){

        return cy.get('#aria-join_neu_email_field-error');
    }
    nameFieldError(){

        return cy.get('#aria-join_neu_first_name_field-error');
    }
}
export default etsyRegistration;