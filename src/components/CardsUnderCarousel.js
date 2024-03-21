import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataUnderCarousel from './DataUnderCarousel';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function CardsUnderCarousel({history}) {
  return (
    <Box
    display="flex"
    alignItems="flex-start"
    flexFlow="row"
    flexWrap="wrap"
    justifyContent="space-around"
    //flexDirection="row" This is the default
  >
  
      {DataUnderCarousel.map((data)=>{
        return(     
          <Box>
          <Card  sx={{ minWidth: 275, marginTop:"30px"}}>
          <CardContent>
          <Typography sx={{ fontSize: 44 }} color="text.secondary" gutterBottom>
            {data.icon}
          </Typography>
          <Typography variant="h4" component="div" style={{fontWeight:"bold"}}>
              {data.ShopType}
          </Typography>
         
          <Typography variant="p" sx={{ fontSize: 14,  }}>
           {data.Tag}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/shoptype/${data.ShopType}`}>
            <Button size="small">Visit {data.ShopType}</Button>
          </Link>
        </CardActions> 
        </Card>
          </Box>
        )
      })}
    
    </Box>
  );
}
