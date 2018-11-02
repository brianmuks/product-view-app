import React,{useEffect} from 'react';

import {_PRODUCTS} from './../db/index'


function ProductList(){
    return(
        <div className='col m6 s12'>
  <ul className="collection">
        <List />
</ul>
</div>
    )
}


function List(){

    useEffect(()=>{
        console.log('loaded')
    });

    return _PRODUCTS.map((product,key)=>(
    
    <li  key={key} className="row">

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





export default ProductList;