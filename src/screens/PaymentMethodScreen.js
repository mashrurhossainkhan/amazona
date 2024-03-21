import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../action/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    //props.history.push('/placeorder');
  };
  return (
    <div>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            {/* 
            <input
              type="radio"
              id="sslCommerz"
              value="sslCommerz"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="sslCommerz">sslCommerz</label>*/}
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="COD"
              value="COD"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="COD">Cash On Delivery</label>
          </div>
        </div>
        <div>
          <label />
         
        </div>
     
    </div>
  );
}
 