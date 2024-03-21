import { SELLER_DETAILS_RESET1, SELLER_SIGNUP_FAIL1, SELLER_SIGNUP_REQUEST1, SELLER_SIGNUP_SUCCESS1 } from "../constants/SellerConstants";

export const sellerRegisterReducer1 = (state = {}, action) => {
    switch (action.type) {
      case SELLER_SIGNUP_REQUEST1:
        return { loading: true };
      case SELLER_SIGNUP_SUCCESS1:
        return { loading: false, userInfo: action.payload };
      case SELLER_SIGNUP_FAIL1:
        return { loading: false, error: action.payload };
      case SELLER_DETAILS_RESET1:
          return { loading: true };
      default:
        return state;
    }
  };