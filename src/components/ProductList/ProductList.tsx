import ReactPaginate from "react-paginate";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
import {useEffect, useState } from "react";
import { ProductItems } from "../../types";

interface ProducctListProps {
  itemsProduct: ProductItems[];
  click: (id: number) => void;
}

const ProductList: React.FC<ProducctListProps> = ({ itemsProduct, click }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPage = 10;

  const pageCountPaginate = Math.ceil(itemsProduct.length / itemsPage);

  const handlePageClick = (e: any) => {
    setCurrentPage(e.selected);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentPage])
  return (
    <>
      <section className="product-list container">
        {itemsProduct
          .slice(currentPage * itemsPage, currentPage * itemsPage + itemsPage)
          .map((e) => (
            <ProductItem
              click={click}
              name={e.name}
              desc={e.desc}
              img={e.img}
              price={e.price}
              weight={e.weight}
              id={e.id}
              key={e.id}
            />
          ))}
      </section>
      <ReactPaginate
        className="pagination container"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPaginate}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ProductList;
