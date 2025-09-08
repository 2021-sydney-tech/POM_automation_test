exports.CartPage =
class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = "#tbodyid tr td";

    }

    async checkProductInCrt(productName) {
        const productInCart = await this.page.$$(this.noOfProducts);
        for(const product of productInCart) {
            console.log(await product.textContent());
            if(productName === await product.textContent()) {
                return true;
            }
        }
        return false;
    }
}