// import { ROUTES } from './constant'

describe('Auth', () => {
  describe('Register', () => {
    it('should login success when submit a valid sign up form', () => {
      cy.visit('/#/register')
      cy.get('input[placeholder="Your Name"]').type('Joseph2')
      cy.get('input[placeholder="Email"]').type('joseph2@gmail.com')
      cy.get('[type="password"]').type('12345678')
      cy.get('[type="submit"]').should('not.have.attr', 'disabled')
      cy.get('[type="submit"]').contains('Sign up').click()
      cy.url().should('match', /\/#\/$/)
    })

    // it('should display error when submit an invalid form (password not match)', () => {
    //   cy.intercept('POST', /users\/register/, {
    //     statusCode: 403,
    //     body: { errors: { 'email or password': ['is invalid'] } },
    //   })
    //   cy.visit(ROUTES.REGISTER)
    //
    //   cy.get('[type="email"]').type('foo@example.com')
    //   cy.get('[type="password"]').type('12345678')
    //   cy.get('[type="submit"]').should('have.attr', 'disabled')
    //   //cy.contains('email or password is invalid')
    // })
    // it ('should login without problem', () => {
    //   cy.visit(ROUTES.LOGIN)
    //
    //   cy.get('input[placeholder="Email"]').type('joseph.seguin@gmail.com')
    //   cy.get('[type="password"]').type('12345678')
    // })

    it('should display O articles', () => {
      cy.visit('/#/profile/Joseph2')
      cy.get('[class="article-preview"]').should('have.text', ' No articles are here... yet. ')
    })

    it('should post new article', () => {
      cy.visit('/#/article/create')
      cy.get('input[placeholder="Article Title"]').type('The Kilimanjaro')
      cy.get('input[placeholder="What\'s this article about?"]').type('Hiking')
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type('The kilimanjaro is the highest mountain in Africa with his summit at 5800 meters above the sea level.')
      cy.get('input[placeholder="Enter tags"]').type('hiking')
      cy.get('[type="submit"]').contains('Publish Article').click()
      cy.url().should('match', /\/#\/article\/the-kilimanjaro\/$/)
    })
  })
})
