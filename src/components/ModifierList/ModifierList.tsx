import { observer } from "mobx-react-lite";
import currentItem from "../../store/current-item";
import ModifierItem from "../ModifierItem/ModifierItem";
import "./ModifierList.scss";

const ModifierList = observer(() => {
  return (
    <div className="modifier-list">
      {currentItem.modifier.map((e) => (
        <ModifierItem
          key={e.id}
          id={e.id}
          name={e.name}
          quantity={e.quantity}
          price={e.price}
        />
      ))}
    </div>
  );
});

export default ModifierList;
