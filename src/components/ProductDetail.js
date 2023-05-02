import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSelectedProduct, removeSelectedProduct } from '../redux/action/Product';
import '../css/ProductDetail.css';
import { addItemToCart } from '../redux/action/Cart';

const ProductDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [showlist, setShowlist] = useState(false);
    const selectedProductDetails = useSelector(store=>store.productState.selectedProductDetails);
    

    //const [cartItem, setCartItem] = useState({id:'', thumbnail:'', productName:'', productBrand:'', quantity:1, price:0});
    const [imagesList, setImagesList] = useState([]);

    useEffect(()=>{
      dispatch(getSelectedProduct(id))
      return ()=> dispatch(removeSelectedProduct());
    },[]);

    useEffect(()=>{
      if(selectedProductDetails.images != undefined){
        setImagesList(selectedProductDetails.images);
        setShowlist(true);
      }
    },[selectedProductDetails]);

    useEffect(()=>{
      if(imagesList.length != 0){
        showSlides(slideIndex);
      }
    },[imagesList]);

    let slideIndex = 1;
    

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      console.log("slides :: ", slides[0].className);
      let dots = document.getElementsByClassName("dot");
      console.log("dots :: ", dots);
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      console.log('dots at slideIndex-1 :: '+dots[slideIndex-1]);
      dots[slideIndex-1].className += " active";
    }
    
    function handleAddItemToCart(){
        dispatch(addItemToCart({id:selectedProductDetails.id, 
          thumbnail:selectedProductDetails.thumbnail,
          title:selectedProductDetails.title,
          Brand:selectedProductDetails.brand,
          quantity:1,
          price:selectedProductDetails.price
        }));
    }

    if(showlist){
      return (
        <div className='proddetails-maincontainer'>
          
          <div className='proddetials-image-section'>
            <div className="slideshow-container">
    
            {
              imagesList.map((imageSrc,i)=>{
                return (
                  <div className="mySlides fade" key={i}>
                    <img src={imageSrc} style={{width:'100%'}} />
                    {/* <div className="text">Caption Text</div> */}
                  </div>
                );
              })
            }
            
            <p className="prev" onClick={()=>plusSlides(-1)}>❮</p>
            <p className="next" onClick={()=>plusSlides(1)}>❯</p>
    
            <br/>
    
            <div style={{textAlign:'center'}}>
            {
              imagesList.map((imageSrc, i)=>{
                return(
                  <span className="dot" onClick={()=>currentSlide(i+1)} key={i}></span>
                )})
            }
            </div>
            
            </div>
          </div>
    
          <div className='proddetails-content'>
          <div className='proddetails-title'> {selectedProductDetails.brand} {selectedProductDetails.title} </div>
          <hr/>
          <div className='proddetails-description-container'>
            <div className='proddetails-description'> {selectedProductDetails.description} </div>
            <div className='proddetails-description-rating'> Rating: {selectedProductDetails.rating}/5 </div>  
          </div>
          <div className='proddetails-addtocart'>
             <div className='proddetails-price'>Price: ${selectedProductDetails.price}</div>
             <button className='proddetails-addtocardbtn' onClick={(e)=>handleAddItemToCart()}>Add To Cart +</button> 
          </div>
          <p style={{color:'#00e943bd', fontWeight:'800', marginTop:'5px'}}>In Stock!</p>
          <div className='proddetails-extra-details'> Free Delievery </div>
          </div>
        </div>
      )
    }else{
      return (
      <div className='proddetails-loadingContainer'> 
      <h1>Loading...</h1>
      </div>
      );
    }
  
}

export default ProductDetail