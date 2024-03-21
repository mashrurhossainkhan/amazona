import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../action/productAction';
import { detailsUser } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';

export default function SellerScreen(props) {
  const sellerId = props.sellerId;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const {
    pageNumber = 1,
   
  } = useParams();
  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products, page, pages
  } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({pageNumber, seller: sellerId }));
   
  }, [dispatch, sellerId,pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
   
    return `/seller/${sellerId}/pageNumber/${filterPage}`;
  };
  return (
    < >
        {loadingProducts ? (
          <LoadingBox>Product is loading...</LoadingBox>
        ) : errorProducts ? (
          <MessageBox variant="danger">{errorProducts}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="ProductRow center">
              {products.map((product) => (
                props.sellerId == product.seller._id?
                <Product key={product._id} product={product}></Product>:""
              ))}
            </div>


            {/* pagination starts*/}
            <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            {/*pagination ends*/}
          </>
        )}
      
    </>
  );
}