/// <reference types="cypress" />

import loc from '../support/locators'

describe('Menu', () => {

    beforeEach(() => {

        cy.visit('https://rain.us/') 
    })

    it('Validate "About us" page...', () => {
        
        cy.get(loc.MENU.ABOUT_US).click()
        cy.get(loc.ABOUT_US.TITLE).should('have.text', 'Our mission')
        cy.get(loc.ABOUT_US.TEXT).should('not.be.empty')
        cy.get(loc.ABOUT_US.BTN_TALK_WITH_US).click()
        cy.title().should('be.equal', 'Contact')
    })

    it('Validate "How it works" page...', () => {
        
        cy.get(loc.MENU.HOW_IT_WORKS).click()
        cy.get(loc.HOW_IT_WORKS.TITLE).should('have.text', 'How It Works')
        cy.get(loc.HOW_IT_WORKS.TEXT).should('not.be.empty')

        cy.get(loc.HOW_IT_WORKS.TAB_EASY_INTEGRATIONS).click()
        cy.get(loc.HOW_IT_WORKS.TITLE_EASY_INTEGRATIONS).should('not.be.empty')

        cy.get(loc.HOW_IT_WORKS.TAB_RAIN_MOBILE_APP).click()
        cy.get(loc.HOW_IT_WORKS.TITLE_RAIN_MOBILE_APP).should('not.be.empty')

        cy.get(loc.HOW_IT_WORKS.TAB_HOW_WE_PAY_OUR_BILLS).click()
        cy.get(loc.HOW_IT_WORKS.TITLE_HOW_WE_PAY_OUR_BILLS).should('not.be.empty')
    })

    it('Validate "Blog" page...', () => {
        
        cy.get(loc.MENU.BLOG).click()
        cy.title().should('be.equal', 'Blog')

        cy.get(loc.BLOG.TAB_FINANCIAL_WELLNESS).click()
        cy.get(loc.BLOG.TITLE_FINANCIAL_WELLNESS).should('have.text', "Financial Wellness")
        cy.wait(1000)
        
        cy.get(loc.BLOG.TAB_BUSINESS).click()
        cy.get(loc.BLOG.TITLE_BUSINESS).should('have.text', "Business")

        cy.get(loc.BLOG.TAB_HUMAN_RESOURCES).click()
        cy.get(loc.BLOG.TITLE_HUMAN_RESOURCES).should('have.text', "Human Resources")

        cy.get(loc.BLOG.TAB_ANNOUNCEMENTS).click()
        cy.get(loc.BLOG.TITLE_ANNOUNCEMENTS).should('have.text', "Announcements")
    })

    it('Validate "Contact" page...', () => {
        
        cy.get(loc.MENU.CONTACT).click()
        cy.title().should('be.equal', 'Contact')

        cy.get(loc.CONTACT.TITLE).should('have.text', 'Let’s chat!')
        cy.get(loc.CONTACT.TEXT).should('have.text', 'Have a question? You can ask us anything about Rain!')
        cy.get(loc.CONTACT.TEXT2).should('have.text', 'For customer service questions, please reach out at care@rain.usand 424-369-RAIN')

        cy.get(loc.CONTACT.IPT_FIRT_NAME).type('Rodrigo')
        cy.get(loc.CONTACT.IPT_LAST_NAME).type('Santos')
        cy.get(loc.CONTACT.IPT_EMAIL).type('rodrigo.santosrr@gmail.com')
        cy.get(loc.CONTACT.IPT_PHONE).type('+5531996623231')
        cy.get(loc.CONTACT.IPT_COMPANY).type('Rain Instant Pay')
        cy.get(loc.CONTACT.IPT_EMPLOYEE_COUNT).select('100-500')
        cy.get(loc.CONTACT.IPT_JOB_TITLE).type('QA Engineer')
        cy.get(loc.CONTACT.IPT_MESSAGE).type('Message to validate Rain website contact page for QA Engineer challenge.')
        //cy.get(loc.CONTACT.BTN_SUBMIT).click()

        cy.get(loc.CONTACT.TEXT3).should('have.text', 'This site is protected by reCAPTCHA and the GooglePrivacy Policy andTerms of Service apply.')
    })

    it('Validate mandatory fiels...', () => {
        
        cy.get(loc.MENU.CONTACT).click()
        cy.title().should('be.equal', 'Contact')

        cy.get(loc.CONTACT.BTN_SUBMIT).click()
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_NAME).should('have.text', 'Please complete this required field.')
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_LAST).should('have.text', 'Please complete this required field.')
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_EMAIL).should('have.text', 'Please complete this required field.')
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_PHONE).should('have.text', 'Please complete this required field.')
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_COMPANY).should('have.text', 'Please complete this required field.')
        cy.get(loc.CONTACT.MSG_REQUIRED_FIELD_JOB_TITLE).should('have.text', 'Please complete this required field.')
    })

    it('Validate message to invalid login...', () => {
        
        cy.get(loc.MENU.EMPLOYERS_ACCESS).click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE).should('have.text', 'Give your people control over their income and finances')
        cy.get(loc.EMPLOYERS_ACCESS.EMAIL).type('rodrigo.santosrr@gmail.com')
        cy.get(loc.EMPLOYERS_ACCESS.PASSWORD).type('rain123')
        cy.get(loc.EMPLOYERS_ACCESS.SIGN_IN).click()
        cy.get(loc.EMPLOYERS_ACCESS.MSG_ERROR).should('have.text', 'Could not sign in, invalid email or password')
    })

    it('Validate Forgot Password...', () => {
        
        cy.get(loc.MENU.EMPLOYERS_ACCESS).click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE).should('have.text', 'Give your people control over their income and finances')

        cy.get(loc.EMPLOYERS_ACCESS.BTN_FORGOT).click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE_FORGOT_PASSWORD).should('have.text', 'Forgot Password?')
        cy.get(loc.EMPLOYERS_ACCESS.IPT_EMAIL).type('rain@rain.com')
        cy.get(loc.EMPLOYERS_ACCESS.BTN_SEND_RESET_CODE).should('have.text', 'Send reset code').click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE_CONFIRM_YOUR_EMAIL).should('have.text', 'Confirm your email')
        cy.get(loc.EMPLOYERS_ACCESS.TEXT).should('contain', 'We’ve sent a 6 digit code to ').and('contain', ', please allow one minute to receive.')
        cy.get(loc.EMPLOYERS_ACCESS.IPT_CODE).type('1234567')
        cy.get(loc.EMPLOYERS_ACCESS.BTN_NEXT).click()
        cy.get(loc.EMPLOYERS_ACCESS.TITLE_NEW_PASSWORD).should('have.text', 'New Password')
        cy.get(loc.EMPLOYERS_ACCESS.TEXT_NEW_PASSWORD).should('have.text', 'Set your new password following the steps')
        cy.get(loc.EMPLOYERS_ACCESS.IPT_NEW_PASSWORD).type('Maria*2022')
        cy.wait(2000)
        cy.get(loc.EMPLOYERS_ACCESS.BTN_SHOW_RIDE).click()
        cy.get(loc.EMPLOYERS_ACCESS.BTN_SHOW_RIDE).click()
        cy.get(loc.EMPLOYERS_ACCESS.BTN_BACK).click()
    })
})