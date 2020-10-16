describe('Example test', () => {
    before(() => {
        cy.visit('/examples/react/#/');
    });
    beforeEach(() => {
        cy.get('.new-todo').type('item 1{enter}').type('item 2{enter}').type('item 3{enter}');
    });

    it('test1', () => {
        cy.get('.view .toggle').eq(1).check();
        cy.get('.todo-count').should('have.text', '2 items left');
    });
    it('test2', () => {
        cy.get('.view .toggle').last().check();
        cy.get('.todo-count').should('have.text', '2 items left');
    });
    afterEach(() => {
        cy.get('.destroy').each(($el) => {
            cy.wrap($el).click({ force: true });
        });
        cy.get('.view .toggle').should('not.exist');
    });
});
