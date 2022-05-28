/// <reference types = "cypress" />

describe('HerokuApp', () => {

    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            pathname: '**/search**'
        }).as('getStories')
    
        cy.visit('https://infinite-savannah-93746.herokuapp.com/')
    
        cy.wait('@getStories')
    })

    it('Checa titulo da página', () => {
        cy.title().should('be.equal','React App')
    })
})