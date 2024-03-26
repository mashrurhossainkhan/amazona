import React, { useEffect } from 'react';
import { addtoCart, removeFromCart } from '../action/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartScreen = (props) => {
  const API = 'http://localhost:5001';
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('?')[1].split('=')[1])
    : 1;

  const clr = props.location.search
    ? props.location.search.split('?')[2].split('=')[1]
    : '';

  const sz = props.location.search
    ? props.location.search.split('?')[3].split('=')[1]
    : '';

  const tenPercentage = props.location.search
    ? props.location.search.split('?')[4].split('=')[1]
    : '';

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      dispatch(addtoCart(productId, qty, sz, clr, tenPercentage));
    }
  }, [dispatch, productId, qty, sz, clr, tenPercentage]);

  const removeFromCartHandler = (id) => {
    //delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    //props.history.push('/signin?redirect=shipping');
    props.history.push('/placeorder');
  };
  return (
    <div className="row center">
      <div className="col-2">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is Empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <>
                <li key={item.product}>
                  <div
                    className="row"
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '3px',
                      borderRadius: '1.2rem',
                    }}
                  >
                    <div>
                      <img
                        src={API + item.image.split(',')[0]}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link
                        style={{ color: '#000000' }}
                        to={`/product/${item.product}`}
                      >
                        {item.name.slice(0, 40)}...
                      </Link>
                    </div>
                    <br />

                    <div>
                      <select
                        style={{
                          backgroundColor: '#D1DEEB',
                          border: '2px solid #D1DEEB',
                        }}
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addtoCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map(
                          //if the count = 5, it will return 0 to 4
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <DeleteOutlineIcon
                      fontSize="large"
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeFromCartHandler(item.product)}
                    />
                    <div>BDT {item.price}</div>
                    <div></div>
                    {item.clr ? <div>color: {item.clr}</div> : ''}
                    {item.sz ? <div>, Size: {item.sz}</div> : ''}
                  </div>
                </li>
              </>
            ))}
            <li>
              <MessageBox>
                Need more? <Link to="/">Go Shopping</Link>
              </MessageBox>
            </li>
          </ul>
        )}
      </div>

      <div className="col-1-displayed">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal: ({cartItems.reduce((a, c) => a + c.qty, 0)} items):
                BDT
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>

            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="btn_marchant_account block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
