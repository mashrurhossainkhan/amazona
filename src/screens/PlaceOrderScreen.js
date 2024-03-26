import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../action/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ShippingAddressScreen from './ShippingAddressScreen';

export default function PlaceOrderScreen(props) {
  const API = 'http://localhost:5001';
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector((state) => state.userSignin);
  const [isShipAddressSubmitted, setIsShipAddressSubmitted] = useState(true);

  const { userInfo } = userSignin;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  //item price 100, SP=0, else 10
  cart.taxPrice = toPrice(0); //tax 15% toPrice(0.15 * cart.itemsPrice);

  const dispatch = useDispatch();

  const { shippingAddress } = cart;

  //if(shippingAddress.shippingCostCSV){
  //  cart.shippingPrice =  0; //parseInt(shippingAddress.shippingCostCSV)+10;
  // cart.totalPrice = 0; //cart.itemsPrice + parseInt(shippingAddress.shippingCostCSV)+10 + cart.taxPrice;
  //}else{
  cart.shippingPrice = toPrice(0);
  cart.totalPrice = cart.itemsPrice;
  //}
  const [agreeWith, setAgreeWith] = useState(false);

  const placeOrderHandler = () => {
    // TODO: dispatch place order action

    if (!userInfo) {
      props.history.push('/signin');
    } else {
      if (!shippingAddress.phnNo) {
        setIsShipAddressSubmitted(false);
        //alert("if 1")
      } else {
        if (agreeWith) {
          //alert('if 3');
          dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
        }
        //alert("if 3")
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (success) {
      //props.history.push(`/payment`);
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <ShippingAddressScreen />
            </li>

            <li></li>
          </ul>
        </div>
        <div className="col-1-displayed">
          <div className="card-place-order card-body">
            <h2>Order Items</h2>
            <ul>
              {cart.cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={API + item.image.split(',')[0]}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>

                      {item.qty ? <p>Quantity: {item.qty}</p> : ''}

                      {item.sz ? <p>Size: {item.sz}</p> : ''}
                      {item.clr ? <p>Color: {item.clr}</p> : ''}
                    </div>

                    <div>
                      {item.qty} x BDT{item.price} = BDT {item.qty * item.price}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-place-order card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>BDT{cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>BDT{cart.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>BDT {cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>BDT{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                {!isShipAddressSubmitted ? (
                  <MessageBox>
                    Please submit your Shipping Addess before placing order
                  </MessageBox>
                ) : (
                  ''
                )}
                {!agreeWith ? (
                  <MessageBox>
                    You have to agree with the terms and conditions, return
                    &amp; refund and Privacy Policy
                  </MessageBox>
                ) : (
                  ''
                )}

                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  value="agree"
                  onClick={() => setAgreeWith(!agreeWith)}
                />
                <label for="agree">
                  I have read and agree to the
                  <Link to="/termsandconditions"> terms and conditions </Link> ,
                  <Link to="/refundandreturn"> Return and Refund.</Link> &amp;
                  <Link to="/privacypolicy"> Privacy Policy.</Link>
                </label>
                <br />
                <br />
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="btn_marchant_account"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
