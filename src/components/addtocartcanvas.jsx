import React, { useState, useEffect } from "react";
import "../assets/css/offcanvase.css";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { axiosInstance } from "../assets/js/config/api";

const AddtoCartOffCanvas = ({ isOpen, onClose, productData }) => {
  const [quantity, setQuantity] = useState(1);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateOpen(true);
    } else {
      setAnimateOpen(false);
    }
  }, [isOpen]);

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      Swal.fire({
        title: "Error",
        text: "Min 1 Product required for order!",
        icon: "error",
        customClass: {
          popup: "swal-overlay-zindex",
        },
      });
    }
  };

  const plusQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire({
        title: "Error",
        text: "Max limit is 10 products per order!",
        icon: "error",
        customClass: {
          popup: "swal-overlay-zindex",
        },
      });
    }
  };

  if (!productData) {
    return null;
  }

  const totalPrice = parseFloat(productData.price) * quantity;

  const handleAddToCart = async () => {
    try {
      const cartItem = {
        product_id: productData.id,
        quantity: quantity,
      };
      const response = await axiosInstance.post("/product-cart/add", cartItem);

      if (response.status === 200) {
        window.location.href = `/nutrition/check-out?product_id=${
          productData.id
        }&qty=${quantity}&price=${productData.price.replace(/,/g, "")}`;
      }
    } catch (error) {
      window.location.href = `/nutrition/check-out?product_id=${
        productData.id
      }&qty=${quantity}&price=${productData.price.replace(/,/g, "")}`;
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`offcanvas ${animateOpen ? "open" : ""}`}>
        <div
          className="d-flex justify-content-between px-2 pt-2"
          style={{ background: "rgb(238 238 238)" }}
        >
          <h2 className="h4-fs">YOUR CART</h2>
          <button
            type="button"
            className="closess closse-mobile p-0"
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "50px",
            }}
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="p-0">
              <i className="fas fa-times text-black"></i>
            </span>
          </button>
        </div>
        <div className="col-12 cart-detail py-3">
          <div className="cart-item-main p-2 p-md-3 bg-white br-15 shadow mb-4 position-relative">
            <div className="media bg-white cart-main">
              <div className="row">
                <div className="col-4 p-0">
                  <span
                    className="lazy-load-image-background blur lazy-load-image-loaded"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      alt="product"
                      className="img-fluid cp"
                      src={productData.img}
                    />
                  </span>
                </div>
                <div className="col-8">
                  <div className="media-body align-self-center">
                    <div className="d-flex justify-content-between">
                      <div className="col-12 p-0">
                        <h2
                          className="f-rob-bol d-inline-block cp mb-2 h3-fs fs-21"
                        >
                          {productData.name}
                        </h2>
                        <h2 className="h3-fs f-rob-bol f-14 cp mb-1">
                          ({productData.size})
                        </h2>
                      </div>
                    </div>
                    <div className="cart-add align-items-center mt-3">
                      <div className="d-flex align-items-center mx-2">
                        <i
                          className="fas fa-minus text-dark mr-2"
                          onClick={minusQuantity}
                        ></i>
                        <Form.Group className="text-center">
                          <Form.Control
                            type="number"
                            id="txt_quantity"
                            value={quantity}
                            min="1"
                            className="mb-0"
                            readOnly
                            style={{
                              borderRadius: "5px",
                              width: "45px",
                              height: "30px",
                            }}
                          />
                        </Form.Group>
                        <i
                          className="fas fa-plus text-dark ml-2"
                          onClick={plusQuantity}
                        ></i>
                      </div>
                    </div>
                    <ul className="list-unstyled m-0">
                      <li className="d-block">
                        <span className="d-inline-block f-rob-med f-13 mr-2">
                          Inclusive of all taxes
                        </span>
                      </li>
                    </ul>
                    <div className="col-12 p-0 mt-1">
                      <div className="d-flex align-items-center">
                        <span className="d-inline-block ml-2 mr-1 mx-md-2 f-rob-bol f-14 text-lig-gray"></span>
                        <span className="d-inline-block mr-md-2 f-rob-bol f-22">
                          ₹{totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center checkout-main-1"
          style={{ background: "rgb(238 238 238)" }}
        >
          <div className="w-100 p-2 pb-3">
            <div className="subtotal-main shadow bg-white br-15 mb-3 p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="m-0 f-rob-bol f-16">Total Amount</p>
                </div>
                <div>
                  <span className="d-inline-block f-rob-med f-16 text-lig-gray">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="common-button">
                <button
                  onClick={handleAddToCart}
                  className="bg-yellow d-block text-uppercase px-3 px-lg-5 text-white f-16 f-rob-bol rate-btn"
                >
                  Check OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtoCartOffCanvas;
