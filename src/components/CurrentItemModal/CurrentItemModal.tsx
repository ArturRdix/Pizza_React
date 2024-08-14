import { observer } from "mobx-react-lite";
import "./CurrentItemModal.scss";
import currentItem from "../../store/current-item";
import currentItemModal from "../../store/current-item-modal";
import ModifierList from "../ModifierList/ModifierList";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

const CurrentItemModal = observer(() => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentItemModal.isActiveModal) {
      if (modalContentRef.current) {
        modalContentRef.current.scrollTo(0, 0);
      }
    }
  }, [currentItemModal.isActiveModal]);
  return (
    <div
      className={`current-item--wrapper ${
        currentItemModal.isActiveModal ? "active" : ""
      }`}
      onClick={() => currentItemModal.closeModal()}
    >
      <div onClick={(e) => e.stopPropagation()} className="current-item--block">
        <IoCloseSharp onClick={() => currentItemModal.closeModal()} className="close-icon"/>
        <div className="current-item--block--content" ref={modalContentRef}>
          <img src={currentItem.current.img} alt="" />
          <h2>
            {currentItem.current.name} {currentItem.current.id}
          </h2>
          <span className="weight">{currentItem.current.weight}</span>
          <p>{currentItem.current.desc}</p>
          {currentItem.current.modifier && <ModifierList />}
        </div>
        <div className="current-item--block--add-cart">
          <div className="quantity-regul">
            <button
              disabled={currentItem.current.quantity <= 1}
              onClick={() => currentItem.decrementCurrentQuantity()}
            >
              -
            </button>
            <span>{currentItem.current.quantity}</span>
            <button onClick={() => currentItem.incrementCurrentQuantity()}>+</button>
          </div>
          <div className="add-order-block">
            <button onClick={() => currentItem.addToCart()} className="add-cart">
              <span>Добавить</span>
              <span>
                {" "}
                {(currentItem.current.price +
                  currentItem.modifier.reduce((accumulator, item) => {
                    return accumulator + item.quantity * item.price;
                  }, 0))*currentItem.current.quantity}{" "}
              </span>
              <span>₴</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CurrentItemModal;
