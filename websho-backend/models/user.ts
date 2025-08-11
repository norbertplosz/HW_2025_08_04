import { InventoryService } from '../services/inventoryService';
import { Product } from './product';
import { Order } from './order';

export interface IUser {
  placeOrder(productIds: string[], inventory: InventoryService): Order;
}

export class User implements IUser {
  constructor(
    private _id: string,
    private _name: string,
    private _email: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  placeOrder(productIds: string[], inventory: InventoryService): Order {
    const selectedProducts: Product[] = [];

    for (const id of productIds) {
      const product = inventory.findProductById(id);
      if (product) {
        selectedProducts.push(product);
      } else {
        throw new Error(`A(z) ${id} azonosítójú termék nem található.`);
      }
    }

    const orderId = `order-${Date.now()}`;
    return new Order(orderId, selectedProducts);
  }
}