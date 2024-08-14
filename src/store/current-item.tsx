import { makeAutoObservable } from "mobx";
import { CurrentProduct, PizzaModifier } from "../types";
import currentItemModal from "./current-item-modal";
import ordersStore from "./orders-store";

class CurrentItem {
  current: CurrentProduct = {
    name: "",
    weight: "",
    desc: "",
    price: 0,
    img: "",
    id: 0,
    idOrder: "",
    quantity: 1,
    modifier: [],
  };

  modifier: PizzaModifier[] = [];

  get currentTotalSum(): number {
    return (
      (this.current.price +
        this.current.modifier.reduce(
          (acc, currentMod) => acc + currentMod.price * currentMod.quantity,
          0
        )) *
      this.current.quantity
    );
  }

  constructor() {
    makeAutoObservable(this);
  }

  get replaceIdOrder() {
    return this.getCurrentId(this.current);
  }

  getCurrentId = (item: CurrentProduct): string => {
    if (this.modifier) {
      const filteredModifiers = this.modifier.filter((mod) => mod.quantity > 0);
      filteredModifiers.sort((a, b) => a.id - b.id);
      let curretnId = item.id + "";
      curretnId +=
        "|" +
        filteredModifiers.reduce((acc, m) => (acc += "|" + m.id + "|" + m.quantity), "");
      return curretnId;
    } else {
      return `${item.id}`;
    }
  };

  addModifier = (idModifier: number): void => {
    const modifierItem = this.modifier.find((item) => item.id === idModifier);
    if (modifierItem) {
      modifierItem.quantity = modifierItem.quantity <= 0 ? 1 : 0;
    }
  };

  incrementCurrentQuantity = (): void => {
    this.current = {
      ...this.current,
      quantity: this.current.quantity + 1,
    };
  };

  decrementCurrentQuantity = (): void => {
    this.current = {
      ...this.current,
      quantity: this.current.quantity - 1,
    };
  };

  incrementModifierQuantity = (idModifier: number): void => {
    const tmpModifierItem = this.modifier.findIndex((item) => item.id === idModifier);
    this.modifier[tmpModifierItem] = {
      ...this.modifier[tmpModifierItem],
      quantity: this.modifier[tmpModifierItem].quantity + 1,
    };
  };

  decrementModifierQuantity = (idModifier: number): void => {
    const tmpModifierItem = this.modifier.findIndex((item) => item.id === idModifier);
    this.modifier[tmpModifierItem] = {
      ...this.modifier[tmpModifierItem],
      quantity: this.modifier[tmpModifierItem].quantity - 1,
    };
  };

  addToCart = (): void => {
    const filteredModifiers = this.modifier.filter((mod) => mod.quantity > 0);
    const currentIdOrder = this.getCurrentId(this.current);

    const examId = ordersStore.orders.findIndex(
      (item) => item.idOrder === currentIdOrder
    );

    if (examId !== -1) {
      ordersStore.orders[examId] = {
        ...ordersStore.orders[examId],
        quantity: ordersStore.orders[examId].quantity + this.current.quantity,
        modifier: filteredModifiers,
      };
    } else {
      this.current.idOrder = currentIdOrder;
      this.current.modifier = filteredModifiers;
      ordersStore.orders.push(this.current);
    }

    currentItemModal.closeModal();
  };
}

export default new CurrentItem();
