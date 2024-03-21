import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../action/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import ContactUsScreen from './ContactUsScreen';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    //dispatch(detailsOrder(orderId));
      const addPayPalScript = async () => {
      const { data } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);
  
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger1">"Your order has been placed successfully, thank you.
    We will call you for confirmation."
    <p>For any inquiries please call at 01886312862.</p>
    </MessageBox>
  ) : (
    <div>
      <h2>Order {order._id} has placed!</h2>
      <Link to="/" style={{color:"black"}}>Need more shopping? click here</Link>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card-place-order card-body">            
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  <strong>City:</strong>{order.shippingAddress.city},{' '}
                  <strong>Phone No:</strong>{order.shippingAddress.phnNo},
                  <strong>Email Address:</strong>{order.shippingAddress.email}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
            </li>
            <li>
              <div className="card-place-order card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    userInfo.isAdmin?
                    <li key={item.product}>
                    <div className="row">
                      <div>
                     
                        <img
                          src={item.image.split(',')[0]}
                          alt={item.name}
                          className="small"
                        ></img>

                      </div>
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                        </Link>
                        {item.qty ? 
                         <p>Quantity: {item.qty}</p>: ""}
                         
                         {item.sz ? 
                         <p>Size: {item.sz}</p>: ""}
                          {item.clr?
                          <p>Color: {item.clr}</p>:"" 
                         }
                      </div>

                      <div>
                        {item.qty} x BDT {item.price} = BDT {item.qty * item.price}
                      </div>
                    </div>
                  </li>:
                    order.user == userInfo._id || userInfo._id==item.seller?
                     <li key={item.product}>
                     <div className="row">
                       <div>
                         <img
                           src={item.image.split(',')[0]}
                           alt={item.name}
                           className="small">
                        </img>
                       
                       </div>
                       <div className="min-30">
                         <Link to={`/product/${item.product}`}>
                           {item.name}
                         </Link>
                         {item.qty ? 
                         <p>Quantity: {item.qty}</p>: ""}
                         
                         {item.sz ? 
                         <p>Size: {item.sz}</p>: ""}
                          {item.clr?
                          <p>Color: {item.clr}</p>:"" 
                         }
                       </div>

                       <div>
                         {item.qty} x BDT {item.price} = BDT {item.qty * item.price}
                       </div>
                     </div>
                   </li> :""
                   
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1-displayed">
          <div className="card-place-order card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>BDT {order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>BDT {order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>BDT {order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>BDT {order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              {/*!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                     {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                    </>
                  )}
                </li>
                     )*/}

            <li>
              <div className="card-place-order card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <>
                   <MessageBox variant="danger">Not Paid</MessageBox>
                   {userInfo.isAdmin && !order.isPaid && (
                   <button
                    type="button"
                    className="btn_marchant_account block"
                    onClick={()=>successPaymentHandler({
                            id: order._id,
                            status:true,
                            update_time: new Date(),
                            email_address: "dokanbhaiofficial@gmail.com"
                          })}
                                      >
                     Paid
                  </button>
                   )}
                  </>
                 
                )}
              </div>
              </li>
              {userInfo.isAdmin && !order.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <MessageBox variant="danger">Check the Payment Status</MessageBox>
                  <button
                    type="button"
                    className="btn_marchant_account block"
                    onClick={deliverHandler}
                  >
                     Order Delivered
                  </button>
                </li>
               )}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}