Feature: Login

Scenario: Login com sucesso
  Given que o usuário está na página de login
  When o usuário insere o nome de usuário e senha corretos
    And o usuário clica no botão "Login"
  Then o usuário deve ser redirecionado para a página inicial

Scenario: Login com falha
  Given que o usuário está na página de login
  When o usuário insere o nome de usuário ou senha incorretos
    And o usuário clica no botão "Login"
  Then o usuário deve ver uma mensagem de erro