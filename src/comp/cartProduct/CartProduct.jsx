import React from 'react'
import style from "./CartProduct.module.css"

const CartProduct = () => {

  return (
    <div className={style.cartpagemain}>
      <div className={style.middelsection}>
        <div className={style.cartpagecontain}></div>
        <div className={style.cartpagecontain}></div>
        <div className={style.cartpagecontain}></div>
        <div className={style.cartpagecontain}></div>
      </div>
      <div className={style.cartsidesection}></div>
    </div>
  );
}

export default CartProduct;
