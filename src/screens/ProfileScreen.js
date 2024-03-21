import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Dialog from '@mui/material/Dialog';
import LiveModalComponents from '../components/LiveModalComponents';
import axios from '../../node_modules/axios/index';
import Checkbox from '@mui/material/Checkbox';
//import { listProductSubCategories, listProductSubCategories1 } from '../action/productAction';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnNo, setphnNo] = useState('');
  const API = 'https://backend.dokanbhai.dokanbhai.com:3002';
  //const API = 'https://localhost:5001';

  const [sellerHomeCat1, setsellerHomeCat1] = useState('');
  const [sellerHomeCat2, setsellerHomeCat2] = useState('');
  const [sellerHomeCat3, setsellerHomeCat3] = useState('');
  const [sellerHomeCat1Img, setSellerHomeCat1Img] = useState('');
  const [sellerHomeCat2Img, setSellerHomeCat2Img] = useState('');
  const [sellerHomeCat3Img, setSellerHomeCat3Img] = useState('');

  const [sellerName, setSellerName] = useState('');
  const [sellerAddress, setSellerAddress] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');
  const [sellerbannerimg, setSellerbannerimg] = useState('');
  const [pre10percent, setPre10percent] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const [loadingUploadLogo, setLoadingUploadLogo] = useState(false);
  const [errorUploadLogo, setErrorUploadLogo] = useState('');

  const [loadingUploadsellerHomeCat1Img, setLoadingUploadsellerHomeCat1Img] = useState(false);
  const [errorUploadsellerHomeCat1Img, setErrorUploadsellerHomeCat1Img] = useState('');

  const [loadingUploadsellerHomeCat2Img, setLoadingUploadsellerHomeCat2Img] = useState(false);
  const [errorUploadsellerHomeCat2Img, setErrorUploadsellerHomeCat2Img] = useState('');

  const [loadingUploadsellerHomeCat3Img, setLoadingUploadsellerHomeCat3Img] = useState(false);
  const [errorUploadsellerHomeCat3Img, setErrorUploadsellerHomeCat3Img] = useState('');

  /*Voucher variable starts*/
  const [voucher_name1, setVoucher_name1] = useState('');
  const [voucher_for_money1, setVoucher_for_money1] = useState('');
  const [vouchar_discount1, setVouchar_discount1] = useState('');

  const [voucher_name2, setVoucher_name2] = useState('');
  const [voucher_for_money2, setVoucher_for_money2] = useState('');
  const [vouchar_discount2, setVouchar_discount2] = useState('');

  const [voucher_name3, setVoucher_name3] = useState('');
  const [voucher_for_money3, setVoucher_for_money3] = useState('');
  const [vouchar_discount3, setVouchar_discount3] = useState('');

  const [voucher_name4, setVoucher_name4] = useState('');
  const [voucher_for_money4, setVoucher_for_money4] = useState('');
  const [vouchar_discount4, setVouchar_discount4] = useState('');

  const [voucher_name5, setVoucher_name5] = useState('');
  const [voucher_for_money5, setVoucher_for_money5] = useState('');
  const [vouchar_discount5, setVouchar_discount5] = useState('');
  /*Voucher variable ends*/
  /*seller social links*/
  const [facebookLink, setFacebookLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [tiktokLink, setTiktokLink] = useState('');
  /*seller social links*/

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const dispatch = useDispatch();

  const clickCatHome1 = (e) =>{
    e.preventDefault();
    setsellerHomeCat1(e.target.value);
  }

  const clickCatHome2 = (e) =>{
    e.preventDefault();
    setsellerHomeCat2(e.target.value);
  }

  const clickCatHome3 = (e) =>{
    e.preventDefault();
    setsellerHomeCat3(e.target.value);
  }

 
  
  useEffect(() => {
   
      window.scrollTo(0, 0);
     
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setphnNo(user.phnNo);

      if (user.seller) {
        setSellerbannerimg(user.seller.sellerbannerimg);
        setSellerName(user.seller.shopName);
        setSellerAddress(user.seller.shopAddress);
        setPre10percent(user.seller.pre10percent);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
        
        setVoucher_name1(user.seller.voucher_name1);
        setVoucher_for_money1(user.seller.voucher_for_money1);
        setVouchar_discount1(user.seller.vouchar_discount1);

        setVoucher_name2(user.seller.voucher_name2);
        setVoucher_for_money2(user.seller.voucher_for_money2);
        setVouchar_discount2(user.seller.vouchar_discount2);

        setVoucher_name3(user.seller.voucher_name3);
        setVoucher_for_money3(user.seller.voucher_for_money3);
        setVouchar_discount3(user.seller.vouchar_discount3);

        setVoucher_name4(user.seller.voucher_name4);
        setVoucher_for_money4(user.seller.voucher_for_money4);
        setVouchar_discount4(user.seller.vouchar_discount4);

        setVoucher_name5(user.seller.voucher_name5);
        setVoucher_for_money5(user.seller.voucher_for_money5);
        setVouchar_discount5(user.seller.vouchar_discount5);

        setFacebookLink(user.seller.facebookLink);
        setYoutubeLink(user.seller.youtubeLink);
        setTiktokLink(user.seller.tiktokLink);
      }
    }
  }, [dispatch, userInfo._id, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    //alert(pre10percent)
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          pre10percent,
          email,
          sellerbannerimg,
          sellerName,
          sellerLogo,
          sellerDescription,
          sellerHomeCat1,
          sellerHomeCat2,
          sellerHomeCat3,
          sellerHomeCat1Img,
          sellerHomeCat2Img,
          sellerHomeCat3Img,
          voucher_name1,
          vouchar_discount1,
          voucher_for_money1,
          voucher_name2,
          vouchar_discount2,
          voucher_for_money2,

          voucher_name3,
          vouchar_discount3,
          voucher_for_money3,

          voucher_name4,
          vouchar_discount4,
          voucher_for_money4,

          voucher_name5,
          vouchar_discount5,
          voucher_for_money5,
          tiktokLink,
          facebookLink,
          youtubeLink,
          
        })
      );   
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    
    const  bodyFormData= new FormData();
    bodyFormData.append('image', file);
    
    if(e.target.files[1]){
      const file1 = e.target.files[1];
      bodyFormData.append('image', file1);
      }
      if(e.target.files[2]){
        const file2 = e.target.files[2];
        bodyFormData.append('image', file2);
      }
      if(e.target.files[3]){
        const file3 = e.target.files[3];
        bodyFormData.append('image', file3);
      }
      if(e.target.files[4]){
        const file4 = e.target.files[4];
        bodyFormData.append('image', file4);
      }
      if(e.target.files[5]){
        const file5 = e.target.files[5];
        bodyFormData.append('image', file5);
      }
      if(e.target.files[6]){
        const file6 = e.target.files[6];
        bodyFormData.append('image', file6);
      } 
   
    setLoadingUpload(true);
    try {
      const { data } = await axios.post(`${API}/api/uploads/s3`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log(data);
      setSellerbannerimg(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadFileHandler1 = async (e) => {
    const file = e.target.files[0];
    
    const  bodyFormData= new FormData();
    bodyFormData.append('image', file);
    
    setLoadingUploadsellerHomeCat1Img(true);
    try {
      const { data } = await axios.post(`${API}/api/uploads/s3`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      //console.log(data);
      setSellerHomeCat1Img(data);
      setLoadingUploadsellerHomeCat1Img(false);
    } catch (error) {
      setErrorUploadsellerHomeCat1Img(error.message);
      setLoadingUploadsellerHomeCat1Img(false);
    }
  };

  const uploadFileHandler2 = async (e) => {
    const file = e.target.files[0];
    
    const  bodyFormData= new FormData();
    bodyFormData.append('image', file);
    
    setLoadingUploadsellerHomeCat2Img(true);
    try {
      const { data } = await axios.post(`${API}/api/uploads/s3`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      //console.log(data);
      setSellerHomeCat2Img(data);
      setLoadingUploadsellerHomeCat2Img(false);
    } catch (error) {
      setErrorUploadsellerHomeCat2Img(error.message);
      setLoadingUploadsellerHomeCat2Img(false);
    }
  };

  const uploadFileHandler3 = async (e) => {
    const file = e.target.files[0];
    
    const  bodyFormData= new FormData();
    bodyFormData.append('image', file);
    
    setLoadingUploadsellerHomeCat3Img(true);
    try {
      const { data } = await axios.post(`${API}/api/uploads/s3`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      //console.log(data);
      setSellerHomeCat3Img(data);
      setLoadingUploadsellerHomeCat3Img(false);
    } catch (error) {
      setErrorUploadsellerHomeCat3Img(error.message);
      setLoadingUploadsellerHomeCat3Img(false);
    }
  };



  const uploadFileHandlerLogo = async (e) => {
    const file = e.target.files[0];
    
    const  bodyFormData= new FormData();
    bodyFormData.append('image', file);
    
    setLoadingUploadLogo(true);
    try {
      const { data } = await axios.post(`${API}/api/uploads/s3`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log(data);
      setSellerLogo(data);
      setLoadingUploadLogo(false);
    } catch (error) {
      setErrorUploadLogo(error.message);
      setLoadingUploadLogo(false);
    }
  };

  return (
    <div>
      <div>
        <h1>User Profile</h1> 
      </div>
        
      <form className="form" onSubmit={submitHandler}>  
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
           {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
           
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="email">Phone No</label>
              <input
                id="phoneNo"
                type="text"
                placeholder="Enter Phone Number"
                value={phnNo}
                onChange={(e) => setphnNo(e.target.value)}
              ></input>
            </div>
           
           
           {/*Seller Update*/}
            {user.isSeller && (
              <>
                <h1>Seller</h1>
                <h2>Voucher Create</h2>

                <div>
                <p>Voucher 1</p>
                <label>Enter Voucher Name1: </label>
                  <input
                    id="voucher_name1"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Name"
                    value={voucher_name1}
                    onChange={(e) => setVoucher_name1(e.target.value)}
                  ></input>

                <label>Enter Voucher Money Amount: </label>
                  <input
                    id="voucher_money1"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Money"
                    value={voucher_for_money1}
                    onChange={(e) => setVoucher_for_money1(e.target.value)}
                  ></input>

                  <label>Enter Voucher Money Discount: </label>
                  <input
                    id="voucher_discount1"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Discount"
                    value={vouchar_discount1}
                    onChange={(e) => setVouchar_discount1(e.target.value)}
                  ></input>

                  {/*Voucher 2*/}
                  <p>Voucher 2</p>
                <label>Enter Voucher Name: </label>
                  <input
                    id="voucher_name1"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Name"
                    value={voucher_name2}
                    onChange={(e) => setVoucher_name2(e.target.value)}
                  ></input>

                <label>Enter Voucher Money Amount: </label>
                  <input
                    id="voucher_money2"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Money"
                    value={voucher_for_money2}
                    onChange={(e) => setVoucher_for_money2(e.target.value)}
                  ></input>

                  <label>Enter Voucher Money Discount: </label>
                  <input
                    id="voucher_discount2"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Discount"
                    value={vouchar_discount2}
                    onChange={(e) => setVouchar_discount2(e.target.value)}
                  ></input>

                    {/*Voucher 3*/}
                    <p>Voucher 3</p>
                <label>Enter Voucher Name: </label>
                  <input
                    id="voucher_name3"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Name"
                    value={voucher_name3}
                    onChange={(e) => setVoucher_name3(e.target.value)}
                  ></input>

                <label>Enter Voucher Money Amount: </label>
                  <input
                    id="voucher_money3"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Money"
                    value={voucher_for_money3}
                    onChange={(e) => setVoucher_for_money3(e.target.value)}
                  ></input>

                  <label>Enter Voucher Money Discount: </label>
                  <input
                    id="voucher_discount3"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Discount"
                    value={vouchar_discount3}
                    onChange={(e) => setVouchar_discount3(e.target.value)}
                  ></input>


                   {/*Voucher 4*/}
                   <p>Voucher 4</p>
                <label>Enter Voucher Name: </label>
                  <input
                    id="voucher_name4"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Name"
                    value={voucher_name4}
                    onChange={(e) => setVoucher_name4(e.target.value)}
                  ></input>

                <label>Enter Voucher Money Amount: </label>
                  <input
                    id="voucher_money4"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Money"
                    value={voucher_for_money4}
                    onChange={(e) => setVoucher_for_money4(e.target.value)}
                  ></input>

                  <label>Enter Voucher Money Discount: </label>
                  <input
                    id="voucher_discount4"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Discount"
                    value={vouchar_discount4}
                    onChange={(e) => setVouchar_discount4(e.target.value)}
                  ></input>


                  {/*Voucher 5*/}
                  <p>Voucher 5</p>
                <label>Enter Voucher Name: </label>
                  <input
                    id="voucher_name5"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Name"
                    value={voucher_name5}
                    onChange={(e) => setVoucher_name5(e.target.value)}
                  ></input>

                <label>Enter Voucher Money Amount: </label>
                  <input
                    id="voucher_money5"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Money"
                    value={voucher_for_money5}
                    onChange={(e) => setVoucher_for_money5(e.target.value)}
                  ></input>

                  <label>Enter Voucher Money Discount: </label>
                  <input
                    id="voucher_discount5"
                    type="text"
                    style={{width:"50%"}}
                    placeholder="Enter Voucher Discount"
                    value={vouchar_discount5}
                    onChange={(e) => setVouchar_discount5(e.target.value)}
                  ></input>
                </div>

                <br/><br/><br/>
                <h2>Create Your Live Link</h2>
                <button onClick={handleClickOpen} className="btn_marchant_account">Live Link</button>
          <Dialog open={open} onClose={handleClose}>
                <LiveModalComponents userId={userInfo._id} opn={open}/>
          </Dialog>

           <div>
              <label htmlFor="imageFile">Image File for Seller Banner(maximum 7 images,height:450px)</label>
              <input
                type="file"
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                multiple
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>



            <div>
              <label htmlFor="imageFile">Your Logo</label>
              <input
                type="file"
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                
                onChange={uploadFileHandlerLogo}
              ></input>
              {loadingUploadLogo && <LoadingBox></LoadingBox>}
              {errorUploadLogo && (
                <MessageBox variant="danger">{errorUploadLogo}</MessageBox>
              )}
            </div>



                <div>
                  <label htmlFor="sellerName">Shop Name</label>
                  <input
                    id="sellerName"
                    type="text"
                    placeholder="Enter Shop Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sellerLogo">Shop Address</label>
                  <input
                    id="sellerAddress"
                    type="text"
                    placeholder="Enter Address"
                    value={sellerAddress}
                    onChange={(e) => setSellerAddress(e.target.value)}
                  ></input>
                </div>
                <div>

                  <label htmlFor="sellerDescription">Shop Description</label>
                  <input
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Shop Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sellerFacebook">Shop Facebook</label>
                  <input
                    id="sellerFacebook"
                    type="text"
                    placeholder="Enter Shop Facebook Link"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sellerYoutube">Shop Youtube</label>
                  <input
                    id="sellerYoutube"
                    type="text"
                    placeholder="Enter Shop Youtube Link"
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label htmlFor="sellerTiktok">Shop Tiktok</label>
                  <input
                    id="sellerTiktok"
                    type="text"
                    placeholder="Enter Shop Tiktok Link"
                    value={tiktokLink}
                    onChange={(e) => setTiktokLink(e.target.value)}
                  ></input>
                </div>

                <div>
              <div>
              <label htmlFor="Pre 10 Percent Enable">Pre 10 Percent Enable :  </label>
              <Checkbox
                checked={pre10percent}
                onClick={(e) => setPre10percent(!pre10percent)}
                {...label}
                //defaultChecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            /></div>

            {loadingCategories ? (
                <LoadingBox></LoadingBox>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                <>
                <h2>Choose category1 and photo for Seller Homepage</h2>
                <div>
                <select
                  value={sellerHomeCat1} 
                  onChange={(e) => clickCatHome1(e)}>{/*make a function to set category and dispatch*/}
                  <option>Choose category</option>
                  {
                    categories.map((c,index) => (
                      <option key={index}>{c}</option>                             
                    ))
                  }
                </select>
                
                <input
                type="file"
                style={{marginLeft:"10px", marginTop:"15px"}}
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                
                onChange={uploadFileHandler1}
              ></input>
              <div>
            {loadingUploadsellerHomeCat1Img && <LoadingBox></LoadingBox>}
              {errorUploadsellerHomeCat1Img && (
                <MessageBox variant="danger">{errorUploadsellerHomeCat1Img}</MessageBox>
              )}
              </div>
                  </div>
                
                  <div>
                <select
                value={sellerHomeCat2} 
                onChange={(e) => clickCatHome2(e)}>{/*make a function to set category and dispatch*/}
                  <option>Choose category</option>
                  {
                    categories.map((c,index) => (
                      <option key={index}>{c}</option>                             
                    ))
                  }
                </select>
                
                <input
                type="file"
                style={{marginLeft:"10px", marginTop:"15px"}}
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                
                onChange={uploadFileHandler2}
              ></input>
              <div>
            {loadingUploadsellerHomeCat2Img && <LoadingBox></LoadingBox>}
              {errorUploadsellerHomeCat2Img && (
                <MessageBox variant="danger">{errorUploadsellerHomeCat2Img}</MessageBox>
              )}
              </div>
                  </div>

                  <div>
                <select
                value={sellerHomeCat3} onChange={(e) => clickCatHome3(e)}>{/*make a function to set category and dispatch*/}
                  <option>Choose category</option>
                  {
                    categories.map((c,index) => (
                      <option key={index}>{c}</option>                             
                    ))
                  }
                </select>
               
                <input
                type="file"
                style={{marginLeft:"10px", marginTop:"15px"}}
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                
                onChange={uploadFileHandler3}
              ></input>
               <div>
              {loadingUploadsellerHomeCat3Img && <LoadingBox></LoadingBox>}
              {errorUploadsellerHomeCat3Img && (
                <MessageBox variant="danger">{errorUploadsellerHomeCat3Img}</MessageBox>
              )}
              </div>
                  </div>
                </>
              )}
              
            </div>
              </>
            )}

       

            <div>
              <label />
              {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )} <br/>
              <button className="btn_marchant_account" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
    );

}