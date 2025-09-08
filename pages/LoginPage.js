exports.LoginPage = 
class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator("button[onclick='logIn()']");
    }
    async gotoLoginPage() {
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}