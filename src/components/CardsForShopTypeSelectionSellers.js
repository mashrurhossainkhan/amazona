import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Data_Shop_Sellect_seller from './DataSelectShopSeller';
import { useHistory } from 'react-router-dom';

const CardsForShopTypeSelectionSellers = () => {
  const history = useHistory();
  var retrieve_SellerReg_Page1Obj = localStorage.getItem(
    'Seller_Registration_Info'
  );

  const handleShopType = (e, shoptype) => {
    e.preventDefault();
    var ShopTypeObject = {
      email: JSON.parse(retrieve_SellerReg_Page1Obj).email,
      phoneNo: JSON.parse(retrieve_SellerReg_Page1Obj).phoneNo,
      shoptype: shoptype,
    };
    localStorage.setItem(
      'Seller_Registration_Info',
      JSON.stringify(ShopTypeObject)
    );
    history.push('/seller_shop_details_create');
  };

  const Main_Box = () => {
    return (
      <Box
        display="flex"
        alignItems="flex-start"
        flexFlow="row"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {Data_Shop_Sellect_seller.map((data) => {
          return (
            <Box key={data.id} sx={{ marginRight: '20px' }}>
              <Card sx={{ minWidth: 275, marginTop: '30px' }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 44 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {data.icon}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    style={{ fontWeight: 'bold' }}
                  >
                    {data.ShopType}
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: 14 }}>
                    {data.Tag}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={(e) => handleShopType(e, data.ShopType)}
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
    );
  };

  const Back_to_page_one = () => {
    return <div>{history.push('/marchant_registration')}</div>;
  };
  return (
    <>
      {JSON.parse(retrieve_SellerReg_Page1Obj) ? (
        <Main_Box />
      ) : (
        <Back_to_page_one />
      )}
    </>
  );
};

export default CardsForShopTypeSelectionSellers;
