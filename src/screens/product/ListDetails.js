import React,{useContext} from 'react';

import {getProduct} from './../../lib/index'

import {ProductContext} from './../../ProductContext'


 function List(props){
    // getProduct

        const {productDetailsDisplay} = useContext(ProductContext);
        const productIndex = productDetailsDisplay.productIndex;

    const {name,image} = getProduct(productIndex)
    
     return <li onClick={props.onClick}   className="row">

        <div className='col s12 center '>
        <img src={image} alt="" className="product-img img-responsive" />
    <div className='col s12'>
    <span className="title  blue-grey-text fa">
    {name}</span>
    
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
      


}

export default List;