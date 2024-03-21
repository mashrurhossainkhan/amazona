import { useSelector } from "react-redux";
import ProfileSeller from "../../screens/SellerTabs/ProfileSeller";
import LoadingBox from "../LoadingBox";
//import MessageBox from "../MessageBox";

const SellerIntros = (props) => {
    var currentUrlMallName = (window.location.href).split('/');
    var currentUrlMallNameReal = currentUrlMallName[currentUrlMallName.length -1]

     var currentUrlSellerId = currentUrlMallName[currentUrlMallName.length -1]

     var currentUrlSellerId1 = currentUrlMallName[currentUrlMallName.length -3]

    const sellerDetailsList = useSelector((state) => state.userSellerDetails);
    const { loading, error, user } = sellerDetailsList; //eikhabe password ashe
    
    return(
       
        <div className="row center" style={{width: "100%"}}>
            <div>
            {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
           <></>
        ) : (
             user.seller.logo?
             user.seller.logo.split(',').slice(0,1).map((image)=> (
               
            
                <img src={image.replace('undefined','')} alt="Carousel" className="sellerLogo"/>
               
               
            ))
                : <img src='/images/defaultLogo.jpeg' alt="Carousel" className="sellerLogo"/>
                
            )}

                
            </div>
            <div>
               
             <ProfileSeller shopName={currentUrlMallNameReal} 
             sellerId={currentUrlSellerId}
             sellerIdPagination = {currentUrlSellerId1}
             />

             
               
            </div>
           
        </div>
        
    )
}

export default SellerIntros;