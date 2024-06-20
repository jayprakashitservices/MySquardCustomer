/// <reference types = "Cypress"/>

describe('MySquard Customer TestCase', function(){
    
    //Customer valid Login
    it('Customer Valid Login', function(){
        cy.visit('http://44.205.66.53:3003/')
        cy.get('.me-3').click();
        cy.get('#phoneNumber').type('9408585803');
        cy.contains('Continue').click();
        cy.get('[aria-label="Please enter OTP character 1"]').type('4');
        cy.get('[aria-label="Please enter OTP character 2"]').type('4');
        cy.get('[aria-label="Please enter OTP character 3"]').type('7');
        cy.get('[aria-label="Please enter OTP character 4"]').type('8');
        //cy.contains('Continue').click();
        cy.contains('Login Successfully!').should('have.text', 'Login successfully!')
        //cy.contains('Login Successfully!').should('have.text','Login successfully!')

    })
})