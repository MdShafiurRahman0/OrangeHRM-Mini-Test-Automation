const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const DashboardPage = require("../pages/DashboardPage");

test("✅ Dashboard visible test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login("Admin", "admin123");

  const dashboardPage = new DashboardPage(page);
  const heading = await dashboardPage.verifyDashboardVisible();
  expect(heading).toContain("Dashboard");
});
