import { FaCheck } from "react-icons/fa";
import "./ModifierItem.scss";
import { observer } from "mobx-react-lite";
import currentItem from "../../store/current-item";

interface ModifierItemProps {
  name: string;
  quantity: number;
  price: number;
  id: number;
}

const ModifierItem: React.FC<ModifierItemProps> = observer(
  ({ name, quantity, price, id }) => {
    return (
      <div className={`modifier-item ${quantity > 0 ? "active" : ""}`}>
        <div className="left-block">
          <FaCheck
            className={`check-icon ${quantity > 0 ? "active" : ""}`}
            onClick={() => currentItem.addModifier(id)}
          />
          <span>{name}</span>
        </div>
        <div className="right-block">
          {quantity > 0 && (
            <div className="quant-regul">
              <button
                onClick={() => currentItem.decrementModifierQuantity(id)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => currentItem.incrementModifierQuantity(id)}>+</button>
            </div>
          )}
          <span>{price} ₴</span>
        </div>
      </div>
    );
  }
);

export default ModifierItem;
