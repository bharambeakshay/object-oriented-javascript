/******************************************************************************************************
* @purpose  :  Ask data from user to store stock in json file,
                data: share (name,price and value);
                read and write the json file.
* 	  
* 	
*  @Auther   : Akshay
*  @File     : StackAccountManagementBusinessLogic.js 
*  
************************************************************************************************/



const fs = require('fs');
class Share {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    /*
     * @description : jsonParse
     * @purpose:   it reads json file from given adress and convert it to script obj.
     * @param {data}, which has data information. 
     */
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    printReport() {
        console.log(this.content);
    }

    /*
     * @description : value
     * @purpose:   it calculate value of inventory
     * @param {data}, which has data information. 
     */
    value() {
        let stockSum = 0;
        this.content.Stock.forEach(element => {
            stockSum = stockSum + element.price * element.numberOfShares

        });
        this.content.Stock.forEach(element => {
            console.log(element.name + '  is rs  ' + element.price * element.numberOfShares);
        });

        console.log('total value of stocks ' + stockSum + "rs");
    }
    /*
     * @description : stockAccount
     * @purpose:  it create category(empty array).
     * @param {data}, which has data information. 
     */

    stockAccount(category = null) {

        this.content[category] = [];

    }
    /*
     * @description : buyShares
     * @purpose:   it add elements to account
     * @param {data}, which has data information. 
     */
    buyShares(category, name, numberOfShares, price) {

        this.content[category].push({
            "name": name,
            "numberOfShares": numberOfShares,
            "price": price,
        })

    }

    /*
     * @description : saveFile
     * @purpose:   it convert script object and save it to json file.
     * @param {data}, which has data information. 
     */
    save() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.content));
    }
}
// exporting class
module.exports = Share;



