Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("e is not defined")) {
      return false; // Ignora o erro específico e continua o teste
    }
  });