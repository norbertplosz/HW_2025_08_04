export class Product {
  constructor(
    private _id: string,
    private _name: string,
    private _price: number,
    private _description?: string
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get description(): string | undefined {
    return this._description;
  }
}