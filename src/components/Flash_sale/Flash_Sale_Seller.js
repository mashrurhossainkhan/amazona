import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listProducts, listProductsWithoutPagination } from "../../action/productAction";
import MessageBox from "../MessageBox";
import { Link, useParams } from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} style={{height:"50px"}} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} style={{height:"50px"}} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 7,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Flash_Sale_Seller = (props) => {
  const {
    pageNumber = 1,
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
    order = 'newest',
    flash_sale = true,
  } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productListWithoutPagination);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProductsWithoutPagination());
  }, [ category, dispatch, max, min, name, order, rating, pageNumber, flash_sale]);

  const getFilterUrl = (filter) => {
   
    const filterFlashSale = filter.flash_sale || flash_sale;
   
    return `/search/flash_sale/${filterFlashSale}`;
  };

  return (
    <div className="carousel1">
      {
                loading?(
                    <></>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) :(
                    <div>
                     <h1>Flash Sale</h1>
                     <Link
                     style={{color: "#000000"}}
                     to={getFilterUrl({ flash_sale: true})}
                     className={
                        'active'
                     }
                  >
                    See All
                  </Link>
                    <>
                    {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                    <Slider {...carouselProperties}>
                        {products.map((product) => (
                           product.flash_sale == true && props.sellerId == product.seller._id?
                           <Card key={product._id} item={product} />:""
                        ))}
                    </Slider>
                    </>
                    </div>
                )
            }
     
    </div>
  );
};

const Card = ( {item} ) => {
  if (item.name != null) {
    var productName= item.name.substr(0,15);
}
  
  //alert(imageMainArr[0])
  return (
    <div style={{ textAlign: "center", padding:"13px" }}>
        <Link to={`/product/${item._id}`}>
      <div className="cardDiv">
    
           <img
           className="multi__image"
           src={item.image.split(',')[0]}
           alt=""
           style={{
             width: "100%",
             height:"196px",
             margin:"auto auto auto auto",
             objectFit: "contain",
             marginBottom: "10px",
           }}
         />
         
     
        <p className="nameHomepage">{productName}...</p>
        <p style={{ fontSize: "18px", padding: "5px 0", color: "#2B333B",height:"9vh" }}>
          {item.discounted_price ? 
              <>
                BDT <del>{item.price}</del> {item.discounted_price}
              </> :
              <>
                BDT {item.price}
              </>
            
          }
        
        </p>
       
      </div>
      </Link>
    </div>
  );
};

export default Flash_Sale_Seller;
