1. Instalação
bash

npm install cypress --save-dev



2. Execução
Modo GUI (interativo):

bash
npx cypress open
Modo CLI (headless):

bash
npx cypress run



3. Comandos Úteis
Teste específico:

bash
npx cypress run --spec "cypress/e2e/exemplo.cy.js"
Navegador específico:

bash
npx cypress run --browser chrome
Observação:

Relatórios são gerados em /cypress/screenshots e /cypress/videos após execução.

Use --headed para ver a execução mesmo em run.

bash
npx cypress run --headed
