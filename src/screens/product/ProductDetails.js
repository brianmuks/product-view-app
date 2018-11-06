import React,{useEffect,useContext} from 'react';


    import ListDetails from './ListDetails'
    import {hideProductDetailsPage
         } from './../../redux/actions'

import {ProductContext} from '../../ProductContext';

     

function ProductDetails(props){

    useEffect(()=>{
        
      });


    const {productDetailsDisplay,dispatch} = useContext(ProductContext)
    const display = productDetailsDisplay.display;

    useEffect(()=>{
        console.log('productDetailsDisplayStatus',productDetailsDisplay)
    })


    return(
  <ul className={`collection grey lighten-3 fixed scale-transition  ${display}`}>
  <ListDetails onClick={()=>{dispatch(hideProductDetailsPage())}}  />
</ul>

    )

}



export default ProductDetails