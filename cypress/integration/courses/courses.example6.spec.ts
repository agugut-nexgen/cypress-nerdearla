import coursesHelper from '../../support/helpers/courses/courses.helper';

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
            // cy.get('[data-cy=todoList]').click();
        });
    });

    it('test1', () => {
        cy.logDebug('Check first item');
        coursesHelper.checkItem();
        cy.get('.todo-count').should('have.text', '2 items left');
    });
    it('test2', () => {
        coursesHelper.checkItem(2);
        cy.get('.todo-count').should('have.text', '2 items left');
    });
    afterEach(() => {
        cy.get('.destroy').each(($el) => {
            cy.wrap($el).click({ force: true });
        });
        cy.get('.view .toggle').should('not.exist');
    });
});
