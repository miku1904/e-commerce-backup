import React from 'react'
import style from "./ProductDashBord.module.css"
import SearchIcon from "../../asert/SearchIcon.svg"
import ProductCart from './ProductCart';
import AddProduct from '../modal/AddProduct';
import EditProductModal from '../modal/EditProductModal';

const ProductDashBord = () => {
  return (
    <div className={style.ProductPageContainer}>
      <div className={style.productHeader}>
        <h1>Catalog</h1>
        <AddProduct/>
        <EditProductModal/>
      </div>
      <div className={style.Searchbar}>
        <button className={style.SearchButton}>
          <img src={SearchIcon} />
        </button>
        <input
          className={style.SearchBarInput}
          placeholder="Search among 1000+ products"
        />
      </div>
      <div className={style.ProductCartWrapper}>
        <ProductCart />
      </div>
    </div>
  );
}

export default ProductDashBord
