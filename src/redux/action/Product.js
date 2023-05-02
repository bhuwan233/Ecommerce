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
        const {data} = await axios.get(`https://dummyjson.com/products/${prodId}`);
        dispatch({type:'selectedProductDetails', payload:data})
    }
}

const removeSelectedProduct = () => {
    return ({type:'removeSelectedProduct'});
}

const filterProducts = (productTitle) => {
    
    return async(dispatch, getState) => {
        const {data:{products}} = await axios.get(`https://dummyjson.com/products/search?q=${productTitle}`);
        //console.log('filtered Products :: ', products);
        dispatch({type:'filterProductList', payload:products});    
    } 
    
}

export {getAllProducts, getSelectedProduct,removeSelectedProduct,filterProducts};