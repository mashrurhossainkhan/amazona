import Axios from 'axios';
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_HELLO_MALL_SELLER_FAIL,
  USER_DETAILS_HELLO_MALL_SELLER_REQUEST,
  USER_DETAILS_HELLO_MALL_SELLER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SELLER_FAIL,
  USER_DETAILS_SELLER_REQUEST,
  USER_DETAILS_SELLER_SUCCESS,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_WHOLE_SELLER_FAIL,
  USER_DETAILS_WHOLE_SELLER_REQUEST,
  USER_DETAILS_WHOLE_SELLER_SUCCESS,
  USER_FORGETPASSWORD_FAIL,
  USER_FORGETPASSWORD_REQUEST,
  USER_FORGETPASSWORD_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_NEW_PASSWORD_FAIL,
  USER_NEW_PASSWORD_REQUEST,
  USER_NEW_PASSWORD_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_TOPSELLERS_LIST_FAIL,
  USER_TOPSELLERS_LIST_REQUEST,
  USER_TOPSELLERS_LIST_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_FAIL,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_REQUEST,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_SUCCESS,
  USER_VERIFICATION_UPDATE_FAIL,
  USER_VERIFICATION_UPDATE_REQUEST,
  USER_VERIFICATION_UPDATE_SUCCESS,
} from '../constants/userConstants';
import { createVerification } from './verificationAction';

const API = 'http://localhost:5001';

export const signin = (phnNo, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { phnNo, password } });
  try {
    const { data } = await Axios.post(`${API}/api/users/signin`, {
      phnNo,
      password,
    });

    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const forget_password_verificaion_code = (phnNo) => async (dispatch) => {
  dispatch({
    type: USER_VERIFICATION_CODE_FORGET_PASSWORD_REQUEST,
    payload: { phnNo },
  });
  try {
    const { data } = await Axios.post(
      `${API}/api/smsgateway/forgetpassword/${phnNo}`
    );

    dispatch({
      type: USER_VERIFICATION_CODE_FORGET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_VERIFICATION_CODE_FORGET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//NEW PASSWORD UPDATE STARTS
export const new_password_verificaion_code =
  (phnNo, password) => async (dispatch) => {
    dispatch({ type: USER_NEW_PASSWORD_REQUEST, payload: { phnNo } });
    try {
      const { data } = await Axios.put(
        `${API}/api/users/newpassword/${phnNo}`,
        { password }
      );
      dispatch({ type: USER_NEW_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_NEW_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
//NEW PASSWORD UPDATE ENDS

//FORGET PASSWORD EXIST CHECKING STARTS
export const forget_password_exist_user = (phnNo) => async (dispatch) => {
  dispatch({ type: USER_FORGETPASSWORD_REQUEST, payload: { phnNo } });
  try {
    const { data } = await Axios.get(
      `${API}/api/users/exist_user_with_phn_num/${phnNo}`
    );

    dispatch({ type: USER_FORGETPASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_FORGETPASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//FORGET PASSWORD EXIST CHEKING ENDS

export const register =
  (name, email, phnNo, password, isSeller) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { name, email, phnNo, password, isSeller },
    });
    try {
      var OTP = Math.floor(1000 + Math.random() * 9000);
      const { data } = await Axios.post(`${API}/api/users/register`, {
        name,
        email,
        phnNo,
        password,
        isSeller,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      dispatch(createVerification({ phnNo: phnNo, OTP: OTP }));
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signout = () => (dispatch) => {
  //const history = useHistory();
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  window.location.href = '/';
  dispatch({ type: USER_SIGNOUT });
};

export const detailsUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${API}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
  }
};

//
export const detailsSellerUsers = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_SELLER_REQUEST, payload: userId });

  try {
    const { data } = await Axios.get(`${API}/api/users/${userId}`, {});
    dispatch({ type: USER_DETAILS_SELLER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_SELLER_FAIL, payload: message });
  }
};

/*all wholesale sellerts starts*/
export const listWholeSellers = () => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_WHOLE_SELLER_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/users/all-wholesale`);
    dispatch({ type: USER_DETAILS_WHOLE_SELLER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_WHOLE_SELLER_FAIL, payload: message });
  }
};

/* all wholesale sellerts ends*/

/*all HELLO MALL sellerts starts*/
export const listHelloMallSellers = () => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_HELLO_MALL_SELLER_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/users/all-hellomall`);
    dispatch({ type: USER_DETAILS_HELLO_MALL_SELLER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_HELLO_MALL_SELLER_FAIL, payload: message });
  }
};

/* all HELLO MALL sellerts ends*/

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`${API}/api/users/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.removeItem('Seller_Registration_Info');
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
  }
};

//CREATE ID IS VERIFIED OR NOT
//REDUCER AND STORE SHOULD BE CREATED FOR THIS AND IT IN NOT IN USE FOR NOW
//WILL HAVE TO IMPLEMENT ID THE USER IS VERIFIED IN USER PROFILE AS WELL
export const updateUserProfileFORVERIFICARION =
  (user) => async (dispatch, getState) => {
    dispatch({ type: USER_VERIFICATION_UPDATE_REQUEST, payload: user });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      //console.log(user)
      const { data } = await Axios.put(`${API}/api/users/verifyuser`, user, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: USER_VERIFICATION_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_VERIFICATION_UPDATE_FAIL, payload: message });
    }
  };

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(`${API}/api/users`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const deleteUser = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_DELETE_REQUEST, payload: userId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.delete(`${API}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${userInfo?.token}` },
    });
    dispatch({ type: USER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DELETE_FAIL, payload: message });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`${API}/api/users/${user._id}`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_FAIL, payload: message });
  }
};

export const listTopSellers = () => async (dispatch) => {
  dispatch({ type: USER_TOPSELLERS_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/users/top-sellers`);
    dispatch({ type: USER_TOPSELLERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_TOPSELLERS_LIST_FAIL, payload: message });
  }
};
