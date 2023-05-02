const categories = {
    categories:[]
};
const CategoryReducer = (state=categories, action)=>{
    switch(action.type){
        case 'getAllCategories': return {...state, categories:action.payload};
        default : return state; 
    }
}

export default CategoryReducer;