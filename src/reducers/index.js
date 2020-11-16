import titleReducer from "./title";
import categoriesReducer from "./categories";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  title: titleReducer,
  categories: categoriesReducer,
});

export default allReducers;
