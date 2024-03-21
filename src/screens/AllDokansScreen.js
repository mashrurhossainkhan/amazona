import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dokanLists } from "../action/shopAction";
import DokanList from "../components/DokanList";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { prices } from "../utils";

const AllDokansScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.dokanList);
    const { loading, error, dokans } = productList;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(dokanLists({}));
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
                                 
                        {dokans.map((dokan) => (
                            <DokanList key={dokan._id} dokan={dokan}></DokanList>
                        ))}
                    </div>
                
            )}
        </div>
    )
}

export default AllDokansScreen;