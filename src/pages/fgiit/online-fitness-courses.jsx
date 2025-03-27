import React, { useEffect, useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import ScholarshipModal from "../../assets/js/popup/scholarship";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import DownloadPdf from "../../pdf/FGIIT-online-fitness-courses.pdf";
import InfoDownloadPdf from "../../pdf/information.pdf";
import Diploma_in_dietitian_course from "./pdf/online/Diploma_in_dietitian_course.pdf";
import { Link } from "react-router-dom";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import PlacementReview from "../../components/fgiit/placementReview";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MeetOurInstructure from "../../components/fgiit/meetInstructure";
import OurStudentsWords from "../../components/fgiit/ourStudentsReview";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";
import OnlineFitnessCourse from "../../components/fgiit/onlineFitnessCourseInIndia";
import AllReviews from "../../components/fgiit/allReviews";

function OnlineFitnessCourses() {
  const canonicalUrl = window.location.href;
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
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
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleOrder = async (course_id) => {
    try {
      const result = await createCourseOrder(course_id);
      if (result.showLoginModal) {
        setShowLoginModal(true);
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
    setShowLoginModal(false);
  };

  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiv = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorev = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Helmet>
        <title>Top Online Fitness Courses for All Skill Levels</title>
        <meta
          name="description"
          content="Boost your fitness skills with top online fitness courses. Learn from experts and get certified at any skill level. Enroll now!"
        />
        <meta
          name="keyword"
          content="dietitian and nutritionist course, certification to be a personal trainer, online dietician courses in india, course for gym trainer, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training"
        />
        <meta
          property="og:title"
          content="Top Online Fitness Courses for All Skill Levels"
        />
        <meta
          property="og:description"
          content="Boost your fitness skills with top online fitness courses. Learn from experts and get certified at any skill level. Enroll now!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/online-fitness-courses"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta
          name="google-site-verification"
          content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"
        ></script>
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
            fbq('init', '134961498656274');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=134961498656274&ev=PageView&noscript=1" />'
          }
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
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Online Courses. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {showLoginModal && <LoginModal onClose={closeModal} />}
      {showScholarshipModal && <ScholarshipModal />}
      <FgiitHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 m-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="carouselExampleControls"
            className="owl-carousel owl-theme"
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
                alt="Fg Group"
                className="d-none d-md-block"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                width="100%"
              />
              <img
                alt="Fg Group"
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner22.webp"
                }
                alt="best fitness course in India"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile22.webp"
                }
                alt="best fitness course in India"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={process.env.PUBLIC_URL + "/assets/images/img/banner6.webp"}
                alt="best fitness course in India"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6.webp"
                }
                alt="best fitness course in India"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_1.webp"
                }
                alt="contact with your lecturers"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-1.webp"
                }
                alt="contact with your lecturers"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/job-placement-desktop.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/job-placement-mobile.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <OnlineFitnessCourse />
      <AllReviews />
      <section className="margintop">
        <div className="container-fluid">
          <div className="">
            <div className="card bg-skill-border">
              <div className="card-header bg-skill bg-skill-border">
                <h2 className="h4-fs">About Us</h2>
              </div>
              <div className="card-body tabata">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <div className="describe d-none d-sm-block">
                        <b>
                          <p>
                            We Started These Online Nutrition Courses In India,
                            To Make The Fitness And Nutrition Industry-Main
                            Streamline After The 10th. A Student Who Wants To
                            Follow Their Passion And Earn Money Simultaneously
                            Can Register For Our Online Nutrition Courses &
                            Online Personal Training Courses. We explain the
                            importance of the Certified Fitness Trainer Course,
                            Personal Trainer Course In India, Nutritionist
                            Course Online India.
                          </p>
                        </b>
                        <b>
                          <p>
                            So, What Are The Best Certifications For Personal
                            Trainers?{" "}
                          </p>
                        </b>
                        <b>
                          <p>
                            We Are Entitled To The Crown Of Top Institute For
                            Online Nutrition Courses And Dietician Courses
                            Online In Surat. We Provide Life Experiences In Our
                            Online Personal Trainer Courses, Which You'll Be
                            Going To Face In Front Of Your Clients And Patients
                            Which Makes Us Unique From Others.
                          </p>
                        </b>
                        <b>
                          <p>
                            Personal Training Certification Helps You In
                            Attaining Customers At Fitness Centers And Gyms As
                            Well. We Provide All Resources And Content Online So
                            You Can Experience Online Learning With The FG
                            International Institute Of Teaching.
                          </p>
                        </b>
                        <b>
                          <p>
                            You might be thinking about the Nutritionist Course
                            Fees right? Connect to us and get the best offers
                            for your future self.
                          </p>
                        </b>
                        <br />
                      </div>
                      <div className="describe d-block d-sm-none">
                        <b>
                          <p>
                            We Started These Online Nutrition Courses In India,
                            To Make The Fitness And Nutrition Industry-Main
                            Streamline After The 10th.
                          </p>
                        </b>
                        {showMore ? (
                          <span className="m-0">
                            <b>
                              <p>
                                A Student Who Wants To Follow Their Passion And
                                Earn Money Simultaneously Can Register For Our
                                Online Nutrition Courses & Online Personal
                                Training Courses. We explain
                              </p>
                            </b>
                            <b>
                              <p>
                                the importance of the Certified Fitness Trainer
                                Course, Personal Trainer Course In India,
                                Nutritionist Course Online India.
                              </p>
                            </b>
                            <b>
                              <p>
                                So, What Are The Best Certifications For
                                Personal Trainers?{" "}
                              </p>
                            </b>
                            <b>
                              <p>
                                We Are Entitled To The Crown Of Top Institute
                                For Online Nutrition Courses And Dietician
                                Courses Online In Surat. We Provide Life
                                Experiences In Our Online Personal Trainer
                                Courses, Which You'll Be Going To Face In Front
                                Of Your Clients And Patients Which Makes Us
                                Unique From Others.
                              </p>
                            </b>
                            <b>
                              <p>
                                Personal Training Certification Helps You In
                                Attaining Customers At Fitness Centers And Gyms
                                As Well. We Provide All Resources And Content
                                Online So You Can Experience Online Learning
                                With The FG International Institute Of Teaching.
                              </p>
                            </b>
                            <b>
                              <p>
                                You might be thinking about the Nutritionist
                                Course Fees right? Connect to us and get the
                                best offers for your future self.
                              </p>
                            </b>
                          </span>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                        <p
                          onClick={toggleReadMorev}
                          id="myBtnrg"
                          className="text-info m-0 my-sm-2 my-md-0"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="row mt-md-5">
                  <div className="col-md-6">
                    <div className="d-md-none d-flex flex-column justify-content-start align-items-start">
                      <div className="">
                        <div className="mb-3">
                          <div className="d-none d-md-flex justify-content-start">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                              width="60%"
                            />
                          </div>
                          <div className="d-block d-md-none">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="demoo">
                      <div className="new-h3">
                        <h2 className="ml-md-5 pl-md-3 h3-fs fs-34">
                          Why FGIIT?
                        </h2>
                      </div>
                      <div>
                        <ul className="new-li">
                          <li>
                            <i className="fas fa-check"></i> Approved by
                            Government
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Internationally
                            Accredited Certification
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Industry Expert
                            Faculties with 5+ years in Business
                          </li>
                          <li>
                            <i className="fas fa-check"></i> 100% Placement
                            Support
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Mandatory
                            Internship at Top Firms
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Bilingual Learning
                            Material: English and Hindi
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Recorded Video
                            Lectures Available
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Lifetime Support
                            for Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-md-flex d-none flex-column justify-content-start align-items-start">
                      <div className="">
                        <div className="mb-3">
                          <div className="d-none d-md-flex justify-content-start">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                              width="60%"
                            />
                          </div>
                          <div className="d-block d-md-none">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-start">
                      <div className="on1 mt-1">
                        <h2 className="h4-fs">
                          due to this, our Certificate is valid in 192 country
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-4 certi text-center">
                    <h2 className="h1-fs">Our All Demo Certificates</h2>
                    <OwlCarousel
                      loop
                      autoPlay
                      dots={false}
                      id="owl-diploma"
                      className="owl-carousel owl-theme demo-certi"
                      responsive={{
                        0: {
                          items: 2,
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
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cpt_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Diploma In Personal Training
                          </h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cnc_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">Diploma In Nutrition</h2>
                        </div>
                      </div>
                      <div className="item mx-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/group-instructor-masterclass.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Group Instructor Masterclass
                          </h2>
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
                            process.env.PUBLIC_URL +
                            "/assets/images/img/aas_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />

                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Anabolic Androgenic Steroids
                          </h2>
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
                          <h2 className="h4-fs">
                            Injury Rehabilitation Workshop
                          </h2>
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
                          <h2 className="h4-fs">
                            Advance Clinical Nutrition Workshop
                          </h2>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <a
                  href={InfoDownloadPdf}
                  download
                  className="btn btn-success bg-faculties mt-2 w-100"
                >
                  Click To Know About Our Faculties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid">
              <h2 className="h2-fs text-center">
                About
                <span className="m-0 text-blue-color"> Us</span>
              </h2>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
              <div className="describe d-none d-sm-block">
                <b>
                  <p>
                    We Started These Online Nutrition Courses In India, To Make
                    The Fitness And Nutrition Industry-Main Streamline After The
                    10th. A Student Who Wants To Follow Their Passion And Earn
                    Money Simultaneously Can Register For Our Online Nutrition
                    Courses & Online Personal Training Courses. We explain the
                    importance of the Certified Fitness Trainer Course, Personal
                    Trainer Course In India, Nutritionist Course Online India.
                  </p>
                </b>
                <b>
                  <p>
                    So, What Are The Best Certifications For Personal Trainers?{" "}
                  </p>
                </b>
                <b>
                  <p>
                    We Are Entitled To The Crown Of Top Institute For Online
                    Nutrition Courses And Dietician Courses Online In Surat. We
                    Provide Life Experiences In Our Online Personal Trainer
                    Courses, Which You'll Be Going To Face In Front Of Your
                    Clients And Patients Which Makes Us Unique From Others.
                  </p>
                </b>
                <b>
                  <p>
                    Personal Training Certification Helps You In Attaining
                    Customers At Fitness Centers And Gyms As Well. We Provide
                    All Resources And Content Online So You Can Experience
                    Online Learning With The FG International Institute Of
                    Teaching.
                  </p>
                </b>
                <b>
                  <p>
                    You might be thinking about the Nutritionist Course Fees
                    right? Connect to us and get the best offers for your future
                    self.
                  </p>
                </b>
                <br />
              </div>
              <div className="describe d-block d-sm-none">
                <b>
                  <p>
                    We Started These Online Nutrition Courses In India, To Make
                    The Fitness And Nutrition Industry-Main Streamline After The
                    10th. A Student Who Wants To Follow Their Passion And Earn
                    Money Simultaneously Can Register For Our Online Nutrition
                    Courses & Online Personal Training Courses. We explain
                  </p>
                </b>
                {showMore ? (
                  <span className="m-0">
                    <b>
                      <p>
                        the importance of the Certified Fitness Trainer Course,
                        Personal Trainer Course In India, Nutritionist Course
                        Online India.
                      </p>
                    </b>
                    <b>
                      <p>
                        So, What Are The Best Certifications For Personal
                        Trainers?{" "}
                      </p>
                    </b>
                    <b>
                      <p>
                        We Are Entitled To The Crown Of Top Institute For Online
                        Nutrition Courses And Dietician Courses Online In Surat.
                        We Provide Life Experiences In Our Online Personal
                        Trainer Courses, Which You'll Be Going To Face In Front
                        Of Your Clients And Patients Which Makes Us Unique From
                        Others.
                      </p>
                    </b>
                    <b>
                      <p>
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
                  </span>
                ) : (
                  <span id="dotsx">...</span>
                )}
                <p
                  onClick={toggleReadMorev}
                  id="myBtnrg"
                  className="text-info m-0 my-sm-2 my-md-0"
                >
                  {showMore ? "Read less" : "Read more"}
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="ml-md-5 pl-md-3 h3-fs fs-34">Why FGIIT?</h2>
                  </div>
                  <div>
                    <ul className="new-li">
                      <li>
                        <i className="fas fa-check"></i> Approved by Government
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Internationally
                        Accredited Certification
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Industry Expert
                        Faculties with 5+ years in Business
                      </li>
                      <li>
                        <i className="fas fa-check"></i> 100% Placement Support
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Mandatory Internship at
                        Top Firms
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Bilingual Learning
                        Material: English and Hindi
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Recorded Video Lectures
                        Available
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lifetime Support for
                        Students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="">
                  <div className="mb-3">
                    <div className="d-none d-md-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mobile-all-logo.webp"
                        }
                        className="img-fluid"
                        alt="all logo"
                      />
                    </div>
                    <div className="d-block d-md-none">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mobile-all-logo.webp"
                        }
                        className="img-fluid"
                        alt="all logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="on1">
                    <h2 className="h4-fs">
                      due to this, our Certificate is valid in 192 country
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={InfoDownloadPdf}
              download
              className="btn btn-success bg-faculties mt-5 w-100"
            >
              Click To Know About Our Faculties
            </a>
          </div>
        </div>
      </section> */}
      {/* <section className="margintop">
        <div className="container-fluid ">
          <div className="container text-center covid">
            <h2 className="h2-fs">
              <span className="m-0 text-blue-color">Demo</span> Lecture
            </h2>
            <div className="thm-bg-clr dector"></div>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Certified Nutrition Course</p>
                  </b>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/protein-course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("zRRgXHCLDAM")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a
                      class="button mt-3"
                      href={Diploma_in_dietitian_course}
                      download
                    >
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Certified Personal Trainer</p>
                  </b>
                  <div className="ply1 ">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/kinesiology.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("bfbRDh_nDHs")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Anabolic Androgenic Steroids Workshop</p>
                  </b>
                  <div className="ply1 ">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/anabolic_cycle.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("TKn2FwMOHak")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Tabata & Functional Workshop</p>
                  </b>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/functional_training.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("b-DhFdSpcEQ")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <MeetOurInstructure />
      <section className="margintop d-none">
        <div className="container-fluid">
          <div className="container blog2 py-3 py-md-5">
            <div className="row">
              <div className="col-lg-12 covid">
                <h2 className="h2-fs text-center text-333-color">
                  Why
                  <span className="m-0 text-blue-color"> Online?</span>
                </h2>
                <div className="thm-bg-clr dector mb-2 mb-md-5"></div>
              </div>
              <div className="col-lg-12  mt-0">
                <div className="describe">
                  <p>
                    In today's fast-paced world, online fitness courses have
                    become a game-changer for individuals looking to improve
                    their health and well-being. These online courses offer
                    convenience, flexibility, and expert-led guidance, making
                    fitness accessible to anyone, anywhere. Whether you're a
                    beginner or a seasoned athlete, fitness courses cater to all
                    levels and help you achieve your personal fitness goals.
                  </p>
                  <div className="d-md-block d-none">
                    <p>
                      Online fitness courses are designed to provide a
                      structured learning experience through virtual platforms,
                      where you can learn at your own pace. With a wide range of
                      programs available, including strength training, yoga,
                      nutrition, and weight loss, there is something for
                      everyone. Many fitness enthusiasts prefer the flexibility
                      of online courses as they allow them to work out from the
                      comfort of their home, saving time and eliminating the
                      need for a gym membership.
                    </p>
                    <p>
                      These courses often come with instructional videos,
                      workout plans, and even one-on-one support from expert
                      trainers. They are an excellent choice for people with
                      busy schedules who still want to stay fit. With continuous
                      advancements in technology, online fitness courses are
                      evolving, offering a comprehensive fitness experience with
                      interactive tools and community support, making fitness
                      goals more achievable than ever before.
                    </p>
                  </div>
                  <div className="d-md-none d-block">
                    {showMore ? (
                      <>
                        <p>
                          Online fitness courses are designed to provide a
                          structured learning experience through virtual
                          platforms, where you can learn at your own pace. With
                          a wide range of programs available, including strength
                          training, yoga, nutrition, and weight loss, there is
                          something for everyone. Many fitness enthusiasts
                          prefer the flexibility of online courses as they allow
                          them to work out from the comfort of their home,
                          saving time and eliminating the need for a gym
                          membership.
                        </p>
                        <p>
                          These courses often come with instructional videos,
                          workout plans, and even one-on-one support from expert
                          trainers. They are an excellent choice for people with
                          busy schedules who still want to stay fit. With
                          continuous advancements in technology, online fitness
                          courses are evolving, offering a comprehensive fitness
                          experience with interactive tools and community
                          support, making fitness goals more achievable than
                          ever before.
                        </p>
                      </>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                    <p
                      onClick={toggleReadMorev}
                      id="myBtnrg"
                      className="text-info m-0 my-sm-2 my-md-0"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                  {/* <div>
                    <a className="btn btn-primarrr m-auto btn-primary mt-2 moreless-button mt-md-3 mb-sm-2 mb-md-0">
                      Read more
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="convocation-section">
        <div className="container-fluid">
          <div className="container py-5">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                passed out<span className="m-0 text-blue-color"> students</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <OwlCarousel
              loop
              autoplay
              nav={false}
              dots={false}
              id="fwg-owl"
              className="owl-carousel owl-theme mb-5"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 2,
                },
              }}
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/a.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/b.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/c.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/d.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/e.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/f.webp"}
                  alt="passed out student from our academy"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      <section className="d-none d-md-block mt-5">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <PartnersBrands /> */}
      {/* <OurStudentsWords /> */}
      <PartnerLogo />
      {/* <PlacementReview /> */}
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-banner.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-4 p-0 pt-1">
            <div className="review-box-btn">
              <Link to="/alumini-fgiit" className="custom clickof">
                Alumini Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="Info">
              <h2 className="mt-3 h2-fs">FGIIT *Terms & Conditions :</h2>
            </div>
            <div className="Grocery1 pl-3">
              <ul>
                <li>
                  <b>18% GST will be applied externally on the courses.</b>
                </li>
                <li>
                  The Program You Choose Is An INTERNATIONAL CERTIFIED
                  NUTRITIONIST COURSE Of 2 Months At Fees Of Rs.20,000/- The
                  Actual Fees For This Course Is 35100/-(Offline).
                </li>
                <li>
                  You, Will, Be Provided With Proper Material For The Course
                  (Both High Definition Video Lectures And Pdf Format Notes)
                  Through Which You Can Study For Your Course. Other Than That
                  You Will Get A Subscription Ending Reminder 1 Week Before
                  Ending The Course.
                </li>
                <li>
                  Certification Will Be Provided After A 150 Marks Exam Consisting Of 100 Marks Of MCQ, and 2 Projects of 25 marks each. You, Will, Be Given 2 Attempts For The Exam Only If You Fail The Exam. In Case If You Have Not Completed The Course Or Are Left With Studying Or Didn't Appear For The Exam For The Same, You Have To Inform The Mentor's Priory And Extend Your Time By 1 Month After Paying <b style={{ color: "red" }}>2700/- </b>{" "} As Plan-Extension Fee.
                  <ol>
                    <li>
                      Failing In Both Attempts Will Make You Take The Course
                      Again If You Want To Continue.
                    </li>
                    <li>
                      Doubts and Queries will be solved via WhatsApp every week
                      before Sunday.
                    </li>
                    <li>Fees Paid is Non-Refundable and Not Transferable.</li>
                    <li>
                      If the candidate is getting an extension for their due fee
                      payment then they have to take the extension time
                      seriously or it may end up in these stated consequences.
                    </li>
                    <li>
                      If you appeared a month delay then you need to start the
                      course again followed by paying full fees.
                    </li>
                    <li>
                      If the faculty gives you the extension for payment then it
                      should be valued or the results will be the same as above.
                    </li>
                    <li>
                      Video Panels will be closed 3 days prior of the final
                      examination.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>
                    You need to submit the project before 5 days of the exam
                    without it you will not be allowed to give the exam.
                  </b>
                </li>
                <li>
                  <b>
                    Failing not to submit the project will result in delaying
                    your examination.
                  </b>
                </li>
                <li>
                  <b>
                    You have to pay <b style={{ color: "red" }}>2700/- </b>as
                    exam reschedule charges and still will be liable to submit
                    your project prior 5 days of the examination.
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="covid text-center mb-5">
            <h2 className="mt-2 h2-fs">
              International{" "}
              <span className="m-0 text-blue-color">accredited academy</span>
            </h2>
          </div>
          <div id="maindiv">
            <div id="div1">
              <span className="mx-2 flag flag-md flag-country-ad"></span>
              <span className="mx-2 flag flag-md flag-country-ae"></span>
              <span className="mx-2 flag flag-md flag-country-af"></span>
              <span className="mx-2 flag flag-md flag-country-ag"></span>
              <span className="mx-2 flag flag-md flag-country-ai"></span>
              <span className="mx-2 flag flag-md flag-country-am"></span>
              <span className="mx-2 flag flag-md flag-country-ao"></span>
              <span className="mx-2 flag flag-md flag-country-aq"></span>
              <span className="mx-2 flag flag-md flag-country-ar"></span>
              <span className="mx-2 flag flag-md flag-country-as"></span>
              <span className="mx-2 flag flag-md flag-country-at"></span>
              <span className="mx-2 flag flag-md flag-country-au"></span>
              <span className="mx-2 flag flag-md flag-country-aw"></span>
              <span className="mx-2 flag flag-md flag-country-ax"></span>
              <span className="mx-2 flag flag-md flag-country-az"></span>
              <span className="mx-2 flag flag-md flag-country-ba"></span>
              <span className="mx-2 flag flag-md flag-country-bb"></span>
              <span className="mx-2 flag flag-md flag-country-be"></span>
              <span className="mx-2 flag flag-md flag-country-bf"></span>
              <span className="mx-2 flag flag-md flag-country-bg"></span>
              <span className="mx-2 flag flag-md flag-country-bh"></span>
              <span className="mx-2 flag flag-md flag-country-bi"></span>
              <span className="mx-2 flag flag-md flag-country-bj"></span>
              <span className="mx-2 flag flag-md flag-country-bl"></span>
              <span className="mx-2 flag flag-md flag-country-bm"></span>
              <span className="mx-2 flag flag-md flag-country-bn"></span>
              <span className="mx-2 flag flag-md flag-country-bo"></span>
              <span className="mx-2 flag flag-md flag-country-bq"></span>
              <span className="mx-2 flag flag-md flag-country-br"></span>
              <span className="mx-2 flag flag-md flag-country-bs"></span>
              <span className="mx-2 flag flag-md flag-country-bt"></span>
              <span className="mx-2 flag flag-md flag-country-bv"></span>
              <span className="mx-2 flag flag-md flag-country-bw"></span>
              <span className="mx-2 flag flag-md flag-country-by"></span>
              <span className="mx-2 flag flag-md flag-country-bz"></span>
              <span className="mx-2 flag flag-md flag-country-ca"></span>
              <span className="mx-2 flag flag-md flag-country-cc"></span>
              <span className="mx-2 flag flag-md flag-country-cd"></span>
              <span className="mx-2 flag flag-md flag-country-cf"></span>
              <span className="mx-2 flag flag-md flag-country-cg"></span>
              <span className="mx-2 flag flag-md flag-country-ch"></span>
              <span className="mx-2 flag flag-md flag-country-ci"></span>
              <span className="mx-2 flag flag-md flag-country-ck"></span>
              <span className="mx-2 flag flag-md flag-country-cl"></span>
              <span className="mx-2 flag flag-md flag-country-cm"></span>
              <span className="mx-2 flag flag-md flag-country-cn"></span>
              <span className="mx-2 flag flag-md flag-country-co"></span>
              <span className="mx-2 flag flag-md flag-country-cr"></span>
              <span className="mx-2 flag flag-md flag-country-cu"></span>
              <span className="mx-2 flag flag-md flag-country-cv"></span>
              <span className="mx-2 flag flag-md flag-country-cw"></span>
              <span className="mx-2 flag flag-md flag-country-cx"></span>
              <span className="mx-2 flag flag-md flag-country-cy"></span>
              <span className="mx-2 flag flag-md flag-country-cz"></span>
              <span className="mx-2 flag flag-md flag-country-de"></span>
              <span className="mx-2 flag flag-md flag-country-dj"></span>
              <span className="mx-2 flag flag-md flag-country-dk"></span>
              <span className="mx-2 flag flag-md flag-country-dm"></span>
              <span className="mx-2 flag flag-md flag-country-do"></span>
              <span className="mx-2 flag flag-md flag-country-dz"></span>
              <span className="mx-2 flag flag-md flag-country-ec"></span>
              <span className="mx-2 flag flag-md flag-country-ee"></span>
              <span className="mx-2 flag flag-md flag-country-eg"></span>
              <span className="mx-2 flag flag-md flag-country-eh"></span>
              <span className="mx-2 flag flag-md flag-country-er"></span>
              <span className="mx-2 flag flag-md flag-country-es"></span>
              <span className="mx-2 flag flag-md flag-country-es-ct"></span>
              <span className="mx-2 flag flag-md flag-country-et"></span>
              <span className="mx-2 flag flag-md flag-country-eu"></span>
              <span className="mx-2 flag flag-md flag-country-fi"></span>
              <span className="mx-2 flag flag-md flag-country-fj"></span>
              <span className="mx-2 flag flag-md flag-country-fk"></span>
              <span className="mx-2 flag flag-md flag-country-fm"></span>
              <span className="mx-2 flag flag-md flag-country-fo"></span>
              <span className="mx-2 flag flag-md flag-country-fr"></span>
              <span className="mx-2 flag flag-md flag-country-ga"></span>
              <span className="mx-2 flag flag-md flag-country-gb"></span>
              <span className="mx-2 flag flag-md flag-country-gb-eng"></span>
              <span className="mx-2 flag flag-md flag-country-gb-nir"></span>
              <span className="mx-2 flag flag-md flag-country-gb-sct"></span>
              <span className="mx-2 flag flag-md flag-country-gb-wls"></span>
              <span className="mx-2 flag flag-md flag-country-gd"></span>
              <span className="mx-2 flag flag-md flag-country-ge"></span>
              <span className="mx-2 flag flag-md flag-country-gf"></span>
              <span className="mx-2 flag flag-md flag-country-gg"></span>
              <span className="mx-2 flag flag-md flag-country-gh"></span>
              <span className="mx-2 flag flag-md flag-country-gi"></span>
              <span className="mx-2 flag flag-md flag-country-gl"></span>
              <span className="mx-2 flag flag-md flag-country-gm"></span>
              <span className="mx-2 flag flag-md flag-country-gn"></span>
              <span className="mx-2 flag flag-md flag-country-gp"></span>
              <span className="mx-2 flag flag-md flag-country-gq"></span>
              <span className="mx-2 flag flag-md flag-country-gr"></span>
              <span className="mx-2 flag flag-md flag-country-gs"></span>
              <span className="mx-2 flag flag-md flag-country-gt"></span>
              <span className="mx-2 flag flag-md flag-country-gu"></span>
              <span className="mx-2 flag flag-md flag-country-gw"></span>
              <span className="mx-2 flag flag-md flag-country-gy"></span>
              <span className="mx-2 flag flag-md flag-country-hk"></span>
              <span className="mx-2 flag flag-md flag-country-hm"></span>
              <span className="mx-2 flag flag-md flag-country-hn"></span>
              <span className="mx-2 flag flag-md flag-country-hr"></span>
              <span className="mx-2 flag flag-md flag-country-ht"></span>
              <span className="mx-2 flag flag-md flag-country-hu"></span>
              <span className="mx-2 flag flag-md flag-country-id"></span>
              <span className="mx-2 flag flag-md flag-country-ie"></span>
              <span className="mx-2 flag flag-md flag-country-il"></span>
              <span className="mx-2 flag flag-md flag-country-im"></span>
              <span className="mx-2 flag flag-md flag-country-in"></span>
              <span className="mx-2 flag flag-md flag-country-io"></span>
              <span className="mx-2 flag flag-md flag-country-iq"></span>
              <span className="mx-2 flag flag-md flag-country-ir"></span>
              <span className="mx-2 flag flag-md flag-country-is"></span>
              <span className="mx-2 flag flag-md flag-country-it"></span>
              <span className="mx-2 flag flag-md flag-country-je"></span>
              <span className="mx-2 flag flag-md flag-country-jm"></span>
              <span className="mx-2 flag flag-md flag-country-jo"></span>
              <span className="mx-2 flag flag-md flag-country-jp"></span>
              <span className="mx-2 flag flag-md flag-country-ke"></span>
              <span className="mx-2 flag flag-md flag-country-kg"></span>
              <span className="mx-2 flag flag-md flag-country-kh"></span>
              <span className="mx-2 flag flag-md flag-country-ki"></span>
              <span className="mx-2 flag flag-md flag-country-km"></span>
              <span className="mx-2 flag flag-md flag-country-kn"></span>
              <span className="mx-2 flag flag-md flag-country-kp"></span>
              <span className="mx-2 flag flag-md flag-country-kr"></span>
              <span className="mx-2 flag flag-md flag-country-kw"></span>
              <span className="mx-2 flag flag-md flag-country-ky"></span>
              <span className="mx-2 flag flag-md flag-country-kz"></span>
              <span className="mx-2 flag flag-md flag-country-la"></span>
              <span className="mx-2 flag flag-md flag-country-lb"></span>
              <span className="mx-2 flag flag-md flag-country-lc"></span>
              <span className="mx-2 flag flag-md flag-country-li"></span>
              <span className="mx-2 flag flag-md flag-country-lk"></span>
              <span className="mx-2 flag flag-md flag-country-lr"></span>
              <span className="mx-2 flag flag-md flag-country-ls"></span>
              <span className="mx-2 flag flag-md flag-country-lt"></span>
              <span className="mx-2 flag flag-md flag-country-lu"></span>
              <span className="mx-2 flag flag-md flag-country-lv"></span>
              <span className="mx-2 flag flag-md flag-country-ly"></span>
              <span className="mx-2 flag flag-md flag-country-ma"></span>
              <span className="mx-2 flag flag-md flag-country-mc"></span>
              <span className="mx-2 flag flag-md flag-country-md"></span>
              <span className="mx-2 flag flag-md flag-country-me"></span>
              <span className="mx-2 flag flag-md flag-country-mf"></span>
              <span className="mx-2 flag flag-md flag-country-mg"></span>
              <span className="mx-2 flag flag-md flag-country-mh"></span>
              <span className="mx-2 flag flag-md flag-country-mk"></span>
              <span className="mx-2 flag flag-md flag-country-ml"></span>
              <span className="mx-2 flag flag-md flag-country-mm"></span>
              <span className="mx-2 flag flag-md flag-country-mn"></span>
              <span className="mx-2 flag flag-md flag-country-mo"></span>
              <span className="mx-2 flag flag-md flag-country-mp"></span>
              <span className="mx-2 flag flag-md flag-country-mq"></span>
              <span className="mx-2 flag flag-md flag-country-mr"></span>
              <span className="mx-2 flag flag-md flag-country-ms"></span>
              <span className="mx-2 flag flag-md flag-country-mt"></span>
              <span className="mx-2 flag flag-md flag-country-mu"></span>
              <span className="mx-2 flag flag-md flag-country-mv"></span>
              <span className="mx-2 flag flag-md flag-country-mw"></span>
              <span className="mx-2 flag flag-md flag-country-mx"></span>
              <span className="mx-2 flag flag-md flag-country-my"></span>
              <span className="mx-2 flag flag-md flag-country-mz"></span>
              <span className="mx-2 flag flag-md flag-country-na"></span>
              <span className="mx-2 flag flag-md flag-country-nc"></span>
              <span className="mx-2 flag flag-md flag-country-ne"></span>
              <span className="mx-2 flag flag-md flag-country-nf"></span>
              <span className="mx-2 flag flag-md flag-country-ng"></span>
              <span className="mx-2 flag flag-md flag-country-ni"></span>
              <span className="mx-2 flag flag-md flag-country-no"></span>
              <span className="mx-2 flag flag-md flag-country-np"></span>
              <span className="mx-2 flag flag-md flag-country-nr"></span>
              <span className="mx-2 flag flag-md flag-country-nu"></span>
              <span className="mx-2 flag flag-md flag-country-nz"></span>
              <span className="mx-2 flag flag-md flag-country-om"></span>
              <span className="mx-2 flag flag-md flag-country-pa"></span>
              <span className="mx-2 flag flag-md flag-country-pe"></span>
              <span className="mx-2 flag flag-md flag-country-pf"></span>
              <span className="mx-2 flag flag-md flag-country-pg"></span>
              <span className="mx-2 flag flag-md flag-country-ph"></span>
              <span className="mx-2 flag flag-md flag-country-pk"></span>
              <span className="mx-2 flag flag-md flag-country-pl"></span>
              <span className="mx-2 flag flag-md flag-country-pm"></span>
              <span className="mx-2 flag flag-md flag-country-pn"></span>
              <span className="mx-2 flag flag-md flag-country-pr"></span>
              <span className="mx-2 flag flag-md flag-country-ps"></span>
              <span className="mx-2 flag flag-md flag-country-pt"></span>
              <span className="mx-2 flag flag-md flag-country-pw"></span>
              <span className="mx-2 flag flag-md flag-country-py"></span>
              <span className="mx-2 flag flag-md flag-country-qa"></span>
              <span className="mx-2 flag flag-md flag-country-re"></span>
              <span className="mx-2 flag flag-md flag-country-ro"></span>
              <span className="mx-2 flag flag-md flag-country-rs"></span>
              <span className="mx-2 flag flag-md flag-country-ru"></span>
              <span className="mx-2 flag flag-md flag-country-rw"></span>
              <span className="mx-2 flag flag-md flag-country-sa"></span>
              <span className="mx-2 flag flag-md flag-country-sb"></span>
              <span className="mx-2 flag flag-md flag-country-sc"></span>
              <span className="mx-2 flag flag-md flag-country-sd"></span>
              <span className="mx-2 flag flag-md flag-country-se"></span>
              <span className="mx-2 flag flag-md flag-country-sg"></span>
              <span className="mx-2 flag flag-md flag-country-sh"></span>
              <span className="mx-2 flag flag-md flag-country-si"></span>
              <span className="mx-2 flag flag-md flag-country-sj"></span>
              <span className="mx-2 flag flag-md flag-country-sk"></span>
              <span className="mx-2 flag flag-md flag-country-sl"></span>
              <span className="mx-2 flag flag-md flag-country-sm"></span>
              <span className="mx-2 flag flag-md flag-country-sn"></span>
              <span className="mx-2 flag flag-md flag-country-so"></span>
              <span className="mx-2 flag flag-md flag-country-sr"></span>
              <span className="mx-2 flag flag-md flag-country-ss"></span>
              <span className="mx-2 flag flag-md flag-country-st"></span>
              <span className="mx-2 flag flag-md flag-country-sv"></span>
              <span className="mx-2 flag flag-md flag-country-sx"></span>
              <span className="mx-2 flag flag-md flag-country-sy"></span>
              <span className="mx-2 flag flag-md flag-country-sz"></span>
              <span className="mx-2 flag flag-md flag-country-tc"></span>
              <span className="mx-2 flag flag-md flag-country-td"></span>
              <span className="mx-2 flag flag-md flag-country-tf"></span>
              <span className="mx-2 flag flag-md flag-country-tg"></span>
              <span className="mx-2 flag flag-md flag-country-th"></span>
              <span className="mx-2 flag flag-md flag-country-tj"></span>
              <span className="mx-2 flag flag-md flag-country-tk"></span>
              <span className="mx-2 flag flag-md flag-country-tl"></span>
              <span className="mx-2 flag flag-md flag-country-tm"></span>
              <span className="mx-2 flag flag-md flag-country-tn"></span>
              <span className="mx-2 flag flag-md flag-country-to"></span>
              <span className="mx-2 flag flag-md flag-country-tr"></span>
              <span className="mx-2 flag flag-md flag-country-tt"></span>
              <span className="mx-2 flag flag-md flag-country-tv"></span>
              <span className="mx-2 flag flag-md flag-country-tz"></span>
              <span className="mx-2 flag flag-md flag-country-ua"></span>
              <span className="mx-2 flag flag-md flag-country-ug"></span>
              <span className="mx-2 flag flag-md flag-country-um"></span>
              <span className="mx-2 flag flag-md flag-country-un"></span>
              <span className="mx-2 flag flag-md flag-country-us"></span>
              <span className="mx-2 flag flag-md flag-country-uy"></span>
              <span className="mx-2 flag flag-md flag-country-uz"></span>
              <span className="mx-2 flag flag-md flag-country-va"></span>
              <span className="mx-2 flag flag-md flag-country-vc"></span>
              <span className="mx-2 flag flag-md flag-country-ve"></span>
              <span className="mx-2 flag flag-md flag-country-vg"></span>
              <span className="mx-2 flag flag-md flag-country-vi"></span>
              <span className="mx-2 flag flag-md flag-country-vn"></span>
              <span className="mx-2 flag flag-md flag-country-vu"></span>
              <span className="mx-2 flag flag-md flag-country-wf"></span>
              <span className="mx-2 flag flag-md flag-country-ws"></span>
              <span className="mx-2 flag flag-md flag-country-ye"></span>
              <span className="mx-2 flag flag-md flag-country-za"></span>
              <span className="mx-2 flag flag-md flag-country-zm"></span>
              <span className="mx-2 flag flag-md flag-country-zw"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                Blogs<span className="m-0 text-blue-color"></span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Loss-weight.webp"
                      }
                      alt="Snowy Mountains"
                    />

                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">
                        Weight Loss VS Fat Loss
                      </h2>
                      <p className="card__text">
                        Individuals aiming to shed a few pounds often claim they
                        want to lose weight. But do you really want to lose
                        weight? Losing weight is quite simple, contrary to
                        popular belief.
                      </p>
                      <Link
                        to="/blogs/fatloss-vs-weightloss"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Minerals-d.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">What Is Minerals?</h2>
                      <p className="card__text">
                        Humans require various mineral elements for optimal
                        functioning. These mineral elements are broadly
                        categorized into two classes: Macro Minerals and Micro
                        Minerals.
                      </p>
                      <Link to="/blogs/what-are-minerals" className="card__btn">
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Flexible-Body.webp"
                      }
                      alt="what is Keto Diet"
                    />
                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">
                        How To Get Flexible Body?
                      </h2>
                      <p className="card__text">
                        Stretching plays a vital role in achieving a flexible
                        body. The term "stretching" originates from the word
                        "stretch," which refers to the uninterrupted
                        continuation...
                      </p>
                      <Link
                        to="/blogs/how-to-get-flexible-body"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-mobile-banner.webp"
                }
                width="100%"
                alt="fggroup"
                className="lazy"
              />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-4 p-0 pt-1 mb-4">
            <div className="review-box-btn">
              <Link to="/alumini-fgiit" className="custom clickof">
                Alumini Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block d-md-none">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header" id="headingOne">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Is DPT certificate valid Nationally?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseOne"
                  className="coll"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, this certificate and course are valid nationally and
                    also valid in 192 countries in the world. This certificate
                    is issued from California, USA.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What can you do after the completion of this course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseTwo"
                  className="coll"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>You can work in these areas as below.</p>
                    <ol>
                      <li>Can work in Hospital or clinic</li>
                      <li>Can work in a gym and sports club</li>
                      <li>Can work in a sports academy.</li>
                      <li>Can start your own clinic or training institute.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingThree">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What will be the course duration?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseThree"
                  className="cose"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    All Courses
                    <ol>
                      <li>Nutri Trainer Course :- 6 Months</li>
                      <li>Diploma in Nutrition Course :- 6 Months</li>
                      <li>Diploma in Personal Training Course :- 6 Months</li>
                      <li>Anabolic Androgenic Steroids :- 1 Month</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfour">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How to study in this course or what is a procedure?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="cole"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The study procedure will be easy.
                    <ol>
                      <li>Registration of your course.</li>
                      <li>
                        You will get the panel link and its id and password.
                      </li>
                      <li>
                        Start learning from our study videos with an
                        introduction.
                      </li>
                      <li>
                        You can contact mentors if you have any difficulties
                        during the course.
                      </li>
                      <li>
                        Doubts And Queries Will Be Solved Via WhatsApp Every
                        Week Before Sunday.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What is the exam procedure and how to give it?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    You can give the exam on your phone or laptop from home and
                    anywhere.
                    <br /> MCQ Based Exam (100 Marks) & 2 Projects submission
                    (25 marks each)
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Are You Searching For A Nutritionist Course Near Me?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Then You know where to find FGIIT now, We are the leading
                    and foremost tutors in the health and fitness industry.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What are the benefits of enrolling in this course at FGIIT? Students benefit from:
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Government-approved and internationally accredited certification Expert faculties with over 5 years of industry experience 100% placement support and a mandatory internship at top firms Bilingual learning materials (English and Hindi) Lifetime support, including access to demo lectures and chat support
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Are there any exams or assessments in the course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  Yes, the course includes MCQ-based exams and a case study-based project to assess understanding and practical application of personal training concepts.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How is FGIIT's course different from other academies?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  FGIIT's course includes unique topics such as group instructor training, anabolics and androgenic steroids, powerlifting, and injury rehabilitation. This makes FGIIT the most knowledgeable and value-for-money course in the industry.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Are You Searching For A Nutritionist Course Near Me?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Then You know where to find FGIIT now, We are the leading
                    and foremost tutors in the health and fitness industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">Franchise Partner</h2>
                  <Link to="/fitness-brand-franchise">Explore</Link>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">INPTA</h2>
                  <Link to="/indian-nutritionist-and-personal-trainer-association">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInquiryForm note={"Online Course Page Inquiry"} />
      <FgiitFooter />
    </>
  );
}

export default OnlineFitnessCourses;
