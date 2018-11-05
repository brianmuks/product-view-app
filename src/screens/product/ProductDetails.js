import React,{useEffect,useContext} from 'react';


    import ListDetails from './ListDetails'
    import {hideProductDetailsPage
         } from './../../redux/actions'

import {ProductContext} from '../../ProductContext';


function ProductDetails(props){

    const {productDetailsDisplay,dispatch} = useContext(ProductContext)
    const display = productDetailsDisplay.display;

    useEffect(()=>{
        console.log('productDetailsDisplayStatus',display)

    })


    return(

  <ul className={`collection grey lighten-3 scale-transition ${display}`}>
  <ListDetails onClick={()=>{dispatch(hideProductDetailsPage())}}  />
</ul>
    )

}



export default ProductDetails