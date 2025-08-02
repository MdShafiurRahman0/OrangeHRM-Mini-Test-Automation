const { LoginPage } = require("../pages/LoginPage");

async function login(page) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("Admin", "admin123");
}

module.exports = { login };
