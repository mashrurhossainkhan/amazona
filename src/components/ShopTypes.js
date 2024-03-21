import React from "react";
import {Link} from 'react-router-dom'

const ShopTypes = (props) => {
    const {shop} = props;

    var currentUrl = (window.location.href).split("/");
    const nameShopFromURL = currentUrl[currentUrl.length -2];
    var nameShopWSFromURL = nameShopFromURL.replace(/%20/g, " ");


    const nameShopFloorNoFromURL = currentUrl[currentUrl.length -1];
    return(   
      <>
      {nameShopFloorNoFromURL=="99"?

       nameShopWSFromURL === shop.seller.marketName? 
        <div key={shop._id} className="cardProd">
        <div >
          <a href={`/seller/${shop._id}`}>
          {shop.seller.logo ?
           <img className="medium1" src={shop.seller.logo.split(",")[0].replace("undefined","")} alt={shop.seller.shopName}/>
              : <img className="medium1" src="/images/shopImages.jpeg" alt={shop.seller.shopName}/>
          }
            </a>
        </div>
        <a style={{color: "black"}} href={`/seller/${shop._id}`}>
      <div className="card-body">
   
          <p className="canclePMargin" style={{color: "#000000", fontWeight: "bold"}}> {shop.seller.shopName}...</p>
          <p className="canclePMargin" style={{marginBottom: "2px"}}>Shop Address: {shop.seller.shopAddress ? shop.seller.shopAddress.substr(0,14):
                 shop.seller.shopAddress
          }...</p>
         
         <div>
      
        </div>
        
         <div className="row">
        <div className="price">Floor No: {shop.seller.floorNo}</div>
        
      </div>
      </div>
      </a>
      </div> : ""
     :   nameShopFloorNoFromURL != "99" ? 
      nameShopWSFromURL === shop.seller.marketName && nameShopFloorNoFromURL===shop.seller.floorNo?
      <>
       
       <div key={shop._id} className="cardProd">
       <div >
         <a href={`/seller/${shop._id}`}>
           {shop.seller.logo ?
           <img className="medium1" src={shop.seller.logo.split(",")[0].replace("undefined","")} alt={shop.seller.shopName}/>
              : <img className="medium1" src="/images/shopImages.jpeg" alt={shop.seller.shopName}/>
          }
               
           </a>
       </div>
     <div className="card-body">
   
        <p> {shop.seller.shopName}...</p>
         <p className="nameHomepage">Shop Address: {shop.seller.shopAddress ? shop.seller.shopAddress.substr(0,14):
                 shop.seller.shopAddress}...</p>
        
        <div>
       
          <a className="TypeDisable" href={`/seller/${shop._id}`}>
              Floor No: {shop.seller.floorNo}
         </a> 
       </div>
       
     </div>
     </div></> : ""
      : "" } 
      
      </>  
        );
}

export default ShopTypes;