import React,{useEffect,useState} from 'react';

import {_PRODUCTS} from './../db/index'

const HIDE_PRODUCT_DETAILS = 'scale-out';
const SHOW_PRODUCT_DETAILS = 'scale-in';
const HIDE_ON_PHONE_TABLET = 'hide-on-med-and-down';
function ProductList(){

    const {css,onClick} = useProductOnClick();
    const getCssDisplay  =useMediaQueryDisplay(css);

    useEffect(()=>{
        console.log(css)
    });






    return(
        <div className='col m6 s12'>

  <a id="scale-demo" href="#!" className={`btn-floating btn-large scale-transition ${css}`}>
    <i className="material-icons">add</i>
  </a>
  

  <ul className={`collection ${getCssDisplay}`}>
        <List onClick={onClick}  />
</ul>
</div>
    )
}


function List(props){


    return _PRODUCTS.map((product,key)=>(
    
    <li onClick={props.onClick}  key={key} className="row">

        <div className='col s12 center '>
        <img src={product.image} alt="" className="product-img img-responsive" />
    <div className='col s12'>
    <span className="title">Title</span>
    
    </div>

        </div>

    <div className='col s12 offset-s3'>
    <a href="#!" className="col  s1  secondary-content"><i className="material-icons">grade</i></a>
    <a href="#!" className="col  s1  secondary-content"><i className="material-icons">grade</i></a>
    <a href="#!" className="col  s1  secondary-content"><i className="material-icons">grade</i></a>
    <a href="#!" className="col  s1  secondary-content"><i className="material-icons">grade</i></a>
    <a href="#!" className="col  s1  secondary-content"><i className="material-icons">grade</i></a>
</div>


        <div className='col s9  offset-s2'>
        <span >
        <hr  className='red-line red-text col s12'/>
            </span>
        </div>

      </li>
      
    ))

}

function useProductOnClick(){
    const [isProductDetailsShow,toggleProductDetails] = useState(HIDE_PRODUCT_DETAILS)

   function onClick(){
    toggleProductDetails(
        isProductDetailsShow === HIDE_PRODUCT_DETAILS ? SHOW_PRODUCT_DETAILS   : HIDE_PRODUCT_DETAILS
        
        )

   }

    return {
        onClick:onClick,
        css:isProductDetailsShow
    }

}

function useMediaQueryDisplay(display){

    useEffect(()=>{
      
    },[display])
    return display !== HIDE_PRODUCT_DETAILS ? HIDE_ON_PHONE_TABLET : null
}




export default ProductList;