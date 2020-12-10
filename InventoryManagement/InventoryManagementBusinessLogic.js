/*******************************************************************************************************
 * @problem : Json objects of rice, pulses and wheat,  calculate total from price and weight
 * @fileName : InventoryManagementBusinessLogic.js
 * @Auther  : Akshay B 
 *******************************************************************************/

fs = require('fs');
class Inventory {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    /* @description: jsonParse
    * @purpose: it reads json file from given adress and convert it to script obj.
    * @param { data }, which has data information.
    */

    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    display() {
        console.log(this.content.Grains);
    }

    /* @description : value
    * @purpose:   it calculate value of inventory
    * @param {data}, which has data information.
    */


    value() {
        let sum = 0;
        let sum1 = 0;
        this.content.Grains.rice.forEach(element => {
            sum1 = sum1 + element.price * element.weight

        });
        let sum2 = 0;
        this.content.Grains.wheat.forEach(element => {
            sum2 = sum2 + element.price * element.weight

        });
        let sum3 = 0;
        this.content.Grains.pulse.forEach(element => {
            sum3 = sum3 + element.price * element.weight

        });

        sum = sum1 + sum2 + sum3;
        console.log('total value of rice ' + sum1 + "rs");
        console.log('total value of wheat ' + sum2 + "rs");
        console.log('total value of pulse ' + sum3 + "rs");
        console.log('total value of inventories ' + sum + "rs");
    }

    /* @description : addCategory
    * @purpose:  it creat category(empty array).
    * @param {data}, which has data information.
    */
    addCategory(category = null) {

        this.content.Grains[category] = [];
    }

    addElements(category, name, weight, price) {
        this.content.Grains[category].push({
            "name": name,
            "weight": weight,
            "price": price,

        })

    }

    saveFile() {
        fs.writeFile(this.fileName, JSON.stringify(this.content));
    }
}

module.exports = Inventory;