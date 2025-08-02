class DashboardPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator("h6");
    this.profileIcon = page.locator("img[alt='profile picture']");
    this.myInfoLink = page.locator("a[href*='viewMyDetails']");
  }
  async verifyDashboardVisible() {
    await this.heading.waitFor();
    return this.heading.innerText();
  }

  async goToProfile() {
    await this.profileIcon.click();
    await this.myInfoLink.click();
  }
}

module.exports = { DashboardPage };
