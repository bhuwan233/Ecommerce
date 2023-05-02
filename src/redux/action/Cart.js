const addItemToCart = (item)=>{
    return {
        type:'addItem',
        payload:item
    }
}
const removeItemFromCart = (index)=>{
    return {
        type:'removeItem',
        payload:index
    }
}

export {addItemToCart, removeItemFromCart};