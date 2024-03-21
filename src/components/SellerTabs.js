import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SellerScreen from '../screens/SellerScreen';
import ProfileSeller from '../screens/SellerTabs/ProfileSeller';
import SellerHomeScreen from '../screens/SellerHomeScreen';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{padding:"0px",fontFamily: "system-ui, sans-serif"}}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SellerTabs(props) {
  const [value, setValue] = React.useState(0);
  var currentUrlMallName = (window.location.href).split('/');
  
  var currentUrlMallNameReal = currentUrlMallName[currentUrlMallName.length -1]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',padding: "0px" }}>
      <Box sx={{ borderBottom: 0, borderColor: '#ffffff', mx:"10px", mt: "0px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="#000000"
       
        TabIndicatorProps={{style: {background:'#B91613'}}}
        aria-label="secondary tabs example"
      >
          <Tab label="Home Page" style={{fontSize: "11.5px"}} {...a11yProps(0)}/>
          <Tab label="All Product" style={{fontSize: "11.5px"}} {...a11yProps(1)} />
          <Tab label="Profile" style={{fontSize: "11.5px"}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <SellerHomeScreen sellerId = {props.match.params.id} flag={0}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SellerScreen sellerId = {props.match.params.id} flag={0}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <ProfileSeller shopName={currentUrlMallNameReal} sellerId = {props.match.params.id} flag={1}/>
      </TabPanel>
    </Box>
  );
}