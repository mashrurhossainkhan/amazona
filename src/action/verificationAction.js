import {
  VERIFICATION_CREATE_FAIL,
  VERIFICATION_CREATE_REQUEST,
  VERIFICATION_CREATE_SUCCESS,
  VERIFICATION_GET_FAIL,
  VERIFICATION_GET_REQUEST,
  VERIFICATION_GET_SUCCESS,
} from '../constants/verificationContants';
import Axios from 'axios';

const API = 'http://localhost:5001';

export const createVerification =
  (varDetails) => async (dispatch, getState) => {
    dispatch({ type: VERIFICATION_CREATE_REQUEST, payload: varDetails });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await Axios.post(`${API}/api/verification`, varDetails, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: VERIFICATION_CREATE_SUCCESS, payload: data.varDetails });
    } catch (error) {
      dispatch({
        type: VERIFICATION_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserVerification = (phnNo) => async (dispatch, getState) => {
  dispatch({ type: VERIFICATION_GET_REQUEST, payload: phnNo });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`${API}/api/verification/${phnNo}`, {});
    dispatch({ type: VERIFICATION_GET_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: VERIFICATION_GET_FAIL, payload: message });
  }
};
