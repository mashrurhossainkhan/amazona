import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { signout } from '../action/userAction';
import { makeStyles } from '@material-ui/core/styles/';
import LoginTabs from './LoginComponents/LoginTabs';
import { Dialog } from '../../node_modules/@material-ui/core/index';
import SeachPanelTabs from './SearchTabMbl';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "0px",
      [theme.breakpoints.only('lg')]: {
        display: "none"
      },
      [theme.breakpoints.only('xl')]: {
        display: "none"
      },
      [theme.breakpoints.only('md')]: {
        display: "none"
      },
    },
  }));

export default function SimpleBottomNavigation(porps) {
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleLoginClick = () =>{
        history.push('/signin')
    } 

    const handleRegisterClick = () =>{
      history.push('/register')
  } 
    const signoutHandler = () => {
        dispatch(signout());
      };

      const homeIconHandler = () => {
        history.push('/')
      }

      const cartIconHandler = () => {
        history.push('/cart')
      }

const classes = useStyles();
      
  return (
    <Box sx={{ width: "200%" }}>
      <BottomNavigation
        className={classes.root} 
        style={{
        width:"100%",
        height: "37px",
        position: "fixed",
        //borderTop: "2px solid #b8b8b8",
        bottom: "0px"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  onClick={homeIconHandler} icon={<HomeIcon  style={{ fontSize: 22 , color:"#85847f", margin: 0}}/>} ></BottomNavigationAction>
        <BottomNavigationAction onClick={cartIconHandler}  icon={<ShoppingCartCheckoutIcon style={{paddingBottom: 10,margin: 0, fontSize: 22, color:"#85847f" }}/>} />
        <BottomNavigationAction icon={<SearchIcon onClick={handleClickOpen} style={{ paddingBottom: 10,fontSize: 25, color:"#000000" }}/>} />
        <Dialog open={open} onClose={handleClose}>
                    <SeachPanelTabs/>
                  </Dialog> 
        {userInfo ?
        <>
         <BottomNavigationAction label="Account" icon={<AccountCircleIcon style={{paddingBottom: 5,margin: 0, fontSize: 22, color:"#85847f" }}/>} />
         <BottomNavigationAction label="Sign Out" onClick={signoutHandler} icon={<LogoutIcon style={{margin: 0,fontSize: 22, color:"#85847f" }}/>} />
         </>
         :
         <>
          <BottomNavigationAction label="Register" onClick={handleRegisterClick} icon={<HowToRegIcon style={{margin: 0, fontSize: 22, color:"#85847f" }}/>} />
         <BottomNavigationAction label="LOGIN" onClick={handleLoginClick} icon={<LoginIcon style={{margin: 0, fontSize: 22, color:"#85847f" }}/>} />
        
         </>
        }
      </BottomNavigation>
    </Box>
  );
}