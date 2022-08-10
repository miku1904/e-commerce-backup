import React from "react";
import style from "./CartProduct.module.css";
import toycar from "../../asert/ToyCar.svg";

const CartProduct = () => {
  return (
    <div className={style.cartpagemain}>
      <div className={style.middelsection}>
        <div className={style.cartpagecontain}>
          <div className={style.CartPRoductImgMain}>
            <img src={toycar} className={style.CartPRoductImg}></img>
          </div>
          <div className={style.CartProductSideSection}>
            <h5>Product Name : Toycar</h5>
            <p>Promo Code: 10521</p>
            <div className={style.MainPriceButton}>
              <div className={style.ProductPrizeMain}>
                <p> price : $1500</p>
                <p className={style.ProductPrize}>$2000</p>
              </div>
              <div className={style.prductQty}>
                <ul class="pagination justify-content-end set_quantity">
                  <li class="page-item">
                    <button class="btn btn-primary">-</button>
                  </li>
                  <li class="page-item">
                    <input
                      type="text"
                      className={style.QtyInput}
                      value="0"
                      id="textbox"
                    />
                  </li>
                  <li class="page-item">
                    <button class="btn btn-primary">+</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={style.cartpagecontain}>
          <div className={style.CartPRoductImgMain}>
            <img src={toycar} className={style.CartPRoductImg}></img>
          </div>
          <div className={style.CartProductSideSection}>
            <h5>Product Name : Toycar</h5>
            <p>Promo Code: 10521</p>
            <div className={style.MainPriceButton}>
              <div className={style.ProductPrizeMain}>
                <p> price : $1500</p>
                <p className={style.ProductPrize}>$2000</p>
              </div>
              <div className={style.prductQty}>
                <ul class="pagination justify-content-end set_quantity">
                  <li class="page-item">
                    <button class="btn btn-primary">-</button>
                  </li>
                  <li class="page-item">
                    <input
                      type="text"
                      className={style.QtyInput}
                      value="0"
                      id="textbox"
                    />
                  </li>
                  <li class="page-item">
                    <button class="btn btn-primary">+</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={style.cartpagecontain}>
          <div className={style.CartPRoductImgMain}>
            <img src={toycar} className={style.CartPRoductImg}></img>
          </div>
          <div className={style.CartProductSideSection}>
            <h5>Product Name : Toycar</h5>
            <p>Promo Code: 10521</p>
            <div className={style.MainPriceButton}>
              <div className={style.ProductPrizeMain}>
                <p> price : $1500</p>
                <p className={style.ProductPrize}>$2000</p>
              </div>
              <div className={style.prductQty}>
                <ul class="pagination justify-content-end set_quantity">
                  <li class="page-item">
                    <button class="btn btn-primary">-</button>
                  </li>
                  <li class="page-item">
                    <input
                      type="text"
                      className={style.QtyInput}
                      value="0"
                      id="textbox"
                    />
                  </li>
                  <li class="page-item">
                    <button class="btn btn-primary">+</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

            <div className={style.cartpagecontain}>
              <div className={style.CartPRoductImgMain}>
                <img src={toycar} className={style.CartPRoductImg}></img>
              </div>
              <div className={style.CartProductSideSection}>
                <h5>Product Name : Toycar</h5>
                <p>Promo Code: 10521</p>
                <div className={style.MainPriceButton}>
                  <div className={style.ProductPrizeMain}>
                    <p> price : $1500</p>
                    <p className={style.ProductPrize}>$2000</p>
                  </div>
                  <div className={style.prductQty}>
                    <ul class="pagination justify-content-end set_quantity">
                      <li class="page-item">
                        <button class="btn btn-primary">-</button>
                      </li>
                      <li class="page-item">
                        <input
                          type="text"
                          className={style.QtyInput}
                          value="0"
                          id="textbox"
                        />
                      </li>
                      <li class="page-item">
                        <button class="btn btn-primary">+</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className={style.cartsidesection}>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div className={style.pricetotal}>
          <div className={style.PeiceTotalQty}>
            <p>price  :</p>
            <p> (1 item)</p>
          </div>
          <p>₹1500</p>
        </div>
        <hr/>
        <div className={style.pricetotalAmount}>
          <p>Total Amount</p>
          <p>₹1500</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
