import React from "react";
import {Link} from 'react-router-dom'

const WholesellersShops = (props) => {
   
    return(
        <div key={props.dokan._id} className="cardProd">
        <div >
          <a href={`/seller/${props.dokan._id}`}>
          {props.dokan.seller.logo ?
           <img className="medium1" src={props.dokan.seller.logo.split(",")[0].replace("undefined","")} alt={props.dokan.seller.shopName}/>
              : <img className="medium1" src="/images/shopImages.jpeg" alt={props.dokan.seller.shopName}/>
          }
            </a>
        </div>
        <a style={{color: "black"}} href={`/seller/${props.dokan._id}`}>
      <div className="card-body">
   
          <p> {props.dokan.seller.shopName}...</p>

          {/* <p>Shop Address: {props.dokan.seller.shopAddress ? props.dokan.seller.shopAddress.substr(0,14):
                 props.dokan.seller.shopAddress
          }...</p>*/}
         
         
         <div>
      
        </div>
        
        {/*  <div className="row">
        <div className="price">Floor No: {props.dokan.seller.floorNo}</div>
        
      </div>*/}
        
      </div>
      </a>
      </div>
    )
}

export default WholesellersShops;