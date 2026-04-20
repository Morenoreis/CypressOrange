# CypressOrange

End-to-end test automation project using **Cypress** on the [OrangeHRM](https://opensource-demo.orangehrmlive.com) demo website.

Built as a practical QA Automation portfolio focused on best practices, clean architecture, and real module coverage of an HR system.

---

##  Tech Stack

- [Cypress](https://www.cypress.io/) v15+
- JavaScript
- Page Object Model (POM)
- Node.js 18+

---

##  Project Structure

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

##  Test Coverage

###  Authentication
- Valid login
- Invalid login (wrong credentials)
- Invalid login (empty required fields)
- Functional logout

###  Navigation
- Side menu automation
- Menu item visibility validation
- Navigation between modules

###  Admin → User Management
- Access to Admin module
- Page title validation
- Search for existing user
- Search for non-existing user (No Records Found)
- Table column validation

###  PIM → Employee List
- Access to PIM module
- Employee list display
- Table column validation
- Search by existing name
- Search by non-existing name (zero records)

###  Leave → Leave Request
- Access to Leave module
- Navigation to Apply Leave page
- Form fields validation
- Navigation to My Leave List
- Table column validation

###  Recruitment → Job Vacancies
- Access to Recruitment module
- Navigation to Job Vacancies
- Vacancy list display
- Table column validation
- Filter by Closed status

---

##  Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone https://github.com/Morenoreis/CypressOrange.git
cd CypressOrange
npm install
```

### Run with UI
```bash
npx cypress open --browser electron
```

### Run headless
```bash
npx cypress run
```

### Run a specific spec
```bash
npx cypress run --spec "cypress/e2e/admin.cy.js"
```

---

##  Architecture

This project follows the **Page Object Model (POM)** pattern:

- Each module has its own Page Object under `cypress/support/`
- Selectors are centralized in the `elements` object of each Page
- The custom command `cy.loginViaFixture()` centralizes login across all tests
- Credentials are isolated in `cypress/fixtures/users.json`

---

##  Notes

- The demo site resets data periodically
- Some Leave tests depend on data availability in the environment
- Project is evolving — next phases will include Selenium and Playwright

---

##  Author

**Moreno Barros Reis**
QA Automation Engineer

[LinkedIn](https://www.linkedin.com/in/morenoreis/) • [GitHub](https://github.com/Morenoreis)

