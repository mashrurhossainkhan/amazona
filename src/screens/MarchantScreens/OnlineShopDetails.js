import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserProfile } from "../../action/userAction";
import swal from 'sweetalert';

const OnlineShopDetails = () => {
    const [inputshopname, setinputshopname] =  useState('');
    const [inputshopLink, setinputshopLink] = useState('');
    var retrieve_SellerReg_Page1Obj = localStorage.getItem('Seller_Registration_Info');    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();
  
    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }
    })
      const dispatch = useDispatch();
  
    const handleShopDetails = (e) =>{
        e.preventDefault();
        var ShopTypeObject = {'email':JSON.parse(retrieve_SellerReg_Page1Obj).email,
                              'phoneNo':JSON.parse(retrieve_SellerReg_Page1Obj).phoneNo ,
                              'shoptype': JSON.parse(retrieve_SellerReg_Page1Obj).shoptype,
                              'shopName': inputshopname,
                              'shopAddress' : inputshopLink
                        };
        localStorage.setItem('Seller_Registration_Info', JSON.stringify (ShopTypeObject));
        dispatch(
          updateUserProfile({
            userId: userInfo._id,
            shopType:JSON.parse(retrieve_SellerReg_Page1Obj).shoptype,
            shopName: inputshopname,
            shopAddress:inputshopLink
          })
        );
        swal("Welcome to Dokan bhai", "Your Online Shop is Registered!, add your products now...");
        history.push('/productlist/seller')
    }

    return(
        <div className="marchant_page_common_css">           
        <form className="form" onSubmit={handleShopDetails}>
            <p className='Tabs_Head'>Setup Your<br/>Marchant Account</p>
            <div>
           
          <label>Shop Details:</label>
          <div>
            <input
              type="text"
              id="shop_name"
              className='Marchannt_reg_Input'
              placeholder="Enter Shop Name"
              required
              onChange={(e) => setinputshopname(e.target.value)}
            ></input>
          </div><br/>

          <div>
            <input
              type="text"
              id="shop_name"
              className='Marchannt_reg_Input'
              placeholder="Enter Link of Online Shop"
              required
              onChange={(e) => setinputshopLink(e.target.value)}
            ></input>
          </div><br/>

          <button className="btn_marchant_account" type="submit">
              Create
          </button>
          </div>
        </form>   
    </div>
    )
}

export default OnlineShopDetails;