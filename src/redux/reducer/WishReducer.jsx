import { FETCH_WISHPRODUCT , ADD_WISHPRODUCT, DELETE_WISHPRODUCT} from "../actionType/WishType";
let initialState = [];

const WishProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHPRODUCT:
      return [...state, action.payload];

    case ADD_WISHPRODUCT:
      return [...state, action.payload];

    case DELETE_WISHPRODUCT:
      return [];

    default:
      return state;
  }
};

export default WishProductReducer;
