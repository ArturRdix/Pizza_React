import ordersStore from "../../store/orders-store";
import CartItem from "../CartItem/CartItem";
import "./CartList.scss";

const CartList = () => {
  return <div className="cart-list">
   {ordersStore.orders.map(item=>(
     <CartItem key={item.idOrder} modifier={item.modifier} idOrder={item.idOrder} name={item.name} price={item.price} quantity={item.quantity}/>
   ))}
  </div>;
};

export default CartList;
