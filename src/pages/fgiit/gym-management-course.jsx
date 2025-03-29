import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CourseForm from "../../components/course/courseForm";
import { FlexibleGymManagementCoursePage } from "../../components/course/AllCourseData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";
import CoursesInclude from "../../components/fgiit/courses";
import RegistrationProcess from "../../components/fgiit/registrationprocess";

function GymManagementCourse() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("tmp_CoursePurchasePayload")) || {};

    if (storedData.course_id) {
      handleOrder(storedData.course_id);
    } else {
      console.log("No stored address data found.");
    }
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleOrder = async (course_id) => {
    try {
      const result = await createCourseOrder(course_id);
      if (result.showLoginModal) {
        setShowModal(true);
      } else if (result.success) {
        console.log("Order success");
        localStorage.removeItem("tmp_CoursePurchasePayload");
      }
    } catch (error) {
      console.error("Error during order:", error);
    }
    window.Razorpay && window.Razorpay.close && window.Razorpay.close();
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Top Gym Management Course for Fitness Professionals</title>
        <meta name="description" content="Enroll in the top gym management course to gain expert skills, certification, and grow your career in the fitness industry!" />
        <meta name="keyword" content="business management, business management course, gym management course, business management classes, business and management courses, business course, business and management, business management studies, business related courses, gym management certification, business and management studies, management course, management training programs, business management certificate, management training courses, management classes, Business Development Course, Small Business Management Course, Business Coaching Course, Business Diploma Course, Business Certification Online, Online Business Management Diploma, Gym Business Course, Gym Business Management, Fitness Business Course, Fitness Management Course, Personal Trainer Business Course, Gym Owner Course, Gym Management Training, Fitness Business Management, Health Club Management Course, Sports Management Course, Fitness Club Management, Certified Gym Manager, Gym Business Plan, Online Business Management Course, Best Business Management Courses, Small Business Management Course, Diploma in Business Management, Business Development Course, Corporate Management Training, Business Planning Course, Fitness Industry Management Course, Best Online Business Courses, Sports and Fitness Business Management" />
        <meta property="og:title" content="Top Gym Management Course for Fitness Professionals" />
        <meta property="og:description" content="Enroll in the top gym management course to gain expert skills, certification, and grow your career in the fitness industry!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/gym-management-course" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '284658493540181');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=284658493540181&ev=PageView&noscript=1"
          />`}
        </noscript>
      </Helmet>
      <p className="d-none"> business management, business management course, gym management course, business management classes, business and management courses, business course, business and management, business management studies, business related courses, gym management certification, business and management studies, management course, management training programs, business management certificate, management training courses, management classes, Business Development Course, Small Business Management Course, Business Coaching Course, Business Diploma Course, Business Certification Online, Online Business Management Diploma, Gym Business Course, Gym Business Management, Fitness Business Course, Fitness Management Course, Personal Trainer Business Course, Gym Owner Course, Gym Management Training, Fitness Business Management, Health Club Management Course, Sports Management Course, Fitness Club Management, Certified Gym Manager, Gym Business Plan, Online Business Management Course, Best Business Management Courses, Small Business Management Course, Diploma in Business Management, Business Development Course, Corporate Management Training, Business Planning Course, Fitness Industry Management Course, Best Online Business Courses, Sports and Fitness Business Management
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {showModal && <LoginModal onClose={closeModal} />}
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-6">
                <div className="product-imgs singal-product-img">
                  <div className="main-image text-center mt-4">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        FlexibleGymManagementCoursePage.courseImage[
                        activeImageIndex
                        ]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {FlexibleGymManagementCoursePage.courseImage.map(
                      (image, index) => (
                        <div
                          key={index}
                          className={`thumbnail-image ${index === activeImageIndex ? "active" : ""
                            }`}
                          onClick={() => handleThumbnailClick(index)}
                          style={{ marginLeft: "15px" }}
                        >
                          <Row>
                            <div className="py-1 mt-2 px-2">
                              <div
                                style={{
                                  width: "78px",
                                  height: "110px",
                                  cursor: "pointer",
                                }}
                              >
                                <img
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
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w">
                <CourseForm
                  courseData={FlexibleGymManagementCoursePage}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  removeHindiButton={false}
                  prizes={599}
                  BuyButton={FlexibleGymManagementCoursePage.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationProcess />
      <FlexibleAllReviews />
      <CoursesInclude />
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1 black-before">
                  <img
                    width="100%"
                    alt="Fg Group"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/management-demo-lecture.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("0Mu248kUD5E")}
                      className="custom clickof" aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 certi text-center">
                <p className="my-4">Management demo Certificate</p>
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dmp-demo.webp"
                  }
                  width="90%"
                  alt="Management course certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TotalCourseEnrolled />
      <section>
        <div className="container-fluid margintop">
          <div className="container pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Boost Your Career with a{" "}
                  <span className="m-0 text-blue-color">Gym Management Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A gym management course is the perfect choice for fitness professionals looking to expand their expertise in business operations. Running a gym requires more than just fitness knowledge—it demands strong business and leadership skills. This course equips you with essential strategies to manage gym finances, memberships, marketing, and staff effectively.
                    </p>
                    <p>
                      For those interested in broader business skills, business and management courses provide a solid foundation in entrepreneurship, financial planning, and organizational leadership. These courses help professionals understand market trends, customer engagement, and operational efficiency—key aspects of running a successful gym.
                    </p>
                    <p>
                      Many business-related courses now include specialized modules tailored for the fitness industry. This ensures that aspiring gym owners and managers gain insights into revenue management, client retention to grow their business.
                    </p>
                    <p>
                      A business management course further refines leadership abilities, decision-making skills, and strategic planning techniques. Whether you're managing a gym, fitness center, or wellness club, these skills are essential for long-term success.
                    </p>
                    <p>
                      Enrolling in a gym management course provides a competitive edge in the fitness industry. Gain the expertise needed to manage and scale your fitness business effectively. Start today and take your career to new heights!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AccreditedCertification /> */}
      <CourseReviewSection course_id="62d31069a42ac852003a0435" />
      <FlexibleFooter />
    </>
  );
}

export default GymManagementCourse;
