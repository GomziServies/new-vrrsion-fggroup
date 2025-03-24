import React, { useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import { Link } from "react-router-dom";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineDiplomaNutritionCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import OwlCarousel from "react-owl-carousel";
import ModalVideo from "react-modal-video";
import { Helmet } from "react-helmet";

function CourseForDietician() {
  const canonicalUrl = window.location.href;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const faqItems = [
    {
      question:
        "What is the Offline Diploma in Personal Training Course by FGIIT?",
      answer:
        "The Offline Diploma in Personal Training Course by FGIIT is a comprehensive 3-month program designed to certify individuals as personal trainers. It offers a blend of offline and live Zoom classes, recorded video lectures, e-books, and practical projects to help students develop the skills required for personal training. Graduates receive a government-approved and internationally accredited certification.",
    },
    {
      question:
        "How long does the Offline Diploma in Personal Training Course last?",
      answer:
        "The course spans 3 months and includes a mix of offline classes and live Zoom sessions, ensuring flexibility and convenience for all learners. Additionally, students have access to recorded video lectures and e-books to supplement their learning.",
    },
    {
      question: "What are the benefits of enrolling in this course at FGIIT?",
      answer:
        "Students benefit from government-approved and internationally accredited certification, expert faculties with over 5 years of industry experience, 100% placement support, mandatory internship, bilingual learning materials, and lifetime support.",
    },

    {
      question:
        "Is there an internship included in the Diploma in Personal Training Course?",
      answer:
        "Yes, a mandatory internship at top firms is a key component of the course, providing hands-on experience in real-world settings.",
    },
    {
      question: "How is the Diploma in Personal Training Course delivered?",
      answer:
        "The course is delivered through offline classroom sessions, live Zoom classes, and access to recorded video lectures. E-books and other study materials are provided for additional support.",
    },
    {
      question: "What kind of support do students receive during the course?",
      answer:
        "FGIIT provides comprehensive support, including team chat support, access to recorded sessions, and lifetime student support.",
    },
    {
      question:
        "What is the cost of the Diploma in Personal Training Course at FGIIT?",
      answer:
        "The course is priced at ₹41,990, which includes GST. This fee covers all study materials, including e-books, recorded sessions, live classes, and practical projects.",
    },
    {
      question: "Are there any exams or assessments in the course?",
      answer:
        "Yes, the course includes both MCQ-based exams and a case study-based project to assess understanding and practical application.",
    },
    {
      question: "What certification do I receive after completing the course?",
      answer:
        "Upon successful completion, students receive a government-approved and internationally accredited certification, widely recognized in the fitness industry.",
    },
    {
      question: "Does FGIIT offer job placement support?",
      answer:
        "Yes, FGIIT provides 100% placement support, including connections with top firms to assist in securing employment within the fitness industry.",
    },
    {
      question: "Is this course available in both English and Hindi?",
      answer:
        "Yes, FGIIT offers bilingual learning materials, available in both English and Hindi, making the course accessible to a broader audience.",
    },
    {
      question:
        "Can I access the course materials after completing the course?",
      answer:
        "Yes, students have lifetime access to recorded video lectures, and lifetime support is provided to assist graduates in their ongoing personal training careers.",
    },
    {
      question:
        "Who are the instructors for the Diploma in Personal Training Course?",
      answer:
        "The course is taught by industry experts with over 5 years of experience, ensuring top-tier education and practical training.",
    },
    {
      question: "What makes FGIIT's Diploma in Personal Training stand out?",
      answer:
        "FGIIT stands out with government-approved certification, international accreditation, mandatory internships, 100% placement support, bilingual materials, and lifetime student support.",
    },
    {
      question: "How can I enroll in the course?",
      answer:
        "To enroll, send a WhatsApp message to +91-8866842520 or visit the FGIIT website for more information on the application process and course schedules.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/disha.webp",
    "/assets/images/img/gauresh.webp",
    "/assets/images/img/rname.webp",
    "/assets/images/img/deepak-yadav.webp",
  ];

  const reviewses = [
    {
      name: "Disha Chaudhari",
      stars: 5,
      review:
        "The experience was very good.All the points explained very well.If there is any doubt then that too is cleared personally.I m happy that I did the course from FGIIT. ",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Gauresh Bhosale",
      stars: 5,
      review:
        "I thoroughly enjoyed the online course at FGIIT-it was incredibly beneficial and helpful. The instructor's knowledge and articulation were excellent.",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Radha Arora",
      stars: 5,
      review:
        "Being a part of FGIIT Surat was the best decision of my life. I had the best learning experience at this institute. The teachers were extremely knowledgeable and supportive through the term.",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Deepak Yadav",
      stars: 5,
      review:
        "Firstly i would like to thanks FGIIT team This course is very easy to understand, easy to learn Financially affordable I think i had not any doubt after watching a class Thanks Gautam Sir",
      image: reviewImages[3], // Use images for reviews
    },
  ];

  const options = {
    loop: true,
    margin: 20,
    // nav: true,
    dots: false,
    autoplay: true,
    // navText: [
    //   '<i class="fas fa-arrow-left"></i>',
    //   '<i class="fas fa-arrow-right"></i>',
    // ],
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
  const testimonials = [
    {
      name: "Nikita Rana",
      description:
        "Nikita shares his experience of completing the Diploma in Nutrition at FGIIT. He talks about how the course helped him better understand nutrition fundamentals, enabling him to confidently plan balanced diets for different individuals. nikita emphasizes the practical applicability of the course content in real-life scenarios and his career.",
      videoUrl: "Y6Eo5S61bCU",
      imageUrl: "/assets/images/fgiit/student-review/nikitarana.webp",
      date: "13 March 2023",
    },
    {
      name: "Shushma Agarwal",
      description:
        "Shushma describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Shushma highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "l47Ou9sboww",
      imageUrl: "/assets/images/fgiit/student-review/shushma.webp",
      date: "13 March 2023",
    },
    {
      name: "Palak Vyas",
      description:
        "In her review, Sneha shares how the Diploma in Nutrition course at FGIIT exceeded her expectations. She loved the interactive learning environment and how the practical sessions allowed her to gain hands-on experience in meal planning. She recommends the course to anyone looking to deepen their understanding of nutrition.",
      videoUrl: "QMS8mnzWY",
      imageUrl: "/assets/images/fgiit/student-review/palak.webp",
      date: "13 March 2023",
    },
    {
      name: "Patel Saraswati",
      description:
        "Saraswati video highlights the skills she gained from the Diploma in Nutrition course at FGIIT. She explains how the course helped her understand the intricacies of dietetics and the science behind nutrition, which she now applies in her personal and professional life. Aditi thanks the instructors for their continuous support.",
      videoUrl: "bZPQ0S1y3PQ",
      imageUrl: "/assets/images/fgiit/student-review/saraswati.webp",
      date: "13 March 2023",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          Become a Pro with a Certified Course for Dietician
        </title>
        <meta
          name="description"
          content="Enroll in a certified course for dietician and build your expertise in nutrition. Gain skills, get certified, and start today!"
        />
        <meta
          name="keyword"
          content="g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training"
        />
        <meta
          property="og:title"
          content="Become a Pro with a Certified Course for Dietician"
        />
        <meta
          property="og:description"
          content="Enroll in a certified course for dietician and build your expertise in nutrition. Gain skills, get certified, and start today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/course-for-dietician"
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
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row position-relative">
              <div className="col-lg-7 course-detail-main">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        className=" course-detail"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dnc-second-new.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <Link
                          to="https://www.youtube.com/watch?v=sbBI0l3noqE"
                          data-flashy-type="video"
                          className="custom clickof"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OfflineDiplomaNutritionCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {OfflineDiplomaNutritionCourseData.info[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OfflineDiplomaNutritionCourseData.info[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OfflineDiplomaNutritionCourseData.info[2]}
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {OfflineDiplomaNutritionCourseData.info[3]}
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
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
                  courseData={OfflineDiplomaNutritionCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Diploma In Nutrition Course."
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
                Info
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 1: Understanding the Human body
                        </h2>
                        <p className="text-muted">
                          Students will explore the fundamentals of human
                          anatomy and physiology, focusing on how the body's
                          systems and muscles respond to exercise.This
                          foundation enables them to design effective,
                          personalized training regimens based on scientific
                          understanding of movement and function.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Human Anatomy</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Kinesiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy Metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Introduction To Living Beings: Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Anatomy Of Our Human Body</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/sir-new-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/sir-new-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 1: Understanding the Human body
                      </h2>
                      <p className="text-muted">
                        Students will explore the fundamentals of human anatomy
                        and physiology, focusing on how the body's
                        {showMore[1] ? (
                          <>
                            systems and muscles respond to exercise.This
                            foundation enables them to design effective,
                            personalized training regimens based on scientific
                            understanding of movement and function.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Human Anatomy</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Human Physiology</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Human Kinesiology</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Energy Metabolism</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Introduction To Living Beings: Physiology
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Anatomy Of Our Human Body</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/blog/walkouts.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Basics of Nutrition and the Fitness Industry
                        </h2>
                        <p className="text-muted">
                          This module delves into the principles of nutrition
                          and weight management, emphasizing dietary planning
                          and metabolism. It highlights the synergy between diet
                          and exercise, equipping students to craft sustainable,
                          goal-oriented diet plans for clients, fostering
                          long-term health and fitness.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Carbohydrates</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Protein</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Lipids</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Water</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Minerals</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b> Overview of the fitness industry</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/walkouts.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Basics of Nutrition and the Fitness Industry
                      </h2>
                      <p className="text-muted">
                        This module delves into the principles of nutrition and
                        weight management, emphasizing dietary planning
                        {showMore[2] ? (
                          <>
                            and metabolism.It highlights the synergy between
                            diet and exercise, equipping students to craft
                            sustainable, goal - oriented diet plans for clients,
                            fostering long - term health and fitness.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Carbohydrates</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Protein</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Lipids</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Water</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Energy metabolism</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Minerals</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Overview of the fitness industry</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 3: Meal Planning and Food Groups
                        </h2>
                        <p className="text-muted">
                          Combining nutrition and fitness, this module
                          emphasizes injury prevention and management through
                          tailored meal plans and strength-training principles.
                          It prepares students to enhance performance while
                          minimizing injury risks through informed dietary and
                          fitness strategies.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Fundamentals Of Meal Planning</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Exchange List</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Methods Of Improving Nutritional Quality Of
                                  Foods
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-1.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Meal Planning and Food Groups
                      </h2>
                      <p className="text-muted">
                        Combining nutrition and fitness, this module emphasizes
                        injury prevention and management through
                        {showMore[3] ? (
                          <>
                            tailored meal plans and strength - training
                            principles.It prepares students to enhance
                            performance while minimizing injury risks through
                            informed dietary and fitness strategies.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>Meal Planning and Food Groups</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Fundamentals Of Meal Planning</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Food Groups</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Food Exchange List</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Methods Of Improving Nutritional Quality Of
                                    Foods
                                  </b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/anabolic.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Therapeutic Nutrition
                        </h2>
                        <p className="text-muted">
                          This module introduces the role of therapeutic
                          nutrition in recovery, alongside injury prevention and
                          rehabilitation techniques. Students gain expertise in
                          safe recovery protocols and exercises that reduce the
                          risk of future injuries.
                          <div className="row">
                            <ul className="col-md-12 mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Therapeutic Adaptations Of Normal Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Fluid Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Total Parenteral Nutrient</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Tube Feeding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Gastro Intestinal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hernia, Diarrhoea, Conspaon, Pepc Ulcer,
                                  Ulcerve Colis, Crohns Diseases, Dumping
                                  Syndrome, Dysphagia
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Metabolic Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Diabetes, Gout, Hypothyroidism,
                                  Hperthyroidism, Menopause, PCOS, PMS
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>CardiovaScular Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hypertension, Atherosclerosis, Myocardial
                                  infacon
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Liver Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Jaundice, Hepatitis, Diseases of gallbladder
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Feblife Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Typhoids, Tuberculosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Musculoskeletal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Osteoarthritis, Osteoporosis</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/anabolic.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Therapeutic Nutrition
                      </h2>
                      <p className="text-muted">
                        This module introduces the role of therapeutic nutrition
                        in recovery, alongside injury prevention and
                        {showMore[4] ? (
                          <>
                            rehabilitation techniques.Students gain expertise in
                            safe recovery protocols and exercises that reduce
                            the risk of future injuries.
                            <div className="row">
                              <ul className="col-md-12 mt-2 pl-3">
                                <li className="list-unstyled">
                                  <b>Therapeutic Adaptations Of Normal Diet</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Fluid Diet</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Total Parenteral Nutrient</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Tube Feeding</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Gastro Intestinal Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>
                                    Hernia, Diarrhoea, Conspaon, Pepc Ulcer,
                                    Ulcerve Colis, Crohns Diseases, Dumping
                                    Syndrome, Dysphagia
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Metabolic Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>
                                    Diabetes, Gout, Hypothyroidism,
                                    Hperthyroidism, Menopause, PCOS, PMS
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>CardiovaScular Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>
                                    Hypertension, Atherosclerosis, Myocardial
                                    infacon
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Liver Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>
                                    Jaundice, Hepatitis, Diseases of gallbladder
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Feblife Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Typhoids, Tuberculosis</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Musculoskeletal Disorders</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Osteoarthritis, Osteoporosis</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>

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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">

                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 5: Weight Management Nutrition
                        </h2>
                        <p className="text-muted">
                          This module addresses advanced nutritional strategies
                          and the implications of steroid use in fitness.
                          Students learn to evaluate risks and benefits while
                          guiding clients toward healthier, sustainable
                          performance enhancement methods.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Diet For Healthy Skin, Hair & Nails</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Nutrition For Night Shift Workers</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Food Allergies & Food Intolerance</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Weight Management & Obesity</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Weight Management Nutrition
                      </h2>
                      <p className="text-muted">
                        This module addresses advanced nutritional strategies
                        and the implications of steroid use in fitness.
                        {showMore[5] ? (
                          <>
                            Students learn to evaluate risks and benefits while
                            guiding clients toward healthier, sustainable
                            performance enhancement methods.
                            <div className="row">
                              <ul className="col-6 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Specialized Nutrition Topics</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Diet For Healthy Skin, Hair & Nails</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Nutrition For Night Shift Workers</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Food Allergies & Food Intolerance</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Weight Management & Obesity</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/nutrition-during-lifespan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Nutrition During Lifespan
                        </h2>
                        <p className="text-muted">
                          Nutrition is a critical part of health and
                          development. Better nutrition is related to improved
                          infant, child and maternal health, stronger immune
                          systems, safer pregnancy and childbirth, lower risk of
                          non-communicable diseases (such as diabetes and
                          cardiovascular disease), and longevity. Healthy
                          children learn better.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                Nutrition During Infancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Lactation
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Pregnancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Childhood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Adulthood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Older Adults
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/nutrition-during-lifespan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Nutrition During Lifespan
                      </h2>
                      <p className="text-muted">
                        Nutrition is a critical part of health and development.
                        Better nutrition is related to improved infant,
                        {showMore[6] ? (
                          <>
                            child and maternal health, stronger immune systems,
                            safer pregnancy and childbirth, lower risk of
                            non-communicable diseases (such as diabetes and
                            cardiovascular disease), and longevity. Healthy
                            children learn better.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  Nutrition During Infancy
                                </li>
                                <li className="list-unstyled text-dark">
                                  Nutrition During Lactation
                                </li>
                                <li className="list-unstyled text-dark">
                                  Nutrition During Pregnancy
                                </li>
                                <li className="list-unstyled text-dark">
                                  Nutrition During Childhood
                                </li>
                                <li className="list-unstyled text-dark">
                                  Nutrition During Adulthood
                                </li>
                                <li className="list-unstyled text-dark">
                                  Nutrition During Older Adults
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">

                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 7: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques involve strategies such as active listening, empathy, and cognitive-behavioral interventions to support clients' emotional and mental well-being. Methods like reflective listening, motivational interviewing, and narrative therapy help individuals explore their feelings, overcome challenges, and develop healthier coping mechanisms, leading to personal growth and empowerment.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Counselling Skills</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Foundations of Group Fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Group Fitness Class Design and Teaching</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/offline-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques involve strategies such as active listening, empathy, and cognitive-behavioral interventions to support clients' emotional and mental well-being.
                        {showMore[7] ? (
                          <>
                            Methods like reflective listening, motivational interviewing, and narrative therapy help individuals explore their feelings, overcome challenges, and develop healthier coping mechanisms, leading to personal growth and empowerment.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Counselling Skills</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Foundations of Group Fitness</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Group Fitness Class Design and Teaching</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Introduction to Sports Nutrition</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Sports Nutrition
                        </h2>
                        <p className="text-muted">
                          Sports nutrition focuses on optimizing an athlete's diet to enhance performance, recovery, and overall health. A balanced intake of carbohydrates, proteins, fats, and hydration supports energy, muscle repair, and endurance. Proper nutrition helps prevent injuries, boosts stamina, and ensures athletes maintain peak physical and mental performance.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to Sports Nutrition</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Macronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Micronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Supplements</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Nutrition for Specific Sports and Populations
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Periodization</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Sports Nutrition Case Studies and Practical
                                  Applications
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>

                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 8: Sports Nutrition
                      </h2>
                      <p className="text-muted">
                        Sports nutrition focuses on optimizing an athlete's diet to enhance performance, recovery, and overall health. A balanced intake of carbohydrates, proteins, fats,
                        {showMore[8] ? (
                          <>
                            and hydration supports energy, muscle repair, and endurance. Proper nutrition helps prevent injuries, boosts stamina, and ensures athletes maintain peak physical and mental performance.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Introduction to Sports Nutrition</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Macronutrients for Sports Performance</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Micronutrients for Sports Performance</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Sports Supplements</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Nutrition for Specific Sports and
                                    Populations
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Meal Planning and Periodization</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Sports Nutrition Case Studies and Practical
                                    Applications
                                  </b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">

                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 9: Practical Application & Client Management,
                          Behaviour Change
                        </h2>
                        <p className="text-muted">
                          In this hands-on module, students master behavior
                          change techniques and client management strategies. By
                          applying theoretical knowledge in practical settings,
                          they develop skills to motivate and guide clients
                          effectively.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Theory of behaviour changes</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Client responsibilities</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Creating a positive and supportive training
                                  environment
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Communication strategies for trainers and
                                  clients
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Goal setting and motivation techniques</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/powerlifting-course.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/powerlifting-course.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By
                        {showMore[9] ? (
                          <>
                            applying theoretical knowledge in practical
                            settings, they develop skills to motivate and guide
                            clients effectively.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>Theory of behavior changes</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Client responsibilities</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Creating a positive and supportive training
                                    environment
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Communication strategies for trainers and
                                    clients
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Goal setting and motivation techniques</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
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
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: How to Design Diet Plan
                        </h2>
                        <p className="text-muted">
                          Focusing on tailored nutrition, this module equips
                          students to create diet plans that align with
                          individual goals.It emphasizes injury prevention
                          through nutritional support, enabling clients to
                          maintain long - term health and performance.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>How to make diet plan of All disesases</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Weight Management Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Nutrition Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Case Studies of Diet plan</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>

                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/co3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 10: How to Design Diet Plan
                      </h2>
                      <p className="text-muted">
                        Focusing on tailored nutrition, this module equips
                        students to create diet plans that align with
                        {showMore[10] ? (
                          <>
                            individual goals.It emphasizes injury prevention
                            through nutritional support, enabling clients to
                            maintain long - term health and performance.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>How to make diet plan of All disesases</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Weight Management Diet Plan</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Sports Nutrition Diet Plan</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Case Studies of Diet plan</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(10)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[10] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Start Your Career with a Certified{" "}
                  <span className="m-0 text-blue-color">Course for Dietician</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A course for dietician or a course for nutrition is the perfect way to build a rewarding career in health and wellness. With the growing demand for nutrition experts, enrolling in a dietician course can provide you with the essential knowledge and skills to guide people toward healthier lifestyles.
                    </p>
                    <p>
                      A nutrition course covers key topics such as human anatomy, dietary planning, medical nutrition therapy, and food science. These programs are designed for those looking to work in hospitals, fitness centers, wellness clinics, or even start their own practice. For individuals who prefer a short-term program, a diploma in nutrition is an excellent choice. It offers specialized training in a shorter duration, focusing on practical knowledge and real-world applications.
                    </p>
                    <p>
                      Choosing the right dietician course depends on your career goals. If you want to work in clinical settings, an advanced course for dietician with certification is essential. Meanwhile, a nutrition course is ideal for those interested in sports nutrition, holistic health, or wellness coaching.
                    </p>
                    <p>
                      By enrolling in a certified program, you gain industry-recognized credentials, hands-on experience, and the confidence to excel in the field of dietetics and nutrition. Start your journey today!
                    </p>
                  </div>
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
                    <h2 className="ml-0 h3-fs fs-34">Why FGIIT?</h2>
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
                <p className="mt-md-4 mb-md-4 mt-0 mb-3">demo lecture</p>
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-dnc.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="ply2">
                    <Link
                      className="custom"
                      data-flashy-type="video"
                      to="https://youtu.be/j6u_P9NYp4w"
                    >
                      <i className="far fa-play-circle fs-40 text-white"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 certi text-center">
                <p className="mt-4 mb-md-4 mb-3">DNC demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                  }
                  width="90%"
                  alt="personal trainer and gym trainer course certificate"
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
      {/* <StudentTestimonial testimonials={testimonials} /> */}
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs d-md-none d-block">
                <span className="m-0 text-blue-color">Testimonials</span>
              </h2>
              <h2 className="h2-fs d-md-block d-none">
                The course in our{" "}
                <span className="m-0 text-blue-color">Student Words</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div
                  className="blog2 p-5 p-md-3 p-lg-5 d-none d-md-block"
                  style={{ borderRadius: "40px" }}
                >
                  <OwlCarousel
                    loop
                    // autoplay
                    id="owl-review"
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
                    {testimonials.map((testimonial) => {
                      return (
                        <div className="item">
                          <div className="slider-box">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <div className="review-box">
                                  <div>
                                    <img
                                      src={testimonial.imageUrl}
                                      className="img-fluid"
                                      alt={`${testimonial.name} testimonial`}
                                    />
                                    <div className="video-btn play-btn">
                                      <a
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                              </div>
                              <div className="col-lg-8 mb-5">
                                <div className="review-box-text ml-4">
                                  <span>{testimonial.date}</span>
                                  <h2 className="h2-fs">{testimonial.name}</h2>
                                  <p>{testimonial.description}</p>
                                  <div className="review-box-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
                <div className="blog2 d-block d-md-none">
                  <OwlCarousel
                    loop
                    autoplay
                    dots={false}
                    id="owl-review"
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
                    {testimonials.map((testimonial) => {
                      return (
                        <div className="item">
                          <div className="slider-box">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <div className="review-box">
                                  <div>
                                    <img
                                      src={testimonial.imageUrl}
                                      className="img-fluid"
                                      alt={`${testimonial.name} testimonial`}
                                    />
                                    <div className="video-btn play-btn">
                                      <a
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                              </div>
                              <div className="col-lg-8">
                                <div className="review-box-text ml-4">
                                  <span>{testimonial.date}</span>
                                  <h2 className="h2-fs">{testimonial.name}</h2>
                                  <p>{testimonial.description}</p>
                                  <div className="review-box-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for video */}
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={currentVideoUrl}
          onClose={() => setIsOpen(false)}
        /> */}
        <div className="studentsreview mb-2">
          <div className="google-reviews-carousel">
            <div className="demoo text-center d-md-block d-none">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Testimonial</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 d-md-block d-none"></div>
            <OwlCarousel className="owl-theme" {...options}>
              {reviewses.map((review, index) => (
                <div key={index} className="item">
                  <div className="review-card mt-0">
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

      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <CourseReviewSection course_id="600f7a0ab6868e387407a8c9" />
      <FgiitFooter />
    </>
  );
}

export default CourseForDietician;
