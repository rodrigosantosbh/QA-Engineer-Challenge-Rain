### Projeto de automação de testes Frontend

---
#### Tecnologias utilizadas

- JavaScript (Linguagem)
- Cypress (Framework)
- Allure (Reports)
- Page Objects

---
#### Linha de comando para instalação das dependências do projeto

    npm install
    brew install allure
    npm i -D @shelex/cypress-allure-plugin
---
#### Linha de comando para execução dos testes via terminal

    npm run cypress:run

---
#### Linha de comando para abrir o cypress

    npm run cypress:open

---
#### Linha de comando para executacao dos testes e geracao dos reports do Allure

    npx cypress run --env allure=true

---
#### Linha de comando para exibição dos reports do Allure()
    cd cypress
    allure generate allure-results
    allure open allure-report
    
---
#### Informações

 - 

