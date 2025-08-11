import { Product } from '../models/product';

export class InventoryService {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProductById(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  findProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  findProductByName(name: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  listAllProducts(): Product[] {
    return this.products;
  }
}