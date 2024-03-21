import React from "react";
import {Link} from 'react-router-dom'

const Product1 = (props) => {
    const {product} = props;

    if (product.name != null) {
      var productName= product.name.substr(0,32);
 }
    return(
        <div key={product._id} className="cardSeller">
          <div >
            <Link to={`/product/${product._id}`}>
                  <img className="medium1" src={product.image.split(',')[0]} alt={product.name}/>
              </Link>
          </div>
        <div className="card-body">
            <Link to={`/product/${product._id}`}>
                <p className="nameHomepage">{productName}...</p>
               {/* <p className="type"><span className="TypeDisable">Type:</span> {product.category}</p>*/} 
            </Link>
        
           <div>
           
          </div>
           <div className="row">

          {product.discounted_price > 0 ? 
              <span>BDT  <Link to={`/product/${product._id}`} className="price"><del>{product.price}</del> {product.discounted_price}</Link></span> :
              <span>BDT  <Link to={`/product/${product._id}`} className="price"> {product.price}</Link></span>
              }
          
        </div>
        </div>
        </div>
        );
}

export default Product1;