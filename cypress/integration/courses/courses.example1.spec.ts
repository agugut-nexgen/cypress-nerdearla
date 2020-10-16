describe('Example test', () => {
    it('test1', () => {
        cy.visit('/examples/react/#/');
        cy.get('.new-todo').type('item 1{enter}').type('item 2{enter}').type('item 3{enter}');
        cy.get('.view .toggle').first().check();
    });
    it('test2', () => {
        cy.visit('/examples/react/#/');
        cy.get('.new-todo').type('item 1{enter}').type('item 2{enter}').type('item 3{enter}');
        cy.get('.view .toggle').last().check();
    });
});
