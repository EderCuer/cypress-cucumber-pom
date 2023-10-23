Feature: Filtrar produtos

Scenario: Filtrar produtos por preço ascendente
  Given que o usuário está na página de produtos
  When o usuário seleciona o filtro de preço do menor para o maior
  Then apresenta os produtos ordenados do menor para o maior preço

Scenario: Filtrar produtos por preço descendente
  Given que o usuário está na página de produtos
  When o usuário seleciona o filtro de preço do maior para o menor
  Then apresenta o produto ordenados do maior para o menor preço

Scenario: Filtrar produtos por filtro de nome ascendente
  Given que o usuário está na página de produtos
  When o usuário seleciona o filtro por nome de A a Z
  Then apresenta os produtos ordenados de A a Z

Scenario: Filtrar produtos por filtro de nome descendente
  Given que o usuário está na página de produtos
  When o usuário seleciona o filtro por nome de Z a A
  Then apresenta os produtos ordenados de Z a A