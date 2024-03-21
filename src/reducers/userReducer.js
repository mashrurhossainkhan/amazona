import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_HELLO_MALL_SELLER_FAIL,
  USER_DETAILS_HELLO_MALL_SELLER_REQUEST,
  USER_DETAILS_HELLO_MALL_SELLER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
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
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_FAIL,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_REQUEST,
  USER_VERIFICATION_CODE_FORGET_PASSWORD_SUCCESS,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
        return { loading: true };
    default:
      return state;
  }
};

  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  //forget password if exist user reducer starts
  export const existUserForForgetPassReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_FORGETPASSWORD_REQUEST:
        return { loading: true };
      case USER_FORGETPASSWORD_SUCCESS:
        return { loading: false, userInfoForForgetPass: action.payload };
      case USER_FORGETPASSWORD_FAIL:
        return { loading: false, error: action.payload };

      default:
        return state;
    }
  };
  //forget password if exist users ends

  //new password starts  
  export const userUpdatePasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_NEW_PASSWORD_REQUEST:
        return { loading: true };
      case USER_NEW_PASSWORD_SUCCESS:
        return { loading: false, success: true };
      case USER_NEW_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
    
      default:
        return state;
    }
  };
  //new password ends
   //forget password if exist user reducer starts
   export const verificationCodeForgetPassReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_VERIFICATION_CODE_FORGET_PASSWORD_REQUEST:
        return { loading: true };
      case USER_VERIFICATION_CODE_FORGET_PASSWORD_SUCCESS:
        return { loading: false, theVerificationCode: action.payload };
      case USER_VERIFICATION_CODE_FORGET_PASSWORD_FAIL:
        return { loading: false, error: action.payload };

      default:
        return state;
    }
  };
  //forget password if exist users ends

  export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        //console.log(action.payload);
        return { loading: false, user: action.payload, };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  //USER_DETAILS_SELLER_REQUEST
  export const userSellerDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_SELLER_REQUEST:
        return { loading: true };
      case USER_DETAILS_SELLER_SUCCESS:
        //console.log(action.payload);
        return { loading: false, user: action.payload, };
      case USER_DETAILS_SELLER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  //end of USER_DETAILS_SELLER_REQUEST

  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_PROFILE_REQUEST:
        return { loading: true };
      case USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true };
      case USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case USER_UPDATE_PROFILE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const userListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_LIST_REQUEST:
        return { loading: true };
      case USER_LIST_SUCCESS:
        return { loading: false, users: action.payload };
      case USER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  /*list of user wholeseller reducer starts*/
  export const userWholeSellerListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_WHOLE_SELLER_REQUEST:
        return { loading: true };
      case USER_DETAILS_WHOLE_SELLER_SUCCESS:
        return { loading: false, users: action.payload };
      case USER_DETAILS_WHOLE_SELLER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  /*list of user wholeseller reducer ends*/

    /*list of user hello mall reducer starts*/
    export const userhelloMallSellerListReducer = (state = { loadingHelloMall: true }, action) => {
      switch (action.type) {
        case USER_DETAILS_HELLO_MALL_SELLER_REQUEST:
          return { loadingHelloMall: true };
        case USER_DETAILS_HELLO_MALL_SELLER_SUCCESS:
          return { loadingHelloMall: false, usersHelloMAll: action.payload };
        case USER_DETAILS_HELLO_MALL_SELLER_FAIL:
          return { loadingHelloMall: false, errerrorHelloMallor: action.payload };
        default:
          return state;
      }
    }
    /*list of user wholeseller reducer ends*/

  export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_DELETE_REQUEST:
        return { loading: true };
      case USER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case USER_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case USER_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return { loading: true };
      case USER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case USER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case USER_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const userTopSellerListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_TOPSELLERS_LIST_REQUEST:
        return { loading: true };
      case USER_TOPSELLERS_LIST_SUCCESS:
        return { loading: false, users: action.payload };
      case USER_TOPSELLERS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };