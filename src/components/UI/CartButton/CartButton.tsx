import { observer } from "mobx-react-lite";
import ordersStore from "../../../store/orders-store";
import "./CartButton.scss";
import { BsBasket2 } from "react-icons/bs";

const CartButton = observer(() => {
  return (
    <div className="cart-button">
      <div className="cart-button--total-price">{ordersStore.ordersTotalSum} &#8372;</div>
      <div className="cart-button--amount-items">
        <BsBasket2 className="cart-button--amount-items__cart-icon" />
        <span className="cart-button--amount-items__amount-span">
          {ordersStore.orders.length}
        </span>
      </div>
    </div>
  );
});

export default CartButton;
