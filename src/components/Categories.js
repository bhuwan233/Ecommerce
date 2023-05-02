import React, { useEffect } from 'react'
import '../css/Categories.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../redux/action/Categories';
import ProductCard from './ProductCard';
import ProductCardForCategories from './ProductCardForCategories';
const Categories = () => {
    const categories = useSelector(store=>store.CategoryState.categories);    
    const dispatch = useDispatch();
    const categoryProducts = useSelector(store=>store.CategoryState.categoryProducts);

    useEffect(()=>{
        dispatch(getAllCategories());
    },[]);

    function handleAccordionClick (e) {
        let btn = e.target;
        btn.classList.toggle("categories-active");
        var panel = btn.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            console.log('req if :: ', panel.scrollHeight + "px" );
            panel.style.maxHeight = 100 + "%";
            // panel.style.maxHeight = panel.scrollHeight +'px';
        } 
    }
    // if(categories.lenght !== 0){
        return (
            <div className='categories-maincontainer'>
            <h2 className='categories-heading'>Product Categories</h2>
            {
                categories.map((category)=>{
                    return(
                        <div key={category}>
                        <button className="categories-accordion" onClick={(e)=>handleAccordionClick(e)}>{category}</button>
                        <div className="categories-panel">
                            {
                                <ProductCardForCategories category={category}/>
                            }
                        </div>
                        </div>
                    )
                })
            }
            
            </div>
          )
    // }else{
    //     return (
    //         <div className='categories-maincontainer'>
    //         <h2 className='categories-heading'>Loading...</h2>
    //         </div>
    //     )
    // }
    
}

export default Categories