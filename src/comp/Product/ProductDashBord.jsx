import React, { useEffect } from 'react'
import style from "./ProductDashBord.module.css"
import SearchIcon from "../../asert/SearchIcon.svg"
import ProductCart from './ProductCart';
import AddProduct from '../modal/AddProduct';
import { useSelector } from 'react-redux';

const ProductDashBord = () => {
  const userdetail = useSelector((state) => state.userReducer);
  useEffect(()=>{
    console.log("productDashboard")
  },[])
  return (
    <div className={style.ProductPageContainer}>
      <div className={style.productHeader}>
        <h1>Catalog</h1>
        {userdetail.role === "admin" && <AddProduct />}
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
