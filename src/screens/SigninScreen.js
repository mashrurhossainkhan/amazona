import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function SigninScreen(props) {
  let history = useHistory();
  const [phnNo, setphnNo] = useState('');
  const [password, setPassword] = useState('');

  /*const redirect = props.location.search
  ? props.location.search.split('=')[1]
  : '/';*/

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(phnNo, password));
    history.push('/');
  };
  /*
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);*/

  const showmyPassword = (e) => {
    e.preventDefault();
    var x = document.getElementById('password');
    //alert(x.type);
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };
  return (
    <div className="loginDiv">
      <form className="form" onSubmit={submitHandler}>
        <p className="Tabs_Head">WELCOME BACK</p>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <input
            type="text"
            id="email"
            className="dialoageInput"
            placeholder="Phone No"
            required
            onChange={(e) => setphnNo(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="password"
            className="dialoageInput"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <div>
            <input type="checkbox" onClick={showmyPassword} id="show_pass" />
            <label>Show Password</label>
          </div>
          <div>
            <label />
            <button className="headerBtn" type="submit">
              Sign In
            </button>
          </div>
        </div>

        <Link to={`/register`} target="_blank" className="link_tabs">
          Create a new account
        </Link>
        <br />
        <Link to={`/forget_password`} target="_blank" className="link_tabs">
          Forgot Password?
        </Link>
        <br />
        <Link
          to="/marchant_registration"
          className="link_tabs"
          target={'_blank'}
          style={{ marginBottom: '300px' }}
        >
          Register as a Marchant.
        </Link>
      </form>
    </div>
  );
}
