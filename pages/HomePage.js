exports.HomePage =
class HomePage {

    constructor(page) {
        this.page = page;
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartbtn = "//a[normalize-space()='Add to cart']";
        this.cart = '//a[text()="Cart"]';
    }

    async addProductToCart(productName) {
        
        // Select a product from the list
        const productList = await this.page.$$(this.productList);
        for (let product of productList) {
            if(productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
        // Handle alert windows
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        // Click Add to cart button
        await this.page.locator(this.addToCartbtn).click();
    }

    // Go to Cart page
    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}