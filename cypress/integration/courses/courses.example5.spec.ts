describe('Example test', () => {
    let itemNames: string[];
    before(() => {
        cy.fixture('courses/courses.json').then((data) => {
            itemNames = data.item_names;
        });
        cy.visit('/examples/react/#/');
    });
    beforeEach(() => {
        Cypress._.each(itemNames, (itemName) => {
            cy.get('.new-todo').type(`${itemName}{enter}`);
        });
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
