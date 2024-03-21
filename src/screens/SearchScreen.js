import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../action/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils';

export default function SearchScreen(props) {
  const [min1, setMin1] =  useState();
  const [max1, setMax1] =  useState();
  const [catForActive,setCatForActive]=  useState();
  const {
    pageNumber = 1,
    name = 'all',
    flash_sale = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        flash_sale: flash_sale !== 'all' ? flash_sale : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber,flash_sale]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterflash_sale = filter.flash_sale || flash_sale;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}/flash_sale/${filterflash_sale}`;
  };
  return (
    <div className='SearchMain'>
       {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div style={{marginTop: "10px", marginLeft:"10px"}}>{products.length} Results  <Link style={{color: "#DE3D3A"}}  className='selectDisplayNone' to={`/search/name/`}>Remove Filter</Link></div>

        )}
      <div className="ProductRow">
     
       <div>
       {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
          
          <select
            className='selectDisplayNone'
            value={category}
            onChange={(e) => {
              props.history.push(getFilterUrl({ category: e.target.value }));
              
            }}
          >
            <option value='all'>  
                  Category </option>
                           
              {categories.map((c) => (
               
                       <option value={c} selected>{c}</option>
                   
                
                ))}
           
          </select>
            )}
        </div>

          <div>
            <select
           className='selectDisplayNone'
           value={{ min: min1, max: max1 }}
           onChange={(e) => {props.history.push(getFilterUrl({ 
              min: e.target.value.split('|')[0] , 
              max: e.target.value.split('|')[1]}));
              setMax1(e.target.value.split('|')[1]);
              setMin1(e.target.value.split('|')[0]);  
          }}
          >


{prices.map((p) => (
                 <option value={`${p.min}|${p.max}`}>
                 
                    {p.name}
               
                </option>
              ))}



          
          </select>
        </div>

        <div>
          <select
           className='selectDisplayNone'
            value={rating}
            onChange={(e) => {
              props.history.push(getFilterUrl({ rating: e.target.value }));
            }}
          >
            {ratings.map((r) => (
               <option value={r.rating}> 
                   {r.name}
                    </option>  
              ))}
            
          </select>
         
        </div>

        <div>
         
         <select
         className='sortSelect'
           value={order}
           onChange={(e) => {
             props.history.push(getFilterUrl({ order: e.target.value }));
           }}
         >
           <option value="newest">Newest Arrivals</option>
           <option value="lowest">Price: Low to High</option>
           <option value="highest">Price: High to Low</option>
           <option value="toprated">Avg. Customer Reviews</option>
         </select>
       </div>
     
      </div>

      <div className="row top" style={{marginTop: "20px"}}>
        <div className="col-1">
          <h3>Department</h3>
          <div>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              <ul>
                <li>
                  <Link
                    style={{color: "#000000"}}
                    className={'all' === catForActive ? 'active1' : 'noActive'}
                    to={getFilterUrl({ category: 'all' })}
                    onClick={()=>setCatForActive('all')}
                  >
                    Any
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}  >
                    <Link
                      className={c === catForActive ? 'active1' : 'noActive'}
                      to={getFilterUrl({ category: c })}
                      onClick={()=>setCatForActive(c)}
                    >
                      
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3>Price</h3>
            <ul>
            {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    
                     to={getFilterUrl({ min: p.min, max: p.max })}
                     className={
                       `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : 'noActive'
                     }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          <div>
            <h3>Avg. Customer Review</h3>
            <ul>
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? 'active' : 'noActive'}
                  >
                    <Rating caption={' & up'} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
            <Link style={{color: "#DE3D3A"}} to={`/search/name/`}>Remove filter</Link>
          </div>
        </div>



        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="ProductRow center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
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
            </>
          )}
        </div>
      </div>

    </div>
  );
}