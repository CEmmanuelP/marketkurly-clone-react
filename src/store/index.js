import { combineReducers } from "redux";
import cartReducer from "./redux";

const rootReducer = combineReducers({
    cartReducer,
});

export default rootReducer;
