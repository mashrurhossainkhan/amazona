import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Hello_Mall_Agent from "./Hello_Mall_Agent";
import OnlineShopDetails from "./OnlineShopDetails";
import PhysicalShopDetails from "./PhysicalShopDetails";

const Cond_rend_shopType = () => {
    const history = useHistory();
    var retrieve_SellerReg_Page1Obj = localStorage.getItem('Seller_Registration_Info');
    useEffect(()=>{
        if(retrieve_SellerReg_Page1Obj === null){
            history.push('/')
        }
    })

    return(
        <div>
            {
            
            JSON.parse(retrieve_SellerReg_Page1Obj).shoptype === 'Physical Shop Owner' ?
                <PhysicalShopDetails/> :
            JSON.parse(retrieve_SellerReg_Page1Obj).shoptype === 'WholeSale Shop Owner' ?
                <PhysicalShopDetails/> :
            JSON.parse(retrieve_SellerReg_Page1Obj).shoptype === 'Hello Mall Agent' ?
                <Hello_Mall_Agent/> 
                : ""
            }
        </div>
    )
}

export default Cond_rend_shopType;