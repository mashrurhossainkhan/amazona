import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import FacebookIcon from "@mui/icons-material/Facebook";
import Dialog from "@mui/material/Dialog";
import React, { useEffect } from "react";
import LiveLinkTabs from "../../components/LiveLinkTabs";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useHistory } from "react-router-dom";
import { detailsSellerUsers } from "../../action/userAction";

const ProfileSeller = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openLiveLink, setOpenLiveLink] = React.useState(false);
  var nameShopWSFromURL = props.shopName.replace(/%20/g, " ");
  const history = useHistory();
  //for login modal click open
  const handleClickOpen = () => {
    history.push("/signin");
  };
  const dispatch = useDispatch();

  //login modal click close
  const handleClose = () => {
    setOpen(false);
  };

  //Link modal open
  const handleClickOpenLiveLink = () => {
    setOpenLiveLink(true);
  };
  //Live modal close
  const handleCloseLiveLink = () => {
    setOpenLiveLink(false);
  };
  var sellerId;
  var currentUrlName = window.location.href;

  if (currentUrlName.includes("pageNumber")) {
    sellerId = props.sellerIdPagination;
  } else {
    sellerId = props.sellerId;
  }

  useEffect(() => {
    dispatch(detailsSellerUsers(sellerId));
  }, []);
  const userDetails = useSelector((state) => state.userSellerDetails);
  const { loading, error, user } = userDetails;
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <></>
      ) : (
        /* <MessageBox variant="danger">
              <p  style={{fontSize: "26px"}}>To see Seller's Profile Please </p>&nbsp; 
            <button onClick={handleClickOpen} className="btn_marchant_account">Log In</button>
               
          </MessageBox> */

        <ul>
          <li>
            <div className="row start">
              <div>
                <p
                  className="shopNameCSS"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {user.seller.shopName}
                </p>
                <hr style={{ backgroundColor: "#DE3D3A" }} />
                <p className="shopNameCSS">{user.seller.marketName}</p>
                {user.seller.shopType == "WholeSale Shop Owner" ? (
                  ""
                ) : (
                  <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                    Shop Address: {user.seller.shopAddress}
                  </p>
                )}

                {props.flag == 1 ? (
                  <>
                    {user.seller.shopType == "WholeSale Shop Owner" ? (
                      <>
                        <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                          Place order accordingly. Dokanbhai team will contact
                          you. For more information{" "}
                          <Link
                            style={{ textDecoration: "underline" }}
                            to="/contact_us"
                          >
                            contact us
                          </Link>
                          .
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                          Seller Address: {user.seller.shopAddress}
                        </p>
                        <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                          Seller Email: {user.email}
                        </p>

                        <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                          Phone No: {user.phnNo}
                        </p>

                        <p className="shopNameCSS" style={{ fontSize: "18px" }}>
                          For more information{" "}
                          <Link to={"/contact_us"}>contact us.</Link>
                        </p>
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </li>

          <li>
            <button className="btn_marchant_account">Follow</button>
            <br /> <br />
            <button onClick={handleClickOpenLiveLink} className="headerBtn1">
              {" "}
              Live Link
            </button>
            <Dialog open={openLiveLink} onClose={handleCloseLiveLink}>
              <LiveLinkTabs liveLink={user.seller.liveLink} />
            </Dialog>
          </li>
          <li>{user.seller.description}</li>
          <li>
            <div className="flex_social_btn_container">
              {user.seller.facebookLink ? (
                <a href={user.seller.facebookLink} target="_blank">
                  <div>
                    <FacebookIcon style={{ fontSize: 50 }} />
                  </div>
                </a>
              ) : (
                ""
              )}

              {user.seller.youtubeLink ? (
                <a href={user.seller.youtubeLink} target="_blank">
                  <div>
                    <YouTubeIcon style={{ fontSize: 50 }} />
                  </div>
                </a>
              ) : (
                ""
              )}

              {user.seller.tiktokLink ? (
                <a href={user.seller.tiktokLink} target="_blank">
                  <div>
                    <LibraryMusicIcon style={{ fontSize: 50 }} />
                  </div>
                </a>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileSeller;
