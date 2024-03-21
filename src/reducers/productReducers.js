const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_RESET,
    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL,
    PRODUCT_REVIEW_CREATE_REQUEST,
    PRODUCT_REVIEW_CREATE_SUCCESS,
    PRODUCT_REVIEW_CREATE_FAIL,
    PRODUCT_REVIEW_CREATE_RESET,
    PRODUCT_SUB_CATEGORY_LIST_REQUEST,
    PRODUCT_SUB_CATEGORY_LIST_SUCCESS,
    PRODUCT_SUB_CATEGORY_LIST_FAIL,
    PRODUCT_SUB_CATEGORY1_LIST_REQUEST,
    PRODUCT_SUB_CATEGORY1_LIST_SUCCESS,
    PRODUCT_SUB_CATEGORY1_LIST_FAIL,
    PRODUCT_LIST_WITHOUT_PAGINATION_REQUEST,
    PRODUCT_LIST_WITHOUT_PAGINATION_SUCCESS,
    PRODUCT_LIST_WITHOUT_PAGINATION_FAIL,
  } = require('../constants/productConstants');

  export const productListWithoutPaginationReducer = (
    state = { loading1: true, products1: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_LIST_WITHOUT_PAGINATION_REQUEST:
        return { loading1: true };
      case PRODUCT_LIST_WITHOUT_PAGINATION_SUCCESS:
        return {
          loading1: false,
          products1: action.payload.products,
        
        };
      case PRODUCT_LIST_WITHOUT_PAGINATION_FAIL:
        return { loading1: false, error1: action.payload };
      default:
        return state;
    }
  };
  
  export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const productDetailsReducer = 
  (state = {product: {}, loading: true}, 
    action) => {
    switch(action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return {loading: true};
      case PRODUCT_DETAILS_SUCCESS:
        return {loading: false, product: action.payload};
      case PRODUCT_DETAILS_FAIL:
        return {loading: false, error: action.payload};
      default: 
        return state;
    }
  };

  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productCategoryListReducer = (
    state = { loading: true, products: [] },
    action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productSubCategoryListReducer = (
  state = { loading: true, subcategories: [] },
  action
) => {
switch (action.type) {
  case PRODUCT_SUB_CATEGORY_LIST_REQUEST:
    return { loading: true };
  case PRODUCT_SUB_CATEGORY_LIST_SUCCESS:
    return { loading: false, subcategories: action.payload };
  case PRODUCT_SUB_CATEGORY_LIST_FAIL:
    return { loading: false, error: action.payload };
  default:
    return state;
}
};

export const productSubCategory1ListReducer = (
  state = { loading: true, subcategories1: [] },
  action
) => {
switch (action.type) {
  case PRODUCT_SUB_CATEGORY1_LIST_REQUEST:
    return { loading: true };
  case PRODUCT_SUB_CATEGORY1_LIST_SUCCESS:
    return { loading: false, subcategories1: action.payload };
  case PRODUCT_SUB_CATEGORY1_LIST_FAIL:
    return { loading: false, error: action.payload };
  default:
    return state;
}
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case PRODUCT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
