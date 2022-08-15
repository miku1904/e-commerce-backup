import React, { useEffect, useState } from "react";
import style from "./ProductCart.module.css";
import CartIcon from "../../asert/Cart.svg";
import DotMenu from "../../asert/DotMenu.svg";
import WishIcon from "../../asert/CartIconBlanck.svg";
import WishIconREd from "../../asert/WIshIConRed.svg";
import { collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import EditProductModal from "../modal/EditProductModal";
import { useDispatch, useSelector } from "react-redux";
import {
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Fetch_Product } from "../../redux/action/ProductAction";
import DeletModal from "../modal/DeletModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Add_wishProduct } from "../../redux/action/WishAction";
import { Edit_product } from "../../redux/action/ProductAction";
import { Add_CartProduct } from "../../redux/action/CartAction";
import { async } from "@firebase/util";
import { Fetch_CartProduct } from "../../redux/action/CartAction";

const ProductCart = () => {
  // console.log("Productcart")
  // const [product, SetProduct] = useState([]);
  const [prodId, setprodId] = useState();
  const productsCollectionRef = collection(db, "Products");
  const dispatch = useDispatch();
  const WishPoduct = useSelector((state) => state.WishProductReducer);
  const productdetail = useSelector((state) => state.productReducer);
  const CartproductReducer = useSelector((state) => state.CartproductReducer);

  const userdetail = useSelector((state) => state.userReducer);



  const AddToCartProduct = async (product) =>{

    try {
      let repeat = false
      CartproductReducer?.map((item)=>{
        if(item.id == product.id){
          repeat = true
        }
      })
      if(repeat == false){

        const data = await addDoc(collection(db, "cartproduct"), {
          ...product,
          userId: userdetail?.uid,
          qty: 1,
        })
        console.log(data?.id,'data')
        const pd = {...product,userId:userdetail?.uid,qty:1,cardId:data?.id}
        await setDoc(doc(db, "cartproduct", data?.id), pd)
        dispatch( Add_CartProduct(pd))
        toast.info("Add to cart successfully", { icon: "🛒"  });

      }
      else{
        toast.error("This product already added", { icon: "🛒"  });
      }
    } catch (error) {
      console.log(error, "Addtocart");
    }

  }
  const addToWishList = async (product) => {
    console.log(product);

    try {
      // console.log(userdetail?.uid)
      addDoc(collection(db, "wishlist"), {
        ...product,
        userId: userdetail?.uid,
      });
      console.log(product);
      dispatch(Add_wishProduct(product));
      toast.info("Add to wishlist successfully", { theme: "colored" });

      // const docRef = doc(db, "Products", product.id);
      // const docSnap = await updateDoc(docRef, { IsWishList: true });

      // console.log("Document data:", docSnap.data());
      // const dataId = doc.docs[0].id;
      //    updateDoc(doc(db, "Products", product.id), {
      //    IsWishList: true,
      //  });

      //  dispatch(Edit_product());

      // const q = query(collection(db, "projects"), where("id", "==", product.id));
      // const querySnapshot = await getDocs(q);
      // let docId;
      // querySnapshot.forEach((doc) => {
      //   docId = doc.id;
      // });
      // const collectionRef = doc(db, "projects", docId);
      // await updateDoc(collectionRef, {
      //   IsWishList: true,
      // });
    } catch (error) {
      console.log(error, "id");
    }
  };

  const fetchProjectData = async () => {
    try {
      const q = query(collection(db, "Products"));
      const doc = await getDocs(q);

      doc.forEach((doc) => {
        dispatch(Fetch_Product({ ...doc.data(), id: doc.id }));
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

  const getProductId = (prod) => {
    setprodId(prod);
    // console.log(prod)
  };
  const [wishListpro, setWishListpro] = useState([]);
  useEffect(() => {
    const a = [];
    WishPoduct.forEach((item) => {
      a.push(item.id);
    });

    setWishListpro(a);
  }, []);

  console.log(wishListpro);

  return (
    <>
      {productdetail.map((prod, index) => {
        return (
          <div className={style.ProductCart} key={index}>
            <div className={style.IconImage_wrapper}>
              <div className={style.CartIconBlanck}>
                {wishListpro.includes(prod.id) ? (
                  <>
                    <img
                      src={WishIconREd}
                      alt=""
                      type="button"
                      onClick={() => addToWishList(prod)}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={WishIcon}
                      alt=""
                      type="button"
                      onClick={() => addToWishList(prod)}
                    />
                  </>
                )}
              </div>
              <div className={style.ProductImage}>
                <img src={prod.ProductImg} alt="" />
              </div>
            </div>
            <div className={style.ProductDetail}>
              <div className={style.menu_wrapper}>
                <p>Promo Code : 10521</p>
                {userdetail.role === "admin" && (
                  <img
                    src={DotMenu}
                    alt=""
                    type="button"
                    class="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                )}
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
                  <img
                    src={CartIcon}
                    className={style.CartIcon}
                    type="button"
                    onClick={() => AddToCartProduct(prod)}
                    alt=""
                  ></img>
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
