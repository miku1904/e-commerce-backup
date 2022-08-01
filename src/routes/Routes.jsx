import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "../comp/dashboard/Dashbord";
import WishList from "../comp/WishProduct/WishList";
import ProductDashBord from "../comp/Product/ProductDashBord";
import CartProduct from "../comp/cartProduct/CartProduct";
import SignIn from "../comp/signIn/SigIn";
import SignUp from "../comp/signUp/SignUp";
import { useDispatch, useSelector } from "react-redux";



function ApplicationRoutes() {
  const userDetail = useSelector((state) => state.userReducer);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {console.log(userDetail, "userDetail")} */}
          <Route exact path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/* {
            userDetail.user?<Route path="/dashboard" element={<Dashbord />}/>:<Route path="/dashboard" element={<SignIn />}/>
          } */}
          {/* {
            userDetail.name&&<Route path="/dashboard" element={<Dashbord />}/>
          } */}
          {userDetail.name && (
            <Route
              path="/productdashboard"
              element={
                <Dashbord>
                  <ProductDashBord />
                </Dashbord>
              }
            />
          )}
          {userDetail.name && (
            <Route
              path="/WishListdashboard"
              element={
                <Dashbord>
                  <WishList />
                </Dashbord>
              }
            />
          )}
          {userDetail.name && (
            <Route
              path="/Cartdashboard"
              element={
                <Dashbord>
                  <CartProduct />
                </Dashbord>
              }
            />
          )}

          {/* <Route path="*" element={<SignIn />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ApplicationRoutes;
