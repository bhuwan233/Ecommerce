const userCart = {
    inCartItemsId: [],
    cart: [],
    totalItemsInCart:0,
    totalPrice: 0,
}

function manageCart(state=userCart, action){
    switch(action.type){
        case 'addItem': {
            let item = action.payload;
            let itemIndex=-1;
            if(state.inCartItemsId.find((id)=>item.id===id)!=undefined){
                let cartItem;
                
                for(cartItem of state.cart){
                    itemIndex++;
                    if(cartItem.id === item.id){
                        break
                    }
                }
                
                let quantity = item.quantity;
                item.quantity = cartItem.quantity + item.quantity;
                let newCart = [...state.cart];
                newCart.splice(itemIndex, 1, item);
                
                return {...state, 
                    cart: newCart, 
                    totalPrice: state.totalPrice + (item.price * quantity),
                    totalItemsInCart: state.totalItemsInCart+quantity
                }
            }
            else {
                    let inCartItemsIdNew = [...state.inCartItemsId ];
                    inCartItemsIdNew.push(item.id);

                    let cartNew = [...state.cart];
                    cartNew.push(item);
                    return {...state, 
                    inCartItemsId: inCartItemsIdNew, 
                    cart:cartNew, 
                    totalItemsInCart: state.totalItemsInCart + item.quantity, 
                    totalPrice: state.totalPrice+(item.price * item.quantity)}
                }
            }
        case 'removeItem': {
            console.log('inside remove :: ',action.payload);
            const index = action.payload;
            const newCart = [...state.cart];
            const item = newCart.splice(index,1); 
            const newInCartItemsId = [...state.inCartItemsId];
            const itemIdIndex = newInCartItemsId.indexOf(item[0].id);
            newInCartItemsId.splice(itemIdIndex,1);
            if(newCart.length === 0){
                return {
                    inCartItemsId: [],
                    cart: [],
                    totalItemsInCart:0,
                    totalPrice: 0,
                }
            }
            return {
                inCartItemsId:newInCartItemsId,
                cart: newCart,
                totalItemsInCart: (state.totalItemsInCart - item[0].quantity),
                totalPrice: (state.totalPrice - (item[0].price * item[0].quantity))
            }
        }
        default : return state;
    }
}

export default manageCart;