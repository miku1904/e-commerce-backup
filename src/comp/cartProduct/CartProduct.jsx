import React, { useEffect } from "react";
import style from "./CartProduct.module.css";
import toycar from "../../asert/ToyCar.svg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_CartProduct } from "../../redux/action/CartAction";
import { db } from "../../firebase";

const CartProduct = () => {
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userReducer);
  const cartproduct = useSelector((state) => state.CartproductReducer);

  const fetchCartData = async () => {
    try {
      const q = query(
        collection(db, "cartproduct"),
        where("userId", "==", userdetail?.uid)
      );

      const doc = await getDocs(q);
      const data = [];

      doc.forEach(async (doc) => {
        data.push({ ...doc.data(), id: doc.id });
        dispatch(Fetch_CartProduct({ ...doc.data(), Cartid: doc.id }));
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);


  return (
    <>
      <div className={style.cartpagemain}>
        <div className={style.middelsection}> 
        {cartproduct.map((prod, index) => {
          return (
            <div className={style.cartpagecontain}>
              <div className={style.CartPRoductImgMain}>
                <img
                  src={prod.ProductImg}
                  className={style.CartPRoductImg}
                ></img>
              </div>
              <div className={style.CartProductSideSection}>
                <div className={style.RemoveMainDiv}>
                  <h5>Product Name : {prod.ProductName}</h5>
                  <button className={style.RmoveButton}>Remove</button>
                </div>
                <p>Promo Code: 10521</p>
                <div className={style.MainPriceButton}>
                  <div className={style.ProductPrizeMain}>
                    <p> price : ${prod.ProductPrice}</p>
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
          );
        })}
        </div>
        <div className={style.cartsidesection}>
          <h4>PRICE DETAILS</h4>
          <hr />
          <div className={style.pricetotal}>
            <div className={style.PeiceTotalQty}>
              <p>price :</p>
              <p> (1 item)</p>
            </div>
            <p>₹1500</p>
          </div>
          <hr />
          <div className={style.pricetotalAmount}>
            <p>Total Amount</p>
            <p>₹1500</p>
          </div>
          {/* <button class={style.PlaceOrderButton}>place order</button> */}
        </div>
      </div>
    </>
  );
};

export default CartProduct;
