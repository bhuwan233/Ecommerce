import { applyMiddleware, combineReducers, createStore } from "redux";
import products from "./redux/reducer/Product";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import manageCart from "./redux/reducer/Cart";
import CategoryReducer from "./redux/reducer/Categories";

const store = createStore(combineReducers({
    productState: products,
    cartState: manageCart,
    CategoryState:CategoryReducer
}),composeWithDevTools(applyMiddleware(thunk)))

export default store;