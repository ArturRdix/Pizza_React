import ProductList from '../components/ProductList/ProductList';
import sushiStore from '../store/sushi-store';

const SushiPage = () => {
    
  return <ProductList click={sushiStore.clickCurrent} itemsProduct={sushiStore.sushi} />;
}

export default SushiPage;