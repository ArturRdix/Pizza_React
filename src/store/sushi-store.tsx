import { makeAutoObservable } from "mobx";

import { ProductItems } from "../types";
import currentItem from "./current-item";
import currentItemModal from "./current-item-modal";
import sushiItems from "../sushiData";

class PizzaStore {
  sushi: ProductItems[] = sushiItems;

  constructor() {
    makeAutoObservable(this);
  }
  clickCurrent = (itemId: number): void => {
    const [currentTmp] = this.sushi.filter((item) => item.id === itemId);
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
