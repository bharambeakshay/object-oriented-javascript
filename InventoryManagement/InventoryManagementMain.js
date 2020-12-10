const Inventory = require('./InventoryManagementBusinessLogic');
let invent = new Inventory();
invent.jsonParse('InventoryManagement/InventoryManagement.json');
invent.display();
invent.value();
