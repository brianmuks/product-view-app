import React,{useContex} from 'react';

import {_PRODUCTS} from './../../lib/index';


 function List(props){

 

    return _PRODUCTS.map((product,key)=>(
    
    <li onClick={()=>{props.onClick(key)}}  key={key} className="row hoverable">

        <div className='col s12 center '>
        <img src={product.image} alt="" className="product-img img-responsive" />
    <div className='col s12'>
    <span className="title  blue-grey-text fa">
    {product.name}</span>
    
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

export default List;