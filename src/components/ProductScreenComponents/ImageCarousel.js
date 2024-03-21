var Carousel = require('react-responsive-carousel').Carousel;

const ImageCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="imageCarousel">
      <Carousel
        arrows={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        swipeable={false}
        dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-0-px"
      >
        {props.item.map((productImg, index) => (
          <div key={index} className="imageCarousel2">
            {productImg == '/images/p1.jp' ? (
              <p>END of images</p>
            ) : (
              <img
                className="large"
                style={{ backgroundColor: '#000000' }}
                src={productImg}
                alt="Loading..."
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
