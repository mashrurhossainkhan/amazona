import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../action/userAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

const Page1_PhnNo = () => {
  const [name, setName] = useState('');
  var [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phnNo, setphnNo] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isSeller = true;
  const history = useHistory();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      history.push('/seller_select_shop_type');
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (email == '') {
      email = 'not available';
    }
    var page1Object = { email: email, phoneNo: phnNo };
    localStorage.setItem(
      'Seller_Registration_Info',
      JSON.stringify(page1Object)
    );
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, phnNo, password, isSeller));
    }

    //get items
    //var retrieve_SellerReg_Page1Obj = localStorage.getItem('Seller_Registration_Info');
    //console.log(JSON.parse(retrieve_SellerReg_Page1Obj).phoneNo);
  };

  return (
    <div className="marchant_page_common_css">
      <form className="form" onSubmit={submitHandler}>
        <p className="Tabs_Head">
          Setup Your
          <br />
          Marchant Account
        </p>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <div>
            <input
              type="text"
              id="name"
              className="Marchannt_reg_Input"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>{' '}
          <br />
          <div>
            <input
              type="password"
              id="password"
              className="Marchannt_reg_Input"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="password"
              id="confirmPassword"
              className="Marchannt_reg_Input"
              placeholder="Enter confirm password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <br />
          <input
            type="PhoneNo"
            id="PhoneNo"
            name="phnNo"
            className="Marchannt_reg_Input"
            placeholder="Phone no"
            minLength={11}
            required
            onChange={(e) => setphnNo(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="Marchannt_reg_Input"
            placeholder="Email(Optional)"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label />
          <button className="headerBtn" type="submit">
            Setup Your Shop
          </button>
        </div>
        <div>
          <label />
          <div>
            {/*New customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>*/}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page1_PhnNo;
