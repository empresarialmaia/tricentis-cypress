/// <reference types="Cypress"/>

describe('Preenchimento do formulário Automobile com sucesso', () => {
  let preencherForm;

  before(() => {
    // Carrega os dados do arquivo JSON
    cy.fixture('preencherForm').then((formulario) => {
      preencherForm = formulario;
    });
  });

  it('formulario Automobile', () => {
    // Acesso ao site
    cy.VisitarPagina();

    // Validação texto home
    cy.contains('Welcome Aboard!').should('be.visible');

    // Menu automobile disponível na home    
    cy.ClicarMenuAutomobile();

    // Validação texto primeira parte
    cy.contains('Make').should('be.visible');

    // Preenchimento primeira parte do formulário   
    cy.PrimeiraParteDoFormulario(
      preencherForm.primeiraParte.make,
      preencherForm.primeiraParte.engineperformance,
      preencherForm.primeiraParte.dateofmanufacture,
      preencherForm.primeiraParte.numberofseats,
      preencherForm.primeiraParte.fuel,
      preencherForm.primeiraParte.listprice,
      preencherForm.primeiraParte.licenseplatenumber,
      preencherForm.primeiraParte.annualmileage
    );

    // Validação texto segunda parte    
    cy.contains('First Name').should('be.visible');

    // Preenchimento segunda parte do formulário    
    cy.SegundaParteDoFormulario(
      preencherForm.segundaParte.firstname,
      preencherForm.segundaParte.lastname,
      preencherForm.segundaParte.birthdate,
      preencherForm.segundaParte.gen,
      preencherForm.segundaParte.streetaddress,
      preencherForm.segundaParte.country,
      preencherForm.segundaParte.zipcode,
      preencherForm.segundaParte.city,
      preencherForm.segundaParte.occupation,
      preencherForm.segundaParte.hobbie,
      preencherForm.segundaParte.website
    );

    // Validação texto terceira parte
    cy.contains('Start Date').should('be.visible');

    // Preenchimento terceira parte do formulário    
    cy.TerceiraParteDoFormulario(
      preencherForm.terceiraParte.startdate,
      preencherForm.terceiraParte.insurancesum,
      preencherForm.terceiraParte.meritrating,
      preencherForm.terceiraParte.damageinsurance,
      preencherForm.terceiraParte.Products,
      preencherForm.terceiraParte.courtesycar
    );

    // Validação texto quarta parte
    cy.contains('Select Option').should('be.visible');

    // Preenchimento quarta parte do formulário com o preço   
    cy.QuartaParteDoFormulario(preencherForm.quartaParte.Price);

    // Validação texto quinta parte
    cy.contains('E-Mail').should('be.visible');

    // Preenchimento quinta parte do formulário  
    cy.QuintaParteDoFormulario(
      preencherForm.quintaParte.email,
      preencherForm.quintaParte.phone,
      preencherForm.quintaParte.username,
      preencherForm.quintaParte.password,
      preencherForm.quintaParte.confirmpassword,
      preencherForm.quintaParte.Comments
    );

    // Validação de envio com sucesso do formulário    
    cy.contains('Sending e-mail success!',{ timeout: 10000 }).should('be.visible');

    cy.get('.confirm').click();
  });
});
