import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { listProductCategories } from '../action/productAction';
import { signout } from '../action/userAction';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import LoginTabs from './LoginComponents/LoginTabs';
import CloseIcon from '@mui/icons-material/Close';
import SearchBox from './SearchBox';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>
      <aside className={sidebarIsOpen ? 'open' : ''}>
        <ul className="categories">
          <li>
            <strong>Categories</strong>
            <button
              style={{ border: '2px solid white' }}
              onClick={() => setSidebarIsOpen(false)}
              className="close-sidebar"
              type="button"
            >
              <CloseIcon />
            </button>
          </li>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            categories.map((c) => (
              <li key={c._id} className="sidebarMain">
                <Link
                  className="sidebarfont"
                  to={`/search/category/${c}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  {c}
                </Link>
              </li>
            ))
          )}
        </ul>
      </aside>
      <header className="row1">
        <div className="flex-brand">
          <div>
            <button
              type="button"
              style={{ marginTop: '20px' }}
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#053568" />
                <path
                  d="M23 14.5L13 14.5"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 20L13 20"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 25.5L13 25.5"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex-brand-item" style={{ marginTop: '35px' }}>
            <Link style={{ lineHeight: '.1px' }} className="brand" to="/">
              Amazona
            </Link>
            <br />
          </div>

          <div></div>
        </div>

        <Route
          render={({ history }) => <SearchBox history={history}></SearchBox>}
        ></Route>

        <div className="rightsideHeader">
          {/* 
            <Link to='/'> 
             
               <AiTwotoneHome className="headerIcons"/>
            </Link>
            <Link to="#">
              <BsCardList className="headerIcons"/>
            </Link>
            <Link to="#">
            <i className="far fa-comment-dots headerIcons"></i> 
            </Link>
            <Link to="#">
            <i className="far fa-bell headerIcons"></i> 
            </Link>

            */}
          <Link to="/cart">
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            <HiShoppingCart className="headerIcons" />
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#" className="dropDownLink">
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
                <li>
                  <a className="dropDownLink" href="/profile">
                    User Profile
                  </a>
                </li>

                <li>
                  <Link className="dropDownLink" to="/orderhistory">
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropDownLink"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button onClick={handleClickOpen} className="headerBtn">
                Log In
              </button>
              <Dialog open={open} onClose={handleClose}>
                <LoginTabs />
              </Dialog>
            </>
          )}
          {userInfo && userInfo.isSeller && (
            <div className="dropdown">
              <Link className="dropDownLink" to="#admin">
                Seller <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                {/* 
                <li>
                    <Link to="/seller_shop_details_create">Setup shop</Link>
                  </li>*/}
                <li>
                  <Link className="dropDownLink" to="/productlist/seller">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="dropDownLink" to="/orderlist/seller">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <Link className="dropDownLink" to="#admin">
                Admin <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link className="dropDownLink" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropDownLink" to="/productlist">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="dropDownLink" to="/orderlist">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropDownLink" to="/userlist">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className="grid-container-mobile-header">
        <div className="grid-item-mobile-1">
          {' '}
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#E6EDF4" />
              <path
                d="M23 14.5L13 14.5"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27 20L13 20"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 25.5L13 25.5"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="grid-item-mobile-2" style={{ marginTop: '10px' }}>
          <Link style={{ lineHeight: '.1px' }} className="brand" to="/">
            Amazona
          </Link>
          <br />
        </div>
        <div className="grid-item-mobile-3">
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                <MdOutlineAccountCircle />
              </Link>
              <ul className="dropdown-content">
                <li style={{ marginTop: '0px' }}>
                  <a className="mobile-dropdown" href="/profile">
                    User Profile
                  </a>
                </li>

                <li style={{ marginTop: '0px' }}>
                  <Link className="mobile-dropdown" to="/orderhistory">
                    Order History
                  </Link>
                </li>
                <li style={{ marginTop: '0px' }}>
                  <Link
                    className="mobile-dropdown"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <MdOutlineAccountCircle onClick={handleClickOpen} />
          )}
          <div className="sellerMobileDiv">
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin" className="mobile-dropdown-main">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  {/* 
                <li>
                    <Link to="/seller_select_shop_type">Setup shop</Link>
                  </li>*/}
                  <li>
                    <Link className="mobile-dropdown" to="/productlist/seller">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-dropdown" to="/orderlist/seller">
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {/*admin and seller*/}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="mobile-dropdown-main">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link className="mobile-dropdown" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-dropdown" to="/productlist">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-dropdown" to="/orderlist">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-dropdown" to="/userlist">
                      Users
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
