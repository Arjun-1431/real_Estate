import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Allflateuploaded from './alluseruplodedflate';
import Allflateuseruploaded from './allflatesuseruploded';

const components = [
  <Allflateuploaded />, 
  <Allflateuseruploaded />
];

export default function AllrentalFlate() {
  const [value, setValue] = React.useState(0);

  // Safely fetch and parse user data from localStorage
  React.useEffect(() => {
    const signInData = localStorage.getItem('data1'); // Getting user data from localStorage

    if (signInData) {
      try {
        const parsedUser = JSON.parse(signInData); // Safe parsing
        console.log('✅ Sign-in User Data:', parsedUser);
      } catch (error) {
        console.error('❌ Failed to parse sign-in data:', error.message);
      }
    } else {
      console.log('🚫 No sign-in data found in localStorage');
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto", marginRight: '70%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="All Flates" icon={<ApartmentIcon />} />
        <BottomNavigationAction label="Flates Uploaded by You" icon={<AddBusinessIcon />} />
      </BottomNavigation>
      
      <Box sx={{ mt: 2 }}>
        {components[value]}
      </Box>
    </Box>
  );
}
