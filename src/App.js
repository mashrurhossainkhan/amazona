import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import ProductListScreen from './screens/ProductListScreen';
//import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
//import SellerScreen from './screens/SellerScreen';
import SearchScreen from './screens/SearchScreen';
import Header from './components/Header';
import MainMarchant from './screens/MarchantScreens/index';
import Seller_Select_Shop_Type from './screens/MarchantScreens/Select_Shop_Type';
import Cond_rend_shopType from './screens/MarchantScreens/Cond_rend_shopType';
import ShopTypesScreen from './screens/ShopTypesScreen';
import Footer from './components/Footer';
import SellerTabs from './components/SellerTabs';
import SimpleBottomNavigation from './components/BottomNavigation';
import AdminOrderListScreen from './screens/AdminOrderListScreen';
import Payment from './components/Order/Payment';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundAndReturn from './components/RefundAndReturn';
import AboutUs from './components/AboutUs';
import ContactUsScreen from './screens/ContactUsScreen';
import SearchHelloMallScreen from './screens/SearchHeloMallScreen';
import ForgetPasswordForm from './screens/ForgetPasswordForm';
import NewPassword from './screens/NewPasswordScreen';
import VerifyForgetPassword from './screens/VerifyForgetPassword';
import SingleProdSc from './screens/SingleProd/SingleProdScreen';
/*


const advancedMatching = { em: 'dokanbhaiofficial@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/*className="grid-container"*/}
      <div>
        <main>
          {' '}
          {/*className='mainPortionClass'*/}
          <Route
            path="/seller/:id/pageNumber/:pageNumber"
            exact
            component={SellerTabs}
          ></Route>
          <Route path="/singleprod" component={SingleProdSc}></Route>
          <Route path="/seller/:id" exact component={SellerTabs}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/payment" component={Payment}></Route>
          <Route path="/shoptype/:type?" component={ShopTypesScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/newpassword/:phnNo" component={NewPassword}></Route>
          {/* <Route path="/verification" component={Verification_marchant}></Route>

        <Route path="/verification_customer" component={Verification_Customer}></Route>*/}
          <Route path="/forget_password" component={ForgetPasswordForm}></Route>
          <Route
            path="/verifyforgerpass/:phnNo"
            component={VerifyForgetPassword}
          ></Route>
          <Route path="/contact_us" component={ContactUsScreen}></Route>
          <Route
            path="/seller_shop_details_create"
            component={Cond_rend_shopType}
          ></Route>
          <Route
            path="/seller_select_shop_type"
            component={Seller_Select_Shop_Type}
          ></Route>
          <Route path="/marchant_registration" component={MainMarchant}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          {/* <Route path="/payment" component={PaymentMethodScreen}></Route>*/}
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route
            path="/termsandconditions"
            component={TermsAndConditions}
          ></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/refundandreturn" component={RefundAndReturn}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/flash_sale/:flash_sale?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber/flash_sale/:flash_sale"
            component={SearchScreen}
            exact
          ></Route>
          {/*Seach Hello Mall starts*/}
          <Route
            path="/searchhellomall/name/:name?"
            component={SearchHelloMallScreen}
            exact
          ></Route>
          <Route
            path="/searchhellomall/flash_sale/:flash_sale?"
            component={SearchHelloMallScreen}
            exact
          ></Route>
          <Route
            path="/searchhellomall/category/:category"
            component={SearchHelloMallScreen}
            exact
          ></Route>
          <Route
            path="/searchhellomall/category/:category/name/:name"
            component={SearchHelloMallScreen}
            exact
          ></Route>
          <Route
            path="/searchhellomall/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber/flash_sale/:flash_sale"
            component={SearchHelloMallScreen}
            exact
          ></Route>
          {/*Search hello mall ends*/}
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={AdminOrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <Footer />
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
