import React, { useEffect, useState } from 'react'
// import style from "./WIshProduct.module.css";
import CartIcon from "../../asert/Cart.svg";
import WishIcon from "../../asert/CartIconBlanck.svg";
import HeartRegular from "../../asert/HeartRegular.svg";
import HeartSolid from "../../asert/HeartSolid.png"
import WishIconREd from "../../asert/WIshIConRed.svg"
import toy from "../../asert/ToyCar.svg"
import style from "../Product/ProductCart.module.css"
import { collection, getDocs  } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Fetch_wishProduct } from '../../redux/action/WishAction';
import {Delete_WishProduct} from '../../redux/action/WishAction';
// import { async } from '@firebase/util';

const WishProduct = () => {
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userReducer);
  const [products,setProducts] = useState([])
  const fetchWishListData = async () => {
    // console.log("fetchWishListData")
    try {
      // dispatch(Delete_WishProduct());
  
      const q = query(collection(db, "wishlist"), where("userId", "==", userdetail?.uid));
      const doc = await getDocs(q);
      const data = []
   
      doc.forEach(async(doc) => {
         data.push({...doc.data()})
        dispatch(Fetch_wishProduct({...doc.data()}));
      });
      dispatch(Fetch_wishProduct(data));
      setProducts(data)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWishListData();
    // console.log("useEffect")
  }, []);

  return (
    <>
     {products.map((prod, index) => {
        return (
          <div className={style.ProductCart} key={index}>
            <div className={style.IconImage_wrapper}>
              <div className={style.CartIconBlanck}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                {/* <img src={HeartRegular} alt="" type="button" style={{"width":"25px",margin:"10px"}} className={style.heartIcon}/> */}
              </div>
              <div className={style.ProductImage}>
                <img src={prod.ProductImg} alt="" />
              </div>
            </div>
            <div className={style.ProductDetail}>
              <div className={style.menu_wrapper}>
                <p>Promo Code : 10521</p>
                <img
                  // src={DotMenu}
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
                      // onClick={() => getProductId(prod.id)}
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
                      // onClick={() => getProductId(prod.id)}
                    >
                      Delet Product
                    </a>
                  </li>
                </ul>
                {/* <DeletModal prodId={prodId} /> */}
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
    </>
  );
}

export default WishProduct;
