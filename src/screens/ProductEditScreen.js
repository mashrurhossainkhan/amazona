import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../node_modules/axios/index';
import {
  detailsProduct,
  listProductCategories,
  listProductSubCategories,
  listProductSubCategories1,
  updateProduct,
} from '../action/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Checkbox from '@mui/material/Checkbox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import { useHistory } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [productIdMain, setProductIdMain] = useState('');
  const [returnDays, setReturnDays] = useState('');
  const [warenteeDays, setWarenteeDays] = useState('');
  const [preTenPercent, setPreTenPercent] = useState('');
  const [name, setName] = useState('');
  const [seqNo, setSeqNo] = useState('100000');
  const [price, setPrice] = useState('');
  var [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [sub_category, setSubCategory] = useState('');
  const [sub_category1, setSubCategory1] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [discounted_price, setDiscounted_price] = useState('');
  const [flash_sale, setFlash_sale] = useState(false);
  const [published, setPublished] = useState(false);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  const history = useHistory();

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  //const API = 'https://backend.dokanbhai.dokanbhai.com:3002';
  const API = 'http://localhost:5001';

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProductCategories());

    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);

      var str = product.image;

      str.replace('undefined', '');
      setProductIdMain(product.productIdMain);
      setImage(str);
      setSubCategory(product.sub_category);
      setSubCategory1(product.sub_category1);
      setCategory(product.category);
      setWarenteeDays(product.warenteeDays);
      setReturnDays(product.returnDays);
      setSize(product.size);
      setSeqNo(product.seqNo);
      setFlash_sale(product.flash_sale);
      setPublished(product.published);
      setMaterial(product.material);
      setWeight(product.weight);
      setDiscounted_price(product.discounted_price);
      setColor(product.color);
      setPreTenPercent(product.preTenPercent);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product, dispatch, productId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    //alert(category)
    image = image.replace('undefined', '');
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        productIdMain,
        image,
        preTenPercent,
        category,
        sub_category,
        sub_category1,
        size,
        material,
        weight,
        discounted_price,
        color,
        warenteeDays,
        returnDays,
        published,
        flash_sale,
        countInStock,
        description,
        seqNo,
      })
    );
    alert('Product updated');
    if (userInfo.isAdmin == true) {
      props.history.push('/productlist');
    } else {
      props.history.push('/productlist/seller');
    }
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productSubCategoryList = useSelector((state) => state.subcatList);
  const {
    loading: subcatloading,
    error: subcaterror,
    subcategories,
  } = productSubCategoryList;

  const productSubCategoryList1 = useSelector((state) => state.subcatList1);
  const {
    loading: subcatloading1,
    error: subcaterror1,
    subcategories1,
  } = productSubCategoryList1;

  const clickCat = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    dispatch(listProductSubCategories(e.target.value));
  };

  const clickCatSub = (e) => {
    e.preventDefault();
    setSubCategory(e.target.value);
    dispatch(listProductSubCategories1(e.target.value));
  };

  const uploadFileHandler = async (e) => {
    console.log('hree');
    const file = e.target.files[0];

    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    //console.log(bodyFormData);
    if (e.target.files[1]) {
      const file1 = e.target.files[1];
      bodyFormData.append('image', file1);
    }
    if (e.target.files[2]) {
      const file2 = e.target.files[2];
      bodyFormData.append('image', file2);
    }
    if (e.target.files[3]) {
      const file3 = e.target.files[3];
      bodyFormData.append('image', file3);
    }
    if (e.target.files[4]) {
      const file4 = e.target.files[4];
      bodyFormData.append('image', file4);
    }
    if (e.target.files[5]) {
      const file5 = e.target.files[5];
      bodyFormData.append('image', file5);
    }
    if (e.target.files[6]) {
      const file6 = e.target.files[6];
      bodyFormData.append('image', file6);
    }

    if (e.target.files[7]) {
      const file7 = e.target.files[7];
      bodyFormData.append('image', file7);
    }

    if (e.target.files[8]) {
      const file8 = e.target.files[8];
      bodyFormData.append('image', file8);
    }
    if (e.target.files[9]) {
      const file9 = e.target.files[9];
      bodyFormData.append('image', file9);
    }

    if (e.target.files[10]) {
      const file10 = e.target.files[10];
      bodyFormData.append('image', file10);
    }

    if (e.target.files[11]) {
      const file11 = e.target.files[11];
      bodyFormData.append('image', file11);
    }

    if (e.target.files[12]) {
      const file12 = e.target.files[12];
      bodyFormData.append('image', file12);
    }

    if (e.target.files[13]) {
      const file13 = e.target.files[13];
      bodyFormData.append('image', file13);
    }

    if (e.target.files[14]) {
      const file14 = e.target.files[14];
      bodyFormData.append('image', file14);
    }

    if (e.target.files[15]) {
      const file15 = e.target.files[15];
      bodyFormData.append('image', file15);
    }

    if (e.target.files[16]) {
      const file16 = e.target.files[16];
      bodyFormData.append('image', file16);
    }

    if (e.target.files[17]) {
      const file17 = e.target.files[17];
      bodyFormData.append('image', file17);
    }

    if (e.target.files[18]) {
      const file18 = e.target.files[18];
      bodyFormData.append('image', file18);
    }

    if (e.target.files[19]) {
      const file19 = e.target.files[19];
      bodyFormData.append('image', file19);
    }

    if (e.target.files[20]) {
      const file20 = e.target.files[20];
      bodyFormData.append('image', file20);
    }

    if (e.target.files[21]) {
      const file21 = e.target.files[21];
      bodyFormData.append('image', file21);
    }

    if (e.target.files[22]) {
      const file22 = e.target.files[22];
      bodyFormData.append('image', file22);
    }

    if (e.target.files[23]) {
      const file23 = e.target.files[23];
      bodyFormData.append('image', file23);
    }

    if (e.target.files[24]) {
      const file24 = e.target.files[24];
      bodyFormData.append('image', file24);
    }

    if (e.target.files[25]) {
      const file25 = e.target.files[25];
      bodyFormData.append('image', file25);
    }

    if (e.target.files[26]) {
      const file26 = e.target.files[26];
      bodyFormData.append('image', file26);
    }

    if (e.target.files[27]) {
      const file27 = e.target.files[27];
      bodyFormData.append('image', file27);
    }

    if (e.target.files[28]) {
      const file28 = e.target.files[28];
      bodyFormData.append('image', file28);
    }

    if (e.target.files[29]) {
      const file29 = e.target.files[29];
      bodyFormData.append('image', file29);
    }

    if (e.target.files[30]) {
      const file30 = e.target.files[30];
      bodyFormData.append('image', file30);
    }
    setLoadingUpload(true);
    try {
      const { data } = await axios.post(API + '/api/uploads/s3', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log('image data = ' + data);
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <h2>Your Product Details</h2>
      <form
        className="form"
        encType="multiple/form-data"
        onSubmit={submitHandler}
      >
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Your Product Id</label>

              <input
                id="productId"
                type="text"
                style={{ width: '50%' }}
                placeholder="Enter product ID"
                value={productIdMain}
                required
                onChange={(e) => setProductIdMain(e.target.value)}
              ></input>
            </div>
            {userInfo.isAdmin == true ? (
              <div>
                <label htmlFor="name">Your Product seq no</label>

                <input
                  id="seqno"
                  type="text"
                  style={{ width: '50%' }}
                  placeholder="Enter seq. no of your product"
                  value={seqNo}
                  onChange={(e) => setSeqNo(e.target.value)}
                ></input>
              </div>
            ) : (
              ''
            )}

            <div>
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                style={{ width: '50%' }}
                placeholder="Enter product name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            {/*Category and Sub category start*/}

            <div>
              <label htmlFor="cat and sub cat">
                Category, Sub Category and Sub Category 1
              </label>
              <div className="InputFlexRow">
                {loadingCategories ? (
                  <LoadingBox></LoadingBox>
                ) : errorCategories ? (
                  <MessageBox variant="danger">{errorCategories}</MessageBox>
                ) : (
                  <select value={category} onChange={(e) => clickCat(e)}>
                    {/*make a function to set category and dispatch*/}
                    <option>Choose category</option>
                    {categories.map((c, index) => (
                      <option key={index}>{c}</option>
                    ))}
                  </select>
                )}

                <div className="mlOfProductEditScreen">
                  {subcatloading ? (
                    <LoadingBox></LoadingBox>
                  ) : subcaterror ? (
                    <MessageBox variant="danger">{subcaterror}</MessageBox>
                  ) : category ? (
                    <select
                      value={sub_category}
                      onChange={(e) => clickCatSub(e)}
                    >
                      <option>Choose Sub category</option>
                      {subcategories.map((c, index) => (
                        <option key={index}>{c}</option>
                      ))}
                    </select>
                  ) : (
                    ''
                  )}

                  {subcatloading1 ? (
                    <LoadingBox></LoadingBox>
                  ) : subcaterror1 ? (
                    <MessageBox variant="danger">{subcaterror1}</MessageBox>
                  ) : category ? (
                    <select
                      value={sub_category1}
                      onChange={(e) => setSubCategory1(e.target.value)}
                    >
                      <option>Choose Sub category1</option>
                      {subcategories1.map((c, index) => (
                        <option key={index}>{c}</option>
                      ))}
                    </select>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            {/*Category and Sub category end*/}

            <div>
              <label htmlFor="imageFile">
                Image FileImage(maximum 30 images)
              </label>
              <input
                type="file"
                id="imageFile"
                className="btn_marchant_account"
                label="Choose Image"
                multiple
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox>Please wait</LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>

            <div>
              <div className="InputFlexRow">
                <div className="InputFlexColumn">
                  <label htmlFor="Price">Price:</label>
                  <input
                    id="price"
                    type="text"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>

                <div className="mlOfProductEditScreen">
                  <div className="InputFlexColumn">
                    <label htmlFor="Discounted Price">Discounted Price: </label>
                    <input
                      id="Discounted"
                      type="text"
                      placeholder="Enter Discounted"
                      value={discounted_price}
                      onChange={(e) => setDiscounted_price(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="mlOfProductEditScreen">
                  <div className="InputFlexColumn">
                    <label htmlFor="Count In Stock">In Stock:</label>
                    <input
                      id="countInStock"
                      type="number"
                      max={100}
                      placeholder="Enter countInStock"
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            {/*Flash sale and discounted price*/}
            {/*Flash sale and discounted price*/}

            <div>
              <div className="InputFlexRow">
                <div className="InputFlexColumn">
                  <label htmlFor="Size">Size: (Separated by comma) </label>
                  <input
                    id="size"
                    type="text"
                    placeholder="Enter size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  ></input>
                </div>

                <div className="InputFlexColumn mlOfProductEditScreen">
                  <label htmlFor="Color">Color: (Separated by comma) </label>
                  <input
                    id="color"
                    type="text"
                    placeholder="Enter color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div>
              <div className="InputFlexRow">
                <div className="InputFlexColumn">
                  <label htmlFor="Materials">
                    Materials: (Separated by comma){' '}
                  </label>
                  <input
                    id="materials"
                    type="text"
                    placeholder="Enter Materials"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  ></input>
                </div>
                <div className="InputFlexColumn mlOfProductEditScreen">
                  <label htmlFor="Weight">Weight: </label>
                  <input
                    id="weight"
                    type="text"
                    placeholder="Enter Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div>
              {/* 
              <div>
                <label htmlFor="Flash Sale">Flash Sale:  </label>
                <Checkbox
                  checked={flash_sale}
                  onChange={(e) => setFlash_sale(!flash_sale)}
                  {...label}
                  defaultChecked
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                </div>
                */}
            </div>

            <div>
              <div>
                <label htmlFor="Published">Publish this product: </label>
                <Checkbox
                  checked={published}
                  onChange={(e) => setPublished(!published)}
                  {...label}
                  defaultChecked
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              </div>

              {/* 
            <div>
              <label htmlFor="tenPercentage">Enable Pre ten percentage payment:  </label>
              <Checkbox
                checked={preTenPercent}
                onChange={(e) => setPreTenPercent(!preTenPercent)}
                {...label}
                defaultChecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            /></div>*/}
            </div>

            <div>
              <label htmlFor="Warranty Days">Warranty Days</label>

              <input
                id="warenteeDays"
                type="text"
                style={{ width: '50%' }}
                placeholder="Enter Warranty Days"
                value={warenteeDays}
                required
                onChange={(e) => setWarenteeDays(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="Return Days">Change Days</label>

              <input
                id="ReturnDays"
                type="text"
                style={{ width: '50%' }}
                placeholder="Enter Return Days"
                value={returnDays}
                required
                onChange={(e) => setReturnDays(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="15"
                type="text"
                placeholder="Enter description (Separated by new lines)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <label></label>
                <button className="btn_marchant_account" type="submit">
                  Add or update Product
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
