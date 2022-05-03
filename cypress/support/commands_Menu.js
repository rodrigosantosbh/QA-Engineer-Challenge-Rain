/// <reference types="cypress" />

import loc from './locators'

Cypress.Commands.add('accessAboutUs', () => {
    cy.get(loc.MENU.ABOUT_US).click()
})

Cypress.Commands.add('access_HowItWorks', () => {
    cy.get(loc.MENU.HOW_IT_WORKS).click()
})

Cypress.Commands.add('access_Blog', () => {
    cy.get(loc.MENU.BLOG).click()
})

Cypress.Commands.add('access_Contact', () => {
    cy.get(loc.MENU.CONTACT).click()
})

Cypress.Commands.add('access_EmployersAccess', () => {
    cy.get(loc.HOME.BTN_EMPLOYERS_ACCESS).click()
})

