/**
 * Check item
 * @param itemNumber to check
 */
function checkItem(itemNumber: number = 0): void {
    cy.get('.view .toggle').eq(itemNumber).check();
}
export default {
    checkItem,
};
