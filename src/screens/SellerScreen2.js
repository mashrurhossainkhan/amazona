import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../action/productAction';
import { detailsUser } from '../action/userAction';
import Footer from '../components/Footer';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import CarouselSellerCat from '../components/SellerHomeComponents/CarouselSellerCat';


export default function SellerScreen2(props) {
  const sellerId = props.sellerId;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  console.log(user);
  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
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
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);

  
  return (
    <div>
      
      <div>
        
          
          <div>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
             <></>
            ) : (
              <>
              <div>
                <div className='float-child1'>
                {user.seller.sellerHomeCat1Img? 
                  <img src={user.seller.sellerHomeCat1Img.replace(',', '')} className="homeCatImg"/>:
                  ""}
                </div>
              
                <div className='float-child2' >
                    <CarouselSellerCat 
                      catName={user.seller.sellerHomeCat1} 
                      sellerID={sellerId}/>
                  </div>      
              </div>


              <div>
                <div className='float-child1'>
                {user.seller.sellerHomeCat2Img? 
                  <img src={user.seller.sellerHomeCat2Img.replace(',', '')} className="homeCatImg"/>:
                  ""}
                </div>
              
                <div className='float-child2'>
                    <CarouselSellerCat 
                      catName={user.seller.sellerHomeCat2} 
                      sellerID={sellerId}/>
                  </div>      
              </div>


              <div>
                <div className='float-child1'>
                  {user.seller.sellerHomeCat3Img? 
                  <img src={user.seller.sellerHomeCat3Img.replace(',', '')} className="homeCatImg"/>:
                  ""}
               
                </div>
              
                <div className='float-child2'>
                    <CarouselSellerCat 
                      catName={user.seller.sellerHomeCat3} 
                      sellerID={sellerId}/>
                  </div>      
              </div>
              </>
            )}
          </div>
          
        </div>
    
    </div>
  );
}