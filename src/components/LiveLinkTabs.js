import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SigninScreen from '../screens/SigninScreen';
import LiveLinkFetch from '../screens/LiveLinkFetch';


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

export default function LiveLinkTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#ffffff', mx:"28px", mt: "60px"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="#000000"
       
        TabIndicatorProps={{style: {background:'#B91613'}}}
        aria-label="secondary tabs example"
      >
          <Tab label="Live Link" {...a11yProps(0)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LiveLinkFetch liveLink={props.liveLink}/>
      </TabPanel>
      
    </Box>
  );
}