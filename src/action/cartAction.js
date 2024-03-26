import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';
import Axios from 'axios';
//const API = 'https://backend.dokanbhai.dokanbhai.com:3002';
const API = 'http://localhost:5001';

export const addtoCart =
  (productId, qty, sz, clr, tenPercentage) => async (dispatch, getState) => {
    var mainPrice;
    const { data } = await Axios.get(`${API}/api/products/${productId}`);
    if (data.discounted_price) {
      mainPrice = data.discounted_price;
    } else {
      mainPrice = data.price;
    }
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: mainPrice,
        countInStock: data.countInStock,
        product: data._id,
        seller: data.seller,
        qty,
        clr,
        sz,
        tenPercentage,
      },
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
