import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SigninScreen from '../../screens/SigninScreen';
import RegisterScreen from '../../screens/RegisterScreen';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

export default function LoginTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#ffffff', mx:"32px", mt: "10px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="#000000"
       
        TabIndicatorProps={{style: {background:'#B91613'}}}
        aria-label="secondary tabs example"
      >
          <Tab label="Log in" {...a11yProps(0)}/>
          <Tab label="SignUp" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SigninScreen/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterScreen/>
      </TabPanel>
    </Box>
  );
}