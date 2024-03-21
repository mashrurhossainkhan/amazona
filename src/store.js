import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducer';
import { productCategoryListReducer, productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productListWithoutPaginationReducer, productReviewCreateReducer, productSubCategory1ListReducer, productSubCategoryListReducer, productUpdateReducer } from './reducers/productReducers';
import { sellerRegisterReducer1 } from './reducers/SellerReducer';
import { dokanListsReducer, shopListsReducer, shopNamesReducer } from './reducers/shopNameReducer';
import { existUserForForgetPassReducer, userDeleteReducer, userDetailsReducer, userhelloMallSellerListReducer, userListReducer, userRegisterReducer, userSellerDetailsReducer, userSigninReducer, userTopSellerListReducer, userUpdatePasswordReducer, userUpdateProfileReducer, userUpdateReducer, userWholeSellerListReducer ,verificationCodeForgetPassReducer} from './reducers/userReducer';
import { verificationCreateReducer, verificationGetReducer } from './reducers/verificationReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },

    cart:{
        cartItems: localStorage.getItem('cartItems')
        ?JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse (localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'sslCommerz'
    }
};

const reducer = combineReducers({
    productListWithoutPagination: productListWithoutPaginationReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    shopnames : shopNamesReducer,
    userSignin: userSigninReducer,
    verificationCodeForgetPass: verificationCodeForgetPassReducer,
    userExistForForgetPass: existUserForForgetPassReducer,
    userRegister: userRegisterReducer,
    sellerRegistration1: sellerRegisterReducer1,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,

    userWholeSellerList: userWholeSellerListReducer,
    userhelloMallSellerList: userhelloMallSellerListReducer,
    userUpdatePassword:userUpdatePasswordReducer,
    userSellerDetails: userSellerDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userTopSellersList: userTopSellerListReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer,
    subcatList: productSubCategoryListReducer,
    subcatList1: productSubCategory1ListReducer,
    shopList: shopListsReducer,
    dokanList: dokanListsReducer,
    verifications: verificationCreateReducer,
    getOtp : verificationGetReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;