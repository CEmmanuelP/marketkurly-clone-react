import { combineReducers } from "redux";
import shoppingBasketReducer from "./redux";

const rootReducer = combineReducers({
  shoppingBasketReducer,
});

export default rootReducer;
