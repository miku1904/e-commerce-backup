import React, { useState } from "react";
import { storage, db } from "../../firebase";
import { getDownloadURL, ref,  uploadBytesResumable } from "firebase/storage";
import {v4} from "uuid"
import { collection, addDoc } from "firebase/firestore"; 
import "./AddProduct.css"

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    ProductPrice: "",
  });
  const [productImg, setProductimg] = useState(null);

  const productImageHandler = (e) => {
    if (e.target.files[0]) {
      setProductimg(e.target.files[0]);
    }
  };

  const handlechange = (e) => {
    const value = e.target.value;
    setProductData({
      ...productData,
      [e.target.name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `product-images/${productImg.name + v4()}`);
    const upload = uploadBytesResumable(storageRef, productImg);

    upload.on("state_changed",(snapshot) =>{
      const prog = Math.round(
        (snapshot.bytesTransferred/snapshot.totalBytes) * 100
      ); 
      console.log(prog);  
      },(err)=>console.log(err),
      () =>{
        getDownloadURL(upload.snapshot.ref)
        .then(async(url)=>{
          await addDoc(collection(db, "Products"), {
            ProductName: productData.productName,
            ProductPrice: Number(productData.ProductPrice),
            ProductImg: url,
          }).catch((err) => console.log(err));
        })
      }
      )
    }
    //   )
    // },
    //   (err) =>
    //     console.log(err),
    //     ()=>{
    //       getDownloadURL(ref(storage, `product-images/${productImg.name}`))
    //       .then(async (url) => {
    //         await addDoc(collection(db, "Products"), {
    //           ProductName: productData.productName,
    //           ProductPrice: Number(productData.ProductPrice),
    //           ProductImg: url,
    //         })
    //           .catch((err) => console.log(err));
    //       });
    //   }
    // );
      
    // })
    // // uploadBytes(uploadRef, productImg)  
    //   // ref(storage, `product-images/${productImg.name + v4()}`).getDownloadURL()
    //   }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary shadow-none btn-sm ms-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add product
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handelSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    onChange={productImageHandler}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="productName"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Product Name"
                    onChange={handlechange}
                  />
                  <input
                    type="number"
                    name="ProductPrice"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Product Prize"
                    onChange={handlechange}
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Add Product
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default AddProduct;
