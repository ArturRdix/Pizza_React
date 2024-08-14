import { BsBasket2Fill } from "react-icons/bs";
import "./ProductItem.scss";
import { FC } from "react";
import { observer } from "mobx-react-lite";

const ProductItem: FC<any> = observer(({ name, img, price, weight, id, desc, click }) => {
  return (
    <article className="product-item" onClick={() => click(id)}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className="short-info">
        <span className="price">{price} &#8372;</span>
        <span className="weight">{weight}</span>
      </div>
      <button className="add-cart">
        Добавить <BsBasket2Fill />
      </button>
    </article>
  );
});

export default ProductItem;
