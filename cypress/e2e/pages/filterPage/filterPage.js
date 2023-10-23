import el from './filterElements'
import login from '../loginPage/loginPage'

class filterPage {
  login() {
    login.visitSite()
    login.fillLogin()
    login.clickButton('Login')
  }

  getItemsName() {
    let items = []
    // coloca na variável items os nomes dos produtos na ordem em que aparecem no site
    cy.get(el.itemName).each((element) => {
      items.push(element.text())
    })

    return items
  }

  getItemsPrice() {
    let items = []
    // coloca na variável items os preços dos produtos na ordem em que aparecem no site
    cy.get(el.itemPrice).each((element) => {
      items.push(element.text())
    })

    return items
  }

  selectFilter(option) {
    // seleciona o filtro
    cy.get(el.filter).select(option)
  }

  verifyFilterAToZ() {
    let itemsFilter = []

    // resgata o array da função getItems 
    itemsFilter = this.getItemsName()
    cy.wrap(itemsFilter).as('filter')

    cy.get('@filter').then((items) => {
      // faz a ordenação crescente do array
      itemsFilter.sort()
      for (let i = 0; i < items.length; i++) {
        // verifica se o array ordenado via código está na mesma ordem do array que foi salvo após o ordenamento no site
        expect(items[i]).to.equal(itemsFilter[i])
      }
    })
  }

  verifyFilterZToA() {
    let itemsFilter = []

    // resgata o array da função getItems 
    itemsFilter = this.getItemsName()

    cy.wrap(itemsFilter).as('filter')
    cy.get('@filter').then((items) => {
      // faz a ordenação decrescente do array
      items.sort((a, b) => {
        if (a > b)
          return -1
        if (a < b)
          return 1
        return 0
      })

      for (let i = 0; i < items.length; i++) {
        // verifica se o array ordenado via código está na mesma ordem do array que foi salvo após o ordenamento no site
        expect(items[i]).to.equal(itemsFilter[i])
      }
    })
  }

  verifyFilterLowToHigh() {
    let itemsFilter = []

    // resgata o array da função getItems 
    itemsFilter = this.getItemsPrice()

    cy.wrap(itemsFilter).as('filter')
    cy.get('@filter').then((items) => {
      // faz a ordenação crescente do array
      items.sort()
      for (let i = 0; i < items.length; i++) {
        // verifica se o array ordenado via código está na mesma ordem do array que foi salvo após o ordenamento no site
        expect(items[i]).to.equal(itemsFilter[i])
      }
    })
  }

  verifyFilterHighToLow() {
    let itemsFilter = []

    // resgata o array da função getItems 
    itemsFilter = this.getItemsPrice()

    cy.wrap(itemsFilter).as('filter')
    cy.get('@filter').then((items) => {
      // faz a ordenação crescente do array
      // faz a ordenação decrescente do array
      items.sort((a, b) => {
        if (a > b)
          return -1
        if (a < b)
          return 1
        return 0
      })

      for (let i = 0; i < items.length; i++) {
        // verifica se o array ordenado via código está na mesma ordem do array que foi salvo após o ordenamento no site
        expect(items[i]).to.equal(itemsFilter[i])
      }
    })
  }
}

const filter = new filterPage()
export default filter