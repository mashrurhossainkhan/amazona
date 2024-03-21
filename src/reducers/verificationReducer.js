import { VERIFICATION_CREATE_FAIL, VERIFICATION_CREATE_REQUEST, VERIFICATION_CREATE_SUCCESS, VERIFICATION_GET_FAIL, VERIFICATION_GET_REQUEST, VERIFICATION_GET_SUCCESS } from "../constants/verificationContants";

export const verificationCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case VERIFICATION_CREATE_REQUEST:
        return { loading: true };
      case VERIFICATION_CREATE_SUCCESS:
        return { loading: false, success: true, verifications: action.payload };
      case VERIFICATION_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const verificationGetReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case VERIFICATION_GET_REQUEST:
        return { loading: true };
      case VERIFICATION_GET_SUCCESS:
        //console.log(action.payload);
        return { loading: false, getOtp: action.payload, };
      case VERIFICATION_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };