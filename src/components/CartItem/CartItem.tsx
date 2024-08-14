import ordersStore from "../../store/orders-store";
import { PizzaModifier } from "../../types";
import "./CartItem.scss";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  idOrder: string;
  modifier: PizzaModifier[];
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  idOrder,
  modifier,
}) => {
  const totalModifiersPrice = modifier.reduce(
    (total, mod) => total + mod.price * mod.quantity,
    0
  );
  const totalPrice = (price + totalModifiersPrice) * quantity;

  return (
    <div className="cart-item">
      <img className="img-order" src="./img/pizza.png" alt="" />
      <div className="info-order">
        <h3>
          {name} {idOrder}
        </h3>
        <div className="modify">
          {modifier.map((e) => (
            <span>
              {e.quantity}x {e.name}
            </span>
          ))}
        </div>
        <div className="price-block">
          <span>{totalPrice} ₴</span>
          <div className="quantity">
            <button
              disabled={quantity <= 1}
              onClick={() => ordersStore.removeQtyOrderItem(idOrder)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => ordersStore.addQtyOrderItem(idOrder)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
