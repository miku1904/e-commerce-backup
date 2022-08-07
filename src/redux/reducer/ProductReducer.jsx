import { FETCH_PRODUCT, ADD_PRODUCT, EDIT_Product } from "../actionType/ProductType";
let initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return [...state, action.payload];

    case ADD_PRODUCT:
      return [...state, action.payload];

    case EDIT_Product:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default productReducer;
