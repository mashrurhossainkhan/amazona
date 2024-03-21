import { useEffect } from "react";

const ContactUsScreen = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return(
        <div style={{marginLeft: "12px", marginRight: "12px"}}>
            <h1>Contact Us</h1>

            
            <p>Email: contact@brandatoz.com</p>
            <p>Phone : +8801775543252, +8801844590309</p>
            <p>Registered Office: Floor# 3, Four Star Tower 141/153, Sadarghat Chittagong. </p>
            <p>Head office:Floor# 2, Hazi Moshjid Building, Block E, Road#12 (Beside Boshumoti Road, Solmaid) Bashundhara R/A, Dhaka.</p>  
        </div>
    )
}
export default ContactUsScreen;