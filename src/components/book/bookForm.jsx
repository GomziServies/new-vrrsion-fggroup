import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import BookButtonsContainer from "./BookButtonsContainer";
import { axiosInstance } from "../../assets/js/config/api.js";
import { Link } from "react-router-dom";

const BookForm = ({
  booksData,
  books,
  menuOpen,
  setMenuOpen,
  setSelectedBookId,
  selectedBookId,
  currentBookLang,
  handleEbookOrder,
  showEBook,
  setCurrentBookLang,
  BuyButton,
  removeHindiButton,
  isAuthenticated,
  setShowModal,
  setBooks,
}) => {
  const handleEnglishClick = (e) => {
    e.preventDefault();
    if (showEBook) {
      document.getElementById("btn_ebook").style.display = "inline-block";
      document.getElementById("btn_ebook_hindi").style.display = "none";
      document.getElementById("m-btn_ebook").style.display = "inline-block";
      document.getElementById("m-btn_ebook_hindi").style.display = "none";
      setCurrentBookLang("E-english");
      setSelectedBookId(BuyButton.BuyEBook);
    } else {
      setCurrentBookLang("english");
      setSelectedBookId(BuyButton.BuyBook);
    }
  };

  const handleHindiClick = (e) => {
    e.preventDefault();
    if (showEBook) {
      document.getElementById("btn_ebook").style.display = "none";
      document.getElementById("btn_ebook_hindi").style.display = "inline-block";
      document.getElementById("m-btn_ebook").style.display = "none";
      document.getElementById("m-btn_ebook_hindi").style.display =
        "inline-block";
      setCurrentBookLang("E-hindi");
      setSelectedBookId(BuyButton.BuyHindiEBook);
    } else {
      setCurrentBookLang("hindi");
      setSelectedBookId(BuyButton.BuyHindiBook);
    }
  };

  const toggleMenu = async (data, e) => {
    e.preventDefault();
    try {
      let existingData = JSON.parse(localStorage.getItem("addItemInCart")) || {
        products: [],
      };
      const productExists = existingData.products.some(
        (product) => product.book_id === selectedBookId
      );

      if (!productExists) {
        existingData.products.push({
          book_id: selectedBookId,
        });
        localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      }

      if (!isAuthenticated) {
        localStorage.setItem("itemCartAdded", "true");
        setMenuOpen(false);
        setShowModal(true);
      } else {
        const response = await axiosInstance.post("/order-cart/add-item", {
          item_id: selectedBookId,
          quantity: data?.quantity || 1,
          item_type: "BOOKS",
        });

        if (response.data.response === "OK") {
          setBooks(data);
          setMenuOpen(!menuOpen);
          localStorage.setItem("itemCartAdded", "false");
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const addBookInCart = async (bookId) => {
    try {
      const response = await axiosInstance.post("/order-cart/add-item", {
        item_id: bookId,
        quantity: 1,
        item_type: "BOOKS",
      });

      if (response.data.response === "OK") {
        setBooks(bookId);
        setMenuOpen(!menuOpen);
        localStorage.removeItem("itemCartAdded");
      }
    } catch (error) {
      console.error("Error adding book to cart:", error);
    }
  };

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("addItemInCart")) || {
      products: [],
    };
    const itemCart = JSON.parse(localStorage.getItem("itemCartAdded")) === true;

    if (existingData.products.length > 0 && itemCart) {
      const bookId = existingData.products[0].book_id;
      addBookInCart(bookId);
    }
  }, []);

  return (
    <div>
      <div className="mt-3 d-block d-md-none">
        <Form>
          <div className="row" style={{ marginLeft: "15px !important" }}>
            <div className="col-md-12 d-none d-md-block">
              <div className="">
                <p className="">Available in Two Language</p>
                <div className="">
                  <div className="d-flex">
                    {!removeHindiButton && (
                      <div className="papper-b">
                        <button
                          className={`btn ${currentBookLang === "english" ? "forjq" : ""
                            }`}
                          onClick={handleEnglishClick}
                        >
                          English
                        </button>
                      </div>
                    )}
                    {!removeHindiButton ? (
                      <div className="papper-b ml-3">
                        <button
                          className={currentBookLang === "hindi" ? "forjq" : ""}
                          onClick={handleHindiClick}
                        >
                          Hindi
                        </button>
                      </div>
                    ) : (
                      <div className="papper-b">
                        <button
                          className="forjq"
                          onClick={(e) => e.preventDefault()}
                        >
                          English
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none mb-3">
              <p className="mb-3 mt-0">
                <b>Available in Two Language</b>
              </p>
              <div className="d-flex">
                {!removeHindiButton && (
                  <div className="papper-b">
                    <button
                      className={`btn ${currentBookLang === "english" ? "forjq" : ""
                        }`}
                      onClick={handleEnglishClick}
                    >
                      English
                    </button>
                  </div>
                )}
                {!removeHindiButton ? (
                  <div className="papper-b ml-3">
                    <button
                      className={currentBookLang === "hindi" ? "forjq" : ""}
                      onClick={handleHindiClick}
                    >
                      Hindi
                    </button>
                  </div>
                ) : (
                  <div className="papper-b">
                    <button
                      className="forjq"
                      onClick={(e) => e.preventDefault()}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className="">
        <h1 className="f-rob-bol f-22 text-bold mt-4">{booksData.name}</h1>
      </div>

      <div className="text-left text-md-right">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center my-2">
            <span className="d-flex product-rating product-rating-b f-14 text-secondary">
              <i className="fas fa-star mr-2 rating-star"></i>
              4.5
            </span>
          </div>
        </div>
      </div>
      <div className="price">
        <h2 className="mt-0 h2-fs">Mentors</h2>
      </div>
      <div className="row">
        <div className="col-lg-9 calc">
          <ul>
            <li>
              <div>
                <img
                  alt="Fg Group"
                  className="lazy mr-3"
                  src={process.env.PUBLIC_URL + "/assets/images/img/blue.webp"}
                />
                <p>
                  <Link
                    to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                    style={{ color: "#000" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dr. Gautam Jani
                  </Link>
                </p>
              </div>
            </li>
            {
              booksData?.mentor?.map((data, index) => {
                const color = ['yellow', 'pink']
                return (
                  <li key={index}>
                    <div>
                      <img
                        className="lazy mr-3"
                        src={process.env.PUBLIC_URL + `/assets/images/img/${color[index]}.webp`}
                        alt="FG Group"
                      />
                      <p>{data}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="mb-3 p-0 d-block d-md-none">
        <div className="d-inline-block">
          <p className="mt-0 fs-30">
            <span className="d-inline-block f-22 text-bold f-rob-bol m-prices">
              ₹{booksData.prices} /-
            </span>
          </p>
        </div>
        {/* mobile view btn  */}
        <div className="col-lg-12 book_btns">
          <Button
            variant="outline-primary"
            className="btn mt-3 mr-3 mb-0"
            style={{ display: "none" }}
            id="m-btn_ebook"
            onClick={() => handleEbookOrder(BuyButton[0].BuyEBook)}
          >
            Buy E-Book
          </Button>

          <Button
            variant="outline-primary"
            className="btn mt-3 mr-3 mb-0"
            style={{ display: "none" }}
            id="m-btn_ebook_hindi"
            onClick={() => handleEbookOrder(BuyButton[0].BuyHindiEBook)}
          >
            Buy Hindi E-Book{" "}
          </Button>

          {!showEBook && (
            <BookButtonsContainer
              booksData={booksData}
              books={books}
              toggleMenu={toggleMenu}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              selectedBookId={selectedBookId}
            />
          )}
        </div>
      </div>

      <div className="d-none d-md-block">
        <Form>
          <div className="row">
            <div className="col-md-12 d-none d-md-block">
              <div className="">
                <p className="mt-0">Available in Two Language</p>
                <div className="mt-3 mb-3">
                  <div className="d-flex">
                    {!removeHindiButton && (
                      <div className="papper-b">
                        <button
                          className={`btn ${currentBookLang === "english" ||
                            currentBookLang === "E-english"
                            ? "forjq"
                            : ""
                            }`}
                          onClick={handleEnglishClick}
                        >
                          English
                        </button>
                      </div>
                    )}
                    {!removeHindiButton ? (
                      <div className="papper-b ml-3">
                        <button
                          className={
                            currentBookLang === "hindi" ||
                              currentBookLang === "E-hindi"
                              ? "forjq"
                              : ""
                          }
                          onClick={handleHindiClick}
                        >
                          Hindi
                        </button>
                      </div>
                    ) : (
                      <div className="papper-b">
                        <button
                          className="forjq"
                          onClick={(e) => e.preventDefault()}
                        >
                          English
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* mobile view  */}
            <div className="col-md-12 d-block d-md-none mb-3">
              <p className="mb-3 mt-0">
                <b>Available in Two Language</b>
              </p>
              <div className="row" style={{ marginLeft: "15px !important" }}>
                <div className="papper-b ml-4 pl-2">
                  <button className="forjq english">English</button>
                </div>
                {!removeHindiButton ? (
                  <div className="papper-b ml-2 pl-2">
                    <button className="hindi">Hindi</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-lg-12 book_btns">
              <div className="mb-3 p-0">
                <div className="d-inline-block">
                  <p className="mt-0">
                    <span
                      className="d-inline-block text-bold f-rob-bol f-22 prices fs-30"
                    >
                      ₹{booksData.prices} /-
                    </span>
                  </p>
                </div>
              </div>
              <Button
                variant="outline-primary"
                className="btn mt-3 mr-3 mb-0"
                style={{ display: "none" }}
                id="btn_ebook"
                onClick={() => handleEbookOrder(BuyButton.BuyEBook)}
              >
                Buy E-Book
              </Button>
              <Button
                variant="outline-primary"
                className="btn mt-3 mr-3 mb-0"
                style={{ display: "none" }}
                id="btn_ebook_hindi"
                onClick={() => handleEbookOrder(BuyButton.BuyHindiEBook)}
              >
                Buy Hindi E-Book{" "}
              </Button>
              {!showEBook && (
                <BookButtonsContainer
                  booksData={booksData}
                  books={books}
                  toggleMenu={toggleMenu}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  selectedBookId={selectedBookId}
                />
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookForm;
