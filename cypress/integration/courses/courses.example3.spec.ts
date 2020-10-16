describe('Example test', () => {
    before(() => {
        cy.visit('/examples/react/#/');
    });
    it('test1', () => {
        cy.get('.new-todo').type('item 1{enter}').type('item 2{enter}').type('item 3{enter}');
        cy.get('.todo-count').should('have.text', '3 items left');
        cy.get('.view .toggle').first().check();
        cy.get('.todo-count').should('have.text', '2 items left');
    });
    it('test2', () => {
        cy.get('.view .toggle').should('have.length', 3);
        cy.get('.clear-completed').click();
        cy.get('.view .toggle').should('have.length', 2);
    });
    after(() => {
        cy.get('.destroy').each(($el) => {
            cy.wrap($el).click({ force: true });
        });
        cy.get('.view .toggle').should('not.exist');
    });
});
