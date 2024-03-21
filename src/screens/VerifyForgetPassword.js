import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from "react-router-dom";

const VerifyForgetPassword = (props) => {
    const [verificationNo, setverificationNo] = useState('');
    const userForgerPasswordVerficationCode = useSelector((state) => state.verificationCodeForgetPass);
    const { loading:verficaitonCodeLoading, error:verficaitonCodeError, theVerificationCode} = userForgerPasswordVerficationCode;
    const history = useHistory();

   

    const submitHandler = (e) => {
        e.preventDefault();
     
        if(theVerificationCode.theVerificationCode == verificationNo){
            history.push('/newpassword/'+props.match.params.phnNo);
        }
      };

    return(
        <div className='center-div'>
           {verficaitonCodeLoading?
            <LoadingBox>Loading...</LoadingBox>:
            verficaitonCodeError? 
            <>
            <MessageBox>No user found</MessageBox>
            </>:
            <>
               
            </>
                }
            <form className="form center-form" onSubmit={submitHandler}>
                <div>
                    <input
                        type="text"
                        id="phnNo"
                        className='dialoageInput'
                        placeholder="Your Verification No"
                        required
                        onChange={(e) => setverificationNo(e.target.value)}
                        ></input>
                    </div>

                    <div> 
                        <button className="btn_forgetpass" type="submit">
                            Reset my password
                        </button>
                    </div>
            </form>
          
        </div>
    )
}
export default VerifyForgetPassword;