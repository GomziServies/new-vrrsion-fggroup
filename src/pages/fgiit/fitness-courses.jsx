import React, { useEffect, useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import ScholarshipModal from "../../assets/js/popup/scholarship";
import Modal from "react-bootstrap/Modal";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import NotificationDiv from "../../assets/js/utils/notification";
import ContactButtonFGIIT from "../../assets/js/utils/contactUsFgiit";
import { Form, Link } from "react-router-dom";
import StudentStats from "../../components/fgiit/studentStats";
import Teachers from "../../components/fgiit/teachers";
import StudentResponse from "../../components/fgiit/response";
import StudentReview from "../../components/fgiit/studentReview";
import StudentCertificate from "../../components/fgiit/studentCertificate";
import OutstandingReview from "../../components/fgiit/outstandingResponse";
import PlacementReview from "../../components/fgiit/placementReview";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import Blogs from "../../components/fgiit/blogs";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import WhatMakesUs from "../../components/fgiit/what-makes-us";
import OurAllCourses from "../../components/fgiit/our-all-courses";
import CoursesInclude from "../../components/fgiit/courses-include";
import StudentTestimonial from "../../components/fgiit/studentsvideoreview";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";
import AllReviews from "../../components/fgiit/allReviews";
// import whatMakesUs from "../../components/fgiit/whatMakesUs";

function FitnessCourses() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalRef, setShowModalRef] = useState(false);
  const [formDataRef, setFormDataRef] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });
  // const canonicalUrl = window.location.href;
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedCourse: "",
    modalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCloseTeacher = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const teaching_field = formData.modalSelectedCourse;
      var message = formData.modalMessage;
      message =
        `Teaching Field: ${teaching_field}` +
        (message ? "\nMessage: " + message : "");
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Become An Instructor",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedCourse: "",
        modalMessage: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const clickedScholarship = JSON.parse(
      localStorage.getItem("scholarshipExamClick")
    );
    if (clickedScholarship) {
      setShowScholarshipModal(true);
      localStorage.removeItem("scholarshipExamClick");
    } else {
      const timeoutId = setTimeout(() => {
        setShowScholarshipModal(true);
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [showMore, setShowMore] = useState(false);

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);
  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time as needed
  }, []);

  const testimonials = [
    {
      name: "Divya Chauhan",
      description:
        "Divya review describes her journey in the FGIIT Diploma in Personal Training course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
      videoUrl: "OAvT2XECZq8",
      imageUrl: "/assets/images/fgiit/student-review/divya-chauhan.webp",
      date: "13 January 2025",
    },
    {
      name: "Bhargavraj Parmar",
      description:
        "Bhargavraj describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Bhargavraj highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "a17jKkAjQB4",
      imageUrl: "/assets/images/fgiit/student-review/bhargvaraj.webp",
      date: "28 December 2024",
    },
    {
      name: "Kaushik Parmar",
      description:
        "Kaushik talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      videoUrl: "IIG46Av6HQc",
      imageUrl: "/assets/images/fgiit/student-review/kp-dpt.webp",
      date: "7 September 2024",
    },
    {
      name: "Mohsina",
      description:
        "Mohsina shares her positive experience with FGIIT's course, mentioning how it covered everything from beginner fitness levels to advanced strength training techniques. She enjoyed the balance between classroom learning and practical application, which helped her understand client needs better.",
      videoUrl: "vbQgsE_1Fcc",
      imageUrl: "/assets/images/fgiit/student-review/mohsina.webp",
      date: "13 March 2024",
    },
    {
      name: "Satish Nishad",
      description:
        "In Satish review, he highlights how the Diploma in Personal Training at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "23 February 2025",
    },
  ];

  const handlePopupClose = () => {
    setShowModalRef(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formDataRef.modalRefname;
      const phoneNumber = formDataRef.modalRefnumber;
      const courses = formDataRef.modalSelectedCourse;
      let modifiedMessage = `${name}\n\nCourse: ${courses}`;
      await sendInquiry(
        name,
        phoneNumber,
        courses,
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setFormDataRef({
        modalRefname: "",
        modalRefnumber: "",
        modalSelectedCourse: "",
      });
      handlePopupClose();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been submitted successfully!",
      });
    } catch (error) {
      console.error(error);
      // Show SweetAlert popup for error
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting the form. Please try again later.",
      });
    }
  };

  const refopenForm = () => {
    setShowModalRef(true);
  };
  return (
    <>
      <Helmet>
        <title>Top Fitness Courses for Trainers & Enthusiasts</title>
        <meta
          name="description"
          content="Boost your skills with top fitness courses for trainers & enthusiasts. Get certified and advance your career in the fitness industry!"
        />
        <meta
          name="keyword"
          content="dietitian and nutritionist course, dietitian course in surat, certification for fitness trainer, fitness trainer courses in india, gym trainer course online, Nutrition, Gym Trainer Course, Personal Trainer, Dietician in Surat, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training"
        />
        <meta
          property="og:title"
          content="Top Fitness Courses for Trainers & Enthusiasts"
        />
        <meta
          property="og:description"
          content="Boost your skills with top fitness courses for trainers & enthusiasts. Get certified and advance your career in the fitness industry!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/fitness-courses"
        />
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
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '608251344391774');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1" />'
          }
        </noscript>

        {/* Event snippet for Contact conversion page */}
        {/* Google tag (gtag.js) */}
        {/* <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-808688949/lgOgCKWJu4ACELW6zoED'});`}
        </script> */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-808688949"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-808688949');
          `}
        </script> */}
      </Helmet>
      <p className="d-none">
        g y m full form, full form gym, certified fitness, certification
        fitness, certification for fitness, certificate in fitness, fitness
        india, trainer for gym, course nutrition, nutrients course, course on
        nutrition, courses in nutrition, course for nutritionist, course
        nutritionist, courses for nutrition, course for nutrition, courses for
        nutritionist, courses on nutrition, course of nutrition, g y m ka full
        form, courses of nutrition, course of nutritionist, courses for
        dietitian, course for dietician, courses of dietician, course of
        dietician, dietitian course, v academy, personal fitness instructor near
        me, personal workout trainer near me, fitness instructor near me,
        fitness instructors near me, physical training near me, fitness personal
        trainer near me, private fitness trainer near me, near me personal
        trainer, professional trainer near me, personal physical trainer near
        me, personal fitness coach near me, massage and therapy, massage
        therapist, massage for therapists, nutritionist dietician course,
        massage and therapy near me, gym with instructor near me, gym with a
        personal trainer near me, personal training trainer, personal fitness
        instructor, personal physical trainer, gymnastic trainer near me, gym
        near me with personal trainer, near me massage therapy, massage
        therapist near me, ultimate fitness gym, therapist massage near me,
        teacher training course in yoga, indian institute of nutrition, teacher
        training course for yoga, teacher training course yoga, teacher training
        yoga course, professional fitness gym, masseur in mumbai, gym india,
        fitness centres in india, gyms india, gym indian, massager in mumbai,
        yoga certification, yoga certificate, best gymnasium, certification of
        yoga, certified yoga, yoga certified course, yoga certificate course,
        certificate course yoga, certification course in yoga, yoga certificate
        courses, what is the full form of gym, certificate course for yoga, yoga
        certified courses, yoga course certificate, yoga certification courses,
        yoga certification course, certificate yoga course, course of yoga,
        certification for yoga, certificate yoga, certificate courses in yoga,
        certificate course in yoga, course on yoga, course in yoga, certificate
        yoga courses, fitness full form, certificate of yoga, courses on yoga,
        certification yoga, courses in yoga, fitness trainer classes, personal
        fitness trainer course, gym personal trainer course, course for fitness
        trainer, gym fitness instructor courses, training institute, course for
        personal trainer, classes for personal trainer, course fitness trainer,
        courses for personal trainer, gym trainer courses, personal fitness
        trainer courses, gym fitness trainer course, courses for fitness
        trainer, courses for gym trainer, course personal trainer, personal
        trainer training course, personal fitness instructor course, fitness
        trainer courses, personal trainer courses, personal trainer course, gym
        trainer course, fitness trainer course, personal trainer and fitness
        instructor courses, fitness trainer, indian best gym, india's best gym,
        physical trainer course, personal trainer training, yoga certificate
        download, best gym in india, institute training, yoga instructor yoga
        teacher, personal training and, best gym of india, instructor yoga, yoga
        instructor, india best gym, personal trainer classes, nutrition courses
        online, trained yoga instructor, nutrition course online, ifs training
        centre, nutritionist course online, training yoga instructor, yoga
        training teacher course, i fitness, india's no 1 it institute, train to
        be a yoga instructor, india no 1 it institute, course diet, diet
        courses, yoga instructor class, dietician online course, dietitian
        online courses, online course for dietician, dietician courses online,
        dietitian courses online, online dietician course, dietetics course
        online, dietitian online course, dietitian course online, online courses
        for dietician, yoga instructor courses, dietician course online, course
        yoga instructor, dietetics courses online, online dietician courses,
        online course for dietitian, fitness trainer for home, course for yoga
        teacher, fitness coaching, courses for yoga teacher, yoga teacher
        courses, fitness trainer home, course yoga teacher india, personal home
        trainer, dietetics online course, yoga instructor training in india,
        yoga instructor course india, yoga teaching course, yoga instructor
        course in india, gym training, yoga teacher training course india,
        courses for yoga instructor, yoga teaching courses india, yoga
        instructor india, courses yoga teacher, yoga training course india,
        personal home fitness trainer, yoga teaching course india, dietetics
        online courses, yoga teacher course in india, yoga teacher training
        course in india, yoga instructor certification in india, teaching yoga
        course, yoga training courses india, india yoga instructor course, yoga
        instructor training india, yoga teaching course in india, dietitian
        online classes, yoga teacher courses india, become a yoga teacher in
        india, teach yoga courses, fitness coach, certificate for fitness
        trainer, personal trainer and certification, certified fitness trainer,
        personal fitness trainer certification, certification for personal
        fitness trainer, certification of fitness trainer, personal trainer
        fitness certification, fitness trainer certification, fitness trainer
        cert, certificate for personal training, fitness trainer certificate,
        certified fitness trainer certification, personal fitness trainer
        certificate, certificate fitness trainer, personal fitness instructor
        certification, gym fitness trainer, certification for fitness trainer,
        certification for physical trainer, personal instructor certification,
        gym with personal trainer, personal trainer certification, private
        trainer certification, physical training academy near me, professional
        fitness, gyms with personal trainer, certified personal trainer
        certification, certified personal fitness trainer, gym coaching, gym
        private trainer, personal training gyms, gym coach, personal trainer
        cert, gym professional trainer, fitness online class, certification for
        a personal trainer, private trainer gym, the fitness gym, become
        certified personal trainer, personal trainer and gym, personal training
        for gym, gym for personal trainers, personal training gym, yoga
        instructor classes, personal trainers gym, how do i become a yoga
        instructor, how to become yoga certified instructor, how to get yoga
        certified, personal trainer at gym, how to train as a yoga instructor,
        personal training at gym, course for yoga instructor, gym trainer
        personal, how to become a yoga instructor, how to get yoga
        certification, how to become certified yoga instructor, how to become a
        certified yoga instructor, personal trainer with gym, online yoga
        certification training, how to become a certified yoga teacher, how to
        get certified for yoga, fitness trainer bangalore, how to become
        certified yoga teacher, personal training in gym, how to become a yoga
        teacher, how to get certified as a yoga instructor, how to become yoga
        instructor, fit india gym, how to become yoga certified, fitness india
        gym, yoga teacher course, physical training, how can i become yoga
        instructor, how to yoga instructor, yoga instructor course, vs fitness
        gym, online yoga instructor course, gym full name, online yoga teacher
        course, online yoga instructor training, how do you become a yoga
        instructor, personal trainer in gym, fitness online classes, yoga
        teaching course online, how become yoga instructor, my fitness coach,
        trainer yoga, massage therapy classes, fitness trainer income, massage
        therapist course, massage therapist courses, massage therapist classes,
        physical fitness trainer salary, fitness trainer earnings, course for
        massage therapist, course for massage therapy, massage therapy course,
        courses for massage therapist, therapy massage courses, massage therapy
        courses, courses on massage therapy, courses for massage therapy,
        courses massage therapy, course of massage therapist, fitness personal
        trainer salary, salary of gym trainer, therapeutic massage course,
        therapeutic massage courses, gym trainer salary, therapist massage,
        online courses for nutritionist, nutrition class online, classes for
        massage therapy, online nutritionist course, online nutrition courses,
        fitness trainer online, online nutrition class, ifs mumbai, online
        courses nutrition, online courses of nutrition, course nutrition online,
        online nutrition course, online fitness trainer, online personal
        trainer, nutritionist online course, online class for nutrition, online
        courses in nutrition, courses online nutrition, online classes in
        nutrition, online course for nutrition, online course on nutrition,
        nutrition online course, online courses for nutrition, nutritionist
        online courses, courses on nutrition online, nutritionist online
        classes, online course nutrition, online fitness instructor, food
        nutrition courses online, food and nutrition course online, online
        personal fitness coach, nutrition science course online, online yoga
        teaching course, online course for nutritionist, mumbai massage spa,
        offline training, personal online trainer, personal fitness trainer
        online, best academy, personal online fitness trainer, online yoga
        teacher training, online personal fitness trainer, spa massage mumbai,
        food nutritionist course online, yoga courses online, online yoga
        instructor classes, food and nutrition online course, nutrition online
        class, nutrition science online course, spa and massage in mumbai,
        online yoga instructor courses, online classes on nutrition, online
        course on yoga, food and nutrition courses online, food nutrition course
        online, online classes nutrition, yoga certification course by
        government of india, yoga teacher course online, personal fitness coach
        online, online learning nutrition, course online india, ifsa academy,
        gym trainer online, yoga certified trainer, yoga training certificate,
        certificate for yoga instructor, certified courses in nutrition,
        certified yoga trainer, class gym, personal gym trainer, nutrition
        courses certificate, certified yoga instructor course, massage online,
        certification courses in nutrition, gym trainers online, nutritionist
        certification course, teacher yoga certification, gym with personal
        training, become yoga instructor certified, certified yoga instructor,
        certification yoga instructor, online gym instructor, certified
        nutritionist course, certification for yoga instructor, online gym
        personal trainer, teach yoga certification, yoga trainer certification,
        nutrition certificate courses, nutrition certificate course, gym
        personal trainer online, gym with personal trainers, get certified as a
        yoga instructor, becoming certified yoga instructor, become a certified
        yoga teacher, teaching yoga certification, certified nutrition course,
        yoga instructor certification, yoga certification india, yoga training
        courses in india, instructor gym personal, diet and nutrition course,
        yoga teacher license, courses for yoga instructor india, certified yoga
        teacher, yoga training course in india, yoga instructor license, courses
        in diet and nutrition, become a certified yoga trainer, diet nutrition
        course, getting yoga certified, certificate course in nutrition, getting
        certified as a yoga instructor, certification to teach yoga, yoga
        teacher certification, online trainer gym, diet & nutrition courses,
        certification for yoga teacher, nutrition course certificate, get yoga
        certified, yoga teaching license, diet and nutrition courses,
        certificate nutrition courses, certified nutritionist courses,
        certificate yoga instructor, yoga trainer certificate, largest gym in
        india, biggest gym in india, courses on diet and nutrition, certificate
        yoga teacher, yoga instructor certification india, online gym trainer,
        diet nutrition courses, course in diet and nutrition, online gym
        trainers, yoga training course, one fitness gym, get certified in yoga,
        training coach, professional gym, get certified to teach yoga, getting
        certified in yoga, nutritionist certificate course, gym one fitness,
        yoga certification in india, certification yoga teacher, certification
        in yoga teaching, gym online trainer, india biggest gym, fitness course,
        course fitness, fitness courses, sports and nutrition courses, course in
        sports nutrition, course for fitness, trainer courses, courses fitness,
        fitness for training, gym personal trainer, certification fitness
        health, fitness academy near me, fitness and health certification, gym
        with fitness trainer, fitness and training, sport and nutrition courses,
        best institute, courses on fitness, sports and nutrition course, gym
        trainer course fees, ifs academy, therapist course, sports nutrition
        course, fitness training, dietician course fees, sports nutrition
        courses, sports nutritionist course, what is full form of gym, which
        institute, course for therapist, health and fitness certifications,
        sports training near me, training and fitness, trainer in gym, sports
        nutrition classes, therapist courses, sports trainers near me, yoga
        training courses, best gym training, gym academy, yoga instructor
        certification near me, gym academy near me, india no1 gym, personal
        fitness trainer, fitness professional, best academy near me, fitness and
        personal trainer, yoga personal trainer, fitness trainer in mumbai,
        online massage, personal fitness trainer in mumbai, fitness
        professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym
        in india, india's no 1 institute, gym trainer for ladies, personal
        trainer for yoga, mumbai personal trainer, how to become a nutritionist
        in india, personal fitness trainer mumbai, india no 1 institute,
        personal fitness trainers, indian no 1 institute, ifs academy pune, how
        to become nutritionist in india, sports fitness of india, k11
        certification, personal trainer in mumbai, aerial yoga in pune, yoga
        instructor course near me, yoga instructor training near me, gym trainer
        woman, training the trainer courses, gym trainer for women, aerial yoga
        pune, personal trainer for fitness, institute of eight limbs and fitness
        centre, gym trainer women, pt course, gym course, course for massage,
        gym courses, p t course, online fitness certification, fitness
        certification online, online nutrition courses in india, online
        nutrition course india, yoga trainer classes, courses on nutrition in
        india, course on nutrition in india, nutrition course online india, pt
        courses, online nutritionist courses in india, massage courses, online
        nutrition course in india, massage course, fitness acdemy, nutrition
        courses in india, online nutrition courses india, nutrition courses
        online in india, online course on nutrition in india, nutrition courses
        online india, gym instructor, online nutritionist course in india, spa
        and massage therapist, courses in nutrition in india, yoga trainer
        course, course of massage, nutritionist course india, how to become a
        gym trainer, yoga trainer courses, nutrition course fees, nutrition
        course in india, online fitness coach, course massage, how to become
        fitness trainer, online courses on nutrition in india, spa massage
        therapist, indian fitness gym, k 11 fitness academy fees, nutritionist
        courses in india, k11 fitness academy fees, nutritionist course online
        india, workout programs near me, spa massage therapy, nutrition online
        course india, nutritionist course in india, spa therapist massage, spa
        and massage therapy, certification for trainer, how to become personal
        trainer, trainer certified, online workout coach, how to become personal
        fitness trainer, certified trainer, massage therapy spa, online workout
        coaching, how to become a personal fitness trainer, spa therapy massage,
        nutritionist course fees, coaching online fitness, how to be become a
        personal trainer, how do you become a personal trainer, spa massage
        treatment, fitness online coaching, nutrition courses fees, india no 1
        gym, fitness coach online, sports institute in india, best course india,
        train gym, certified trainers, trainers academy, massage spa therapy,
        proton fitness academy, certified trainer certificate, certificate for
        trainer, certificate of trainer, certification for trainers, how to
        become fitness, nutrition course india, workout coach online, online
        coach fitness, training academy, online coaching fitness, fitness
        coaching online, coach fitness online, certified trainer certification,
        online fitness coaching, nutrition courses india, online certificate in
        fitness, fitness academy, certification courses for personal trainer,
        certified fitness trainer courses, personal trainer income, physical
        trainer salary, physical training salary, personal trainer earnings,
        salary for a personal trainer, salary of fitness trainer, personal
        trainer certification course, personal fitness trainer salary, fitness
        trainer certification courses, salary for personal trainer, salary for
        fitness trainer, personal trainer pay rate, fitness trainer
        certification course, certified personal trainer courses, personal
        fitness trainer certification course, personal trainer certified course,
        private trainer salary, certificate fitness online, personal instructor
        salary, nutrition fitness course, how to become a physical fitness
        trainer, fitness trainer certificate course, fitness nutrition courses,
        personal trainer certificate courses, certified personal trainer
        classes, classes for personal trainer certification, fitness
        nutritionist course, personal trainer certification courses, how to
        become gym trainer, fitness and nutrition courses, fitness & nutrition
        courses, certified fitness trainer course, personal fitness instructor
        salary, nutrition and fitness courses, courses on fitness and nutrition,
        nutrition and fitness course, courses in fitness and nutrition,
        nutrition courses near me, personal trainer salary, gym trainer rates,
        courses in nutrition and fitness, nutrition fitness courses, fitness
        nutrition course, fitness trainer salary, certified personal trainer
        course, course in fitness and nutrition, courses for nutrition and
        fitness, certified training certificate, nutrition course after 12th,
        nutritionist course near me, online nutrition, personal trainer in gym
        cost, nutritionist courses after 12th, nutritionist classes near me, gym
        personal trainer cost, gym and fitness, cost of gym personal trainer,
        female gym trainer near me, nutrition diploma courses, top rated gym in
        india, personal gym trainer cost, physical trainer, india's number one
        it institute, nutrition course near me, fitness and gym, india's biggest
        gym, top gyms in india, indian number one it institute, top gym in
        india, india top gym, courses nutrition diploma, gym certificate, gym
        training course, personal trainers course, certificate gym trainer,
        certified gym trainer, certification for gym instructor, courses for
        personal training, gym trainer certification, gym personal trainer
        certification, how to get a fitness certification, best nutritionist
        courses in india, diploma personal training, diploma in personal
        training, good personal trainers near me, best fitness trainer near me,
        trainer certification course, physical training centre near me, gym
        trainer certificate, personal training courses, gym training courses,
        gym instructor certificate, classes for personal training, pt training
        course, trainer certification courses, personal training course, best
        nutrition course in india, pt training courses, good personal trainer
        near me, personal training training, courses in personal training,
        personal training diploma, personal fitness training course, best
        nutrition courses in india, course personal training, certified trainer
        courses, online courses in nutrition and dietetics, dietetics and
        nutrition courses online, best training institute, fitness model india,
        fitness models in india, exercise science academy, trainer training,
        fitness instructor, no1 body builder in india, indian gym trainer, gym
        full form bodybuilding, female fitness trainers near me, nutritionist
        for gym, india fitness, nutrition and dietetics course online, advanced
        fitness, sport gym, online courses on nutrition and dietetics, gym
        personal trainer bangalore, nutrition online, name of trainer, weight
        loss online course, physical training academy, fitness online,
        certification courses for trainers, number one academy, indian fitness
        model, india top rated gym, fitness model in india, certification in
        nutrition, certified nutritionist certificate, fitness trainer training
        courses, online fitness trainer job, online course in nutrition and
        dietetics, india fitness model, online classes for personal trainer,
        personal fitness trainer course online, online fitness trainer course,
        fitness coach certification, personal trainer course online, online
        personal trainer classes, online fitness trainer courses, online
        personal trainer course, personal trainer courses online, online fitness
        trainer classes, fitness coach license, fitness coaching certification,
        fitness training class, gym trainer course near me, gym personal trainer
        cost per month, masseur training, masseur course, strength and
        conditioning course in india, fitness training course, fitness training
        courses, online gym, online gym classes, strength and conditioning
        courses in india, online yoga certification classes, female gym trainer,
        nutritionist & fitness consultant, nutritionist certificate, nutrition
        certification, the best academy, online workout classes india, personal
        fitness coaching, review for gym trainer, nutrition and fitness
        consultant, female personal trainer, top institute, gym best,
        nutritionist certification, trainers india, gym class online, fitness in
        india, nutrition courses details, nutrition certificate, online fitness,
        fitness fitness, yoga training online certification, online gym class,
        personal trainer women, indian fitness club, personal trainer female,
        personal trainer online course, online fitness course, online fitness
        courses, online diet and nutrition courses, personal trainer gym price,
        mission india fit, trainers in india, online courses in diet and
        nutrition, personal trainer gym fees, one on one gym, online diet
        course, certified gym trainer course, fitness certification in india,
        diploma in fitness training, fitness institute, gym trainer experience
        certificate, personal trainer course fees, personal trainers online,
        fitness training center, fitness certification courses india, certified
        personal training course, aerobics trainer certification, gym training
        center, online fitness trainers in india, certification course in
        strength & conditioning coach, fitness trainers training institute,
        exercise centers for sick people in india, fitness trainers training
        academy, certification course in yoga instructor, personal fitness
        training center, advanced diploma in fitness training
      </p>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FgiitHeader />
      {/* {showScholarshipModal && <ScholarshipModal />} */}
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="carouselExampleControls"
            className="owl-carousel owl-theme"
            data-ride="carousel"
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 1,
              },
            }}
          >
            <div className="item active">
              <img
                className="d-none d-md-block w-100 lazy"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                alt="Fg Group"
                width="100%"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
                alt="Fg Group"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="forh">
                  <h2 className="h3-fs">FGIIT Skill Development Institute</h2>
                </div>
                <div className="describe d-none d-md-block">
                  <p className="ml-0 fs-16">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="describe d-block d-md-none">
                  <p className="ml-0 my-2 fs-14">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="text-center mt-4 mt-md-3 btn-for">
                  <a href="#allcourse" className="btn mb-2 mb-md-3">
                    Know more about our courses
                  </a>
                  <Link
                    to="/fgiit/lead-form"
                    className="btn btn-forh"
                    style={{ fontWeight: "600" }}
                  >
                    Book a live Demo lecture
                  </Link>
                </div>
                <div className="tabata text-center mt-4">
                  <div className="forh">
                    <h2 className="h3-fs font-size-22">
                      We are also approved by the government.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-md-flex align-items-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/skill.png"
                  }
                  alt="FG Group"
                  width="100%"
                  className="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurAllCourses />
      <WhatMakesUs />
      <AllReviews />
      <StudentStats />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                our all demo
                <span className="m-0 text-blue-color"> Certificates</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-diploma"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cpt_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Diploma In Personal Training</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Diploma In Nutrition</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gir-demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Group Instructor Masterclass</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Anabolic Androgenic Steroids</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-5.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-6.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Advance Clinical Nutrition Workshop</h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="bg-blues">
        <div className="container-fluid pb-5 pt-3">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                About <span className="m-0 text-blue-color"> Us</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <div className="row">
              <div className="col-lg-12 order-2">
                <div className="describe">
                  <div className="d-none d-md-block">
                    <b>
                      <p className="mt-0">
                        We Started These Online Nutrition Courses In India, To
                        Make The Fitness And Nutrition Industry-Main Streamline
                        After The 10th. A Student Who Wants To Follow Their
                        Passion And Earn Money Simultaneously Can Register For
                        Our Online Nutrition Courses &amp; Online Personal
                        Training Courses. We explain the importance of the
                        Certified Fitness Trainer Course, Personal Trainer
                        Course In India, Nutritionist Course Online India.
                      </p>
                    </b>
                  </div>
                  <div className="mb-3 d-block d-md-none">
                    <p className="mb-0 text-muted">
                      We Started These Online Nutrition Courses In India, To
                      Make The Fitness And Nutrition Industry-Main Streamline
                      After The 10th. A Student Who Wants To Follow Their
                      Passion And Earn Money Simultaneously Can Register For Our
                      Online Nutrition Courses Online Personal
                      {showMore ? (
                        <p className="m-0">
                          Training Courses. We explain the importance of the
                          Certified Fitness Trainer Course, Personal Trainer
                          Course In India, Nutritionist Course Online India.So,
                          What Are The Best Certifications For Personal
                          Trainers? We Are Entitled To The Crown Of Top
                          Institute For Online Nutrition Courses And Dietician
                          Courses Online In Surat. We Provide Life Experiences
                          In Our Online Personal Trainer Courses, Which You'll
                          Be Going To Face In Front Of Your Clients And Patients
                          Which Makes Us Unique From Others.
                        </p>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <p
                      onClick={toggleReadMorei}
                      id="myBtnrg"
                      style={{ color: "#00afef", fontWeight: "500" }}
                    >
                      {showMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 mt-0 mb-2 text-center order-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/iao-certificate.webp"
                  }
                  style={{ border: "5px solid #35364B" }}
                  width="80%"
                  alt="IAO demo certificate"
                />

              </div> */}
              <div className="col-md-12 order-4">
                <div className="describe">
                  <div className="d-none d-md-block mt-3">
                    <b>
                      <p className="mt-0">
                        Personal Training Certification Helps You In Attaining
                        Customers At Fitness Centers And Gyms As Well. We
                        Provide All Resources And Content Online So You Can
                        Experience Online Learning With The FG International
                        Institute Of Teaching.
                      </p>
                    </b>
                    <b>
                      <p>
                        You might be thinking about the Nutritionist Course Fees
                        right? Connect to us and get the best offers for your
                        future self.
                      </p>
                    </b>
                  </div>
                  <div className="mb-3 d-block d-md-none">
                    <p className="mb-0 text-muted">
                      Personal Training Certification Helps You In Attaining
                      Customers At Fitness Centers And Gyms As Well. We Provide
                      All Resources And Content Online So You Can Experience
                      Online Learning With The FGInternational Institute Of
                      Teaching. You might be thinking about the Nutritionist
                      Course Fees right? Connect to us and get the best offers
                      for your future self.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 order-3">
                <div className="describe d-none d-md-block">
                  <p>
                    So, What Are The Best Certifications For Personal Trainers?
                    We Are Entitled To The Crown Of Top Institute For Online
                    Nutrition Courses And Dietician Courses Online In Surat. We
                    Provide Life Experiences In Our Online Personal Trainer
                    Courses, Which You'll Be Going To Face In Front Of Your
                    Clients And Patients Which Makes Us Unique From Others.
                  </p>
                </div>
              </div>
              <div className="row align-items-center order-3">
                <div className="col-md-12 text-center mb-lg-4 mb-3">
                  <h2 className="h2-fs">Our Institute Accreditation</h2>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="d-none d-md-block">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/mobile-all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blues">
        <div className="container-fluid pb-md-5 pt-2">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                demo
                <span className="m-0 text-blue-color"> lectures</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <div className="youtube-video">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="carouselExampleControls"
                className="owl-carousel owl-theme"
                data-ride="carousel"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-dpt.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("ZYoKVIfbJzY")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-dnc.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("j6u_P9NYp4w")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-aas.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("-9fBGDMO1S4")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/functional_training.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("b-DhFdSpcEQ")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/intro-injury-rehab.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("z9ULms1ia10")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/intro-health-wellness.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("9ggHN60bYKo")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <CoursesInclude />
      <Teachers />
      <section className="container-fluid dark-hero-section p-0 px-2 mt-md-5 mt-3">
        <div className="container-fluid px-0">
          <div className="row align-items-center">
            <div className="col-md-4 image-section p-0 d-md-none d-block">
              <img
                src="/assets/images/fgiit/fgiit-teach.webp"
                alt="Student Studying"
                className="img-fluid d-md-none d-block"
              />
            </div>
            <div className="col-md-8 text-section px-md-5 px-4 py-md-5 py-4 demoo">
              <div className="col-md-10">
                <div className="covid mb-3">
                  <h2 className="h2-fs text-white">
                    Become an{" "}
                    <span className="m-0 text-blue-color">Instructor</span>
                  </h2>
                </div>
                <p className="instructor m-0 text-white mb-2">
                  Are you a master of any particular skill and looking for a way
                  to teach it? FGIIT is bringing you an exclusive opportunity to
                  publish your course the way you want—whether offline, online,
                  or through books. Empower learners, build your brand, and earn
                  by sharing your expertise. With flexible teaching methods and
                  full creative control, you can design your course to fit your
                  style.
                </p>
                <p className="instructor m-0 text-white mb-2">
                  Join a growing community of passionate instructors and reach
                  students worldwide. Whether you prefer live sessions, recorded
                  content, or written materials, FGIIT provides the platform to
                  showcase your skills. Learn more about this opportunity
                  through this{" "}
                  <button
                    onClick={() => openVideoModal("n4qpFleFVJ8")}
                    className="custom text-white fw-bold"
                  >
                    video.
                  </button>
                </p>
                <button
                  className="btn btn-started mt-2"
                  onClick={handleOpenModal}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="">
            <div className="card bg-skill-border">
              <div className="card-header bg-skill bg-skill-border">
                <h2 className="h4-fs">FGIIT Skill Development</h2>
              </div>
              <div className="card-body tabata">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-2">
                        At FGIIT, we provide a variety of skill development
                        courses to help individuals excel in their chosen
                        industry. We offer courses approved by the government
                        and cater to the talent of Indian youth.
                        <span className="d-md-block d-none">
                          Our objective
                          is to create opportunities and scope for individuals who
                          couldn't pursue education after the 10th class due to
                          various constraints.
                        </span>
                      </p>
                      <h2 className="h4-fs mt-4">
                        {" "}
                        It is a process which enables the trainer and the
                        working age people to gain:
                      </h2>
                      <ul>
                        <li>
                          <i className="fa fa-arrow-right"></i> Knowledge And
                          Ability
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Career Ethics
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Skill Standards
                          Establishment
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Good Working
                          Attitude
                        </li>
                      </ul>
                      <h2 className="h4-fs mt-4">Our courses include:</h2>
                      <ul>
                        <div className="d-md-block d-none">
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Diploma
                              in Personal Training Course:
                            </b>{" "}
                            This course helps individuals become certified
                            personal trainers who can create personalized fitness
                            programs, motivate clients, and guide them towards
                            their goals.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Diploma
                              in Nutrition Course:
                            </b>{" "}
                            This course teaches students how to create diets for
                            clinically ill patients, focusing on fat loss and
                            muscle building.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Gym
                              Training Certification:
                            </b>{" "}
                            Learn the necessary skills and knowledge for gym
                            training through this certification course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Online
                              Personal Training Certification:
                            </b>{" "}
                            Become a certified online personal trainer and learn
                            how to provide fitness guidance remotely.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Trainer Course:
                            </b>{" "}
                            Enhance your skills as a trainer through this
                            comprehensive course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Nutritionist Certification:
                            </b>{" "}
                            Become a certified nutritionist by enrolling in this
                            course.{" "}
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Gym
                              Trainer Certification in India:
                            </b>{" "}
                            Learn the essentials of being a gym trainer in India
                            through this course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> How
                              to Become a Certified Fitness Trainer:
                            </b>{" "}
                            Gain insights and guidance on becoming a certified
                            fitness trainer.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Personal Training Course:
                            </b>{" "}
                            Develop expertise in personal training by enrolling
                            in this course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Personal Trainer at The Gym:
                            </b>{" "}
                            Discover opportunities as a personal trainer at The
                            Gym.
                          </li>
                        </div>

                        <div className="d-md-none d-block">
                          {showMore ? (
                            <>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i> Diploma
                                  in Personal Training Course:
                                </b>{" "}
                                This course helps individuals become certified
                                personal trainers who can create personalized fitness
                                programs, motivate clients, and guide them towards
                                their goals.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i> Diploma
                                  in Nutrition Course:
                                </b>{" "}
                                This course teaches students how to create diets for
                                clinically ill patients, focusing on fat loss and
                                muscle building.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i> Gym
                                  Training Certification:
                                </b>{" "}
                                Learn the necessary skills and knowledge for gym
                                training through this certification course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i> Online
                                  Personal Training Certification:
                                </b>{" "}
                                Become a certified online personal trainer and learn
                                how to provide fitness guidance remotely.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Trainer Course:
                                </b>{" "}
                                Enhance your skills as a trainer through this
                                comprehensive course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Nutritionist Certification:
                                </b>{" "}
                                Become a certified nutritionist by enrolling in
                                this course.{" "}
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Gym Trainer Certification in India:
                                </b>{" "}
                                Learn the essentials of being a gym trainer in
                                India through this course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  How to Become a Certified Fitness Trainer:
                                </b>{" "}
                                Gain insights and guidance on becoming a
                                certified fitness trainer.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Personal Training Course:
                                </b>{" "}
                                Develop expertise in personal training by
                                enrolling in this course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Personal Trainer at The Gym:
                                </b>{" "}
                                Discover opportunities as a personal trainer at
                                The Gym.
                              </li>
                            </>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                          <p
                            onClick={toggleReadMorei}
                            id="myBtnrg"
                            style={{ color: "#00afef", fontWeight: "500" }}
                          >
                            {showMore ? "Read less" : "Read more"}
                          </p>
                        </div>
                      </ul>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid dark-hero-section dark-hero-section-left px-2">
          <div className="row align-items-center">
            <div className="col-md-4 image-section p-0">
              <img
                src="/assets/images/mix-img/add-referral.png"
                alt="Student Studying"
                className="img-fluid d-md-none d-block"
              />
            </div>
            <div className="col-md-8 text-section px-4 py-4 demoo d-flex justify-content-end">
              <div className="col-md-10">
                <div className="covid mb-3">
                  <h2 className="h2-fs text-white">
                    Get ₹3000 to ₹5000 Commission <br />
                    <span className="m-0 text-blue-color">
                      {" "}
                      per Referral with Us!
                    </span>
                  </h2>
                </div>
                <p className="instructor m-0 text-white mb-2">
                  Elevate your experience by involving your referrer's name and
                  contact number. When they join, both of you unlock exclusive
                  rewards, special discounts, and additional perks. The more you
                  refer, the more you earn—boosting your income effortlessly.
                  Spread the word and maximize your benefits today!{" "}
                </p>
                <p className="instructor m-0 text-white mb-2">
                  Grab this golden opportunity by sharing your referrer's
                  details and start earning with every successful referral.
                  Don't miss out on this lucrative chance to grow your network
                  and rewards.{" "}
                  <span style={{ fontSize: "16px" }}>
                    Terms and Conditions Apply
                  </span>
                </p>
                <button
                  className="btn btn-started mt-2"
                  onClick={handleOpenModal}
                >
                  Add Referral
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <StudentCertificate /> */}
      {/* <StudentResponse openVideoModal={openVideoModal} /> */}
      <PartnerLogo />
      {/* <PlacementReview /> */}
      {/* <StudentTestimonial testimonials={testimonials} /> */}
      {/* <StudentReview /> */}
      {/* <OutstandingReview /> */}
      <Blogs />
      {/* <section>
        <div className="container-fluid">
          <div className="container">
            <div className="ml-md-2 ml-0">
              <h2 style={{ color: "#333" }} className="mb-0 h3-fs">
                <span className="m-0 text-blue-color">Conclusion : </span>
              </h2>
            </div>
            <div className="describe">
              <p className="mt-2">
                After completing any of these courses, students are able to
                start their own setup and become financially independent.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <ContactInquiryForm note={"FGIIT Main Page Inquiry"} />
      <Modal show={showModal} onHide={handleCloseTeacher} centered>
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content bg-changes bg-fwg-popup">
            <Modal.Header className="p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  className="img-fluid mb-2 ml-2"
                  width="40%"
                  alt="Book Free Appointment"
                />
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
                onClick={handleCloseTeacher}
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times text-white"></i>
                </span>
              </button>
            </Modal.Header>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-11 pl-0">
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalName"
                        value={formData.modalName}
                        onChange={handleChange}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control fr"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleChange}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fr"
                        name="modalContactNumber"
                        value={formData.modalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span className="pr-2">
                        <i className="fas fa-user-graduate"></i>
                      </span>
                      <select
                        className="num-employ pl-0"
                        name="modalSelectedCourse"
                        value={formData.modalSelectedCourse}
                        onChange={handleChange}
                      >
                        <option value="" hidden>
                          Field you want to teach
                        </option>
                        <option className="field" value="UI/UX Design">
                          UI/UX Design
                        </option>
                        <option className="field" value="Ethical Hacking">
                          Ethical Hacking
                        </option>
                        <option className="field" value="javascript">
                          javascript
                        </option>
                        <option className="field" value="Python">
                          Python
                        </option>
                        <option className="field" value="Java">
                          Java
                        </option>
                        <option className="field" value="PHP">
                          PHP
                        </option>
                        <option className="field" value="Swift">
                          Swift
                        </option>
                        <option className="field" value="Ruby">
                          Ruby
                        </option>
                        <option className="field" value="SQL">
                          SQL
                        </option>
                        <option className="field" value="Django">
                          Django
                        </option>
                        <option
                          className="field"
                          value="Full Stack Development"
                        >
                          Full Stack Development
                        </option>
                        <option className="field" value="Animation & VFX">
                          Animation & VFX
                        </option>
                        <option className="field" value="Web Designing">
                          Web Designing
                        </option>
                        <option className="field" value="Front End Developing">
                          Front End Developing
                        </option>
                        <option className="field" value="Web Development">
                          Web Development
                        </option>
                        <option className="field" value="Android Development">
                          Android Development
                        </option>
                        <option className="field" value="iOS Development">
                          iOS Development
                        </option>
                        <option className="field" value="Graphics Design">
                          Graphics Design
                        </option>
                        <option className="field" value="Game Design">
                          Game Design
                        </option>
                        <option className="field" value="Game Development">
                          Game Development
                        </option>
                        <option className="field" value="Animation">
                          Animation
                        </option>
                        <option className="field" value="Flutter">
                          Flutter
                        </option>
                        <option className="field" value="React Native">
                          React Native
                        </option>
                        <option className="field" value="Data Science">
                          Data Science
                        </option>
                        <option className="field" value="Cyber Security">
                          Cyber Security
                        </option>
                        <option className="field" value="Video Editing">
                          Video Editing
                        </option>
                        <option className="field" value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option
                          className="field"
                          value="Personality Development"
                        >
                          Personality Development
                        </option>
                        <option
                          className="field"
                          value="Entrepreneurship Development"
                        >
                          Entrepreneurship Development
                        </option>
                        <option className="field" value="Corporate English">
                          Corporate English
                        </option>
                        <option
                          className="field"
                          value="Social Media Marketing"
                        >
                          Social Media Marketing
                        </option>
                        <option className="field" value="Digital Photography">
                          Digital Photography
                        </option>
                        <option className="field" value="Photography">
                          Photography
                        </option>
                        <option className="field" value="Cinematography">
                          Cinematography
                        </option>
                        <option
                          className="field"
                          value="Commercial photography"
                        >
                          Commercial photography
                        </option>
                        <option className="field" value="Nature photography">
                          Nature photography
                        </option>
                        <option
                          className="field"
                          value="Diploma In Personal Training course"
                        >
                          Diploma In Personal Training course
                        </option>
                        <option
                          className="field"
                          value="Diploma In Nutrition course"
                        >
                          Diploma In Nutrition course
                        </option>
                        <option
                          className="field"
                          value="Diploma In Health & Fitness Business Management"
                        >
                          Diploma In Health & Fitness Business Management
                        </option>
                        <option
                          className="field"
                          value="Anabolic Androgenic Steroids"
                        >
                          Anabolic Androgenic Steroids
                        </option>
                        <option
                          className="field"
                          value="Group Instructor Workshop"
                        >
                          Group Instructor Workshop
                        </option>
                        <option
                          className="field"
                          value="Injury Rehabilitation Workshop"
                        >
                          Injury Rehabilitation Workshop
                        </option>
                        <option
                          className="field"
                          value="Advance Clinical Nutrition Workshop"
                        >
                          Advance Clinical Nutrition Workshop
                        </option>
                        <option
                          className="field"
                          value="Python Programming And Learn Core & Advance Python"
                        >
                          Python Programming And Learn Core & Advance Python
                        </option>
                        <option className="field" value="Life Coach Training">
                          Life Coach Training
                        </option>
                        <option className="field" value="Career Development">
                          Career Development
                        </option>
                        <option className="field" value="Content writer">
                          Content writer
                        </option>
                        <option className="field" value="Product Design">
                          Product Design
                        </option>
                        <option className="field" value="Fashion Design">
                          Fashion Design
                        </option>
                        <option className="field" value="Music Production">
                          Music Production
                        </option>
                        <option className="field" value="Music Composition">
                          Music Composition
                        </option>
                        <option className="field" value="Songwriting">
                          Songwriting
                        </option>
                        <option className="field" value="Voice Acting">
                          Voice Acting
                        </option>
                        <option className="field" value="Videographer">
                          Videographer
                        </option>
                        <option
                          className="field"
                          value="Online Course Creation"
                        >
                          Online Course Creation
                        </option>
                        <option className="field" value="Communication Skills">
                          Communication Skills
                        </option>
                        <option className="field" value="Storytelling">
                          Storytelling
                        </option>
                        <option className="field" value="Network Security">
                          Network Security
                        </option>
                        <option className="field" value="Personal Branding">
                          Personal Branding
                        </option>
                        <option className="field" value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <textarea
                        className="form-control fr"
                        name="modalMessage"
                        value={formData.modalMessage}
                        onChange={handleChange}
                        placeholder="Message"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={bookFreeAppointmentWithBestDietitianInquiry}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <FgiitFooter />
      {/* <NotificationDiv /> */}
      <ContactButtonFGIIT />

      <Modal show={showModalRef} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <div className="modal-content form-design form-bg">
            <div className="modal-header justify-content-center p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/descount-img.webp"
                  }
                  className="mb-1 img-media"
                  alt="FG Group"
                  width="250px"
                />
                <h2 className="h2-fs popuphading">Refer and Earn</h2>
              </div>
              <button
                type="button"
                className="closess close-btn closse-mobile p-0 bg-transparent border-0"
                onClick={handlePopupClose}
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block formmi" id="hid">
                <div className="row justify-content-center">
                  <div className="col-md-11 pl-0">
                    <Form>
                      <div className="input-group align-items-center">
                        <span>
                          <i className="far fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control fr"
                          placeholder="Enter referral name"
                          required
                          name="modalRefname"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span>
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <input
                          type="number"
                          className="form-control fr"
                          placeholder="Enter Referral contact Number"
                          required
                          name="modalRefnumber"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span className="pr-1">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </span>
                        <select
                          className="num-employ pl-0"
                          required
                          name="modalSelectedCourse"
                        >
                          <option value="" hidden>
                            Select which course you interested
                          </option>
                          <option
                            className="field"
                            value="Diploma In Personal Training course"
                          >
                            Diploma In Personal Training course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Nutrition course"
                          >
                            Diploma In Nutrition course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Health & Fitness Business Management"
                          >
                            Diploma In Health & Fitness Business Management
                          </option>
                          <option
                            className="field"
                            value="Anabolic Androgenic Steroids"
                          >
                            Anabolic Androgenic Steroids
                          </option>
                          <option
                            className="field"
                            value="Group Instructor Workshop"
                          >
                            Group Instructor Workshop
                          </option>
                          <option
                            className="field"
                            value="Injury Rehabilitation Workshop"
                          >
                            Injury Rehabilitation Workshop
                          </option>
                          <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option>
                        </select>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="text-center Referr-btn mt-md-3">
                <button
                  className="btn p-2 px-5"
                  onClick={actionReferAndEarnSubmit}
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default FitnessCourses;
