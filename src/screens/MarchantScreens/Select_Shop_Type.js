import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CardsForShopTypeSelectionSellers from "../../components/CardsForShopTypeSelectionSellers";

const Seller_Select_Shop_Type = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();

    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
    })
    return(
        <div className="marchant_page_common_css">
         <p className='Tabs_Head'>Setup Your<br/>Marchant Account</p>
               
            <CardsForShopTypeSelectionSellers/>
        </div>
    )
}

export default Seller_Select_Shop_Type;