/// <reference types="cypress" />

import loc from '../support/locators'

describe('Home', () => {

    before(() => {

        cy.visit('https://rain.us/') 
    })

    it('Validate home title...', () => {

        cy.title().should('be.equal', 'Rain Instant Payment')
    })

    it('Validate home text...', () => {
        
        cy.get(loc.HOME.TITLE).should('have.text', 'Employees paid after each shift')
    })

    it('Validate home subtext...', () => {
        
        cy.get(loc.HOME.SUB_TITLE).should('have.text', 'Rebuilding financial products that empower and engage  employees')
    })

    it('Validate store buttons...', () => {
        
        cy.get(loc.HOME.BTN_APPLE)
          .should('be.visible')

        cy.get(loc.HOME.BTN_ANDROID)
          .should('be.visible')
    })
})

describe('Menu', () => {

    beforeEach(() => {

        cy.visit('https://rain.us/')
    })

    it('Acessing "About us" tab...', () => {
        
        cy.get(loc.MENU.ABOUT_US).click()
        cy.wait(1000)
        cy.get(loc.ABOUT_US.TITLE).should('have.text', 'Our mission')
    })

    it('Acessing "How it works" tab...', () => {
        
        cy.get(loc.MENU.HOW_IT_WORKS).click()
        cy.wait(1000)
        cy.get(loc.HOW_IT_WORKS.TITLE).should('have.text', 'How It Works')
    })

    it('Acessing "Blog" tab...', () => {
        
        cy.get(loc.MENU.BLOG).click()
        cy.title().should('be.equal', 'Blog')
    })

    it('Acessing "Contact" tab...', () => {

        cy.get(loc.MENU.CONTACT).click()
        cy.title().should('be.equal', 'Contact')
    })
})

describe('Header buttons', () => {

    beforeEach(() => {

        cy.visit('https://rain.us/')
    })

    it('Validate "Join our team" page...', () => {
        
        cy.get(loc.HOME.BTN_JOIN_OUR_TEAM).should('be.visible')
    })

    it('Acessing "Employers Access" page...', () => {
        
        cy.get(loc.HOME.BTN_EMPLOYERS_ACCESS).click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE).should('have.text', 'Give your people control over their income and finances')
    })
})