import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod, saveShippingAddress } from '../action/cartAction';
import MessageBox from '../components/MessageBox';
import data from './shippings.csv';
import { csv } from 'd3'
import swal from 'sweetalert';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState('');
  const { shippingAddress } = cart;

  const [shippingAddressSubmitted, setShippingAddressSubmitted] = useState(false);
  /*
  if (!userInfo) {
    props.history.push('/signin');
  }*/
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [phnNo, setPhnNo] = useState(shippingAddress.phnNo);
  const [email, setEmail] = useState(shippingAddress.email);
  const dispatch = useDispatch();
  var [DistList, setDistList] = useState([]);
  var [AreaList, setAreaList] = useState([]);

  var [shippingCostCSV, setShippingCostCSV] = useState();

  const [area, setArea] = useState('');

  useEffect(() =>{
    setAddress('');
    csv(data).then(response => {
      response.map(data => {
        setDistList(DistList => [...DistList, data.District])
        
        //let unique = [data.District].filter((item, i, ar) => ar.indexOf(item) === i); 
      })
  })
  },[])
  DistList=[...new Set(DistList)];


  const submitHandler = (e) => {
    e.preventDefault();
    setPaymentMethod("COD");
    
    document.getElementById("COD").checked=true;


      dispatch(savePaymentMethod("COD"));
      if(!city || !area){
        swal("Please Select District and area");
      }
      else if(!email){
        //setEmail('notavailable');
        dispatch(
          //savePaymentMethod(paymentMethod),
          saveShippingAddress({ fullName, address, city, phnNo, email:"notavailable", area, shippingCostCSV })
        );
      }else{
        dispatch(
          //savePaymentMethod(paymentMethod),
          saveShippingAddress({ fullName, address, city, phnNo, email, area, shippingCostCSV })
        );
      }
      //console.log(shippingCostCSV);
      
    
    setShippingAddressSubmitted(true);
    //props.history.push('/payment');
  };


  const settingCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    setAreaList([]);
    csv(data).then(response => {
      response.map(data => {
        if(e.target.value==data.District)
          setAreaList(AreaList => [...AreaList, data.Area+' Post Code: '+data.Post_Code])
        //let unique = [data.District].filter((item, i, ar) => ar.indexOf(item) === i); 
      })
  })
    
  }

  const settingArea = (e) => {
    e.preventDefault();
    setArea(e.target.value);
    const onlyArea = e.target.value.split(" ")[0];
    csv(data).then(response => {
      response.map(data => {
        if(onlyArea==data.Area)
          setShippingCostCSV(data.ChargeMain)
        //let unique = [data.District].filter((item, i, ar) => ar.indexOf(item) === i); 
      })
  })
    
  }
  //AreaList=[...new Set(AreaList)];
  AreaList.sort((a,b) => a<b ? -1 : 1);
  DistList.sort((a,b) => a<b ? -1 : 1);
  return (
    <div>
     
      <form className="form" >
        <div>
          <h2>Shipping Address</h2>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
       
        {/*District starts*/}
        <div>
          <label htmlFor="District">District</label>
          <select  id="city"
            placeholder="Enter city"
            onChange={(e) => settingCity(e)}
            required>
              <option>select District</option>
            {
              DistList.map(item => (
                <option value={item}>{item}</option>
              ))
            }
          </select>

        </div>
        {/*District Ends*/}
        {/*Area starts*/}
        {city? 
          <>
           <div>
          <label htmlFor="Area">Area</label>
          <select  id="area"
            placeholder="Enter area"
           
            onChange={(e) => settingArea(e)}
            required>
              <option>select Area</option>
            {
              AreaList.map(item => (
                <option value={item}>{item}</option>
              ))
            }
          </select>

        </div>
          </>
        : ""}

        {/*Area ends*/}
        <div>
          <label htmlFor="address">Full Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phnNo">Phone No</label>
          <input
            type="text"
            id="phnNo"
            placeholder="Enter Phone No"
            value={phnNo}
            onChange={(e) => setPhnNo(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
          ></input>
        </div>

        <div>
          {/* Payment Method start*/}

          <div>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          {/* 
          <div>
            <input
              type="radio"
              id="sslCommerz"
              value="sslCommerz"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="sslCommerz">sslCommerz</label>
          </div>*/}
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="COD"
              value="COD"
              name="paymentMethod"
              required
            
              onChange={submitHandler}
            
              
            ></input>
            <label htmlFor="COD">Cash On Delivery</label>
          </div>
        </div>
        <div>
          <label />
         
        </div> 
    </div>
    {/* Patment Method Ends*/}
        
          <label />
          {shippingAddressSubmitted?
            <MessageBox>Shipping Addess Submitted, please place the order</MessageBox>
            :
            <MessageBox>Please Shubmit Shipping address and payment Method first</MessageBox>
          }
          
        </div>
      </form>
    </div>
  );
}