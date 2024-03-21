import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initPayment } from "../../api/apiOrder";

const Payment = () => {
    const [sessionSuccess, setSessionSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    useEffect(()=> {
       
        initPayment()
            .then(response => {
                if(response.data.status === 'SUCCESS'){
                    setSessionSuccess(true);
                    setRedirectUrl(response.data.GatewayPageURL);
                    setFailed(false);
                }
            })
    })

    return(
        <div>
            {sessionSuccess ? window.location = redirectUrl : "Payment is loading"}

            {failed ?(<><p>Failed to start payment seassion...</p>
                <Link to="/cart">Go to cart</Link>
            </>): ""}
        </div>
    )
}

export default Payment;