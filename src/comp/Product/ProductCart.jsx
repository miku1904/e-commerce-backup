import React from 'react'
import style from "./ProductCart.module.css"
import ProductImage from "../../asert/ToyCar.svg"
import CartIcon from "../../asert/Cart.svg"
import CartIconBlanck from "../../asert/CartIconBlanck.svg"

const ProductCart = () => {
  return (
    <div className={style.ProductCart}>
      <div className={style.CartIconBlanck}>
        <img src={CartIconBlanck} />
      </div>
      <div className={style.ProductImage}>
        <img src={ProductImage} />
      </div>
      <div className={style.ProductDetail}>
        <p>Promo Code: 10521</p>
        <h3>Big Blue Lego jeep collection</h3>
        <div className={style.ProductPriceMain}>
          <p>Price</p>
          <div className={style.ProductPrice}>
            <h2 className={style.ProductPrize}>$400</h2>
            <h4 className={style.ProductDiscountPrize}>$600</h4>
            <img src={CartIcon} className={style.CartIcon}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart
