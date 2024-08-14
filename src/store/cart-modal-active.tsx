import { makeAutoObservable } from "mobx";

class CartModalActive {
  isActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (): void => {
    this.isActive = true;
  };

  closeModal = (): void => {
    this.isActive = false;
  };
}

export default new CartModalActive();
