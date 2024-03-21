import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserProfile } from "../action/userAction";

const LiveSellerScreen = (props) => {
  const [link, setLink] = useState('');
  const [liveName, setliveName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit =(e) => {
    e.preventDefault();
    // dispatch update profile
    //alert(categoryLink)
  
      dispatch(
        updateUserProfile({
          userId: props.userId,
          link,
          liveName
        })
        );
        setLink('');
        setliveName('');
     //history.push('/profile') 
  }
  
    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
          <p className='Tabs_Head'>Add a Live Link</p>
          
          <div>
            <input
              type="text"
              id="liveLink"
              liveName="link"
              className='dialoageInput'
              placeholder="Live Link"
              value={link}
              required  
              onChange={(e)=> setLink(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="liveName"
              id="liveLinkliveName"
              className='dialoageInput'
              placeholder="Live Link Name"
              value={liveName}
              required
              onChange={(e)=> setliveName(e.target.value)}
            ></input>
          </div>
  
          <div>
            <label />
            <button className="btn_tabs" type="submit">
              Add Live Link
            </button>
            
          </div>
          <div>
            <label />
            <div>
              {/*New customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>*/}
            </div>
          </div>
        </form>
       
          <div className='flex_social_btn_container'>
            {/*
            <button className='social_btn'>
              <FcGoogle/> Continue with Google
            </button>
             */}         
          </div>
       
      </div>
    )
}

export default LiveSellerScreen;