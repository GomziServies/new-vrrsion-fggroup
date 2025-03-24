import React, { useState, useRef, useEffect } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/equipments.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function EquipmentMobileProductSection({ product }) {
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

  return (
    // <div className="col-lg-6 mt-4">
    //   <div className="product-imgs english-book singal-product-img">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="main-image text-center">
    //           <div
    //             style={{
    //               transition: "opacity 0.5s ease-in-out",
    //               opacity: opacity,
    //             }}
    //             ref={imageRef}
    //           >
    //             <LazyLoadImage
    //               src={product[prevIndex]}
    //               alt="FG Group"
    //               effect="blur"
    //               style={{
    //                 width: "100%",
    //                 height: "100%",
    //                 objectFit: "contain",
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-12">
    //         <div className="thumbnail-images">
    //           {product.map((image, index) => (
    //             <div
    //               key={index}
    //               className={`thumbnail-image ${
    //                 index === activeImageIndex ? "active" : ""
    //               }`}
    //               onClick={() => handleThumbnailClick(index)}
    //             >
    //               <div className="d-flex">
    //                 <div className="col-12 px-4 mt-4 text-center">
    //                   <div
    //                     style={{
    //                       width: "100%",
    //                       height: "auto",
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     <LazyLoadImage
    //                       src={image}
    //                       alt="FG Group"
    //                       effect="blur"
    //                       style={{
    //                         width: "100%",
    //                         height: "100%",
    //                         objectFit: "contain",
    //                       }}
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-6 mt-4">
      <div className="product-imgs english-book singal-product-img">
        <div className="row">
          <div className="col-12">
            <div className="main-image text-center">
              <div
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: opacity,
                }}
                ref={imageRef}
              >
                <LazyLoadImage
                  src={product[prevIndex]}
                  alt="FG Group"
                  effect="blur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="thumbnail-images">
              {product.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-image ${
                    index === activeImageIndex ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <div className="d-flex">
                    <div className="col-12 px-2 mt-4 text-center">
                      <div className="w-100 h-auto pe-auto">
                        <LazyLoadImage
                          src={image}
                          alt="FG Group"
                          effect="blur"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentMobileProductSection;
