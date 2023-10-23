import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import login from "../pages/loginPage/loginPage"

When('o usuário insere o nome de usuário e senha corretos', () => {
  login.fillLogin()
})

When('o usuário insere o nome de usuário ou senha incorretos', () => {
  login.fillLogin('tests')
})

Then('o usuário deve ser redirecionado para a página inicial', () => {
  login.verifyLogin()
})

Then('o usuário deve ver uma mensagem de erro', () => {
  login.verifyError()
})