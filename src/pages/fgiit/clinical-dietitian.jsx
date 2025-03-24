import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineAdvanceClinicalNutritionCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ClinicalDietitian() {
  const canonicalUrl = window.location.href;
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const faqItems = [
    {
      question: "Who can benefit from this course?",
      answer:
        "This course is ideal for nutritionists, fitness professionals, health enthusiasts, or anyone looking to deepen their understanding of clinical nutrition and how it impacts long-term health.",
    },
    {
      question: "Will this course help in weight management?",
      answer:
        "Yes, this course covers weight management strategies, focusing on nutrition, metabolism, and sustainable practices for maintaining a healthy weight.",
    },
    {
      question: "Does this course cover specific dietary plans?",
      answer:
        "Yes, you'll learn how to create personalized health plans, including dietary recommendations, based on individual needs like managing lifestyle diseases, weight, or specific health concerns.",
    },
    {
      question: "Is there a practical component to the workshop?",
      answer:
        "Yes, the course includes a 1-month internship where you'll apply what you've learned by working on real-world health plans, ensuring you gain hands-on experience.",
    },
    {
      question: "Will I learn how to manage lifestyle diseases?",
      answer:
        "Absolutely. The course covers diseases like diabetes, high cholesterol, and hypertension, along with nutritional strategies to manage and prevent these conditions.",
    },
    {
      question: "Do I need prior knowledge of nutrition to take this workshop?",
      answer:
        "While prior knowledge is helpful, this course is designed for all levels, including beginners. It starts with the fundamentals and progresses to advanced topics in clinical nutrition.",
    },
    {
      question: "Will I get certified after completing the workshop?",
      answer:
        "Yes, participants who complete the workshop will receive a certification from FGIIT, which can enhance your professional credentials as a nutritionist or health consultant.",
    },
    {
      question: "Can I access the material if I miss a live session?",
      answer:
        "Yes, all live sessions are recorded, and you will have access to the recordings for review during and after the course.",
    },
    {
      question:
        "Does the course cover nutrition for specific health issues like gout or autoimmune diseases?",
      answer:
        "Yes, the course delves into specific conditions such as high uric acid, gout, and autoimmune diseases, and provides dietary interventions to manage these health issues effectively.",
    },
    {
      question: "How will I be supported during the course?",
      answer:
        "You'll have live mentorship throughout the course and access to team chat support for any questions or guidance needed during your learning journey.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/aas2.webp",
    "/assets/images/img/sname.webp",
    "/assets/images/img/aname.webp",
    "/assets/images/img/yname.webp",
  ];

  const reviewses = [
    {
      name: "Neha Joshi",
      stars: 5,
      review:
        "The Clinical Diets course at FGIIT was enlightening! I learned how to create tailored diet plans for various health conditions, and the practical sessions were incredibly helpful.",
      image: reviewImages[0],
    },
    {
      name: "Suresh Kumar",
      stars: 5,
      review:
        "This course offered valuable insights into the relationship between diet and health. The instructors were knowledgeable, and the hands-on approach made the learning experience engaging.",
      image: reviewImages[1],
    },
    {
      name: "Aisha Malik",
      stars: 5,
      review:
        "Highly recommend this course! The comprehensive curriculum helped me understand clinical nutrition better, and I now feel confident in advising clients on healthy diets.",
      image: reviewImages[2],
    },
    {
      name: "Yasim Qureshi",
      stars: 5,
      review:
        "FGIIT's Clinical Diets course transformed my perspective on nutrition. The mix of theory and practical application made it a valuable investment for my career.",
      image: reviewImages[3],
    },
  ];
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>Course will help you to become better clinical dietitian.</title>
        <meta name="description" content="wellness consultant course is a best clinical dietitian course which help you to understand different diseases." />
        <meta name="keyword" content="g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="Course will help you to become better clinical dietitian." />
        <meta property="og:description" content="wellness consultant course is a best clinical dietitian course which help you to understand different diseases." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/clinical-dietitian" />
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
            fbq('init', '485635632433430');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=485635632433430&ev=PageView&noscript=1" />'
          }
        </noscript>
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
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 px-md-4">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <OwlCarousel
                      loop
                      autoplay
                      id="owl-demo-physio"
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
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-12.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-11.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-10.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-9.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-8.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-7.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/batch-6.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/1172.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/6771.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/7101.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/0501.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/6951.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                    </OwlCarousel>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OfflineAdvanceClinicalNutritionCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[2]
                                }
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 px-md-0">
                <OfflineCourseForm
                  courseData={OfflineAdvanceClinicalNutritionCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Advance Clinical Nutrition course."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5 new-content-add">
        <div className="container">
          <div className="">
            <div className="covid mb-4 mt-3 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                Details
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content d-md-block d-none order-0">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Human Physiology and Function of Cells
                      </h2>
                      <p className="text-muted">
                        Understand the fundamental workings of the human body at
                        the cellular level. This module covers cell functions,
                        how cells process nutrients, and the role of different
                        systems (nervous, cardiovascular, etc.) in maintaining
                        health.
                      </p>
                    </div>
                    <div className="blockquote-content d-md-none d-block order-2">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Human Physiology and Function of Cells
                      </h2>
                      <p className="text-muted">
                        Understand the fundamental workings of the human body at
                        the cellular level. This module covers cell functions,
                        {showMore[0] ? (
                          ` how cells process nutrients, and the role of different
                        systems (nervous, cardiovascular, etc.) in maintaining
                        health.`
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                      <span
                        onClick={() => toggleReadMore(0)}
                        id="myBtnrb"
                        className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                      >
                        {showMore[0] ? "Read less" : "Read more"}
                      </span>
                    </div>
                    <div className="blockquote-img-container order-1">
                      <img
                        src="/assets/images/course-img/offline-seven.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Definition of Health
                    </h2>
                    <p className="text-muted">
                      Explore the comprehensive definition of health beyond the
                      absence of disease. Learn about the physical, mental, and
                      social aspects of well-being and how to achieve balance
                      for optimal health.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Definition of Health
                    </h2>
                    <p className="text-muted">
                      Explore the comprehensive definition of health beyond the
                      absence of disease. Learn about the physical, mental, and
                      {showMore[1] ? (
                        `  social aspects of well-being and how to achieve balance
                      for optimal health.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      What Are Lifestyle Diseases?
                    </h2>
                    <p className="text-muted">
                      Identify common lifestyle diseases such as diabetes,
                      obesity, cardiovascular issues, and how poor lifestyle
                      choices contribute to these conditions. Learn prevention
                      strategies and interventions through nutrition and
                      lifestyle modifications.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      What Are Lifestyle Diseases?
                    </h2>
                    <p className="text-muted">
                      Identify common lifestyle diseases such as diabetes,
                      obesity, cardiovascular issues, and how poor lifestyle
                      {showMore[2] ? (
                        ` choices contribute to these conditions. Learn prevention
                      strategies and interventions through nutrition and
                      lifestyle modifications.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Food Macro and Micro Elements
                    </h2>
                    <p className="text-muted">
                      Gain a deep understanding of macronutrients (proteins,
                      fats, carbohydrates) and micronutrients (vitamins,
                      minerals). Learn their roles in supporting the body's
                      overall functioning, growth, and repair.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Food Macro and Micro Elements
                    </h2>
                    <p className="text-muted">
                      Gain a deep understanding of macronutrients (proteins,
                      fats, carbohydrates) and micronutrients (vitamins,
                      {showMore[3] ? (
                        `  minerals). Learn their roles in supporting the body's
                      overall functioning, growth, and repair.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Food Digestion System
                    </h2>
                    <p className="text-muted">
                      Discover the intricacies of the digestive system, from
                      ingestion to nutrient absorption. This module explains how
                      food is broken down and utilized by the body and the role
                      of gut health in overall wellness.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Food Digestion System
                    </h2>
                    <p className="text-muted">
                      Discover the intricacies of the digestive system, from
                      ingestion to nutrient absorption. This module explains how
                      {showMore[4] ? (
                        ` food is broken down and utilized by the body and the role
                      of gut health in overall wellness.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Weight Management
                    </h2>
                    <p className="text-muted">
                      Learn effective strategies for weight management,
                      including calorie balancing, the role of metabolism, and
                      sustainable diet plans that promote fat loss without
                      sacrificing health.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Weight Management
                    </h2>
                    <p className="text-muted">
                      Learn effective strategies for weight management,
                      including calorie balancing, the role of metabolism, and
                      {showMore[5] ? (
                        ` sustainable diet plans that promote fat loss without
                      sacrificing health.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(5)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[5] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Blood Sugar Contro
                    </h2>
                    <p className="text-muted">
                      Understand how blood sugar levels impact overall health
                      and how to manage conditions like insulin resistance and
                      diabetes. Learn about dietary interventions to maintain
                      optimal blood sugar balance.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Blood Sugar Contro
                    </h2>
                    <p className="text-muted">
                      Understand how blood sugar levels impact overall health
                      and how to manage conditions like insulin resistance and
                      {showMore[6] ? (
                        `diabetes. Learn about dietary interventions to maintain
                      optimal blood sugar balance.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(6)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[6] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Important Hormones of the Body
                    </h2>
                    <p className="text-muted">
                      Delve into the world of hormones and how they regulate
                      essential body functions such as metabolism, stress
                      response, reproduction, and mood. Learn how nutrition can
                      influence hormonal balance.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Important Hormones of the Body
                    </h2>
                    <p className="text-muted">
                      Delve into the world of hormones and how they regulate
                      essential body functions such as metabolism, stress
                      {showMore[7] ? (
                        ` response, reproduction, and mood. Learn how nutrition can
                      influence hormonal balance.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(7)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[7] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>

                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Worst Food Elements
                    </h2>
                    <p className="text-muted">
                      Identify harmful food elements such as trans fats,
                      processed sugars, and additives that can negatively impact
                      health. Learn how to reduce or eliminate these from your
                      diet to prevent disease and promote wellness.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Worst Food Elements
                    </h2>
                    <p className="text-muted">
                      Identify harmful food elements such as trans fats,
                      processed sugars, and additives that can negatively impact
                      {showMore[8] ? (
                        ` health. Learn how to reduce or eliminate these from your
                      diet to prevent disease and promote wellness.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(8)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[8] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Essential Food Elements
                    </h2>
                    <p className="text-muted">
                      Explore the nutrients essential for health, including
                      vitamins, minerals, omega-3 fatty acids, and antioxidants.
                      Learn how to incorporate these elements into a balanced
                      diet to support energy, immunity, and longevity.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Essential Food Elements
                    </h2>
                    <p className="text-muted">
                      Explore the nutrients essential for health, including
                      vitamins, minerals, omega-3 fatty acids, and antioxidants.
                      {showMore[9] ? (
                        `  Learn how to incorporate these elements into a balanced
                      diet to support energy, immunity, and longevity.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(9)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[9] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Important Hormones of the Body
                    </h2>
                    <p className="text-muted">
                      Delve into the world of hormones and how they regulate
                      essential body functions such as metabolism, stress
                      response, reproduction, and mood. Learn how nutrition can
                      influence hormonal balance.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Important Hormones of the Body
                    </h2>
                    <p className="text-muted">
                      Delve into the world of hormones and how they regulate
                      essential body functions such as metabolism, stress
                      {showMore[10] ? (
                        ` response, reproduction, and mood. Learn how nutrition can
                      influence hormonal balance.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(10)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[10] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Bone Health
                    </h2>
                    <p className="text-muted">
                      Understand the importance of nutrition in maintaining
                      strong, healthy bones. Learn about calcium, vitamin D, and
                      other key nutrients that support bone density and prevent
                      conditions like osteoporosis.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Bone Health
                    </h2>
                    <p className="text-muted">
                      Understand the importance of nutrition in maintaining
                      strong, healthy bones. Learn about calcium, vitamin D, and
                      {showMore[11] ? (
                        ` other key nutrients that support bone density and prevent
                      conditions like osteoporosis.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(11)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[11] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Stress Control
                    </h2>
                    <p className="text-muted">
                      Explore the relationship between stress and health, and
                      learn nutrition-based strategies to manage stress
                      effectively. This module also covers lifestyle changes
                      that help reduce stress and its impact on the body.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Stress Control
                    </h2>
                    <p className="text-muted">
                      Explore the relationship between stress and health, and
                      learn nutrition-based strategies to manage stress
                      {showMore[12] ? (
                        ` effectively. This module also covers lifestyle changes
                      that help reduce stress and its impact on the body.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(12)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[12] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Important Blood Tests for Ensuring Sound Health
                    </h2>
                    <p className="text-muted">
                      Learn about key blood tests that can provide insights into
                      your overall health, including cholesterol levels, blood
                      sugar, liver function, and inflammation markers.
                      Understanding these tests helps in creating effective
                      health plans.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Important Blood Tests for Ensuring Sound Health
                    </h2>
                    <p className="text-muted">
                      Learn about key blood tests that can provide insights into
                      your overall health, including cholesterol levels, blood
                      {showMore[13] ? (
                        ` sugar, liver function, and inflammation markers.
                      Understanding these tests helps in creating effective
                      health plans.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(13)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[13] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      High Uric Acid and Gout
                    </h2>
                    <p className="text-muted">
                      Understand the causes and symptoms of high uric acid and
                      gout. Learn dietary interventions to manage and prevent
                      these painful conditions, focusing on reducing uric acid
                      levels naturally.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      High Uric Acid and Gout
                    </h2>
                    <p className="text-muted">
                      Understand the causes and symptoms of high uric acid and
                      gout. Learn dietary interventions to manage and prevent
                      {showMore[14] ? (
                        ` these painful conditions, focusing on reducing uric acid
                      levels naturally.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(14)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[14] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Autoimmune Diseases
                    </h2>
                    <p className="text-muted">
                      Delve into autoimmune diseases such as rheumatoid
                      arthritis, lupus, and celiac disease. Learn about
                      nutritional strategies that can help manage symptoms and
                      improve quality of life for individuals with these
                      conditions.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Autoimmune Diseases
                    </h2>
                    <p className="text-muted">
                      Delve into autoimmune diseases such as rheumatoid
                      arthritis, lupus, and celiac disease. Learn about
                      {showMore[15] ? (
                        `  nutritional strategies that can help manage symptoms and
                      improve quality of life for individuals with these
                      conditions.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(15)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[15] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Perfect Plan to Achieve Best Health
                    </h2>
                    <p className="text-muted">
                      Create a comprehensive, personalized health plan. This
                      module focuses on combining diet, exercise, and lifestyle
                      strategies to help individuals reach optimal health and
                      wellness.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Perfect Plan to Achieve Best Health
                    </h2>
                    <p className="text-muted">
                      Create a comprehensive, personalized health plan. This
                      module focuses on combining diet, exercise, and lifestyle
                      {showMore[16] ? (
                        ` strategies to help individuals reach optimal health and
                      wellness.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(16)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[16] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Exercise Plan
                    </h2>
                    <p className="text-muted">
                      Learn how to develop exercise plans that complement
                      nutritional strategies. This module covers the basics of
                      fitness, including strength, flexibility, and
                      cardiovascular health, and how these fit into a healthy
                      lifestyle.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Exercise Plan
                    </h2>
                    <p className="text-muted">
                      Learn how to develop exercise plans that complement
                      nutritional strategies. This module covers the basics of
                      {showMore[17] ? (
                        `  fitness, including strength, flexibility, and
                      cardiovascular health, and how these fit into a healthy
                      lifestyle.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(17)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[17] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      How to Protect Against Heart Diseases, Control Blood
                      Pressure, and High Cholesterol
                    </h2>
                    <p className="text-muted">
                      Gain essential knowledge on how to protect heart health
                      through nutrition. This includes managing cholesterol
                      levels, blood pressure, and preventing heart disease
                      through dietary changes and lifestyle interventions.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      How to Protect Against Heart Diseases, Control Blood
                      Pressure, and High Cholesterol
                    </h2>
                    <p className="text-muted">
                      Gain essential knowledge on how to protect heart health
                      through nutrition. This includes managing cholesterol
                      {showMore[18] ? (
                        ` levels, blood pressure, and preventing heart disease
                      through dietary changes and lifestyle interventions.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(18)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[18] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold mt-3">
                      Role of Health and Wellness Consultant & How to Prepare
                      Health Plans
                    </h2>
                    <p className="text-muted">
                      Learn the responsibilities of a health and wellness
                      consultant. Understand how to assess clients' health
                      needs, create individualized health plans, and provide
                      guidance on achieving sustainable wellness goals.
                    </p>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <h2 className="h5-fs text-primary font-weight-bold">
                      Role of Health and Wellness Consultant & How to Prepare
                      Health Plans
                    </h2>
                    <p className="text-muted">
                      Learn the responsibilities of a health and wellness
                      consultant. Understand how to assess clients' health
                      {showMore[19] ? (
                        ` needs, create individualized health plans, and provide
                      guidance on achieving sustainable wellness goals.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(19)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[19] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop p-0">
          {/* <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                include
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/seminar.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Study At Our Academy</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/open-book.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">E-Book & Recorded session</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/group-chat.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Team Chat Support</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-test.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">MCQs Based Exam</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/score.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-6 mt-3 position-relative">
                <div className="tabata blog2 blog2-height py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/certificate.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Certification</h2>
                </div>
              </div>
            </div>
          </div> */}
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include-offline.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include-offline-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Our Institute </span>
                Accreditation
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row mt-4 align-items-center">
              <div className="col-lg-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="ml-0 h3-fs fs-34">
                      Why FGIIT?
                    </h2>
                  </div>
                  <div>
                    <ul className="p-0 new-li">
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
              <div className="col-lg-6">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-all-logo.webp"
                    }
                    className="img-fluid lazy"
                    alt="FG Group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1">
                  <img
                    alt="Fg Group"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-health-wellness.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="ply2">
                    <a
                      aria-label="Fg Group"
                      className="custom"
                      onClick={() => openVideoModal("9ggHN60bYKo")}
                    >
                      <i
                        className="far fa-play-circle text-white  fs-40"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 certi text-center">
                <p className="my-4">Health & Wellness demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-6.webp"
                  }
                  width="90%"
                  alt="Health & Wellness Masterclass course certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
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
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="studentsreviewdpt mt-4 mb-5">
        <div className="google-reviews-carousel">
          <div className="demoo text-center mt-5">
            <h2 className="h2-fs">
              <span className="m-0 text-blue-color">Testimonial</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <OwlCarousel className="owl-theme" {...options}>
            {reviewses.map((review, index) => (
              <div key={index} className="item">
                <div className="review-card">
                  <img
                    className="review-image"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="review-content">
                    <h2 className="h3-fs">{review.name}</h2>
                    <div className="stars">
                      {"★".repeat(review.stars)}
                      {"☆".repeat(5 - review.stars)}
                    </div>
                    <p className="review-text">{review.review}</p>
                    <div className="google-icon">
                      <i className="fab fa-google"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Frequently
              <span className="m-0 text-blue-color"> Asked Questions</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item">
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i className="fas fa-chevron-right active"></i>
                  </div>
                </div>
                <div className="faq-answer active" style={{ maxHeight: "none" }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseReviewSection course_id="6297d5e833971335bde5e23e" />

      <FgiitFooter />
    </>
  );
}

export default ClinicalDietitian;
