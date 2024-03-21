import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserVerification } from "../../action/verificationAction";
import MessageBox from "../../components/MessageBox";

const Verification_marchant = () => {
    var retrieve_SellerReg_Page1Obj = localStorage.getItem('Seller_Registration_Info');
    var retrieve_SellerReg_Page1Obj_main= JSON.parse(retrieve_SellerReg_Page1Obj);
    const [retrieve_SellerReg_Page1Obj_main_state, set_retrieve_SellerReg_Page1Obj_main] = useState(retrieve_SellerReg_Page1Obj_main);
    const [otpInput, setOTPInput] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const getUserVerificationOTP =  useSelector((state) => state.getOtp);
    const { getOtp } = getUserVerificationOTP;

    useEffect(()=>{
        if(!userInfo){
            history.push('/')
        }else{
         
            dispatch(getUserVerification(userInfo.phnNo));
        }
    },[])
    const handleSubmit = (e) =>{
        //history.push('/seller_select_shop_type') //getOtp
        e.preventDefault();
        //console.log("otp from input = "+ otpInput);
        //setOTPFromDB(verificationsOTP.OTP);
        //console.log("OTP from DB: "+ (getOtp[0].OTP));
       if(getOtp[0].OTP==otpInput){
            history.push('/seller_shop_details_create')
        }else{
            alert("OTP does not match");
        }
    }

    const OTPVal = (e) => {
        //setOTPFromInput(e.target.value)
        e.preventDefault();
       setOTPInput(e.target.value);
       
        //console.log(setOTPFromInput)
    }
    const Verification_form = () =>{       
            return(
                <>
               
                <p className='Tabs_Head'>Setup Your<br/>Marchant Account</p>
                <h3 className="Tabs_Head">Verification Code</h3>
                <form className="form" onSubmit={handleSubmit}>
                <div >
               
                    <input type="number" name="otp" value={otpInput} autoFocus="autoFocus"
                        onChange={(e)=>OTPVal(e)}
                    ></input>
                 
                    
                </div>
                <button className="btn_marchant_account">Confirm</button>
                </form>
                <div>
                <br />
                <a href="#">Didn't receive the code?</a><br />
               
                </div>
                </>
          
        )
    }
    return(
        <div className="marchant_page_common_css">
            {retrieve_SellerReg_Page1Obj_main_state ? 
                 <Verification_form/>
            
            :
            history.push('/marchant_registration') 
        }
             
        </div>
    )
}

export default Verification_marchant;