/// <reference types="cypress" />

describe('tasks', () => {

  //here is a example of the use of fixtures. testData was created on /fixtures/tasks
  let testData;

  before(() => {
    cy.fixture('tasks').then(t => {

      testData = t

    })
  })

  context('register', () => {
    it('should register a new task', () => {
    
      const taskName = 'Read a NodeJS book.'
  
      cy.removeTaskByName('http://localhost:3333/helper/tasks',taskName)
  
      cy.createTask(taskName)
  
      cy.contains('main div p',taskName).should('be.visible')
  
    })
    it('should not allow a duplicated task', ()=> {
  
      //here is a example of the use of fixtures. testData.dup was created on /fixtures/tasks
      const task = testData.dup
  
      cy.removeTaskByName(task.name)
  
      cy.createTaskApi(task)
      
      cy.createTask(task.name)
  
      cy.get('.swal2-html-container').should('be.visible').should('have.text','Task already exists!')
      
    })
    it('mandatory field', ()=> {
  
      cy.createTask()
      cy.isRequired('This is a required field')
      
    })
  })
  context('updatingTask',() => {
    it('should complete a task', () => {
      
      const task = {
        name: 'Pay eletric bill',
        is_done: false
      }

      cy.removeTaskByName(task.name)
      cy.createTaskApi(task)

      cy.visit('/')

      
      

      cy.contains('p', task.name).parent().find('button[class*=ItemToggle]').click()

      cy.contains('p', task.name).should('have.css', 'text-decoration-line', 'line-through')

    })
  })
  context('removingTask',() => {
    it('should remove a task', () => {
      
      const task = {
        name: 'Pay water bill',
        is_done: false
      }

      cy.removeTaskByName(task.name)
      cy.createTaskApi(task)

      cy.visit('/')

      
      

      cy.contains('p', task.name).parent().find('button[class*=ItemDeleteButton]').click()

      cy.contains('p', task.name).should('not.exist')

    })
  })
  
})