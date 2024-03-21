import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {shopNames} from '../../action/shopAction'
import { dokanLists } from "../../action/shopAction";
import MessageBox from "../../components/MessageBox";
import swal from 'sweetalert';
import { updateUserProfile } from "../../action/userAction";

const PhysicalShopDetails = () => {
    const shopname = useSelector((state) => state.shopnames);
    const {shops} = shopname;
    const dokanList = useSelector((state) => state.dokanList);
    const { loadingDokan, errorDokan, dokans } = dokanList;
    const [inputshopname, setinputshopname] =  useState('');
    const [inputshopAddress, setinputshopAddress] = useState('');
    const [selectMarketName, setSelectMarketName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [nidorPassport, setNidorPassport] = useState('');
    const [orderInfoContactNo, setOrderInfoContactNo] = useState('');
    const [smsToNumber, setSmsToNumber] = useState('');
    const [mobileBankingTransaction, setMobileBankingTransaction] = useState('');
    const [bankAccName, setBankAccName] = useState('');
    const [bankAccNo, setBankAccNo] = useState('');
    const [block, setBlock] = useState('');
    const [floorNo, setfloorNo] = useState('');
    const [shopNo, setShopNo] = useState('');
    var retrieve_SellerReg_Page1Obj_email_issue_solution;
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
       
        var ShopTypeObject = {
                            'email': JSON.parse(retrieve_SellerReg_Page1Obj).email,
                              'phoneNo':JSON.parse(retrieve_SellerReg_Page1Obj).phoneNo ,
                              'shoptype': JSON.parse(retrieve_SellerReg_Page1Obj).shoptype,
                              'shopName': inputshopname,
                              'shopAddress': inputshopAddress,
                              'MarketName' : selectMarketName,
                              'block': block,
                              'floorNo': floorNo,
                              'shopNo': shopNo,
                              'ownerName': ownerName,
                              'ownerAddress': ownerAddress,
                              'nidorPassport': nidorPassport,
                              'orderInfoContactNo': orderInfoContactNo,
                              'smsToNumber': smsToNumber,
                              'mobileBankingTransaction': mobileBankingTransaction,
                              'bankAccName': bankAccName,
                              'bankAccNo': bankAccNo
                        };
        localStorage.setItem('Seller_Registration_Info', JSON.stringify (ShopTypeObject));
        dispatch(
          updateUserProfile({
            userId: userInfo._id,
            shopType:JSON.parse(retrieve_SellerReg_Page1Obj).shoptype,
            shopName: inputshopname,
            shopAddress:inputshopAddress,
            marketName:selectMarketName,
            block: block,
            floorNo: floorNo,
            shopNumber: shopNo,
            ownerName: ownerName,
            ownerAddress: ownerAddress,
            nidorPassport: nidorPassport,
            orderInfoContactNo: orderInfoContactNo,
            smsToNumber: smsToNumber,
            mobileBankingTransaction: mobileBankingTransaction,
            bankAccName: bankAccName,
            bankAccNo: bankAccNo
          })
        );
        //alert(JSON.parse(retrieve_SellerReg_Page1Obj).shoptype)
        swal("Welcome to Dokan bhai", "Your Physical Shop is Registered!, add your products now...");
        history.push('/productlist/seller')
        //history.push('/owner_informations')
    }
    
   useEffect(()=>{ 
    dispatch(dokanLists({}));
   },[dispatch])

    return(
        <div className="marchant_page_common_css">      
        <form className="form" onSubmit={handleShopDetails}>
            <p className='Tabs_Head'>Setup Your<br/>Marchant Account</p>
            <div>
              <label>Shop Owner and other details</label>
              <div>
                <input
                  type="text"
                  id="ownerName"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Owner Name"
                  required
                  onChange={(e) => setOwnerName(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="ownerAddress"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Owner Address"
                  required
                  onChange={(e) => setOwnerAddress(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="nidorPassport"
                  className='Marchannt_reg_Input'
                  placeholder="Enter NID or Passport"
                  required
                  onChange={(e) => setNidorPassport(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="orderInfoContactNo"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Contact No for order"
                  required
                  onChange={(e) => setOrderInfoContactNo(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="smsToNumber"
                  className='Marchannt_reg_Input'
                  placeholder="Enter contact no for SMS"
                  required
                  onChange={(e) => setSmsToNumber(e.target.value)}
                ></input>
              </div><br/>


              <div>
                <input
                  type="text"
                  id="smsToNumber"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Mobile Banking Transaction mobile No."
                  
                  onChange={(e) => setMobileBankingTransaction(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="bankAccName"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Bank Account Name."
                  
                  onChange={(e) => setBankAccName(e.target.value)}
                ></input>
              </div><br/>

              <div>
                <input
                  type="text"
                  id="bankAccNo"
                  className='Marchannt_reg_Input'
                  placeholder="Enter Bank Account No."
                  
                  onChange={(e) => setBankAccNo(e.target.value)}
                ></input>
              </div><br/>

            </div>

            <div>
            <label>Shop Details:</label>
            <div>
              <input
                type="text"
                id="shop_name"
                className='Marchannt_reg_Input'
                placeholder="Enter Shop Name"
                
                onChange={(e) => setinputshopname(e.target.value)}
              ></input>
            </div><br/>

            <div>
              <input
                type="text"
                id="shop_addres"
                className='Marchannt_reg_Input'
                placeholder="Enter Shop Address"
                
                onChange={(e) => setinputshopAddress(e.target.value)}
              ></input>
            </div><br/>

            <div style={{display: "flex", flexFlow:" row wrap"}}>
            
                {dokans === undefined || dokans.length === 0 ?  <MessageBox>No Shop Name Found</MessageBox>
                    :
                    <select style={{marginRight: "10px"}} onChange={(e) => setSelectMarketName(e.target.value)}>
                      <option>Choose market (Optional)</option>
                    {dokans.map((data) => (
                        <option >
                          {data.name}
                        </option>
                    ))}
                    </select>
                    
                    }
                <div>
                  <input
                    type="number"
                    id="floor_no"
                    className='Marchannt_reg_Input'
                    placeholder="Floor no"
                    onChange={(e) => setfloorNo(e.target.value)}
                  ></input>
                </div>
              <div>
              <input
                type="text"
                id="block"
                className='Marchannt_reg_Input'
                placeholder="block"
                onChange={(e) => setBlock(e.target.value)}
              ></input>
            </div>
            </div><br/>

            <div>
              <input
                type="text"
                id="shop_number"
                className='Marchannt_reg_Input'
                placeholder="Shop Number"
                onChange={(e) => setShopNo(e.target.value)}
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

export default PhysicalShopDetails;