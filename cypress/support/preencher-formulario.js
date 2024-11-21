/// <reference types="Cypress"/>


Cypress.Commands.add('VisitarPagina', () => {
    cy.visit('https://sampleapp.tricentis.com/101/index.php');
});

Cypress.Commands.add('ClicarMenuAutomobile',() => {
    cy.get('.main-navigation > .menu > :nth-child(1) > #nav_automobile').click();
});

Cypress.Commands.add('PrimeiraParteDoFormulario',(
  make,
  engineperformance,
  dateofmanufacture,
  numberofseats,
  fuel,
  listprice,
  licenseplatenumber,
  annualmileage
) => {

    cy.get('#make').should('be.visible').select(make);
    cy.get('#engineperformance').type(engineperformance);
    cy.get('#dateofmanufacture').type(dateofmanufacture);
    cy.get('#numberofseats').should('be.visible').select(numberofseats);
    cy.get('#fuel').then((element) => {
      const fuelTypes = ['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other'];
      if (fuelTypes.includes(fuel)) {
        cy.wrap(element).select(fuel);  // Seleciona o combustível com base no valor fornecido
      } else {
        cy.wrap(element).select('Other'); // Caso o valor não esteja na lista, seleciona 'Other'
      }
    });        

    cy.get('#listprice').type(listprice);
    cy.get('#licenseplatenumber').type(licenseplatenumber);
    cy.get('#annualmileage').type(annualmileage);
    cy.get('#nextenterinsurantdata').click();

})

Cypress.Commands.add('SegundaParteDoFormulario',(
  firstname, 
  lastname, 
  birthdate, 
  gen, 
  streetaddress, 
  country, 
  zipcode,
  city,
  occupation,
  hobbie,
  website,


 ) => {

    cy.get('#firstname').type(firstname);
    cy.get('#lastname').type(lastname);
    cy.get('#birthdate').type(birthdate);
    cy.get(':nth-child(4) > .group').then((element) => {
      const gender = gen;      
      if (gender === 'Male') {
        cy.wrap(element).contains('Male').click();
      } else {
        cy.wrap(element).contains('Female').click();
      }
    });

    cy.get('#streetaddress').type(streetaddress);
    cy.get('#country').should('be.visible').select(country);
    cy.get('#zipcode').type(zipcode);
    cy.get('#city').type(city);
    cy.get('#occupation').should('be.visible').select(occupation);
    cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group').then((element) => {
      const hobbies = ['Speeding','Bungee Jumping','Cliff Diving','Skydiving','Other']
      if(hobbies.includes(hobbie)){
        cy.wrap(element).contains(hobbie).click();         
      }else{
        cy.wrap(element).contains('Other').click();
      }
    })
    cy.get('#website').type(website);
    cy.get('#nextenterproductdata').click();


})

Cypress.Commands.add('TerceiraParteDoFormulario',(
  startdate, 
  insurancesum, 
  meritrating, 
  damageinsurance, 
  Products, 
  courtesycar
) => {

    cy.get('#startdate').type(startdate);
    cy.get('#insurancesum').should('be.visible').select(insurancesum);
    cy.get('#meritrating').should('be.visible').select(meritrating);
    cy.get('#damageinsurance').should('be.visible').select(damageinsurance);
    cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group').then((element) => {
        const OptionalProducts =  Products;
        if(OptionalProducts === 'Euro Protection'){
          cy.wrap(element).contains('Euro Protection').click();
        }else{
          cy.wrap(element).contains('Legal Defense Insurance').click();

        }
    });

    cy.get('#courtesycar').should('be.visible').select(courtesycar);
    cy.get('#nextselectpriceoption').click();

})

Cypress.Commands.add('QuartaParteDoFormulario',(Price) =>{
  const SelectPrice = Price; 
        if (SelectPrice === 0) {
          cy.get('label.choosePrice.ideal-radiocheck-label').eq(0).click();
        } else if (SelectPrice === 1) {
          cy.get('label.choosePrice.ideal-radiocheck-label').eq(1).click();
        } else if (SelectPrice === 2) {
          cy.get('label.choosePrice.ideal-radiocheck-label').eq(2).click();
        } else {
          cy.get('label.choosePrice.ideal-radiocheck-label').eq(3).click();

        }

    cy.get('#nextsendquote').click();

})

Cypress.Commands.add('QuintaParteDoFormulario',(
  email, 
  phone, 
  username, 
  password, 
  confirmpassword, 
  Comments 
)=>{

    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#username').type(username);
    cy.get('#password').type(password);   
    cy.get('#confirmpassword').type(confirmpassword);    
    cy.get('#Comments').type(Comments);
    cy.get('#sendemail').click();
  

})