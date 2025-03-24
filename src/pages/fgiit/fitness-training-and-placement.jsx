import React, { useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgDigitalFooter from "../../components/partials/Footer/fgdigitalfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import { publicAxiosInstance } from "../../assets/js/config/api";
import Swal from "sweetalert2";
import WhatsAppAnchor from "../../components/sendtowhatsapp";
import ModalVideo from "react-modal-video";
import InternshipJobplacement from "./pdf/Internship & Job placement.pdf";
import agency_agreement from "./pdf/agency_agreement.pdf";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OurCollobroters from "../../components/fgiit/ourCollobrotters";
import { Helmet } from "react-helmet";

function FitnessTrainingAndPlacement() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [employeeFormData, setEmployeeFormData] = useState({
    name: "",
    location: "",
    jobpost: "",
    type: "",
    hours: "",
    minutes: "",
    expectedSalary: "",
    mobile: "",
    email: "",
  });

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

  const [employerFormData, setEmployerFormData] = useState({
    name: "",
    location: "",
    jobpost: "",
    type: "",
    hours: "",
    minutes: "",
    expectedSalary: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeEmpolyer = (e) => {
    const { name, value } = e.target;
    setEmployerFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmployeeSubmit = async () => {
    try {
      let payload = {
        name: employeeFormData.name,
        location: employeeFormData.location,
        job_post: employeeFormData.jobpost,
        type: employeeFormData.type,
        work_time: employeeFormData.hours + ":" + employeeFormData.minutes,
        email: employeeFormData.email,
        mobile: employeeFormData.mobile,
        expected_salary: employeeFormData.expectedSalary,
        minutes: employeeFormData.minutes,
      };

      const response = await publicAxiosInstance.post(
        "/employee-application",
        payload
      );

      if (response.data.message === "Success") {
        Swal.fire({
          icon: "success",
          title: "Thanks you for your interest",
          text: "We will contact you soon.",
        });
        setEmployeeFormData({
          name: "",
          location: "",
          jobpost: "",
          type: "",
          hours: "",
          minutes: "",
          expectedSalary: "",
          mobile: "",
          email: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleEmployerSubmit = async () => {
    try {
      let payload = {
        name: employerFormData.name,
        location: employerFormData.location,
        job_post: employerFormData.jobpost,
        type: employerFormData.type,
        work_time: employerFormData.hours + ":" + employerFormData.minutes,
        email: employerFormData.email,
        mobile: employerFormData.mobile,
        expected_salary: employerFormData.expectedSalary,
        minutes: employerFormData.minutes,
      };

      const response = await publicAxiosInstance.post(
        "/employer-application",
        payload
      );

      if (response.data.message === "Success") {
        Swal.fire({
          icon: "success",
          title: "Thanks you for your interest",
          text: "We will contact you soon.",
        });
        setEmployeeFormData({
          name: "",
          location: "",
          jobpost: "",
          type: "",
          hours: "",
          minutes: "",
          expectedSalary: "",
          mobile: "",
          email: "",
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleApplyForInquiry = async () => {
    try {
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FG-GROUP T&P INQUIRY",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <title>T&P Cell</title>
        <meta name="description" content="Here is one of the best ways to keep on learning while having a job or work at the same time with this online nutritionist and personal training course" />
        <meta name="keyword" content="nutritionist and dietitian course, dietitian course details, course for gym trainer, course to be a personal trainer, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym,
         therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, 
        fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification,
         private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor,
          yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online,
           online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course,
            certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course,
             getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course,
              course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai,
               india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy,
                nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online,
                 personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate,
                  gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate,
                   fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="T&P Cell" />
        <meta property="og:description" content="Here is one of the best ways to keep on learning while having a job or work at the same time with this online nutritionist and personal training course" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/fitness-training-and-placement" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <p className="d-none">g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course,
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
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
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-none d-md-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/banner22.webp"
                  }
                  alt="best fitness course in India"
                />
              </a>
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-block d-md-none w-100"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/banner-mobile22.webp"
                  }
                  alt="best fitness course in India"
                />
              </a>
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner28.webp"
                }
                alt="online fitness courses in india"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile28.webp"
                }
                alt="online fitness courses in india"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center">
              <h1 className="text-center">
                <span className="m-0 text-blue-color">
                  training & placement
                </span>{" "}
                cell
              </h1>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="d-block d-md-none">
                      <div className="ply1">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy mb-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/tnp-thumb.webp"
                          }
                          width="100%"
                          alt="fggroup"
                          style={{ borderRadius: "10px" }}
                        />
                        <div className="video-btn play-btn">
                          <Link
                            to="https://youtu.be/tlsaqZdW2Pc"
                            data-flashy-type="video"
                            className="custom clickof"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="describe d-block d-md-none">
                      <p className="m-0">
                        The Training & Placement Cell (CS & IT) facilitate
                        contacts between fitness industries companies and our
                        students for better career development & opportunities.
                        The career development process includes self-awareness,
                        career exploration,
                      </p>
                      {showMore ? (
                        <span id="moreg" className="m-0">
                          <p className="m-0">
                            {" "}
                            internship, job placement & Alumni Interaction. The
                            FG T&P Cell organizes campus interviews by inviting
                            various Fitness industries like gym, sport club,
                            fitness center, hospitals, schools, for the
                            placement of the FG students. The cell undertakes
                            various activities of training and grooming of
                            students in terms of conducting mock interviews, GD
                            sessions, resume writing workshops, soft skill
                            development, organization behavior, HR meeting etc.
                          </p>
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ color: "#00afef", fontWeight: "500" }}
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                    </div>
                    <div className="d-none d-md-block describe">
                      <p className="my-0">
                        The Training & Placement Cell (CS & IT) facilitate
                        contacts between fitness industries companies and our
                        students for better career development & opportunities.
                        The career development process includes self-awareness,
                        career exploration, internship, job placement & Alumni
                        Interaction. The FG T&P Cell organizes campus interviews
                        by inviting various Fitness industries like gym, sport
                        club,fitness center, hospitals, schools, for the
                        placement
                      </p>
                      {showMore ? (
                        <p className="my-0">
                          {" "}
                          of the FG students. The cell undertakes various
                          activities of training and grooming of students in
                          terms of conducting mock interviews, GD sessions,
                          resume writing workshops, soft skill development,
                          organization behavior, HR meeting etc.
                        </p>
                      ) : (
                        // <span id="dotsg" className="ml-0">...</span>
                        <></>
                      )}
                      <p
                        onClick={toggleReadMore}
                        id="myBtnrh"
                        className="text-info mt-0"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-md-block">
                <div>
                  <div className="ply1 black-before">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/tnp-thumb.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <Link
                        to="https://youtu.be/tlsaqZdW2Pc"
                        data-flashy-type="video"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <a
                    href={InternshipJobplacement}
                    className="btn btn-danger mt-3"
                    target="_blank"
                    download="Internship & Job placement.pdf"
                    rel="noreferrer"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="col-md-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  <span className="m-0 text-blue-color">HR Agency </span>
                  program
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-3"></div>
              <h2 className="h4-fs text-center mb-md-3 mb-4">
                Making your Recruitment Process Easy!
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-1.webp"
                        }
                        alt="Right Candidate"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 1: Finding The Right Candidate For You</b>
                      </h2>
                      <p className="mb-0">
                        We have 5000+ students enrolled with us , industry ready
                        looking for the right opportunity to shine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-3.webp"
                        }
                        alt="Legal Documentations"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 2: Legal Documentations</b>
                      </h2>
                      <p className="mb-5">
                        We do everything legally! We will sign an agreement ,
                        ensuring your safety and security with the hiring
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-2.webp"
                        }
                        alt="Interviews"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 3: Interviews</b>
                      </h2>
                      <p className="mb-0">
                        Get ready to take interviews as we send the right
                        candidates! Hire and keep the best people and make your
                        organization flourish with a healthy work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-4.webp"
                        }
                        alt="BONDS"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 4: BONDS</b>
                      </h2>
                      <p className="mb-0">
                        BONDs, JOB BONDs, We will make each and every selected
                        candidate sign a 3 month bond to ensure you get a
                        quality candidate as well as
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-5.webp"
                        }
                        alt="Recruitment Fulfilled"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 5: Recruitment Fulfilled</b>
                      </h2>
                      <p className="mb-0">
                        Yes! With our HR agency program, almost 95% of our
                        clients get their right candidates within a few weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5">
              <div className="demoo text-center mb-4" id="Agreement">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  <span className="m-0 text-blue-color">HR Agency </span>
                  Agreement
                </h2>
                <div className="thm-bg-clr dector mb-md-4 mb-2"></div>
              </div>
              <div className="row">
                <div className="col-lg-8 pr-0 order-2 order-lg-1 mt-3 mt-md-0">
                  <div className="pl-0 pl-md-4">
                    <div className="d-flex hliss mt-1 align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/right-arrow.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2 text-blue-color fs-20"
                          ></i>
                          On The Right Side, You Have Full Agreement Images.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex hliss mt-1 align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/query.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          If you have any queries, drop your message here
                        </p>
                        <WhatsAppAnchor
                          message="Hello, I wanted to know more about the HR Agency agreement"
                          options={{ pageRef: true }}
                        />
                      </div>
                    </div>
                    <div className="d-flex hliss align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/read.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          After Reading The Above Step, Download & Read The
                          Agreement To Proceed.
                        </p>
                        <a
                          href={agency_agreement}
                          className="btn btn-primary"
                          target="_blank"
                          download="agency_agreement.pdf"
                          rel="noreferrer"
                        >
                          <i className="fas fa-file-download mr-2"></i>
                          Download
                        </a>
                      </div>
                    </div>
                    <div className="d-flex hliss align-items-center p-sizee">
                      <div
                        className="div text-center d-none d-md-block"
                        style={{ width: "100px" }}
                      >
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/workflow.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          Further Processing Regarding Agreement Submission And
                          Payment Method Via Email
                        </p>
                        <Link
                          to="mailto:hr@fggroup.in"
                          className="btn btn-info"
                        >
                          <i className="fas fa-envelope mr-1"></i>Send Email
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center pr-4 order-1 order-lg-2">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/mix-img/agency_agreement_1.webp"
                    }
                    alt="FG Group"
                  />
                  <div className="describe">
                    <p className="m-0" style={{ color: "#000" }}>
                      Download Full Agreement
                    </p>
                    <a
                      href={agency_agreement}
                      className="btn btn-primary"
                      target="_blank"
                      download="agency_agreement.pdf"
                      rel="noreferrer"
                    >
                      <i className="fas fa-file-download mr-2"></i>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  <span className="m-0 text-blue-color">Objectives</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            </div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-sm-6 text-center">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/traning.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Training</h2>
                      <p className="mt-3">
                        To facilitate students to equip latest fitness industry
                        skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/internship.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Internship</h2>
                      <p className="mt-3">
                        To facilitate the students in getting suitable
                        internship opportunities for better employability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/placement.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Placement</h2>
                      <p className="mt-3">
                        To facilitate contacts between students and industries
                        for better career opportunities. To facilitate 100%
                        placement for all eligible students.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center d-lg-none">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/alumina-imgs.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Alumni Connect</h2>
                      <p className="mt-3">
                        To facilitate Students-Alumni experiences of the journey
                        from college to the corporate world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center d-lg-none">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/law.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Legal aspects of Business</h2>
                      <p className="mt-3">
                        our institute also provide all the micro to macro level
                        arrangement of legal documents by proper systematic
                        Government.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center d-none d-lg-block">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/alumina-imgs.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Alumni Connect</h2>
                      <p className="mt-3">
                        To facilitate Students-Alumni experiences of the journey
                        from college to the corporate world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 text-center d-none d-lg-block">
                  <div className="blog2 he-tmp">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/law.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Legal aspects of Business</h2>
                      <p className="mt-3">
                        Our Institute Also Provides All The Micro To Macro Level
                        Arrangements Of Legal Documents By Proper Systematic
                        Government.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div id="owl-demo101" className="owl-carousel owl-theme">
                <div className="item mx-3">
                  <div className="blog2 he-tmp text-center">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/placement.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Placement</h2>
                      <p className="mt-3">
                        To facilitate contacts between students and industries
                        for better career opportunities. To facilitate 100%
                        placement for all eligible students.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="blog2 he-tmp text-center">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/alumina-imgs.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Alumni Connect</h2>
                      <p className="mt-3">
                        To facilitate Students-Alumni experiences of the journey
                        from college to the corporate world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="blog2 he-tmp text-center">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/law.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Legal aspects of Business</h2>
                      <p className="mt-3">
                        our institute also provide all the micro to macro level
                        arrangement of legal documents by proper systematic
                        Government.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="blog2 he-tmp text-center">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/traning.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Training</h2>
                      <p className="mt-3">
                        To facilitate students to equip latest fitness industry
                        skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="blog2 he-tmp text-center">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/internship.webp"
                        }
                        alt="FG Group"
                        width="64px"
                        className="img-fluid"
                      />
                    </div>
                    <div className="tabata mt-3">
                      <h2 className="h2-fs">Internship</h2>
                      <p className="mt-3">
                        To facilitate the students in getting suitable
                        internship opportunities for better employability.
                      </p>
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
          <div className="container">
            <div className="demoo text-center mb-4">
              <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                FG Broad Activities{" "}
                <span className="m-0 text-blue-color">Undertaken</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5"></div>
            <OwlCarousel
              loop
              autoplay
              dots={true}
              id="carouselExampleControls"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/experts-talk.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">
                      Interaction with Distinguished Industry Expert- Series
                    </h2>
                  </div>
                </div>
              </div>
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/alumina-img-9.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">
                      Interaction with Distinguished Alumni- Series
                    </h2>
                  </div>
                </div>
              </div>
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/pre-placement.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">Pre-Placement Talk-Series </h2>
                  </div>
                </div>
              </div>
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/pre-placement-online.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">
                      {" "}
                      Placement & Pre-Placement Tests/interviews
                    </h2>
                  </div>
                </div>
              </div>
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/pre-placement-online.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">
                      Online workshops of soft skills & Communication skills
                    </h2>
                  </div>
                </div>
              </div>
              <div className="item mx-3">
                <div className="position-relative">
                  <div className="tabata blog2 pt-md-4 text-center">
                    <img
                      className="img-fluid"
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-workshop.webp"
                      }
                    />
                    <h2 className="h4-fs mt-3">
                      Online workshop on Campus Recruitment Training
                    </h2>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margnitop">
        <div className="container-fluid">
          <div className="container pt-md-5">
            <div className="col-md-12">
              <div className="covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  <span className="m-0 text-blue-color">Outstanding </span>
                  Response
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
              <OwlCarousel
                loop
                autoplay
                dots={true}
                id="carouselExampleControls"
                className="owl-carousel owl-theme"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 3,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-6.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("IB3r7I7Z2zY")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-5.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("xAMczxGyrbc")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-8.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("S9hVA3w8z8E")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-1.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("XQuXwYE31zc")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-7.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("aI4wdD47mqk")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-3.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("298VUNwuJuM")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-4.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("A0Zp7b5Sz1g")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-2.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                      width="100%"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("8V3s6RDTQqM")}
                        className="custom" aria-label="Fg Group"
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
      <section className="margintop d-none d-md-block">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="col-md-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  <span className="m-0 text-blue-color">HR Agency </span>
                  program
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-3"></div>
              <h2 className="h4-fs text-center mb-md-3 mb-4">
                Making your recruitment process easy!
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-1.webp"
                        }
                        alt="Right Candidate"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 1: Finding The Right Candidate For You</b>
                      </h2>
                      <p className="mb-0">
                        We have 5000+ students enrolled with us , industry ready
                        looking for the right opportunity to shine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-3.webp"
                        }
                        alt="Legal Documentations"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 2: Legal Documentations</b>
                      </h2>
                      <p className="mb-5">
                        We do everything legally! We will sign an agreement ,
                        ensuring your safety and security with the hiring
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-2.webp"
                        }
                        alt="Interviews"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 3: Interviews</b>
                      </h2>
                      <p className="mb-0">
                        Get ready to take interviews as we send the right
                        candidates! Hire and keep the best people and make your
                        organization flourish with a healthy work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-4.webp"
                        }
                        alt="BONDS"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 4: BONDS</b>
                      </h2>
                      <p className="mb-0">
                        BONDs, JOB BONDs, We will make each and every selected
                        candidate sign a 3 month bond to ensure you get a
                        quality candidate as well as
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-sm-6 mt-3 position-relative">
                <div
                  className="tabata blog2"
                  style={{ backgroundColor: "#d4f1ffc5" }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/t&p-5.webp"
                        }
                        alt="Recruitment Fulfilled"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h3-fs">
                        <b>STEP 5: Recruitment Fulfilled</b>
                      </h2>
                      <p className="mb-0">
                        Yes! With our HR agency program, almost 95% of our
                        clients get their right candidates within a few weeks.
                        Our client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-5">
              <div className="demoo text-center mb-4" id="Agreement">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  <span className="m-0 text-blue-color">HR Agency </span>
                  Agreement
                </h2>
                <div className="thm-bg-clr dector mb-md-4 mb-2"></div>
              </div>
              <div className="row">
                <div className="col-lg-8 pr-0 order-2 order-lg-1 mt-3 mt-md-0">
                  <div className="pl-0 pl-md-4">
                    <div className="d-flex hliss mt-1 align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/right-arrow.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          On The Right Side, You Have Full Agreement Images.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex hliss mt-1 align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/query.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          If you have any queries, drop your message here
                        </p>
                        <WhatsAppAnchor
                          message="Hello, I wanted to know more about the HR Agency agreement"
                          options={{ pageRef: true }}
                        />
                      </div>
                    </div>
                    <div className="d-flex hliss align-items-center p-sizee">
                      <div className="div text-center d-none d-md-block">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/read.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          After Reading The Above Step, Download & Read The
                          Agreement To Proceed.
                        </p>
                        <a
                          href={agency_agreement}
                          className="btn btn-primary"
                          target="_blank"
                          download="agency_agreement.pdf"
                          rel="noreferrer"
                        >
                          <i className="fas fa-file-download mr-2"></i>
                          Download
                        </a>
                      </div>
                    </div>
                    <div className="d-flex hliss align-items-center p-sizee">
                      <div
                        className="div text-center d-none d-md-block"
                        style={{ width: "100px" }}
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/workflow.webp"
                          }
                          className="img-fluid mt-3"
                          width="60%"
                          alt="FG Group"
                        />
                      </div>
                      <div className="tabata ml-3">
                        <p className="mb-1">
                          <i
                            className="fas fa-caret-right mr-2"
                            style={{
                              color: "#00afef",
                              fontSize: "20px",
                            }}
                          ></i>
                          Further Processing Regarding Agreement Submission And
                          Payment Method Via Email
                        </p>
                        <Link
                          to="mailto:hr@fggroup.in"
                          className="btn btn-info"
                        >
                          <i className="fas fa-envelope mr-1"></i>Send Email
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center pr-4 order-1 order-lg-2">
                  <div className="describe">
                    <img
                      alt="Fg Group"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/mix-img/agency_agreement_1.webp"
                      }
                      className="img-fluid"
                    />
                  </div>
                  <div className="describe">
                    <p className="m-0" style={{ color: "#000" }}>
                      Download Full Agreement
                    </p>
                    <a
                      href={agency_agreement}
                      className="btn btn-primary"
                      target="_blank"
                      download="agency_agreement.pdf"
                      rel="noreferrer"
                    >
                      <i className="fas fa-file-download mr-2"></i>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid">
          <div className="container">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                Find a
                <span className="m-0 text-blue-color"> right candidates</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row align-items-center">
              <div className="col-md-6 mt-3">
                {/* <div className="certi text-center">
                  <p>employer</p>
                </div>
                <div className="blog2">
                  <p
                    className="mb-0"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Company name</b>
                  </p>
                  <input
                    type="text"
                    className="form-control fr mt-2"
                    placeholder="Enter Company name"
                    name="name"
                    value={employerFormData.name}
                    onChange={handleChangeEmpolyer}
                  />
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Company Address</b>
                  </p>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend fr mt-2">
                      <div className="input-group-text" style={{ zIndex: "9" }}>
                        <a href="#0" aria-label="Fg Group">
                          <i className="fas fa-map-pin"></i>
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control fr mt-2"
                      name="location"
                      value={employerFormData.location}
                      onChange={handleChangeEmpolyer}
                      placeholder="Enter Company Address"
                    />
                  </div>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Job post</b>
                  </p>
                  <select
                    className="form-control fr mt-2"
                    required
                    name="jobpost"
                    value={employerFormData.jobpost}
                    onChange={handleChangeEmpolyer}
                  >
                    <option className="mt-2" hidden>
                      Select Post
                    </option>
                    <option className="mt-2">nutritionist</option>
                    <option className="mt-2">personal trainer</option>
                    <option className="mt-2">general trainer</option>
                    <option className="mt-2">Front desk</option>
                    <option className="mt-2">graphics designer</option>
                    <option className="mt-2">Cleaning staff</option>
                    <option className="mt-2">Client Councilor</option>
                  </select>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Job post</b>
                  </p>
                  <div className="form-check d-inline-block">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck11"
                      name="type"
                      value="Full Time"
                      checked={employerFormData.type === "Full Time"}
                      onChange={handleChangeEmpolyer}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck11"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      Full Time
                    </label>
                  </div>
                  <div className="form-check d-inline-block ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck22"
                      name="type"
                      value="Part Time"
                      checked={employerFormData.type === "Part Time"}
                      onChange={handleChangeEmpolyer}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck22"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      Part Time
                    </label>
                  </div>
                  <div className="form-check d-inline-block ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck33"
                      name="type"
                      value="FreeLancer"
                      checked={employerFormData.type === "FreeLancer"}
                      onChange={handleChangeEmpolyer}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck33"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      FreeLancer
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Time slot</b>
                      </p>
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Hours"
                        name="hours"
                        value={employerFormData.hours}
                        onChange={handleChangeEmpolyer}
                        pattern="/^-?\d+\.?\d*$/"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Minutes"
                        name="minutes"
                        value={employerFormData.minutes}
                        onChange={handleChangeEmpolyer}
                        pattern="/^-?\d+\.?\d*$/"
                      />
                    </div>
                  </div>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Estimate Salary per month</b>
                  </p>
                  <select
                    className="form-control fr mt-2"
                    name="expectedSalary"
                    value={employerFormData.expectedSalary}
                    onChange={handleChangeEmpolyer}
                  >
                    <option className="mt-2" hidden>
                      Select Salary
                    </option>
                    <option className="mt-2">10,000 - 12,000</option>
                    <option className="mt-2">12,000 - 15,000</option>
                    <option className="mt-2">15,000 - 20,000</option>
                    <option className="mt-2">20,000 - 25,000</option>
                    <option className="mt-2">25,000 +</option>
                  </select>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Contact number</b>
                  </p>
                  <input
                    type="number"
                    className="form-control fr mt-2"
                    placeholder="Enter Contact Number"
                    name="mobile"
                    value={employerFormData.mobile}
                    onChange={handleChangeEmpolyer}
                    pattern="/^-?\d+\.?\d*$/"
                  />
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Email ID</b>
                  </p>
                  <input
                    type="email"
                    className="form-control fr mt-2"
                    placeholder="Enter Email ID"
                    name="email"
                    value={employerFormData.email}
                    onChange={handleChangeEmpolyer}
                  />
                  <button
                    type="button"
                    className="btn btn-success mt-4"
                    onClick={handleEmployerSubmit}
                  >
                    Submit
                  </button>
                </div> */}
                <img
                  alt="Fg Group"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/mix-img/employee-training-placement-cell.webp"
                  }
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 mt-3">
                <div className="certi text-center">
                  <p>employee</p>
                </div>
                <div className="blog2">
                  <p
                    className="mb-0"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Full name</b>
                  </p>
                  <input
                    type="text"
                    className="form-control fr mt-2"
                    placeholder="Enter Full Name"
                    name="name"
                    value={employeeFormData.name}
                    onChange={handleChange}
                  />
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Preferred location</b>
                  </p>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend fr mt-2">
                      <div className="input-group-text" style={{ zIndex: "9" }}>
                        <a href="#0" aria-label="Fg Group">
                          <i className="fas fa-map-pin"></i>
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control fr mt-2"
                      name="location"
                      value={employeeFormData.location}
                      onChange={handleChange}
                      placeholder="Enter Preferred Location"
                    />
                  </div>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Job post</b>
                  </p>
                  <select
                    className="form-control fr mt-2"
                    required
                    name="jobpost"
                    value={employeeFormData.jobpost}
                    onChange={handleChange}
                  >
                    <option className="mt-2" hidden>
                      Select Post
                    </option>
                    <option className="mt-2">Nutritionist</option>
                    <option className="mt-2">Personal Trainer</option>
                    <option className="mt-2">General Trainer</option>
                    <option className="mt-2">Front Desk</option>
                    <option className="mt-2">Graphics Designer</option>
                    <option className="mt-2">Cleaning Staff</option>
                    <option className="mt-2">Client Councilor</option>
                  </select>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Job Time</b>
                  </p>
                  <div className="form-check d-inline-block">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck11"
                      name="type"
                      value="Full Time"
                      checked={employeeFormData.type === "Full Time"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck11"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      Full Time
                    </label>
                  </div>
                  <div className="form-check d-inline-block ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck22"
                      name="type"
                      value="Part Time"
                      checked={employeeFormData.type === "Part Time"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck22"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      Part Time
                    </label>
                  </div>
                  <div className="form-check d-inline-block ml-3">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck33"
                      name="type"
                      value="FreeLancer"
                      checked={employeeFormData.type === "FreeLancer"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck33"
                      style={{ fontFamily: "Comfortaa" }}
                    >
                      FreeLancer
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Time slot</b>
                      </p>
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Hours"
                        name="hours"
                        value={employeeFormData.hours}
                        onChange={handleChange}
                        pattern="/^-?\d+\.?\d*$/"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Minutes"
                        name="minutes"
                        value={employeeFormData.minutes}
                        onChange={handleChange}
                        pattern="/^-?\d+\.?\d*$/"
                      />
                    </div>
                  </div>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Expectation per month</b>
                  </p>
                  <select
                    className="form-control fr mt-2"
                    required
                    name="expectedSalary"
                    value={employeeFormData.expectedSalary}
                    onChange={handleChange}
                  >
                    <option className="mt-2" hidden>
                      Select Salary
                    </option>
                    <option className="mt-2">10,000 - 12,000</option>
                    <option className="mt-2">12,000 - 15,000</option>
                    <option className="mt-2">15,000 - 20,000</option>
                    <option className="mt-2">20,000 - 25,000</option>
                    <option className="mt-2">25,000 +</option>
                  </select>
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Contact number</b>
                  </p>
                  <input
                    type="number"
                    className="form-control fr mt-2"
                    placeholder="Enter Contact Number"
                    required
                    name="mobile"
                    value={employeeFormData.mobile}
                    onChange={handleChange}
                    pattern="/^-?\d+\.?\d*$/"
                  />
                  <p
                    className="mb-0 mt-4"
                    style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                  >
                    <b>Email ID</b>
                  </p>
                  <input
                    type="email"
                    className="form-control fr mt-2"
                    placeholder="Enter Email ID"
                    name="email"
                    value={employeeFormData.email}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-success mt-4"
                    onClick={handleEmployeeSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid">
          <div className="container">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                Find a
                <span className="m-0 text-blue-color"> right candidates</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-md-12" align="center">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="btn btn-info active mx-1"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Employer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="btn btn-info mx-1"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Employee
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="certi text-center">
                      <p>employer</p>
                    </div>
                    <div className="blog2">
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Company name</b>
                      </p>
                      <input
                        type="text"
                        className="form-control fr mt-2"
                        placeholder="Enter Company name"
                        id="txt_employer_name_mobile"
                      />
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Company Address</b>
                      </p>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend fr mt-2">
                          <div
                            className="input-group-text"
                            style={{ zIndex: "9" }}
                          >
                            <a href="#0" aria-label="Fg Group">
                              <i className="fas fa-map-pin"></i>
                            </a>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control fr mt-2"
                          id="txt_employer_location_mobile"
                          placeholder="Enter Company Address"
                        />
                      </div>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Job post</b>
                      </p>
                      <select
                        className="form-control fr mt-2"
                        required
                        id="txt_employer_job_post_mobile"
                      >
                        <option className="mt-2" hidden>
                          Select Post
                        </option>
                        <option className="mt-2">nutritionist</option>
                        <option className="mt-2">personal trainer</option>
                        <option className="mt-2">general trainer</option>
                        <option className="mt-2">Front desk</option>
                        <option className="mt-2">graphics designer</option>
                        <option className="mt-2">Cleaning staff</option>
                        <option className="mt-2">Client Councilor</option>
                      </select>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Job post</b>
                      </p>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="txt_employer_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck111"
                          style={{ fontFamily: "Comfortaa" }}
                          value="Full Time"
                        >
                          Full Time
                        </label>
                      </div>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="txt_employer_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck222"
                          style={{ fontFamily: "Comfortaa" }}
                          value="Part Time"
                        >
                          Part Time
                        </label>
                      </div>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="txt_employer_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck333"
                          style={{ fontFamily: "Comfortaa" }}
                          value="FreeLancer"
                        >
                          FreeLancer
                        </label>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p
                            className="mb-0 mt-4"
                            style={{
                              fontFamily: "Nunito",
                              fontWeight: "bold",
                            }}
                          >
                            <b>Time slot</b>
                          </p>
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control fr mt-2"
                            placeholder="Hours"
                            id="txt_employer_hours_mobile"
                            pattern="/^-?\d+\.?\d*$/"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control fr mt-2"
                            placeholder="Minutes"
                            id="txt_employer_minutes_mobile"
                            pattern="/^-?\d+\.?\d*$/"
                          />
                        </div>
                      </div>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Estimate Salary per month</b>
                      </p>
                      <select
                        className="form-control fr mt-2"
                        id="txt_employer_estimated_salary_mobile"
                      >
                        <option className="mt-2">Select Salary</option>
                        <option className="mt-2">10,000 - 12,000</option>
                        <option className="mt-2">12,000 - 15,000</option>
                        <option className="mt-2">15,000 - 20,000</option>
                        <option className="mt-2">20,000 - 25,000</option>
                        <option className="mt-2">25,000 +</option>
                      </select>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Contact number</b>
                      </p>
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Enter Contact Number"
                        id="txt_employer_mobile_mobile"
                        pattern="/^-?\d+\.?\d*$/"
                      />
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Email ID</b>
                      </p>
                      <input
                        type="email"
                        className="form-control fr mt-2"
                        placeholder="Enter Email ID"
                        id="txt_employer_email_mobile"
                      />
                      <button
                        type="button"
                        className="btn btn-success mt-4"
                        id="btn_employer_mobile"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="certi text-center">
                      <p>employees</p>
                    </div>
                    <div className="blog2">
                      <p
                        className="mb-0"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Full name</b>
                      </p>
                      <input
                        type="text"
                        id="txt_employee_name_mobile"
                        className="form-control fr mt-2"
                        placeholder="Enter Full Name"
                      />
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Preferred location</b>
                      </p>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend fr mt-2">
                          <div
                            className="input-group-text"
                            style={{ zIndex: "9" }}
                          >
                            <a href="#0" aria-label="Fg Group">
                              <i className="fas fa-map-pin"></i>
                            </a>
                          </div>
                        </div>
                        <input
                          type="text"
                          id="txt_employee_location_mobile"
                          className="form-control fr mt-2"
                          placeholder="Enter Preferred Location"
                        />
                      </div>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Job post</b>
                      </p>
                      <select
                        className="form-control fr mt-2"
                        required
                        id="txt_employee_post_mobile"
                      >
                        <option className="mt-2" hidden>
                          Select Post
                        </option>
                        <option className="mt-2">nutritionist</option>
                        <option className="mt-2">personal trainer</option>
                        <option className="mt-2">general trainer</option>
                        <option className="mt-2">Front desk</option>
                        <option className="mt-2">graphics designer</option>
                        <option className="mt-2">Cleaning staff</option>
                        <option className="mt-2">Client Councilor</option>
                      </select>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Job type</b>
                      </p>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="exampleCheck1111"
                          name="txt_employee_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck1111"
                          style={{ fontFamily: "Comfortaa" }}
                          value="Full Time"
                        >
                          Full Time
                        </label>
                      </div>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="exampleCheck2222"
                          name="txt_employee_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck2222"
                          style={{ fontFamily: "Comfortaa" }}
                          value="Part Time"
                        >
                          Part Time
                        </label>
                      </div>
                      <div className="form-check ml-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="exampleCheck3333"
                          name="txt_employee_type_mobile"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck3333"
                          style={{ fontFamily: "Comfortaa" }}
                          value="FreeLancer"
                        >
                          FreeLancer
                        </label>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p
                            className="mb-0 mt-4"
                            style={{
                              fontFamily: "Nunito",
                              fontWeight: "bold",
                            }}
                          >
                            <b>Time slot</b>
                          </p>
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control fr mt-2"
                            placeholder="Hours"
                            id="txt_employee_hours_mobile"
                            pattern="/^-?\d+\.?\d*$/"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control fr mt-2"
                            placeholder="Minutes"
                            id="txt_employee_minutes_mobile"
                            pattern="/^-?\d+\.?\d*$/"
                          />
                        </div>
                      </div>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Expectation per month</b>
                      </p>
                      <select
                        className="form-control fr mt-2"
                        required
                        id="txt_employee_expected_salary_mobile"
                      >
                        <option className="mt-2" hidden>
                          Select Salary
                        </option>
                        <option className="mt-2">10,000 - 12,000</option>
                        <option className="mt-2">12,000 - 15,000</option>
                        <option className="mt-2">15,000 - 20,000</option>
                        <option className="mt-2">20,000 - 25,000</option>
                        <option className="mt-2">25,000 +</option>
                      </select>
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Contact number</b>
                      </p>
                      <input
                        type="number"
                        className="form-control fr mt-2"
                        placeholder="Enter Contact Number"
                        required
                        id="txt_employee_mobile_mobile"
                        pattern="/^-?\d+\.?\d*$/"
                      />
                      <p
                        className="mb-0 mt-4"
                        style={{ fontFamily: "Nunito", fontWeight: "bold" }}
                      >
                        <b>Email ID</b>
                      </p>
                      <input
                        type="email"
                        className="form-control fr mt-2"
                        placeholder="Enter Email ID"
                        required
                        id="txt_employee_email_mobile"
                      />
                      <button
                        type="button"
                        className="btn btn-success mt-4"
                        id="btn_employee_mobile"
                      >
                        Submit
                      </button>
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
          <div className="container py-5">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                current
                <span className="m-0 text-blue-color"> job placement</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
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
                  items: 3,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-6.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-3.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-16.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-7.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-13.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-1.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  width="100%"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-9.webp"
                  }
                  alt="job placement by our academy"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <OurCollobroters />
      <section className="d-block d-md-none">
        <div className="container-fluid margintop">
          <div className="container">
            <div className="tabata">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="/blogs/write-professional-resume">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog12.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">how to make your resume?</h2>
                        <p>
                          Well have you ever think of making a resume well if
                          you did here are top 5 common mistakes people do while
                          making a resume, which you should not do next time you
                          make one resume.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="/blogs/interview-preparation-guide">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog13.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">how to prepare for your interview?</h2>
                        <p>
                          Have you ever felt shaking legs or your heart beating
                          so fast that it come out of your chest or feeling
                          goose bums and cold, well there may be a time when you
                          have given your first interview.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="container">
            <div className="tabata mb-4 text-center">
              <h2 className="h2-fs">Our Collaborators</h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <OwlCarousel
              loop
              autoplay
              nav
              dots={false}
              id="owl-demo"
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
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/stallon.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Stallone Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mahaveer.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Mahavir Hospital
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/gomzi1.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Fitness With Gomzi
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/img/js.webp"}
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    JS Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/spartena.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Sportina Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/shapers.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Shapers Gym
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/beastin-gym.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Beastin Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/titan-fitness.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Titan Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/b-natural.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    B Natural Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/muscle-mind.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Muscle And Mind
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/av-fitness.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    AV Fitness
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/fgdigital-1.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    FG Digital
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/sahyog.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Sahyog clinic
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/img/w8.webp"}
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    W8 Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/green-leaf.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    green leaf hospital
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/hercules.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    hercules fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/country-side.webp"
                    }
                    className="gomzi lazy"
                    alt="Fg Group"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Countryside International School
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5 text-center">
          <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Credentials by{" "}
                <span className="m-0 text-blue-color">
                  the fitness future Of India
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("VzriO8WZVkM")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("MBTps76dKLs")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews3.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("u6VPK9uTt9g")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews4.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("uxkhaMgAeAw")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews5.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4TCopSUPn_w")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews6.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4gr009F6XBk")} aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle fs-35 text-white"
                      ></i>
                    </a>
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
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                <span className="m-0 text-blue-color">Outstanding </span>
                Response
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/6951.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/0501.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/7101.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/6771.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/1172.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="cuv">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/batch-6.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-none d-md-block">
        <div className="container-fluid margintop">
          <div className="container">
            <div className="tabata">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="blog">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/blog12.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="col-sm-9  tabata">
                      <h2 className="h3-fs">how to make your resume?</h2>
                      <p>
                        Well Have You Ever Think Of Making A Resume Well If You
                        Did Here Are Top 5 Common Mistakes People Do While
                        Making A Resume, Which You Should Not Do Next Time You
                        Make One Resume.
                      </p>
                      <p>
                        First Thing First What Is Resume: "Well It Is A
                        Representation Of Your Personal Information,
                        Qualification, Expertise And Skills"
                      </p>
                      <p>Resume Follow Simple Rules Too Like,</p>
                      <p>
                        <ul>
                          <li
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              color: "#000",
                              fontFamily: "Comfortaa",
                            }}
                          >
                            It Should Be Short.
                          </li>
                          <li
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              color: "#000",
                              fontFamily: "Comfortaa",
                            }}
                          >
                            It Should Have A Preview Of Your Personal And
                            Educational Information.
                          </li>
                        </ul>
                      </p>
                      <Link to="/blogs/write-professional-resume">
                        View More...
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blog">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/blog13.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="col-sm-9  tabata">
                      <h2 className="h3-fs">how to prepare for your interview?</h2>
                      <p>
                        Have You Ever Felt Shaking Legs Or Your Heart Beating So
                        Fast That It Come Out Of Your Chest Or Feeling Goose
                        Bums And Cold, Well There May Be A Time When You Have
                        Given Your First Interview. It Is Call Nervousness By
                        The Way Which We All Are Aware Off.
                      </p>
                      <p>
                        I Still Remember My First Interview Back In 2014. I Was
                        Very Young And Thought About Part Time Job After My
                        Collage And Went For An Interview At Fashion Design
                        Institute As They Frequently Needed Male Model At That
                        Time I Was A Fitness Model (Use My Photo With Abs) And
                        Did Many Free Lancing Project But Working Somewhere Was
                        A Different Thing.
                      </p>
                      <p>
                        I Was Passed Out From Local School In Regional Guajarati
                        Language And Couldn't Able To Speak The English Very
                        Well. (Remember This It Has A Big Relevance In This
                        Story).
                      </p>
                      <Link to="/blogs/interview-preparation-guide">
                        View More...
                      </Link>
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
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="FG Group"
                />
              </div>
              <div className="col-lg-6">
                <p className="mb-0 mt-4">Full Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="form-control fr mt-2"
                ></textarea>
                <button
                  onClick={handleApplyForInquiry}
                  className="btn btn-success mt-4"
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgDigitalFooter />
    </>
  );
}

export default FitnessTrainingAndPlacement;
