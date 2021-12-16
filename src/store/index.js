import { combineReducers } from "redux";
import languageReducer from "./redux";

const rootReducer = combineReducers({
    languageReducer,
});

export default rootReducer;
