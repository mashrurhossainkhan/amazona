import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux';
import {
  listProductCategories,
  listProducts,
  listProductsWithoutPagination,
} from '../action/productAction';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { listHelloMallSellers, listTopSellers } from '../action/userAction';
import { Link } from 'react-router-dom';
//import Flash_Sale from "../components/Flash_sale/Flash_Sale";
import AllDokansScreen from './AllDokansScreen';
import AllWholeSellerScreen from './AllWholeSellers';
import HelloMallProduct from '../components/HelloMallProds';
import backImg from '../components/images_shopType/EIDBanner2.png';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productListWithoutPagination = useSelector(
    (state) => state.productListWithoutPagination
  );
  const { loading1, error1, products1 } = productListWithoutPagination;

  const ListHelloSeller = useSelector((state) => state.userhelloMallSellerList);
  const { loadingHelloMall, errerrorHelloMallor, usersHelloMAll } =
    ListHelloSeller;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  var [helloMalls, setHellomalls] = useState();
  /*
    const userTopSellersList = useSelector((state) => state.userTopSellersList);
    const {
        loading: loadingSellers,
        error: errorSellers,
        users: sellers,
    } = userTopSellersList;
*/
  useEffect(() => {
    //window.scrollTo(0, 0);
    dispatch(listProducts({}));
    dispatch(listHelloMallSellers());
    dispatch(listProductsWithoutPagination());
    //dispatch(listTopSellers());
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <div>
      <>
        {/*sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>*/}
        <Carousel
          className="carousel-main"
          showArrows
          autoPlay
          interval={5000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <img
            src="/BrandatozBanner/EIDBanner2.png"
            alt="Carousel"
            style={{
              objectFit: 'cover',
              backgroundColor: '#053568',
              borderRadius: '0px',
            }}
          />

          <img
            src="/BrandatozBanner/EIDBanner5.png"
            alt="Carousel"
            style={{
              objectFit: 'cover',
              backgroundColor: '#053568',
              borderRadius: '0px',
            }}
          />
        </Carousel>
      </>

      <div
        style={{
          paddingTop: '10px',
          paddingBottom: '10px',
          borderRadius: '1px',
        }}
      ></div>
      {/* 
        <h2 className="row center shoppingMalls">
          <hr />
          Shopping Malls
          <hr />
        </h2>
        <AllDokansScreen />
      

      
        <div style={{ backgroundColor: "#f0f0f0", paddingTop:"10px"}}>
        <h2 className="row center" style={{color:"#2b2b2b", marginTop: "20px"}}>WELCOME TO HELLOMALL</h2>
        <Link className="row center" style={{color: "#ffffff"}} to={`/searchhellomall/category/all`}>
                              <p className="btn_see_more_product" style={{marginTop: "5px"}}>  
                                  S e e  A L L  H E L L O M A L L  P r o d u c t S 
                                  </p>
                                </Link>    
        <div className="ProductRow center">
        {
                loading1?(
                   <LoadingBox></LoadingBox>
                ) : error1? (
                    <MessageBox variant="danger">{error1}</MessageBox>
                ) :(
                  products1.map((product) => ( 
                    product.seller=="62c1793214503d6712428ce4"?// 61f1725b0e1b598abb387649
                      <Product key={product._id} product={product}></Product>:""
                  ))
                )}
          </div>
       </div>
  
        <div style={{ backgroundColor: "#ffffff", padding:"20px"}}>
        <h2 className="row center" style={{color:"#2b2b2b", marginTop: "20px"}}> W h o l e s e l l e r s</h2>
        <AllWholeSellerScreen/>
        </div>
           */}
      {/* <Flash_Sale/> 
      <div style={{ backgroundColor: '#ffffff', padding: '20px' }}>
        <p className="homepageHeadsCat">Featured category</p>
        <div className="rowFlexStart">
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            categories.reverse().map((c, index) =>
              c === "Women's Fashion" ||
              c === 'Health & Beauty' ||
              c === "Men's Fashion" ||
              c == 'Watches & Accessories' ? (
                <div key={index} className="cat_div_div">
                  <Link
                    to={`/search/category/${c}`}
                    style={{ color: '#000000' }}
                  >
                    {c === "Men's Fashion" ? (
                      <img src="/images/men.png" className="cat_home_width" />
                    ) : c === 'Health & Beauty' ? (
                      <img
                        src="/images/health.png"
                        className="cat_home_width"
                      />
                    ) : c === 'Watches & Accessories' ? (
                      <img src="/images/watch.png" className="cat_home_width" />
                    ) : c === "Women's Fashion" ? (
                      <img src="/images/women.png" className="cat_home_width" />
                    ) : (
                      ''
                    )}

                    {c}
                  </Link>
                </div>
              ) : (
                ''
              )
            )
          )}
        </div>
      </div>
*/}
      {/*
                loading?(
                    <></>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) :(
                    <div>
                    <p className="heading">Pre-ordered Product</p>
                    <>
                    {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                    <div className="row center">
                        {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                        ))}
                    </div>
                    </>
                    </div>
                )
                        */}

      {loading ? (
        <></>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <p className="homepageHeads">Products for you</p>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="ProductRow center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div className="ProductRow center">
            <Link
              style={{ color: '#ffffff' }}
              to={`/search/category/all/name/all/min/0/max/0/rating/0/order/newest/pageNumber/2/flash_sale/all`}
            >
              <p
                className="btn_see_more_product"
                style={{
                  marginTop: '15px',
                  color: '#2d2d2d',
                  fontStyle: 'bold',
                  fontFamily: 'serif sans-serif',
                }}
              >
                S e e M o r e P r o d u c t
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
