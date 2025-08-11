import { Product } from './models/product';
import { InventoryService } from './services/inventoryService';
import { User } from './models/user';
import { UserService } from './services/userService';

const inventory = new InventoryService();
const userService = new UserService(inventory);

const termek1 = new Product('1', 'Laptop', 350000, 'Erős gamer laptop');
const termek2 = new Product('2', 'Egér', 8000);
const termek3 = new Product('3', 'Billentyűzet', 12000);

inventory.addProduct(termek1);
inventory.addProduct(termek2);
inventory.addProduct(termek3);

const user = new User('u1', 'Kiss Péter', 'peter@example.com');

const rendeles = userService.placeOrder(user, ['1', '2']); 

console.log('Rendelés leadva:');
console.log(rendeles);
console.log(`Rendelés összege: ${rendeles.getTotalAmount()} Ft`)