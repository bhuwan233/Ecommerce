import { applyMiddleware, combineReducers, createStore } from "redux";
import products from "./redux/reducer/Product";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combineReducers({
    productState: products
}),composeWithDevTools(applyMiddleware(thunk)))

export default store;