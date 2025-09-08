const {test, expect} = require('@playwright/test');

test('Handle table', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator("#productTable");

    const columns = table.locator("thead tr th"); // columns
    const colCount = await columns.count();
    console.log("Column count: " + colCount);

    const rows = table.locator("tbody tr"); // rows
    const rowCount = await rows.count();
    console.log("Row count: " + rowCount);

    // Read the data from each row on first page
    for(let i = 0; i < rowCount; i++) {
        let row = rows.nth(i);
        let tds = row.locator('td');
        
        for(let j = 0; j < await tds.count(); j++) {
            console.log(await tds.nth(j).textContent());

        }
    }

/*
    // Read the data from each row all pages : 20 items
    const totalPages = page.locator("#pagination li a");
    console.log("Total pages: " + await totalPages.count());
    for(let p = 0; p < await totalPages.count(); p++) {
        if(p > 0) {
            await totalPages.nth(p).click();
            await page.waitForTimeout(2000);
        }
        for(let i = 0; i < rowCount; i++) {
        let row = rows.nth(i);
        let tds = row.locator('td');
        
        for(let j = 0; j < await tds.count(); j++) {
            console.log(await tds.nth(j).textContent());

        }
    }
    }
    
*/

    // Select checkbox for multiple products by re-useable method
    // await selectProduct(rows, page, "Smartphone");
    // await selectProduct(rows, page, "Laptop");
    // await selectProduct(rows, page, "Tablet");
    // await expect(rows.locator("input[type='checkbox']:checked")).toHaveCount(3);
    // await page.waitForTimeout(3000);

});

//  select checkbox for multiple products by re-useable method
async function selectProduct(rows, page, productName) {
    const matchRow = rows.filter({
        has: page.locator('td', {hasText: productName})
    });
    await matchRow.locator('td input[type="checkbox"]').check();
}