import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;
  const API = 'http://localhost:5001';
  if (product.name != null) {
    var productName = product.name.substr(0, 40);
  }
  return (
    <div key={product._id} className="cardProd">
      <Link to={`/product/${product._id}`}>
        <div>
          <img
            className="medium1"
            src={API + product.image.split(',')[0]}
            alt=""
            loading="lazy"
            width="240"
            height="200"
          />
        </div>

        <div className="card-body">
          <p className="nameHomepage">{productName}...</p>
          <div className="row center">
            {product.discounted_price > 0 ? (
              <span className="price" style={{ color: '#000000' }}>
                BDT <del style={{ color: '#797979' }}>{product.price}</del>{' '}
                {product.discounted_price}
              </span>
            ) : (
              <span className="price" style={{ color: '#000000' }}>
                BDT {product.price}
              </span>
            )}
          </div>
          <div className="row center">
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
