const productState ={
    products: [
    {id:1, name:'Iphone', category:'smartphone'},
    {id:2, name:'Iphone', category:'smartphone'},
    {id:3, name:'Iphone', category:'smartphone'},
    {id:4, name:'Iphone', category:'smartphone'},
    {id:5, name:'Iphone', category:'smartphone'},
    {id:6, name:'Iphone', category:'smartphone'},
    {id:7, name:'Iphone', category:'smartphone'},
    {id:8, name:'Iphone', category:'smartphone'},
    {id:9, name:'Iphone', category:'smartphone'},
    {id:10, name:'Iphone', category:'smartphone'},
    {id:11, name:'Iphone', category:'smartphone'},
    {id:12, name:'Iphone', category:'smartphone'},
    {id:13, name:'Iphone', category:'smartphone'},
    ],
    selectedProductDetails:{}
};
const products = (state=productState, action) => {
    switch(action.type){
        case 'addAllProducts': return {...state,products:action.payload};
        case 'filterProductList': return {...state,products:action.payload};
        case 'selectedProductDetails': return {...state, selectedProductDetails: action.payload};
        case 'removeSelectedProduct': return {...state, selectedProductDetails: {}};
        default : return state;
    }
}

export default products;