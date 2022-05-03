### Frontend test automation project ###
---
#### Technologies

- JavaScript (Language)
- Cypress (Framework)
- Allure (Reports)
- Page Objects

---
#### Command line for installing project dependencies

    npm install
    brew install allure
    npm i -D @shelex/cypress-allure-plugin

---
#### Command line to run tests via terminal

    npm run cypress:run

---
#### Command line to open cypress

    npm run cypress:open

---
#### Command line to run tests and generate Allure reports

    npx cypress run --env allure=true

---
#### Command line to display Allure reporters

    cd cypress
    allure generate allure-results
    allure open allure-report
    
---
#### Information

    The 'exploratoryManualTest.txt' file contains a manual test containing a possible improvement on the site "rain.us".
 - 

