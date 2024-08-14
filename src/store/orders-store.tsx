import { makeAutoObservable } from "mobx";
import { CurrentProduct } from "../types";

class OrdersStore {
  orders: CurrentProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get ordersTotalSum(): number {
    return this.orders.reduce(
      (acc, currentValue) =>
        acc +
        ((currentValue.price  +
          currentValue.modifier.reduce(
            (accM, mod) => accM + mod.price * mod.quantity,
            0
          ))* currentValue.quantity),
      0
    );
  }

  addQtyOrderItem = (idOrder: string): void => {
    const tmpItem = this.orders.findIndex((item) => item.idOrder === idOrder);
    this.orders[tmpItem] = {
      ...this.orders[tmpItem],
      quantity: this.orders[tmpItem].quantity + 1,
    };
  };
  removeQtyOrderItem = (idOrder: string): void => {
    const tmpItem = this.orders.findIndex((item) => item.idOrder === idOrder);
    this.orders[tmpItem] = {
      ...this.orders[tmpItem],
      quantity: this.orders[tmpItem].quantity - 1,
    };
  };
}
export default new OrdersStore();
