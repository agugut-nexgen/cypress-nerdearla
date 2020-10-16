describe('Example test', () => {
    before(() => {
        cy.visit('/index.php');
    });
    it('test1', () => {
        const sizes = ['S', 'M', 'L']
        const colours =['Orange', 'Blue']
        cy.get('#search_query_top').type('Faded Short Sleeve T-shirts')
        cy.get('#searchbox > .btn').click()
        cy.get('.page-heading').invoke('text').then((text)=> {
            expect(text).to.contain('"Faded Short Sleeve T-shirts"')
        })
        cy.get('.heading-counter').should('contain.text', '1 result has been found.')
        cy.get('.lnk_view > span').click()
        cy.get('.button-plus').click()
        cy.get('#group_1 option').each(($el, index)=> {
            cy.wrap($el).should('have.text',sizes[index])
        })
        cy.get('#color_to_pick_list li a').each(($el, index)=> {
            cy.wrap($el).should('have.attr', 'title',colours[index])
        })
        cy.get('#group_1').select('M')
        cy.get('.exclusive > span').click()
        cy.get('.layer_cart_product > h2').should('contain.text','Product successfully added to your shopping cart')
        cy.get('#layer_cart_product_price').should('have.text', '$33.02')
        cy.get('.ajax_block_products_total').should('have.text', '$33.02')
        cy.get('.ajax_cart_shipping_cost').first().should('have.text', '$2.00')
        cy.get('.ajax_block_cart_total').first().should('have.text', '$35.02')
        cy.get('.button-medium > span').click()
        cy.get('.icon-minus').click()
        cy.get('#total_product_price_1_3_0').should('have.text', '$16.51')
    });
});
