# Cypress Test Automation

This repository contains Cypress end-to-end test automation for resolving home work task.

## Project Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/boj21an/task.git
    cd your-repository-folder
    ```

2. Install the project dependencies:

    ```bash
    npm install
    ```

3. Run tests:

    ```bash
    npx cypress open or npx cypress run
    ```


### Task 1: Login Functionality Tests

The first set of tests focuses on validating the login functionality. 
I tried to cover both UI and API tests. 
Besides that, I created a loginAPI command for "future" testing. 
It will be more practical to log in via the API and test something in the application than to log in via the UI.


### Task 2: Environment Switching Tests

The second task involves testing environment switching. 
Depending on the `market` parameter specified in `cypress.config.js`, 
the appropriate environment (either `prod` or `stg`) will be loaded for the tests. 
For validation purpose I added C:\Users\Bojan\Projects\Logifuture\cypress\e2e\tests\envVerification.cy.js