// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Navigation', () => {
    it('Modal Fields', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "about" and click it
        cy.get('.MuiFab-circular').click()

        // The new Modal ""
        cy.get('div[aria-labelledby="modal-modal-title"]')
            .should('be.visible')

        // Input Name
        cy.get('input[id="name"]')
            .type('New User Name')
            .should('have.value', 'New User Name')

        // Input MedCertId
        cy.get('input[id="medCertId"]')
            .type('1234567')
            .should('have.value', '1234567')

        // Input Phone
        cy.get('input[id="phone"]')
            .type('12345678901')
            .should('have.value', '12345678901')

        // Input MobilePhone
        cy.get('input[id="mobilePhone"]')
            .type('12345678901')
            .should('have.value', '12345678901')

        // Input Zip Code
        cy.get('input[id="zipCode"]')
            .type('12345678')
            .should('have.value', '12345678')

        context('Select opens on Click', () => {

            cy.get('div[id="speciality"]', { timeout: 2000 })
                .click()

            // Select Item from the List "Angiologia"
            cy.get('li[data-value="Angiologia"]', { timeout: 1000 })
                .click()

            // Select Item from the List "Buco maxilo"
            cy.get('li[data-value="Buco maxilo"]', { timeout: 1000 })
                .click()

            // Select should close on the user press esc ou outside
            cy.get('div[id="menu-"] div[tabindex="-1"]')
                .type('{esc}')

        })

    })
})