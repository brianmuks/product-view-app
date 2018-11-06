import React,{useEffect,useContext} from 'react';


    import ListDetails from './ListDetails'
    import {hideProductDetailsPage
         } from './../../redux/actions'

import {ProductContext} from '../../ProductContext';
import {initMaterialbox} from './../../utilities/form' 
     

function ProductDetails(props){

    useEffect(()=>{
        initMaterialbox()
      });


    const {productDetailsDisplay,dispatch} = useContext(ProductContext)
    const display = productDetailsDisplay.display;

    useEffect(()=>{
        console.log('productDetailsDisplayStatus',productDetailsDisplay)
    })


    return(
        
        <div className='navbar-fixed '>
        <nav>
        <div className="nav-wrapper white ">
  <ul className={`collection product-details   col s4 m6  lighten-3 fixed scale-transition  ${display}`}>
  <ListDetails onClick={()=>{dispatch(hideProductDetailsPage())}}  />
</ul>
</div>
</nav>
        </div>

    )

}



export default ProductDetails