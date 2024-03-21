import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listWholeSellers } from "../action/userAction";
import DokanList from "../components/DokanList";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ShopTypes from "../components/ShopTypes";
import WholesellersShops from "../components/WholeSellersShops";

const AllWholeSellerScreen = () => {
    const dispatch = useDispatch();
    const ListWholeSeller = useSelector((state) => state.userWholeSellerList);
    const { loading, error, users } = ListWholeSeller;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(listWholeSellers());
    }, [dispatch]);

    return(
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="dokanListrow center" style={{
                                paddingBottom:"10px", paddingTop:"10px"}}>
                                 
                        {users.map((dokan) => (
                            <WholesellersShops key={dokan._id} dokan={dokan}></WholesellersShops>
                          
                        ))}
                    </div>
                
            )}
        </div>
    )
}

export default AllWholeSellerScreen;