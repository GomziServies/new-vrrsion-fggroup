import React, { useState, useRef, useEffect } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/nutrition.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function SingleBookPhotoSection({ englishbook }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [prevIndex, setPrevIndex] = useState(activeImageIndex);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setOpacity(0.5);
      const fadeOutTimer = setTimeout(() => {
        setPrevIndex(activeImageIndex);
        setOpacity(1);
      }, 300);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [activeImageIndex]);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };
  const options = {
    items: 3,  // Display 3 items at a time
    loop: false,
    margin: 10,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 4,  // Show 2 items on very small screens
      },
      768: {
        items: 4,  // Show 3 items on medium screens
      },
    },
  };
  return (
    <div className="col-lg-6">
      <div
        className="product-imgs english-book singal-product-img"
        style={{ display: "block" }}
      >
        <div
          className="product-image-container"
          ref={imageRef}
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="main-image text-center mt-4">
            <InnerImageZoom
              src={englishbook[prevIndex]}
              zoomSrc={englishbook[prevIndex]}
              zoomType="hover"
              zoomPreload={true}
              alt="FG Group"
              width="85%"
              effect="blur"
            />
          </div>
        </div>
        <div className="thumbnail-images">
        <OwlCarousel {...options} className="owl-theme">
          {englishbook.map((image, index) => (
            <div
              key={index}
              className={`thumbnail-image ${
                index === activeImageIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
              style={{ marginLeft: "15px" }}
            >
              <Row>
                <div className="py-1 mt-2 px-2">
                  <div
                    style={{
                      width: "90px",
                      height: "110px",
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginTop:"10px"
                    }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      src={image}
                      alt="FG Group"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </Row>
            </div>
          ))}
            </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default SingleBookPhotoSection;
