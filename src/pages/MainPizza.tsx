import ProductList from "../components/ProductList/ProductList";
import pizzaStore from "../store/pizza-store";

const MainPizza = () => {
  return <ProductList click={pizzaStore.clickCurrent} itemsProduct={pizzaStore.pizza} />;
};

export default MainPizza;
