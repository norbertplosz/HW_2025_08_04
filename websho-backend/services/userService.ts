import { User } from '../models/user';
import { Order } from '../models/order';
import { InventoryService } from './inventoryService';

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserById(id: string): User | undefined {
    return this.users.find(u => u.id === id);
  }

  placeOrderForUser(userId: string, productIds: string[], inventory: InventoryService): Order {
    const user = this.findUserById(userId);
    if (!user) throw new Error("Felhasználó nem található.");

    return user.placeOrder(productIds, inventory);
  }

  listAllUsers(): User[] {
    return this.users;
  }
}