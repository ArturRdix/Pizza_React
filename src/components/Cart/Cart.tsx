import { observer } from "mobx-react-lite";
import cartModalActive from "../../store/cart-modal-active";
import { IoCloseSharp } from "react-icons/io5";
import "./Cart.scss";
import CartList from "../CartList/CartList";
import ordersStore from "../../store/orders-store";

const Cart = observer(() => {
  return (
    <div
      onClick={() => cartModalActive.closeModal()}
      className={`wrapper-cart ${cartModalActive.isActive ? "active" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="cart-main-block">
        <div className="cart-heading">
          <h2>Корзина</h2>
          <IoCloseSharp onClick={() => cartModalActive.closeModal()} />
        </div>
        {ordersStore.orders.length > 0 ? (
          <>
            <CartList />
            <div className="cart-buy-orders">
              <div className="price-info">
                <span>Всего к оплате:</span>
                <span>{ordersStore.ordersTotalSum} ₴</span>
              </div>
              <span className="buy-btn">Заказать</span>
            </div>
          </>
        ) : (
          <>
            <span className="no-items">Товары в корзине отсутсвуют</span>
          </>
        )}
      </div>
    </div>
  );
});

export default Cart;
