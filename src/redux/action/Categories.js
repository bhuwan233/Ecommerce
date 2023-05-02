import axios from "axios"

const getAllCategories = ()=>{
    return async (dispatch) => {
        const {data} = await axios.get('https://dummyjson.com/products/categories');
        dispatch({type:'getAllCategories', payload:data})
    }
}
export {getAllCategories};