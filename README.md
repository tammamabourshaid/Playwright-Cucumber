# Playwright-Cucumber

A robust test automation framework combining **Playwright** for browser automation and **Cucumber** for behavior-driven development (BDD).

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)

## 🎯 Overview

This project integrates Playwright with Cucumber to enable writing automated tests in a BDD format using Gherkin syntax. It provides a clean separation between test scenarios (feature files) and implementation (step definitions), making tests more readable and maintainable.

## ✨ Features

- **BDD Testing**: Write tests in plain English using Gherkin syntax
- **Cross-browser Support**: Leverage Playwright's multi-browser testing capabilities
- **TypeScript**: Full TypeScript support for robust type checking
- **Modular Architecture**: Organized step definitions and support files
- **Cucumber Reports**: Formatted test output for better test reporting

## 🛠️ Tech Stack

| Technology | Percentage |
|-----------|-----------|
| **TypeScript** | 71.6% |
| **Gherkin** | 26.5% |
| **JavaScript** | 1.9% |

### Dependencies

- **Playwright**: Browser automation library supporting Chrome, Firefox, Safari, and Edge
- **Cucumber.js**: JavaScript implementation of Cucumber BDD framework
- **TypeScript**: JavaScript superset with strong typing

## 📁 Project Structure

```
Playwright-Cucumber/
├── src/
│   ├── features/              # Gherkin feature files
│   │   └── *.feature
│   └── step-definitions/      # Step implementation files
│       └── *.ts
├── support/                   # Support and helper files
│   └── *.ts
├── cucumber.js                # Cucumber configuration
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tammamabourshaid/Playwright-Cucumber.git
   cd Playwright-Cucumber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

Configure browser settings, timeouts, and test options in the `playwright.config.ts` file.

### Cucumber Configuration (`cucumber.js`)

The framework is configured to:
- Load feature files from `src/features/**/*.feature`
- Load step definitions from `src/step-definitions/**/*.ts`
- Load support files from `support/*.ts`
- Use TypeScript runtime via `ts-node/register`

## 🚀 Usage

### Running Tests

```bash
# Run all tests
npm test

# Run specific feature file
npx cucumber-js src/features/filename.feature

# Run tests with specific tag
npx cucumber-js --tags "@tagname"
```

## 📝 Writing Tests

### Feature File Example (`src/features/example.feature`)

```gherkin
Feature: User Login
  As a user
  I want to log in to the application
  So that I can access protected features

  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials
    And the user clicks the login button
    Then the user should be logged in
    And the dashboard page should be displayed
```

### Step Definition Example (`src/step-definitions/login.ts`)

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

let page: Page;

Given('the user is on the login page', async () => {
  page = await browser.newPage();
  await page.goto('https://example.com/login');
});

When('the user enters valid credentials', async () => {
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
});

When('the user clicks the login button', async () => {
  await page.click('button[type="submit"]');
});

Then('the user should be logged in', async () => {
  await page.waitForNavigation();
  expect(page.url()).toContain('/dashboard');
});

Then('the dashboard page should be displayed', async () => {
  const heading = await page.locator('h1').textContent();
  expect(heading).toBe('Dashboard');
});
```

## 🎓 Best Practices

- **Keep scenarios simple**: Each scenario should test one feature
- **Use descriptive step names**: Steps should clearly describe what they do
- **Reuse steps**: Write generic, reusable step definitions
- **Organize by feature**: Group related step definitions together
- **Use page objects**: Create page object models for better maintainability
- **Handle waits properly**: Use Playwright's built-in waiting mechanisms

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Cucumber Documentation](https://cucumber.io/docs/cucumber)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**tammamabourshaid**
- GitHub: [@tammamabourshaid](https://github.com/tammamabourshaid)

---

**Happy Testing!** 🎭🚀
