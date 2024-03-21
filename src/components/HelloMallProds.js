import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { listHelloMallSellers } from "../action/userAction";
import MessageBox from "./MessageBox";
import Rating from "./Rating";

//never ussed
const HelloMallProduct = (props) => {
    const dispatch = useDispatch();
    const ListHelloSeller = useSelector((state) => state.userhelloMallSellerList);
    const { loading, error, usersHelloMAll } = ListHelloSeller;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(listHelloMallSellers());
    
    }, [dispatch]);
    const {product} = props;
 
    if (product.name != null) {
      var productName= product.name.substr(0,15);
 }


    return(
        <div key={product._id} className="cardProd">
            {
            loading?(
                <></>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) :(
                
                usersHelloMAll.map((dokan) => (
                    product.seller._id == dokan._id ?
                    
                 
    <Link to={`/product/${product._id}`}>
              
              <div >
              
                      <img className="medium1" src={product.image.split(',')[0]} alt=""/>
                 
              </div>
              
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <p className="nameHomepage">{productName}...</p>
                    
                   {/* <p className="type"><span className="TypeDisable">Type:</span> {product.category}</p>*/} 
                </Link>
            
               <div className="row center">
                 
                 {product.discounted_price > 0 ? 
                  <span>BDT  <Link to={`/product/${product._id}`} className="price"><del style={{color:"red"}}>{product.price}</del> {product.discounted_price}</Link></span> :
                  <span>BDT  <Link to={`/product/${product._id}`} className="price"> {product.price}</Link></span>
                  }
                 
             
              
            </div>
            <div className="row center">
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            </div>
    
            {/* 
            <Link style={{color: "#ffffff"}} to={`/product/${product._id}`}>
                                  <button className="btn_addtocard_home" style={{marginTop: "5px"}}>  
                                     See Details
                                      </button>
                                    </Link>*/}
            </div>
            </Link>
                    :"" 
      
                )))
                    
        }
  
        </div>
        );
}

export default HelloMallProduct;