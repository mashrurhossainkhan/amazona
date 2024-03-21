//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { detailsUser } from "../action/userAction";
//import Flash_Sale from "../components/Flash_sale/Flash_Sale";
import SellerIntros from "../components/SellerHomeComponents/SellerIntros";
//import SellerScreen from "./SellerScreen";
//import SellerScreen1 from "./SellerScreen1";
import SellerScreen2 from "./SellerScreen2";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import LoadingBox from "../components/LoadingBox";
import SellerScreen from "./SellerScreen";
import { useEffect } from "react";
//import MessageBox from "../components/MessageBox";
//import Flash_Sale_Seller from "../components/Flash_sale/Flash_Sale_Seller";

const SellerHomeScreen = (props) => {
    const dispatch = useDispatch();

    const sellerDetailsList = useSelector((state) => state.userSellerDetails);
    const { loading, error, user } = sellerDetailsList; //eikhabe password ashe

   //console.log(user.seller)
   useEffect(() => {
    window.scrollTo(0, 0)

  }, []);
    return(
        <div>
      
      {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            error
        ) : (
            <>
            {/*sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>*/}
                <Carousel  showArrows autoPlay showThumbs={false}>
                    {/*sellers.map((seller) => (
                    <div key={seller._id}>
                      {/*<Link to={`/seller/${seller._id}`}>*/}

                        {/*<img src={seller.seller.logo} alt={seller.seller.name} />*/}
                       
                        { user.seller.sellerbannerimg?
                        
                        user.seller.sellerbannerimg.split(',').slice(0,[user.seller.sellerbannerimg.split(',').length-1]).map((image)=> (
                            <div style={{ backgroundColor:"#000000"}}>
                            <img src={image.replace('undefined','')}  style={{objectFit:"contain", backgroundColor: "#000000", maxHeight: "320px", padding: "10px"}} alt="Carousel"/>
                            </div>
                        ))
                            : <img src='/images/shopCarouselDefault.png' alt="Carousel"/>
                        }
                       
                        {/*<p className="legend">{seller.seller.name}</p>*/}
                        {/*</Link> </div>*/}
                        
                   
                   {/*))}*/}
                </Carousel>
                </>
        )}
    
        <SellerIntros/>
        {/*<Flash_Sale_Seller sellerId = {props.sellerId}/> */}
        {/*
        <h1>Most Viewed</h1>
        <SellerScreen1 sellerId = {props.sellerId}/> */}
        <h1 style={{textAlign: "center"}}>Products of the shop</h1>
        {/*<SellerScreen2 sellerId = {props.sellerId}/>*/}

        <SellerScreen sellerId = {props.sellerId}/>
        </div>
    )
}

export default SellerHomeScreen;