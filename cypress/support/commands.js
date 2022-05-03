// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', (email, password) => {
    cy.get(loc.MENU.EMPLOYERS_ACCESS).click()
    cy.get(loc.MENU.TITLE_EMPLOYERS_ACCESS).should('have.text', 'Give your people control over their income and finances')
    cy.get(loc.EMPLOYERS_ACCESS.EMAIL).type('rodrigo.santosrr@gmail.com')
    cy.get(loc.EMPLOYERS_ACCESS.PASSWORD).type('rain123')
    cy.get(loc.EMPLOYERS_ACCESS.SIGN_IN).click()
})