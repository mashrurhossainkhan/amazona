import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  forget_password_exist_user,
  forget_password_verificaion_code,
} from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';

const ForgetPasswordForm = (props) => {
  const [phnNo, setphnNo] = useState('');
  const userForgerPassword = useSelector(
    (state) => state.userExistForForgetPass
  );
  const { loading, error, userInfoForForgetPass } = userForgerPassword;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !error && userInfoForForgetPass) {
      //send the verification code from here
      //call the ditchpatch(action_name and send the backend
      //check the resucer's varible then
      dispatch(forget_password_verificaion_code(phnNo));
      history.push('/verifyforgerpass/' + phnNo);
      // alert(theVerificationCode.theVerificationCode);
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forget_password_exist_user(phnNo));
  };

  return (
    <div className="center-div">
      {loading ? (
        <LoadingBox>Loading...</LoadingBox>
      ) : error ? (
        <>
          <MessageBox>No user found</MessageBox>
        </>
      ) : (
        <> </>
      )}
      <form className="form center-form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            id="phnNo"
            className="dialoageInput"
            placeholder="Phone No"
            required
            onChange={(e) => setphnNo(e.target.value)}
          ></input>
        </div>

        <div>
          <button className="headerBtn" type="submit">
            Reset my password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
