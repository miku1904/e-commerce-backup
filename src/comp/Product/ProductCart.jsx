import React, { useEffect, useState } from "react";
import style from "./ProductCart.module.css";
import CartIcon from "../../asert/Cart.svg";
import DotMenu  from "../../asert/DotMenu.svg"
import CartIconBlanck from "../../asert/CartIconBlanck.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import EditProductModal from "../modal/EditProductModal";
import { useDispatch, useSelector } from "react-redux";
import {
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { Fetch_Product } from "../../redux/action/ProductAction";
import DeletModal from "../modal/DeletModal";

const ProductCart = () => {
  // const [product, SetProduct] = useState([]);
  const [prodId, setprodId] = useState();
  const productsCollectionRef = collection(db, "Products");
  const dispatch = useDispatch();
  const productdetail = useSelector((state) => state.productReducer);


  
  const fetchProjectData = async () => {
    try {
      const q = query(collection(db, "Products"));
      const doc = await getDocs(q);
      
      doc.forEach((doc) => {
        dispatch(Fetch_Product({...doc.data(),id:doc.id}));
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  // const getProducts = async () => {
  //   const data = await getDocs(productsCollectionRef);
  //   SetProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const getProductId = (prod) =>{
      setprodId(prod);
      // console.log(prod)
  }

  return (
    <>
      {productdetail.map((prod, index) => {
        return (
          <div className={style.ProductCart} key={index}>
            <div className={style.IconImage_wrapper}>
              <div className={style.CartIconBlanck}>
                <img src={CartIconBlanck} alt="" />
              </div>
              <div className={style.ProductImage}>
                <img src={prod.ProductImg} alt="" />
              </div>
            </div>
            <div className={style.ProductDetail}>
              <div className={style.menu_wrapper}>
                <p>Promo Code : 10521</p>
                <img
                  src={DotMenu}
                  alt=""
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a
                      class="dropdown-item"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleEditProductModal "
                      onClick={() => getProductId(prod.id)}
                    >
                      Edit Product
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleDeleteProductModal"
                      onClick={() => getProductId(prod.id)}
                    >
                      Delet Product
                    </a>
                  </li>
                </ul>
                <DeletModal prodId={prodId} />
              </div>
              <h3>{prod.ProductName}</h3>
              <div className={style.ProductPriceMain}>
                <p>Price</p>
                <div className={style.ProductPrice}>
                  <h2 className={style.ProductPrize}>${prod.ProductPrice}</h2>
                  <h4 className={style.ProductDiscountPrize}>$600</h4>
                  <img src={CartIcon} className={style.CartIcon} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <EditProductModal prodId={prodId} />
    </>
  );
};

export default ProductCart;
