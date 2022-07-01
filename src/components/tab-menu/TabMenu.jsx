import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs({label1,label2,label3}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:"white" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={label1} {...a11yProps(0)} />
          <Tab label={label2} {...a11yProps(1)} />
          <Tab label={label3} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aut blanditiis illo? Aperiam tempore culpa consequuntur est assumenda, odio animi?
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugit nam facere nihil architecto quaerat!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae labore quidem blanditiis possimus quasi, error illum soluta.
      </TabPanel>
    </Box>
  );
}