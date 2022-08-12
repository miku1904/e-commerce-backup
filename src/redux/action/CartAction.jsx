import {
  FETCH_CARTPRODUCT,
  ADD_CARTPRODUCT,
} from "../actionType/CartActionType";

  export function Fetch_CartProduct(data) {
    return {
      type: FETCH_CARTPRODUCT,
      payload: data,
    };
  }

  export function Add_CartProduct(data) {
    return {
      type: ADD_CARTPRODUCT,
      payload: data,
    };
  }