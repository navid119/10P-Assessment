class Login{

    loginButton(){

       return cy.get('button:contains("Sign in")');
    }
    emailField(){

        return cy.get('#join_neu_email_field');
    }
    passField(){

        return cy.get('#join_neu_password_field');
    }
    signinButton(){

        return cy.get('.wt-btn').contains('sign-in').forceClick();
    }
    userMenu(){

        cy.xpath("(//span[@class = 'wt-menu__trigger__label'])[2]").click();
    }
    signOut(){

        cy.contains('Sign out').click();
    }
    invalidEmailError(){

        return cy.get('#aria-join_neu_email_field-error');
    }
    invalidPasswordError(){

        return cy.get('#aria-join_neu_password_field-error');
    }
}
export default Login;