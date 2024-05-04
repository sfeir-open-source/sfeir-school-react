<!-- .slide: class="transition" -->

# Cypress

##==##

<!-- .slide: class="with-code" -->

# Cypress

![center](./assets/images/cypress.png)

##==##

<!-- .slide: class="with-code" -->

# How to write a test?

```TypeScript [1|2,17|3,16|4|6-7|9-11|13-15]
// authentication.cy.ts
describe('login', () => {
  it('user should be able to log in', () => {
    cy.visit('/')

    // open the login modal
    cy.get('button').contains('Login').click()

    // fill in the form
    cy.get('input[type="email"]').type('test@test.com')
    cy.get('input[type="password"]').type('test123')

    // submit the form
    cy.get('button').contains('Sign in').click()
    cy.contains('button', 'Logout').should('be.visible')
  })
})
```

<!-- .element: class="big-code" -->
