import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { new_password_verificaion_code } from '../action/userAction';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router-dom';

const NewPassword = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmNewPassword] = useState('');
  const [nonMathcedPassword, setNonMathcedPassword] = useState(1);

  const dispatch = useDispatch();
  const userForgerPassword = useSelector(
    (state) => state.userExistForForgetPass
  );
  const { loading, error, userInfoForForgetPass } = userForgerPassword;

  const history = useHistory();
  useEffect(() => {
    if (!userInfoForForgetPass) {
      history.push('/');
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setNonMathcedPassword(0);
    } else {
      setNonMathcedPassword(1);
      //new_password_verificaion_code
      dispatch(
        new_password_verificaion_code(props.match.params.phnNo, newPassword)
      );
      alert('password changed');
      history.push('/');
    }
  };

  return (
    <div className="center-div">
      {nonMathcedPassword == 0 ? (
        <MessageBox>Password Doesnt match</MessageBox>
      ) : (
        <></>
      )}
      <form className="form center-form" onSubmit={submitHandler}>
        <div>
          <input
            type="password"
            id="newPassword"
            className="dialoageInput"
            placeholder="Your new password"
            required
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            type="password"
            id="ConfirmnewPassword"
            className="dialoageInput"
            placeholder="Confirm Your new password"
            required
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <button className="headerBtn" type="submit">
            Reset your password
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
