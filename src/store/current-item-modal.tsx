import { makeAutoObservable } from "mobx";

class CurrentItemModal {
  isActiveModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  
  openModal = ():void => {
    this.isActiveModal = true;
  };

  closeModal = ():void => {
    this.isActiveModal = false;
  };
}
export default new CurrentItemModal();
