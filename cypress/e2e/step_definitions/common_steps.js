import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import login from "../pages/loginPage/loginPage"
import filter from "../pages/filterPage/filterPage"

Given('que o usuário está na página de login', () => {
  login.visitSite()
})

Given('que o usuário está na página de produtos', () => {
  filter.login()
})

When('o usuário clica no botão {string}', (button) => {
  login.clickButton(button)
})