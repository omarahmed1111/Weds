import titleReducer from "./title";
import categoriesReducer from "./categories";
import cardsReducer from "./cards";
import loadingReducer from "./loading";
import { currentPageReducer, cardsPerPageReducer } from "./pagination";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  title: titleReducer,
  categories: categoriesReducer,
  cards: cardsReducer,
  loading: loadingReducer,
  currentPage: currentPageReducer,
  cardsPerPage: cardsPerPageReducer,
});

export default allReducers;
