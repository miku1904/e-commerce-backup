import {
  FETCH_CARTPRODUCT,
  ADD_CARTPRODUCT,
} from "../actionType/CartActionType";

let initialState = [];



const CartproductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARTPRODUCT:
      const uState = [...state, action.payload];
      const uniqueIds = [];
      const unique = uState.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.id);
        if (!isDuplicate) {
          uniqueIds.push(element.id);
          return true;
        }
        return false;
      });
      state = unique; 
      // console.log(state);
      return state;

    case ADD_CARTPRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
};


export default CartproductReducer;