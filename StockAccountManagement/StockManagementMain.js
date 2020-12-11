/******************************************************************************************************
* @purpose  :  Ask data from user to store stock in json file,
                data: share (name,price and value);
                read and write the json file.
                This file reads user iknput and provides output
*  @Auther   : Akshay
*  @File     : StackManagementMain.js 
*  
************************************************************************************************/


const readline = require('readline-sync');
const stockAccountMan = require('./StockAccountManagementBusinessLogic');
let stock = new stockAccountMan();
stock.jsonParse('StockAccountManagement/StockAccount.json');
let flag = true;

while (flag) {
    let choice = readline.questionInt(`enter 1. to buy shares                2. print the shares report      
      3. calculations of stocks       4. exit`)
    switch (choice) {
        
        case 1:
            let company = readline.question("enter name of company: ");
            let numberOfShares = readline.questionInt("enter number of shares: ");
            let price = readline.questionInt("enter price: ");
            stock.buyShares(company, numberOfShares, price);
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