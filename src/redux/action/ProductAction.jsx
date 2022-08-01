import {
    FETCH_PRODUCT,
  } from "../actionType/ProductType";
  
  export function Fetch_Product(data) {
    return {
      type: FETCH_PRODUCT,
      payload: data,
    };
  }
  
  
  