import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUser } from "../action/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";

export default function UserEditScreen(props) {
  const userId = props.match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    //window.location.reload();
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsSeller(user.isSeller);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user

    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
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
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="isSeller">Is Seller</label>
              <input
                id="isSeller"
                type="checkbox"
                checked={isSeller}
                onChange={(e) => setIsSeller(!isSeller)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              {isSeller ? (
                <>
                  <h2>Seller Information</h2>
                  <p>Shop Name: {user.seller.shopName}</p>
                  <p>Shop Address: {user.seller.shopAddress}</p>
                  <p>Market Name: {user.seller.marketName}</p>
                  <p>Shop Owner Name: {user.seller.ownerName}</p>
                  <p>Shop Owner Address: {user.seller.ownerAddress}</p>
                  <p>Contact No. {user.phnNo}</p>
                  <p>Email: {user.email}</p>
                  <p>NID/Passport: {user.seller.nidorPassport}</p>
                  <p>
                    <strong>
                      For order Contact No: {user.seller.orderInfoContactNo}
                    </strong>
                  </p>
                  <p>SMS receive no: {user.seller.smsToNumber}</p>
                  <p>
                    Mobile Banking Transaction No:{" "}
                    {user.seller.mobileBankingTransaction}
                  </p>
                  <p>Bank Acc. Name: {user.seller.bankAccName}</p>
                  <p>Bank Acc. No: {user.seller.bankAccNo}</p>
                </>
              ) : (
                ""
              )}
            </div>

            <div>
              <button type="submit" className="btn_marchant_account">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
