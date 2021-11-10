// api.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

context('Network Requests', () => {

    it('Doctor Add', () => {
        // http://localhost:3000/api/doctor/add
        cy.request('POST', 'http://localhost:3000/api/doctor/add', {
            "name": "Test Management",
            "medCertId": "1234567",
            "phone": "12345678901",
            "mobilePhone": "12345678901",
            "zipCode": "22222233",
            "speciality": [
                "Alergologia",
                "Angiologia"
            ]
        })
        .then((response) => {
            expect(response).property('status').to.equal(200) // new entity created
            expect(response.body).property('success').to.be.a('boolean')
            expect(response.body).property('message').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('name').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('medCertId').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('phone').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('mobilePhone').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('zipCode').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('speciality').to.be.a('string')
            expect(response.body).property('newData').to.be.a('object').property('deleted').to.be.a('boolean')

        })
    })

    it('Doctor Edit', () => {
        // http://localhost:3000/api/doctor/edit/
        cy.request('PUT', 'http://localhost:3000/api/doctor/edit/1', {
            "name": "Test Management",
            "medCertId": "1111111",
            "phone": "12345678901",
            "mobilePhone": "12345678901",
            "zipCode": "22222233",
            "speciality": [
                "Alergologia",
                "Angiologia"
            ]
        })
        .then((response) => {
            expect(response).property('status').to.equal(200) // new entity created
            expect(response.body).property('success').to.be.a('boolean')
            expect(response.body).property('message').to.be.a('string', 'Atualizado com sucesso')

        })
    })

    it('Doctor Delete', () => {
        // http://localhost:3000/api/doctor/delete/
        cy.request('DELETE', 'http://localhost:3000/api/doctor/delete/1')
        .then((response) => {
            expect(response).property('status').to.equal(200) // new entity created
            expect(response.body).property('success').to.be.a('boolean')
            expect(response.body).property('message').to.be.a('string', 'Excluido com sucesso')

        })
    })

    it('Doctor Index - Where list all', () => {
        // http://localhost:3000/api/doctor
        cy.request('http://localhost:3000/api/doctor')
            .should((response) => expect(response.status).to.eq(200) )
            .its('body')
            .should('be.an', 'array')
            .and('have.length.at.least', 0)

    })

    it('Doctor Find One', () => {
        // http://localhost:3000/api/doctor/
        cy.request('http://localhost:3000/api/doctor/2')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.a('object')

                if (Object(response.body).hasOwnProperty('name')) {
                    expect(response.body).property('name').to.be.a('string')
                    expect(response.body).property('medCertId').to.be.a('string')
                    expect(response.body).property('phone').to.be.a('string')
                    expect(response.body).property('mobilePhone').to.be.a('string')
                    expect(response.body).property('zipCode').to.be.a('string')
                    expect(response.body).property('speciality').to.be.a('string')
                    expect(response.body).property('deleted').to.be.a('boolean')
                }

            })
            .its('body')
            .should('be.an', 'object')

    })

})
