//shopNames

import { DOKAN_LIST_FAIL, DOKAN_LIST_REQUEST, DOKAN_LIST_SUCCESS, SHOP_LIST_FAIL, SHOP_LIST_REQUEST, SHOP_LIST_SUCCESS, SHOP_NAMES_FAIL, SHOP_NAMES_REQUEST, SHOP_NAMES_SUCCESS } from "../constants/shopConstant";

export const shopNamesReducer = ( state = { loading: true, shops: [] },
    action) => {
    switch (action.type) {
      case SHOP_NAMES_REQUEST:
        return { loading: true };
      case SHOP_NAMES_SUCCESS:
        return { loading: false, shops: action.payload};
      case SHOP_NAMES_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const shopListsReducer = ( state = { loading: true, shops: [] },
    action) => {
    switch (action.type) {
      case SHOP_LIST_REQUEST:
        return { loading: true };
      case SHOP_LIST_SUCCESS:
        return { loading: false, shops: action.payload};
      case SHOP_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const dokanListsReducer = ( state = { loading: true, dokans: [] },
    action) => {
    switch (action.type) {
      case DOKAN_LIST_REQUEST:
        return { loading: true };
      case DOKAN_LIST_SUCCESS:
        return { loading: false, dokans: action.payload};
      case DOKAN_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };