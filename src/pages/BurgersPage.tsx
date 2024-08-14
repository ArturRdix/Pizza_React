import ProductList from "../components/ProductList/ProductList";
import burgerStore from "../store/burger-store";

const BurgersPage = () => {
  return <ProductList click={burgerStore.clickCurrent} itemsProduct={burgerStore.burger} />;
};

export default BurgersPage;
