import {
  SELLER_SIGNUP_FAIL1,
  SELLER_SIGNUP_REQUEST1,
  SELLER_SIGNUP_SUCCESS1,
} from '../constants/SellerConstants';
const API = 'http://localhost:5001';
export const Seller_Registration_page1 = (email, phnNo) => async (dispatch) => {
  dispatch({
    type: SELLER_SIGNUP_REQUEST1,
    payload: { email, phnNo },
  });
  try {
    const { data } = {
      email,
      phnNo,
    };
    dispatch({ type: SELLER_SIGNUP_SUCCESS1, payload: data });
    localStorage.setItem('Seller_Registration_Info', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SELLER_SIGNUP_FAIL1,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
