import Axios from 'axios';
import {
  DOKAN_LIST_FAIL,
  DOKAN_LIST_REQUEST,
  DOKAN_LIST_SUCCESS,
  SHOP_LIST_FAIL,
  SHOP_LIST_REQUEST,
  SHOP_LIST_SUCCESS,
  SHOP_NAMES_FAIL,
  SHOP_NAMES_REQUEST,
  SHOP_NAMES_SUCCESS,
} from '../constants/shopConstant';
const API = 'http://localhost:5001';

export const shopNames = () => async (dispatch) => {
  dispatch({ type: SHOP_NAMES_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/newshop`);
    dispatch({ type: SHOP_NAMES_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SHOP_NAMES_FAIL, payload: message });
  }
};

export const shopNamesLists = () => async (dispatch) => {
  dispatch({ type: SHOP_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/users/all-sellers`);
    dispatch({ type: SHOP_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: SHOP_LIST_FAIL, payload: message });
  }
};

export const dokanLists = () => async (dispatch) => {
  dispatch({ type: DOKAN_LIST_REQUEST });
  try {
    const { data } = await Axios.get(`${API}/api/newshop`);
    dispatch({ type: DOKAN_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DOKAN_LIST_FAIL, payload: message });
  }
};
