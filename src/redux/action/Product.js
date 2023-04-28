import axios from "axios";

const getAllProducts = (payload) => {
    return async (dispatch, getState) => {
        //console.log('Inside Thunk Store :: '+ JSON.stringify(getState()));
        const {data:{products}} = await axios.get('https://dummyjson.com/products');
        console.log('Inside Thunk Store :: '+ JSON.stringify(products));
        dispatch({type:'addAllProducts', payload:products})
    }
}

const getSelectedProduct = (prodId) => {
    return async (dispatch, getState) => {
        //console.log('Inside Thunk Store :: '+ JSON.stringify(getState()));
        const {data} = await axios.get(`https://dummyjson.com/products/${prodId}`);
        console.log('Inside Thunk Store :: '+ JSON.stringify(data));
        dispatch({type:'selectedProductDetails', payload:data})
    }
}

const removeSelectedProduct = () => {
    
    return ({type:'removeSelectedProduct'});
    
}

export {getAllProducts, getSelectedProduct,removeSelectedProduct};