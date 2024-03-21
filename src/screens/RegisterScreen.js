import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phnNo, setphnNo] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  var sucessmessage='';
  const isSeller = false;

  /*const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';*/
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();
    useEffect (() => {
      if(userInfo){
        history.push('/');
      }
    })
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
     
      dispatch(register(name, email,phnNo, password, isSeller));

     /* setTimeout(function(){
        window.location.replace("/");
     }, 1500);//wait 2 seconds
     
     */
    }
  };
  /*
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  */
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <p className='Tabs_Head'>Create Account</p>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <input
            type="text"
            id="name"
            className='dialoageInput'
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            id="phoneNo"
            className='dialoageInput'
            placeholder="Enter Your Phone No"
            required
            onChange={(e) => setphnNo(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="email"
            className='dialoageInput'
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="password"
            className='dialoageInput'
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            className='dialoageInput'
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="btn_tabs" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          <label />
          <div>
            {/* 
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
            */}
          </div>
        </div>
      </form>
      <Link to="/marchant_registration" className='link_tabs' target={"_blank"}>Register as a Marchant</Link>
    </div>
  );
}