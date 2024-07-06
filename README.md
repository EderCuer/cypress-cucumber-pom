# Projeto Cypress com Cucumber + Page Objects + Report

Projeto utilizando o Cypress (versão 13.3.2) com o plugin cypress-cucumber-preprocessor e Page Objects Model. A ideia é trazer um exemplo de como seria a implementação de testes com o Cypress utilizando o Gherkin e Page Objects, um modelo amplamente utilizado e usado em diversas empresas.

Além disso, foi configurada uma pipeline que roda os testes e ainda publica um report no Github Pages: sobre isso, vocês podem ver [aqui](https://harshitshah156.medium.com/host-your-automation-report-on-github-pages-with-github-actions-69f80857bd28) e [aqui](https://rapesil.medium.com/gerando-allure-report-de-forma-autom%C3%A1tica-com-github-actions-a514a07e146d)
O report usado foi o [Multiple Cucumber HTML Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/b171d8e7-e242-4569-98cf-4a0d701b0325)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/df9cbdd3-9a7a-4f60-834d-2aca958368b2)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/9b419f75-a54c-46bf-b5e1-d4cf36048e88)




## Pré-requisitos

É necessário tem o Node.js e o NPM instalados para executar o projeto.

> Usei as versões `v19.1.0` e `8.19.3` do Node.js e NPM, respectivamente. Sugiro que você use as mesmas versões.

## Instalação
1. Clone o projeto
2. Na página do projeto execute `npm install` (ou `npm i`) para instalar as dependências dev.

## Executando os testes

Execute `npx cypress open` para abrir o Cypress no modo interativo.

Ou, execute `npx run cypress` para rodar os testes em modo headless.

## Geração do relatório

Após executar o comando  `npx run cypress`, o relatório será executado automaticamente no diretório cypress/reports/Report, isso porque temos o comando `postcypress:headless` que executa logo após os testes terminarem (de forma automática).
Da forma que está a cada nova execução um novo relatório será gerado e irá sobrescrever o antigo, caso queira gerar novos relatórios é possível fazer uma configuração para que não haja essa substituição, mas novos diretórios serão adicionados na pasta report, ou onde queira (infelizmente o report utilizado não consegue fazer um relatório com histórico de execuções).

Podemos, por exemplo, por meio da função Date() dinamicamente criar o nome das pastas (ou da forma que desejarmos). Assim a toda nova execução, novas pastas serão criadas.

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/de7b4bdc-5522-4fd0-9447-bca72982b9c4)

_________________

# Cypress Project with Cucumber + Page Objects + Report

Project using Cypress (version 13.3.2) with the cypress-cucumber-preprocessor plugin and Page Objects Model. The idea is to provide an example of how to implement tests with Cypress using Gherkin and Page Objects, a widely used model in various companies.

Additionally, a pipeline was configured to run the tests and publish a report on GitHub Pages: you can see more about this [here](https://harshitshah156.medium.com/host-your-automation-report-on-github-pages-with-github-actions-69f80857bd28) and [here](https://rapesil.medium.com/gerando-allure-report-de-forma-autom%C3%A1tica-com-github-actions-a514a07e146d)
The report used was the [Multiple Cucumber HTML Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/b171d8e7-e242-4569-98cf-4a0d701b0325)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/df9cbdd3-9a7a-4f60-834d-2aca958368b2)

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/9b419f75-a54c-46bf-b5e1-d4cf36048e88)

## Prerequisites

You need to have Node.js and NPM installed to run the project.

> I used versions `v19.1.0` and `8.19.3` of Node.js and NPM, respectively. I suggest you use the same versions.

## Installation
1. Clone the project
2. In the project directory, run `npm install` (or `npm i`) to install the dev dependencies.

## Running the tests

Run `npx cypress open` to open Cypress in interactive mode.

Or, run `npx run cypress` to run the tests in headless mode.

## Generating the report

After running the `npx run cypress` command, the report will be automatically generated in the cypress/reports/Report directory, because we have the `postcypress:headless` command that runs right after the tests finish (automatically).
As it stands, each new run will generate a new report and overwrite the old one. If you want to generate new reports without overwriting the old ones, you can configure it to create new directories in the report folder, or wherever you want (unfortunately, the report used cannot create a report with execution history).

We can, for example, dynamically create folder names using the Date() function (or in any way we wish). This way, each new run will create new folders.

![image](https://github.com/EderCuer/cypress-cucumber-pom/assets/5313676/de7b4bdc-5522-4fd0-9447-bca72982b9c4)
