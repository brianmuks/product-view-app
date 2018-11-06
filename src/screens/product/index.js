import React,{useEffect,useContext,useReducer} from 'react';


import List from './List'
import ProductDetails from './ProductDetails'


import {HIDE_ON_MOBILE_ONLY,
        SHOW_ELEMENT,
        
        HIDE_ELEMENT,
        INITIAL_PRODUCT_DETAILS
         } from './../../common/constants'

import {handleProductDetailsDisplay} from './../../redux/reducers/index'

import {ProductContext} from './../../ProductContext'
import { showProductDetailsPage } from '../../redux/actions';

function ProductList(){

    const [productDetailsDisplay,dispatch] = useReducer(handleProductDetailsDisplay,INITIAL_PRODUCT_DETAILS);
    const mobileCssDisplay  =useMediaQueryDisplay(productDetailsDisplay.display);

    useEffect(()=>{
        console.log(productDetailsDisplay)
    });


    return(
        <ProductContext.Provider value={{productDetailsDisplay,dispatch}}>
        <div className='row'>

  

        <div className='col m6   s12'>
  <ul className={`collection ${mobileCssDisplay}`}>
        <List onClick={(index)=>{dispatch(showProductDetailsPage(index))}}  />
</ul>
</div>
<div>
</div>
<div className='col m6 s12'>
<ProductDetails  display={productDetailsDisplay.display} />
</div>
</div>
</ProductContext.Provider>
    )
}





function useMediaQueryDisplay(productDetailsDisplay){

    useEffect(()=>{
    },[productDetailsDisplay])
    return productDetailsDisplay === HIDE_ON_MOBILE_ONLY ? null : HIDE_ON_MOBILE_ONLY
}




export default ProductList;