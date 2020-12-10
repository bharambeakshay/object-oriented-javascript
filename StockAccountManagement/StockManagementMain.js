const readline = require('readline-sync');
const stockAccountMan = require('./StockAccountManagementBusinessLogic');
let stock = new stockAccountMan();
stock.jsonParse('./StockAccount.json');

//stock.value();
// stock.printReport();

let flag = true;

while (flag) {
    let choice = readline.questionInt(`enter 1. to buy shares                2. print the shares report      
      3. calculations of stocks       4. exit`)
    switch (choice) {
        case 1:
            let addCategory = readline.question("enter name of category:");
            let company = readline.question("enter name of company: ");
            let numberOfShares = readline.question("enter number of shares: ");
            let price = readline.question("enter price: ");
            stock.stockAccount(addCategory);
            stock.buyShares(addCategory, company, numberOfShares, price);
            stock.save();
            break;

        case 2:
            console.log("Printing the report: ");
            stock.printReport();
            break;

        case 3:
            console.log("printing values: ")
            stock.value();
            break;

        case 4:
            flag = false;
            process.exit(1);

        default:
            console.log('wrong choice');
    }
}