import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import userReducer from "./redux/reducer/UserReducer";
import productReducer from "./redux/reducer/ProductReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
    userReducer,
  
  });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;