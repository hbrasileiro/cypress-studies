/// <reference types="cypress" />

describe('home', () => {
  it('webapp should be online', () => {
    cy.visit('/')
    
    cy.title().should('eq','Manage your tasks with Mark L')
  })
})