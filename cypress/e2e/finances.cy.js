beforeEach(()=>{
    cy.visit("https://dev-finance.netlify.app")
});
function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type('2023-02-15') // yyyy-mm-dd
    cy.contains('button','Salvar').click()
}

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
       
        criarTransacao('Freela',250)
        cy.get('tbody tr td.description').should('have.text','Freela')
    });
    
    it('Cadastrar uma saída', () => {
       
        criarTransacao('cinema',-45)
    });

    it('Excluir transação', () => {
        criarTransacao("Freela",100)
        cy.contains('.description','Freela')
        .parent().find('img').click()
    })
});

