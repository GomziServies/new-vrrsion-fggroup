import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import CountUp from "react-countup";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import AddIcon from "@mui/icons-material/Add";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AccreditedCertification from "../../components/fgiit/acrediteCertificate";
import CourseForm from "../../components/course/courseForm";
import { FlexibleGymManagementCoursePage } from "../../components/course/AllCourseData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";

function FlexibleGymManagementCourse() {
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
        <meta
          name="description"
          content="Enroll in the top gym management course to gain expert skills, certification, and grow your career in the fitness industry!"
        />
        <meta
          name="keyword"
          content="g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training"
        />
        <meta
          property="og:title"
          content="Top Gym Management Course for Fitness Professionals"
        />
        <meta
          property="og:description"
          content="Enroll in the top gym management course to gain expert skills, certification, and grow your career in the fitness industry!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/gym-management-course"
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
                      width="75%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {FlexibleGymManagementCoursePage.courseImage.map(
                      (image, index) => (
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
              {/* <div className="d-none d-md-block">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <div className="Info">
                      <h2 className="h2-fs">registration process</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 ">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cashless-payment.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Pay Via The Link</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 position-relative">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/sending.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Get Receipt & App Id Password</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 position-relative">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/responsive-design.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Watch Recorded Session</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 position-relative">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/open-book.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Enjoy Book Material</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 position-relative">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/online-test.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Give Exam & Project Over App</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-3 position-relative">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/certificate.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Receive Your E-certificate</h2>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop p-0">
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/registration-process-flexible.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/registration-process-flexible-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-block d-md-none">
                  <div className="Info text-center">
                    <h2 className="h2-fs">registration process</h2>
                  </div>
                  <div id="owl-demo2" className="owl-carousel owl-theme">
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 ">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/cashless-payment.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">Pay Via The Link</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 position-relative">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/sending.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">
                            Get Receipt & App Id Password
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 position-relative">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/responsive-design.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">Watch Recorded Session</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 position-relative">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/open-book.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">Enjoy Book Material</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 position-relative">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/online-test.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">
                            Give Exam & Project Over App
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="item mx-2">
                      <div className="col-lg-4 col-md-6 mt-3 position-relative">
                        <div className="tabata blog2 py-5 imgty text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            alt="Fg Group"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/certificate.webp"
                            }
                            style={{
                              width: "64px!important",
                              margin: "auto!important",
                            }}
                          />
                          <h2 className="h5-fs mt-3">
                            Receive Your E-certificate
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Course Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    If businesses or individuals want greater success, then the
                    answer resides within the ability to improve motivation,
                    improve the use of energy and to improve talent. Yet, almost
                    every time, the emphasis is on talent or the hard skills
                    with little or no focus on developing one's own personality.
                  </p>
                  <p>
                    GYM MANAGEMENT COURSE that is designed to help emerging
                    leaders create a more dynamic, loyal and energized
                    personality and replicate it in their workplace.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Syllabus,</p>
                      <ul className="p-0 new-li">
                        <li>
                          <i className="fas fa-check-circle"></i>Introduction Of
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Management
                          Skills
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Introduction Of
                          Marketing Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Introduction Of
                          Finance Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Human Resource
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Organization
                          Behavior
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Service Model
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Strategic
                          Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Personality
                          Development
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Organization
                          Ethics
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p>training methodology,</p>
                      <ul className="p-0 new-li">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Lecture-cum-discussion
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Powerpoint
                          Presentation
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Group
                          Discussion Management
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Case Studies
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Different
                          Management Tools
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          {/* <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                include
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/responsive-design.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">Recorded Lecture Videos</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/open-book.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">Course E-Book</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/group-chat.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">Team Chat Support</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-test.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">MCQs Based Exam</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/score.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/certificate.webp"
                      }
                    />
                    <h2 className="h5-fs mt-3">Certification</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="d-block d-md-none">
                <div id="owl-demo22" className="owl-carousel owl-theme">
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/responsive-design.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Recorded Lecture Videos</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/open-book.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Course E-Book</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/group-chat.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Team Chat Support</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/online-test.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">MCQs Based Exam</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/score.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="Fg Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/certificate.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Certification</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-flexible.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-flexible-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
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
                      className="custom clickof"
                      aria-label="Fg Group"
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
                  <span className="m-0 text-blue-color">
                    Gym Management Course
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A gym management course is the perfect choice for fitness
                      professionals looking to expand their expertise in
                      business operations. Running a gym requires more than just
                      fitness knowledge—it demands strong business and
                      leadership skills. This course equips you with essential
                      strategies to manage gym finances, memberships, marketing,
                      and staff effectively.
                    </p>
                    <p>
                      For those interested in broader business skills, business
                      and management courses provide a solid foundation in
                      entrepreneurship, financial planning, and organizational
                      leadership. These courses help professionals understand
                      market trends, customer engagement, and operational
                      efficiency—key aspects of running a successful gym.
                    </p>
                    <p>
                      Many business-related courses now include specialized
                      modules tailored for the fitness industry. This ensures
                      that aspiring gym owners and managers gain insights into
                      revenue management, client retention to grow their
                      business.
                    </p>
                    <p>
                      A business management course further refines leadership
                      abilities, decision-making skills, and strategic planning
                      techniques. Whether you're managing a gym, fitness center,
                      or wellness club, these skills are essential for long-term
                      success.
                    </p>
                    <p>
                      Enrolling in a gym management course provides a
                      competitive edge in the fitness industry. Gain the
                      expertise needed to manage and scale your fitness business
                      effectively. Start today and take your career to new
                      heights!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    DNC Course
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={300}
                  duration={3}
                  separator=","
                  className="counter countertext"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    AAS Masterclass
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    Injury Masterclass
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext"
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    Group Instructor Masterclass
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </section>
      <AccreditedCertification />
      <CourseReviewSection course_id="62d31069a42ac852003a0435" />

      <FlexibleFooter />
    </>
  );
}

export default FlexibleGymManagementCourse;
