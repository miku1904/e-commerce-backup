import React, { useEffect, useState } from "react";
import style from "./ProductCart.module.css";
import CartIcon from "../../asert/Cart.svg";
import CartIconBlanck from "../../asert/CartIconBlanck.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ProductCart = () => {
  const [product, SetProduct] = useState([]);
  const productsCollectionRef = collection(db, "Products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      SetProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  return (
    <>
      {product.map((prod) => {
        return (
          <div className={style.ProductCart}>
            <div className={style.CartIconBlanck}>
              <img src={CartIconBlanck} />
            </div>
            <div className={style.ProductImage}>
              <img src={prod.ProductImg}  />
            </div>
            <div className={style.ProductDetail}>
              <p>Promo Code: 10521</p>
              <h3>{prod.ProductName}</h3>
              <div className={style.ProductPriceMain}>
                <p>Price</p>
                <div className={style.ProductPrice}>
                  <h2 className={style.ProductPrize}>{prod.ProductPrice}</h2>
                  <h4 className={style.ProductDiscountPrize}>$600</h4>
                  <img src={CartIcon} className={style.CartIcon}></img>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
