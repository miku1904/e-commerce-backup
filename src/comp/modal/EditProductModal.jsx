import React, { useEffect, useState } from 'react'
import "./EditProduct.css"

const EditProductModal = ({ productdetail }) => {
  // console.log(productdetail?.ProductName);
  const [producs, setproducts] = useState();
  const [productData, setProductData] = useState({
    productName: "",
    ProductPrice: "",
  });
  // const [productImg, setProductimg] = useState(null);  
  // useEffect(() => {
  //   setproducts(productdetail);
  //   console.log(producs);
  // }, []);

  // const productImageHandler = (e) => {
  //   if (e.target.files[0]) {
  //     setProductimg(e.target.files[0]);
  //   }
  // };

  const handlechange = (e) => {
    const value = e.target.value;
    setProductData({
      ...productData,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleEditProductModal"
        aria-labelledby="exampleEditProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleEditProductLabel">
                Edit product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    // onChange={productImageHandler}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="productName"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Product Name"
                    // defaultValue={productName}
                    value={productdetail?.productName}
                    // defaultValue={productdetail?.ProductName}
                    // onChange={handlechange}
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
    </>
  );
};

export default EditProductModal
