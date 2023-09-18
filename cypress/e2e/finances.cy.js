
describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        const str = 'Freela'
        cy.visit("https://dev-finance.netlify.app")
        cy.contains("Nova Transação").click()
        //cy.get('#description').type('Freela')
        cy.get('#description').type(str)
        cy.get('#description').should('have.value','Freela')
        expect(str).to.be.equal('Freela');
        cy.get('#amount').type(250)
        cy.get('#date').type('2023-02-15') // yyyy-mm-dd
        cy.contains('button','Salvar').click()
   
    
    });    
});

