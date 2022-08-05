import React from 'react'
// import style from "./WIshProduct.module.css";
import CartIcon from "../../asert/Cart.svg";
import WishIcon from "../../asert/CartIconBlanck.svg";
import WishIconREd from "../../asert/WIshIConRed.svg"
import toy from "../../asert/ToyCar.svg"
import style from "../Product/ProductCart.module.css"

const WishProduct = () => {
  return (
    <>
      {/* {productdetail.map((prod, index) => {
        return ( */}
      <div
        className={style.ProductCart}
        //   key={index}
      >
        <div className={style.IconImage_wrapper}>
          <div className={style.CartIconBlanck}>
            <img
              src={WishIconREd}
              alt=""
              type="button"
              //   onClick={() => addToWishList(prod)}
            />
          </div>
          <div className={style.ProductImage}>
            <img src={toy} alt="" />
          </div>
        </div>
        <div className={style.ProductDetail}>
          <div className={style.menu_wrapper}>
            <p>Promo Code : 10521</p>
          </div>
          {/* <h3>{prod.ProductName}</h3>    */}
          <div className={style.ProductPriceMain}>
            <p>Price</p>
            <div className={style.ProductPrice}>
              <h2 className={style.ProductPrize}>${}</h2>
              <h4 className={style.ProductDiscountPrize}>$600</h4>
              <img src={CartIcon} className={style.CartIcon} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </>
  );
}

export default WishProduct;
