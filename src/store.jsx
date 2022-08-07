import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import userReducer from "./redux/reducer/UserReducer";
import productReducer from "./redux/reducer/ProductReducer";
import WishProductReducer from "./redux/reducer/WishReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
    userReducer,
    WishProductReducer
  
  });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;