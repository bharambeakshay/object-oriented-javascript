/*******************************************************************************************************
 * @problem : Json objects of rice, pulses and wheat,  calculate total from price and weight
 * @fileName : InventoryManagementMain.js
 * @Auther  : Akshay B 
 *******************************************************************************/


const Inventory = require('./InventoryManagementBusinessLogic');
let invent = new Inventory();
invent.jsonParse('InventoryManagement/InventoryManagement.json');
invent.display();
invent.value();
