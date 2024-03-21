import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { shopNamesLists } from "../action/shopAction";
import Intros from "../components/Intros";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ShopTypes from "../components/ShopTypes";

const ShopTypesScreen = (props) => {
  var currentUrl = (window.location.href).split("/");
  const nameShopFromURL = currentUrl[currentUrl.length -2];
  var nameShopWSFromURL = nameShopFromURL.replace(/%20/g, " ");
    const [floors,setFloors] = useState('');
    const dispatch = useDispatch();
    var maxFloorVal=0;
    const shopList = useSelector((state) => state.shopList);
    const { loading, error, shops } = shopList;
    var unique;

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(shopNamesLists({}));
  }, [dispatch]);


  return(
    <div>
      <Intros shopName={nameShopWSFromURL}/>
       <div >
       {loading ? (
          <LoadingBox></LoadingBox>
          ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <>
          {shops.length === 0 && (
            <MessageBox>No Shop Found</MessageBox>
          )}
        {nameShopWSFromURL!="Online Shop" ?
             
          <select
          className='selectDisplayNone'
          onChange={(e)=> props.history.push(`/shoptype/${nameShopWSFromURL}/${e.target.value}`)}
          >
          <option>Floor No</option>
          <option value={`/shoptype/${nameShopWSFromURL}/99`}>
            All Floors
            </option>

            <option  value={1}> 1</option>
            <option  value={2}> 2</option>
            <option  value={3}> 3</option>
            <option  value={4}> 4</option>
            <option  value={5}> 5</option>
            
          { /*  
             shops.map((shop,index) => (
                    nameShopWSFromURL === shop.seller.marketName ?
                      //maxFloorVal<shop.seller.floorNo?
                      //<p style={{display:"none"}}>{maxFloorVal =(shop.seller.floorNo)}</p>:""
                     <option key={index} value={shop.seller.floorNo}> {(shop.seller.floorNo)}</option>
                  : ""
                ))
             */}           
              </select>
                :<></>}
              </>
            )}
          </div>

      <div className="row top">
      
      {nameShopWSFromURL!="Online Shop" ?   
          <div className="col-1">
          <h3>Floor No:</h3>
            <ul>
            {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <>
          {shops.length === 0 && (
            <MessageBox>No Shop Found</MessageBox>
          )}
          <div>
            <li>
            <div>            
              <Link style={{color: "#000000"}} 
              className={floors === 99 ? 'active' : 'noActive'}
              onClick={()=>setFloors(99)}
              to={`/shoptype/${nameShopWSFromURL}/99`}>All shops</Link>
            </div>  
            </li>  

            <li>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === 1 ? 'active' : 'noActive'}
                 onClick={()=>setFloors(1)}
                 to={`/shoptype/${nameShopWSFromURL}/${1}`}
                >
                  Floor No: {1}
                </Link>
              </li>

              <li>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === 2 ? 'active' : 'noActive'}
                 onClick={()=>setFloors(2)}
                 to={`/shoptype/${nameShopWSFromURL}/${2}`}
                >
                  Floor No: {2}
                </Link>
              </li>

              <li>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === 3 ? 'active' : 'noActive'}
                 onClick={()=>setFloors(3)}
                 to={`/shoptype/${nameShopWSFromURL}/${3}`}
                >
                  Floor No: {3}
                </Link>
              </li>

              <li>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === 4 ? 'active' : 'noActive'}
                 onClick={()=>setFloors(4)}
                 to={`/shoptype/${nameShopWSFromURL}/${4}`}
                >
                Floor No: {4}
                </Link>
              </li>

              <li>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === 5 ? 'active' : 'noActive'}
                 onClick={()=>setFloors(5)}
                 to={`/shoptype/${nameShopWSFromURL}/${5}`}
                >
                  Floor No: {5}
                </Link>
              </li>

            {   
              /*                                  
             shops.map((shop,index) => (
                nameShopWSFromURL === shop.seller.marketName ?   
                <li key={index}>
                <Link
                  //style={{color: "#000000"}}
                 className={floors === shop.seller.floorNo ? 'active' : 'noActive'}
                 onClick={()=>setFloors(shop.seller.floorNo)}
                 to={`/shoptype/${nameShopWSFromURL}/${shop.seller.floorNo}`}
                >
                  Floor No: {shop.seller.floorNo}
                </Link>
              </li>
              : ""
            ))
             */}
              </div>
              </>
            )}
            </ul>
        </div>
      :<> </>}
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
        <>
          {shops.length === 0 && (
            <MessageBox>No Shop Found</MessageBox>
          )}
          <div className="ProductRow center">            
            {                                     
              shops.map((shop,index) => (
                <ShopTypes key={index} shop={shop}></ShopTypes>
            ))}
              </div>
              </>
            )}
      </div>
      </div>
      </div>
      );
}

export default ShopTypesScreen;