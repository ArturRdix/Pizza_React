import { makeAutoObservable } from "mobx";
import pizzaItems from "../pizzaData";
import { ProductItems } from "../types";
import currentItem from "./current-item";
import currentItemModal from "./current-item-modal";

class PizzaStore {
  pizza: ProductItems[] = pizzaItems;

  constructor() {
    makeAutoObservable(this);
  }
  clickCurrent = (itemId: number): void => {
    const [currentTmp] = this.pizza.filter((item) => item.id === itemId);
    currentTmp.modifier
      ? (currentItem.modifier = currentTmp.modifier)
      : (currentItem.modifier = []);
    currentItem.current = {
      ...currentTmp,
      quantity: 1,
      idOrder: currentTmp.id + "",
      modifier: [],
    };
    currentItemModal.openModal();
  };
}
export default new PizzaStore();
