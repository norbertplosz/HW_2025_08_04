import { Product } from './product';

export enum OrderStatus {
  New = "Új",
  Processing = "Feldolgozás alatt",
  Shipped = "Kiszállítva"
}

export class Order {
  private status: OrderStatus = OrderStatus.New;

  constructor(
    private _id: string,
    private _products: Product[]
  ) {}

  updateStatus(newStatus: OrderStatus): void {
    this.status = newStatus;
  }

  get totalAmount(): number {
    return this._products.reduce((sum, product) => sum + product.price, 0);
  }

  get orderId(): string {
    return this._id;
  }

  get orderStatus(): OrderStatus {
    return this.status;
  }

  get orderedProducts(): Product[] {
    return this._products;
  }
}