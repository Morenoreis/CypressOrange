# CypressOrange

Projeto de automação de testes E2E utilizando **Cypress** no site de demonstração do [OrangeHRM](https://opensource-demo.orangehrmlive.com).

Desenvolvido como portfólio prático de QA Automation com foco em boas práticas, arquitetura limpa e cobertura de módulos reais de um sistema RH.

---

## Tecnologias

- [Cypress](https://www.cypress.io/) v15+
- JavaScript
- Page Object Model (POM)
- Node.js 18+

---

## Estrutura do Projeto

```
CypressOrange/
├── cypress/
│   ├── e2e/
│   │   ├── login-orangehrm.cy.js
│   │   ├── login-invalido-orangehrm.cy.js
│   │   ├── login-campos-brancos-orangehrm.cy.js
│   │   ├── logout-orangehrm.cy.js
│   │   ├── menu-lateral-orangehrm.cy.js
│   │   ├── admin.cy.js
│   │   ├── pim.cy.js
│   │   ├── leave.cy.js
│   │   └── recruitment.cy.js
│   ├── fixtures/
│   │   └── users.json
│   └── support/
│       ├── commands.js
│       ├── e2e.js
│       ├── LoginPage.js
│       ├── DashboardPage.js
│       ├── SideMenuPage.js
│       ├── AdminPage.js
│       ├── PimPage.js
│       ├── LeavePage.js
│       └── RecruitmentPage.js
├── cypress.config.js
├── package.json
└── README.md

---

## Cobertura de Testes

###  Autenticação
- Login válido
- Login inválido (credenciais erradas)
- Login inválido (campos obrigatórios)
- Logout funcional

###  Navegação
- Menu lateral automatizado
- Validação de visibilidade dos menus
- Navegação entre módulos

###  Admin → User Management
- Acesso ao módulo Admin
- Validação do título da página
- Busca de usuário existente
- Busca de usuário inexistente (No Records Found)
- Validação de colunas da tabela

###  PIM → Employee List
- Acesso ao módulo PIM
- Listagem de colaboradores
- Validação de colunas da tabela
- Busca por nome existente
- Busca por nome inexistente (zero registros)

###  Leave → Solicitação de Férias
- Acesso ao módulo Leave
- Navegação para Apply Leave
- Validação do formulário com campos obrigatórios
- Navegação para My Leave List
- Validação de colunas da tabela

###  Recruitment → Job Vacancies
- Acesso ao módulo Recruitment
- Navegação para Job Vacancies
- Listagem de vagas
- Validação de colunas da tabela
- Filtro por status Closed

---

##  Como Executar

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
```bash
git clone https://github.com/seu-usuario/CypressOrange.git
cd CypressOrange
npm install
```

### Executar com interface gráfica
```bash
npx cypress open --browser electron
```

### Executar em modo headless
```bash
npx cypress run
```

### Executar um spec específico
```bash
npx cypress run --spec "cypress/e2e/admin.cy.js"
```

---

##  Arquitetura

O projeto utiliza o padrão **Page Object Model (POM)**:

- Cada módulo tem seu próprio Page Object em `cypress/support/`
- Os seletores ficam centralizados no objeto `elements` de cada Page
- O comando customizado `cy.loginViaFixture()` centraliza o login em todos os testes
- As credenciais ficam isoladas em `cypress/fixtures/users.json`

---

##  Observações

- O site de demonstração reseta os dados periodicamente
- Alguns testes de Leave dependem de massa de dados disponível no ambiente
- Projeto em evolução — próximas fases incluirão Selenium e Playwright

---

##  Autor

**Moreno Barros Reis**  
QA Automation Engineer  

• Linkedin: [https://www.linkedin.com/in/morenoreis/](#) 
• GitHub: [https://github.com/Morenoreis/CypressOrange](#)




