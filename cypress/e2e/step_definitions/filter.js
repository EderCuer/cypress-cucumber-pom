import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import filter from "../pages/filterPage/filterPage"

When('o usuário seleciona o filtro por nome de A a Z', () => {
  filter.selectFilter('Name (A to Z)')
})

When('o usuário seleciona o filtro por nome de Z a A', () => {
  filter.selectFilter('Name (Z to A)')
})

When('o usuário seleciona o filtro de preço do menor para o maior', () => {
  filter.selectFilter('Price (low to high)')
})

When('o usuário seleciona o filtro de preço do maior para o menor', () => {
  filter.selectFilter('Price (high to low)')
})

Then('apresenta os produtos ordenados de A a Z', () => {
  filter.verifyFilterAToZ()
})

Then('apresenta os produtos ordenados de Z a A', () => {
  filter.verifyFilterZToA()
})

Then('apresenta os produtos ordenados do menor para o maior preço', () => {
  filter.verifyFilterLowToHigh()
})

Then('apresenta o produto ordenados do maior para o menor preço', () => {
  filter.verifyFilterHighToLow()
})