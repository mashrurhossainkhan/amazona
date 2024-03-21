import Axios from 'axios';
import {
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_WITHOUT_PAGINATION_FAIL,
  PRODUCT_LIST_WITHOUT_PAGINATION_REQUEST,
  PRODUCT_LIST_WITHOUT_PAGINATION_SUCCESS,
  PRODUCT_REVIEW_CREATE_FAIL,
  PRODUCT_REVIEW_CREATE_REQUEST,
  PRODUCT_REVIEW_CREATE_SUCCESS,
  PRODUCT_SUB_CATEGORY1_LIST_FAIL,
  PRODUCT_SUB_CATEGORY1_LIST_REQUEST,
  PRODUCT_SUB_CATEGORY1_LIST_SUCCESS,
  PRODUCT_SUB_CATEGORY_LIST_FAIL,
  PRODUCT_SUB_CATEGORY_LIST_REQUEST,
  PRODUCT_SUB_CATEGORY_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from '../constants/productConstants';

const API = 'https://localhost:5001';

export const listProductsWithoutPagination = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_WITHOUT_PAGINATION_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/api/products/all_products`);
    dispatch({ type: PRODUCT_LIST_WITHOUT_PAGINATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_WITHOUT_PAGINATION_FAIL,
      payload: error.message,
    });
  }
};

export const listProducts =
  ({
    seller = '',
    name = '',
    category = '',
    order = '',
    flash_sale = '',
    pageNumber = '',
    min = 0,
    max = 0,
    rating = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `${API}/api/products?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}&flash_sale=${flash_sale}`
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };

export const listProductsAll =
  ({
    seller = '',
    name = '',
    category = '',
    order = '',
    flash_sale = '',
    pageNumber = '',
    min = 0,
    max = 0,
    rating = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `${API}/api/products/all?pageNumber=${pageNumber}&seller=${seller}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}&flash_sale=${flash_sale}`
      );

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/api/add/category`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listProductSubCategories = (categoryname) => async (dispatch) => {
  dispatch({
    type: PRODUCT_SUB_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `${API}/api/add/category/subcat/${categoryname}`
    );
    dispatch({ type: PRODUCT_SUB_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_SUB_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listProductSubCategories1 =
  (subcategoryname) => async (dispatch) => {
    dispatch({
      type: PRODUCT_SUB_CATEGORY1_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `${API}/api/add/category/subcat1/${subcategoryname}`
      );
      dispatch({ type: PRODUCT_SUB_CATEGORY1_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_SUB_CATEGORY1_LIST_FAIL,
        payload: error.message,
      });
    }
  };

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(`${API}/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  var {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await Axios.post(`${API}/api/products`, userInfo, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `${API}/api/products/${product._id}`,
      product,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`${API}/api/products/${productId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: message });
  }
};

export const createReview =
  (productId, review) => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_REVIEW_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `${API}/api/products/${productId}/reviews`,
        review,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: PRODUCT_REVIEW_CREATE_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL, payload: message });
    }
  };
