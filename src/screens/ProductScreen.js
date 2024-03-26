import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../action/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ImageCarousel from '../components/ProductScreenComponents/ImageCarousel';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
import { BackendAPI } from '../api/backendAPI';
const ProductScreen = (props) => {
  //we are going to fetch product from redux store
  //const product = data.products.find((x) => x._id === props.match.params.id)
  /*if(!product){
        return(
            <div>
                Product Not Found!
            </div>
        );
    }*/
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);

  const addToCartHandler = () => {
    props.history.push(
      `/cart/${productId}?qty=${qty}?color=${color}?size=${size}?tenPercent=${product.preTenPercent}`
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div
            className="rowProdTop top"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="col-2-revised singleProductPageImgs">
              <ImageCarousel
                item={product.image
                  .slice(0, product.image.length - 1)
                  .split(',')}
              />
            </div>
            <div className="col-1-displayed">
              <div className="cart cart-body">
                <ul>
                  <li>
                    <div className="row">
                      <div className="name" key={product._id}>
                        {product.name}
                      </div>
                    </div>
                  </li>
                  {/*
                                <li>
                                    <div className="row">
                                    <Rating
                                        key={product._id}
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                    ></Rating>
                                    </div>
                                </li>
                                 */}
                  <li>
                    <div className="row">
                      <div className="type" key={product._id}>
                        Product ID: {product.productIdMain}
                      </div>
                      <br />
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="type" key={product._id}>
                        {product.category}
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* 
                              <h3>
                                {product.seller != null ? 
                               <a
                               style={{color:"#797979"}} 
                               key={product._id}
                               href={`/seller/${product.seller._id}`}>
                                 Seller: View Other Products of this shop
                             </a> : ""  
                              }
                              </h3>
                              */}
                  </li>
                  <li>
                    <div className="row">
                      <Rating
                        key={product._id}
                        rating={product.rating}
                        numReviews={product.numReviews}
                      ></Rating>
                    </div>
                  </li>
                  <li>
                    {product.discounted_price ? (
                      <div className="row">
                        <div className="price">
                          BDT{' '}
                          <del style={{ color: '#797979' }}>
                            {product.price}
                          </del>{' '}
                          &nbsp;
                          {product.discounted_price}
                        </div>
                      </div>
                    ) : (
                      <div className="row">
                        <div className="price">BDT {product.price}</div>
                      </div>
                    )}
                  </li>

                  <li>
                    <div className="row">
                      <div>
                        Status:{' '}
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div>
                        {product.preTenPercent ? (
                          <span className="error">
                            Pre 10 percentage payment
                          </span>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </li>

                  {/*Product Color*/}

                  <>
                    <li>
                      <div className="row">
                        {product.color && (
                          <div>
                            <span style={{ marginRight: '1vw' }}>Color : </span>
                            <select
                              value={color}
                              required
                              onChange={(e) => setColor(e.target.value)}
                            >
                              <option>Choose Color</option>
                              {product.color.split(',').map((x, index) => (
                                <option key={index}>{x}</option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </li>

                    <li>
                      <div className="row">
                        {product.size && (
                          <div>
                            <span style={{ marginRight: '1vw' }}>Size : </span>
                            <select
                              value={size}
                              required
                              onChange={(e) => setSize(e.target.value)}
                            >
                              <option>Choose Size</option>
                              {product.size.split(',').map((x, index) => (
                                <option key={index}>{x}</option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </li>
                  </>

                  {/*Product Color*/}

                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>
                            <span style={{ marginRight: '1vw' }}>qty : </span>
                            <select
                              value={qty}
                              required
                              onChange={(e) => setQty(e.target.value)}
                            >
                              <option>Choose Quantity</option>
                              {[
                                ...Array(product.countInStock)
                                  .slice(0, 15)
                                  .keys(),
                              ].map(
                                //if the count = 5, it will return 0 to 4
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>

                      {product.countInStock > 0 && (
                        <li>
                          <button
                            onClick={addToCartHandler}
                            className="addtoCardbtn"
                            style={{ margin: '.7vw' }}
                          >
                            Add to Cart
                          </button>
                          {/*<button className="addtoWishlistbtn">Add to Wishlist</button> */}
                        </li>
                      )}
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-1-side rightsideSingleProduct">
              <p>Delivery Options</p>

              <p>Home Delivery</p>
              <p className="bolded">Depends on your location</p>
              <br />
              <p>Return &amp; Warranty</p>
              <p>Warranty</p>
              <p className="bolded">{product.warenteeDays}</p>
              <br />
              <p>Return</p>
              <p className="bolded">{product.returnDays}</p>
            </div>
          </div>

          <div className="col-1-displayed" style={{ padding: '2rem' }}>
            <h2 className="name">Description: </h2>
            {/*Product Color*/}
            <>
              <div className="row">
                <ul>
                  <li>Color : {product.color}</li>
                  <li>Size : {product.size}</li>
                  <li>Material: {product.material}</li>
                  <li>Weight : {product.weight}</li>
                  <li>Sub Category : {product.sub_category}</li>
                </ul>

                {/* 
            <div><span style={{marginRight: "1vw"}}>Sub Category : </span> <br/>
                <span>
                  {product.sub_category}
                </span>
            </div>

            <div><span style={{marginRight: "1vw", fontWeight: "bold"}}>Color: <br/>
                </span>
                <span>
                  {product.color}
                </span>
            </div>
           
            <div><span style={{marginRight: "1vw"}}>Size : </span> <br/>
                <span>
                  {product.size}
                </span>                
            </div>
            
            <div><span style={{marginRight: "1vw"}}>Material : </span> <br/>
                <span>
                  {product.material}
                </span>
                
            </div>

            <div><span style={{marginRight: "1vw"}}>Weight: </span> <br/>
                <span>
                  {product.weight}
                </span>
            </div>*/}
              </div>
            </>
            {/*Product Color*/}
            <div className="productDescription">
              <pre style={{ whiteSpace: 'pre-wrap', marginLeft: '0px' }}>
                {product.description}
              </pre>
            </div>
            <div
              style={{
                backgroundColor: '#000',
                padding: '20px',
                color: '#ffffff',
              }}
            >
              <p>
                {' '}
                <span>Disclaimer: </span>The actual color of the physical
                product may slightly vary due to the deviation of lighting
                sources, photography or your device display settings. Delivery
                charges may vary as per the location, Product Size and Weight;
                we will notify before proceeding the delivery.
              </p>
            </div>
          </div>
          <div>
            {product.image
              .slice(0, product.image.length - 1)
              .split(',')
              .map((productImg, index) =>
                productImg == '/images/p1.jp' ? (
                  <p className="TypeDisableReal">End of Image</p>
                ) : (
                  <div key={index}>
                    <img
                      className="description"
                      src={BackendAPI + productImg}
                      alt="Loading..."
                    />
                  </div>
                )
              )}
          </div>
          <div>
            <h2 id="reviews">Reviews</h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="addReviewbtn" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
