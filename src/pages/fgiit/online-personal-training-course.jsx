import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import MeetOurInstructure from "../../components/fgiit/meetInstructure";
import { OnlineDiplomaPersonalTrainingCourseData } from "../../components/online-course/OnlineCourseDataLoader";
import ModalVideo from "react-modal-video";
import StudentTestimonial from "../../components/fgiit/studentsvideoreview";
import OnlineCourseForm from "../../components/online-course/onlineCourseForm";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function OnlinePersonalTrainingCourse() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const reviewImages = [
    "/assets/images/fwg/sanjeev.webp",
    "/assets/images/fwg/shailesh.webp",
    "/assets/images/fwg/pankaj.webp",
    "/assets/images/fwg/ramiz.webp",
  ];

  const reviewses = [
    {
      name: "Sanjeev Rawat",
      stars: 5,
      review:
        "I found the FGIIT institute (diploma in personal trainer certificate) very helpful and an excellent start to my fitness career. ",
      fullReview:
        "I found the FGIIT institute (diploma in personal trainer certificate) very helpful and an excellent start to my fitness career. Thanks to the team! Overall, I can say that this institute is one of the best and one can surely rely on.",
      image: reviewImages[0],
    },
    {
      name: "Shailesh Athawale",
      stars: 5,
      review:
        "Best place to learn. The video lectures were really helpful, and Gautam Sir explained everything clearly. ",
      fullReview:
        "Best place to learn. The video lectures were really helpful. The way Gautam Sir explained each topic was really great. It was so easy to understand. Overall, I can say that this institute is one of the best and one can surely rely on.",
      image: reviewImages[1],
    },
    {
      name: "Pankaj Dey",
      stars: 5,
      review:
        "FGIIT's Personal Training course helped me switch careers. The hands-on training and exercise physiology instruction were... ",
      fullReview:
        "amazing. Pankaj talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      image: reviewImages[2],
    },
    {
      name: "Ramish Parvez",
      stars: 5,
      review:
        "FGIIT is a great institute. The trainers explained everything clearly and gave valuable knowledge for a fitness career. ",
      fullReview:
        "FGIIT is a great institute. The trainers and lecturers taught us in a very easy language and gave us knowledgeable information, which is helpful in the fitness trainer field. All team members of FGIIT are good-natured.",
      image: reviewImages[3],
    },
  ];

  const [showMoreList, setShowMoreList] = useState(
    new Array(reviewses.length).fill(false)
  );

  const toggleReadMore1 = (index) => {
    setShowMoreList((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formData.modalRefname;
      const phoneNumber = formData.modalRefnumber;
      const courses = formData.modalSelectedCourse;
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
      setFormData({
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

  const openForm = () => {
    setShowModal(true);
  };

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
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };

  const faqItems = [
    {
      question: "What is the  Diploma in Personal Training Course by FGIIT?",
      answer:
        "The Diploma in Personal Training Course by FGIIT is a comprehensive 3-month program designed to certify individuals as personal trainers. It includes offline and live Zoom classes, recorded video lectures, e-books, and practical projects to equip students with the necessary skills. Graduates receive a government-approved and internationally accredited certification.",
    },
    {
      question:
        "What are the benefits of enrolling in this course at FGIIT? Students benefit from:",
      answer:
        "Government-approved and internationally accredited certification Expert faculties with over 5 years of industry experience 100% placement support and a mandatory internship at top firms Bilingual learning materials (English and Hindi) Lifetime support, including access to demo lectures and chat support",
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
        "Yes, a mandatory internship at top firms is a key component, giving students hands-on experience in real-world settings to prepare them for successful careers.",
    },
    {
      question: "How is the course delivered?",
      answer:
        "The course combines offline classroom sessions, live Zoom classes, and recorded video lectures. E-books and other study materials are provided for additional support.",
    },
    {
      question: "What kind of support do students receive during the course?",
      answer:
        "FGIIT offers team chat support, access to recorded sessions, and lifetime student support, ensuring learners receive guidance even after completing the course.",
    },
    {
      question: "Are there any exams or assessments in the course?",
      answer:
        "Yes, the course includes MCQ-based exams and a case study-based project to assess understanding and practical application of personal training concepts.",
    },
    {
      question: "What certification do I receive after completing the course?",
      answer:
        "Graduates receive a government-approved and internationally accredited certification, recognized across the fitness industry.",
    },
    {
      question: "Does FGIIT offer job placement support?",
      answer:
        "Yes, FGIIT provides 100% placement support, assisting students in securing employment with top firms in the fitness industry.",
    },
    {
      question: "Is this course available in both English and Hindi?",
      answer:
        "Yes, FGIIT offers bilingual learning materials in both English and Hindi to ensure accessibility for a broader audience.",
    },
    {
      question:
        "Can I access the course materials after completing the course?",
      answer:
        "Yes, students have lifetime access to recorded video lectures and lifetime support for their ongoing personal training careers.",
    },
    {
      question: "How is FGIIT's course different from other academies?",
      answer:
        "FGIIT's course includes unique topics such as group instructor training, anabolics and androgenic steroids, powerlifting, and injury rehabilitation. This makes FGIIT the most knowledgeable and value-for-money course in the industry.",
    },
    {
      question: "Do I have to pay the full fees at once?",
      answer:
        "No, while you can pay in full, FGIIT also offers scholarships to deserving students and EMI options for fee payments.",
    },
    {
      question: "How can I enroll in the course?",
      answer:
        "To enroll, simply send a WhatsApp message to the provided contact number (+91-8866842520) or visit the FGIIT website for more information on the application process.",
    },
  ];

  // const reviewses = [
  //   {
  //     name: "Sanjeev Rawat",
  //     stars: 5,
  //     review:
  //       "I found the FGIIT institute (diploma in personal trainer certificate) very helpful and an excellent start to my fitness career.",
  //     fullReview:
  //       "Thanks to the team! Overall, I can say that this institute is one of the best and one can surely rely on. See less",
  //     image: reviewImages[0],
  //   },
  //   {
  //     name: "Shailesh Athawale",
  //     stars: 5,
  //     review:
  //       "Best place to learn. The video lectures were really helpful, and Gautam Sir explained everything clearly. See more",
  //     fullReview:
  //       "Best place to learn. The video lectures were really helpful. The way Gautam Sir explained each topic was really great. It was so easy to understand. Overall, I can say that this institute is one of the best and one can surely rely on. See less",
  //     image: reviewImages[1],
  //   },
  //   {
  //     name: "Pankaj Dey",
  //     stars: 5,
  //     review:
  //       "FGIIT's Personal Training course helped me switch careers. The hands-on training and exercise physiology instruction were amazing. See more",
  //     fullReview:
  //       "Pankaj talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals. See less",
  //     image: reviewImages[2],
  //   },
  //   {
  //     name: "Ramish Parvez",
  //     stars: 5,
  //     review:
  //       "FGIIT is a great institute. The trainers explained everything clearly and gave valuable knowledge for a fitness career. See more",
  //     fullReview:
  //       "FGIIT is a great institute. The trainers and lecturers taught us in a very easy language and gave us knowledgeable information, which is helpful in the fitness trainer field. All team members of FGIIT are good-natured. See less",
  //     image: reviewImages[3],
  //   },
  // ];

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

  const testimonials = [
    {
      name: "Divya Chauhan",
      description:
        "Divya review describes her journey in the FGIIT Diploma in Personal Training course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
      videoUrl: "OAvT2XECZq8",
      imageUrl: "/assets/images/fgiit/student-review/divya-chauhan.webp",
      date: "13 March 2023",
    },
    {
      name: "Bhargavraj Parmar",
      description:
        "Bhargavraj describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Bhargavraj highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "a17jKkAjQB4",
      imageUrl: "/assets/images/fgiit/student-review/bhargvaraj.webp",
      date: "13 March 2023",
    },
    {
      name: "Kaushik Parmar",
      description:
        "Kaushik talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      videoUrl: "IIG46Av6HQc",
      imageUrl: "/assets/images/fgiit/student-review/kp-dpt.webp",
      date: "13 March 2023",
    },
    {
      name: "Mohsina",
      description:
        "Mohsina shares her positive experience with FGIIT's course, mentioning how it covered everything from beginner fitness levels to advanced strength training techniques. She enjoyed the balance between classroom learning and practical application, which helped her understand client needs better.",
      videoUrl: "vbQgsE_1Fcc",
      imageUrl: "/assets/images/fgiit/student-review/mohsina.webp",
      date: "13 March 2023",
    },
    {
      name: "Satish Nishad",
      description:
        "In Satish review, he highlights how the Diploma in Personal Training at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "13 March 2023",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Best Online Personal Training Course</title>
        <meta
          name="description"
          content="Get certified with the best online personal training course. Learn from experts, build skills, and advance your fitness career!"
        />
        <meta
          name="keyword"
          content="Gym trainer course will teach you how to present the exercise properly in scientific manner also it has detail information on human anatomy, Human physiology, Kinesiology, principles of exercise, component of fitness, exercise planning, supplements, performance enhancement drugs and many more, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training"
        />
        <meta
          property="og:title"
          content="Best Online Personal Training Course"
        />
        <meta
          property="og:description"
          content="Get certified with the best online personal training course. Learn from experts, build skills, and advance your fitness career!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/online-personal-training-course"
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
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=608251344391774&ev=PageView&noscript=1" />'
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
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dpt-new.jpg"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("7LEFrtgo09M")}
                          className="custom clickof"
                          aria-label="Fg Group"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OnlineDiplomaPersonalTrainingCourseData?.info ? (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlineDiplomaPersonalTrainingCourseData
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
              <div className="col-lg-5">
                <OnlineCourseForm
                  courseData={OnlineDiplomaPersonalTrainingCourseData}
                  openForm={openForm}
                  whatsappMessage="Hello, I wanted to know more about the Online Diploma In Personal Training Course."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-2 new-content-add">
        <div className="container">
          <div className="border-0">
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
                          Module 3: Strength Training and Fitness Components
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
                                <b>Strength Training and Fitness Components</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Strength training exercises for</b>
                                <ul>
                                  <li className="list-unstyled list-style-none">
                                    <b>Legs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Back</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Chest</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Biceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Triceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Abs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Shoulders</b>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/strength.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/strength.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Strength Training and Fitness Components
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
                                  <b>
                                    Strength Training and Fitness Components
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Strength training exercises for</b>
                                  <ul>
                                    <li className="list-unstyled list-style-none">
                                      <b>Legs</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Back</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Chest</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Biceps</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Triceps</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Abs</b>
                                    </li>
                                    <li className="list-unstyled list-style-none">
                                      <b>Shoulders</b>
                                    </li>
                                  </ul>
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
                          src="/assets/images/course-img/nutrition.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Exercise Science Theory & Principles
                        </h2>
                        <p className="text-muted">
                          Focusing on ethical and physiological aspects, this
                          module examines the impact of anabolic androgenic
                          steroids and alternative training practices. Students
                          learn to guide clients responsibly while tailoring
                          programs across different life stages.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Exercise Science and Programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Types of grips</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Scheduling of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Principles of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Periodization and programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Creating a workout routine</b>
                              </li>
                              <li className="list-unstyled mt-2 text-dark">
                                <b>Components of fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports specific training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Theory of planning</b>
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
                        src="/assets/images/course-img/nutrition.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Exercise Science Theory & Principles
                      </h2>
                      <p className="text-muted">
                        Focusing on ethical and physiological aspects, this
                        module examines the impact of anabolic androgenic
                        {showMore[4] ? (
                          <>
                            steroids and alternative training practices.
                            Students learn to guide clients responsibly while
                            tailoring programs across different life stages.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Exercise Science and Programming</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Types of grips</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Scheduling of exercises</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Principles of exercises</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Periodization and programming</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Creating a workout routine</b>
                                </li>
                                <li className="list-unstyled mt-2 text-dark">
                                  <b>Components of fitness</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Sports specific training</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Theory of planning</b>
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
                          Module 5: Injury Rehabilitation and Prevention
                        </h2>
                        <p className="text-muted">
                          This module introduces the role of therapeutic
                          nutrition in recovery, alongside injury prevention and
                          rehabilitation techniques. Students gain expertise in
                          safe recovery protocols and exercises that reduce the
                          risk of future injuries.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Introduction to Injury Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Assessment and Diagnosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cupping Therapy</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Principles of Exercise Prescription</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Therapeutic Modalities</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Manual Therapy Techniques</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  Pain Management in Injury Specific
                                  Rehabilitation
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Special Populations in Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  CPR, Dry Needling, IASTM, Rigid Taping,
                                  Mobility, Electro Therapy, Exercise Therapy
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/new-injury.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/new-injury.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Injury Rehabilitation and Prevention
                      </h2>
                      <p className="text-muted">
                        This module introduces the role of therapeutic nutrition
                        in recovery, alongside injury prevention and
                        {showMore[5] ? (
                          <>
                            rehabilitation techniques.Students gain expertise in
                            safe recovery protocols and exercises that reduce
                            the risk of future injuries.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled">
                                  <b>Introduction to Injury Rehabilitation</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Assessment and Diagnosis</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Cupping Therapy</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Principles of Exercise Prescription</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Therapeutic Modalities</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Manual Therapy Techniques</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>
                                    Pain Management in Injury Specific
                                    Rehabilitation
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Special Populations in Rehabilitation</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>
                                    CPR, Dry Needling, IASTM, Rigid Taping,
                                    Mobility, Electro Therapy, Exercise Therapy
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          This module addresses advanced nutritional strategies
                          and the implications of steroid use in fitness.
                          Students learn to evaluate risks and benefits while
                          guiding clients toward healthier, sustainable
                          performance enhancement methods.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>
                                  Anabolics, Androgenic, Peptides, SARMs
                                  Compounds
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Peak weak- Cutting/Bulking</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Managing Gyno</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Pct (Post Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Blood test</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Diuretic</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Bikini</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How to study reports</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How physiology works</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cycle Designing</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Bodybuilding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Men physique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Women cycle</b>
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
                        src="/assets/images/course-img/anabolic-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        This module addresses advanced nutritional strategies
                        and the implications of steroid use in fitness.
                        {showMore[6] ? (
                          <>
                            Students learn to evaluate risks and benefits while
                            guiding clients toward healthier, sustainable
                            performance enhancement methods.
                            <div className="row">
                              <ul className="col-6 mt-2 p-3">
                                <li className="list-unstyled">
                                  <b>
                                    Anabolics, Androgenic, Peptides, SARMs
                                    Compounds
                                  </b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Peak weak- Cutting/Bulking</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Managing Gyno</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Pct (Post Cycle Therapy)</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Blood test</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Diuretic</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Bikini</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>How to study reports</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>How physiology works</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Cycle Designing</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Bodybuilding</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Men physique</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Powerlifting</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Women cycle</b>
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
                          Module 7: Powerlifting Masterclass
                        </h2>
                        <p className="text-muted">
                          Covering the essentials of disease management and
                          powerlifting, this module focuses on therapeutic diets
                          and techniques for key strength-building exercises.
                          Students are trained to support clients in achieving
                          both wellness and performance goals.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Biomechanics and Technique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Strength Training Principles</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Programming and Training Plans</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Equipment and Gear</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Rules and Regulations</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Injury Prevention and Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Coaching and Communication</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Practical Training</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Legal Aspects of Coaching</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting Plan</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7 Powerlifting Masterclass
                      </h2>
                      <p className="text-muted">
                        Covering the essentials of disease management and
                        powerlifting, this module focuses on therapeutic diets
                        {showMore[7] ? (
                          <>
                            and techniques for key strength - building
                            exercises. Students are trained to support clients
                            in achieving both wellness and performance goals.
                            <div className="row">
                              <ul className="col-6 mt-2 p-3">
                                <li className="list-unstyled">
                                  <b>Biomechanics and Technique</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Strength Training Principles</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Programming and Training Plans</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Equipment and Gear</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Rules and Regulations</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Injury Prevention and Rehabilitation</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Coaching and Communication</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Practical Training</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Legal Aspects of Coaching</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Powerlifting Plan</b>
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
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques include active listening, empathy, and goal-setting to help individuals navigate challenges. Methods like cognitive-behavioral therapy, mindfulness, and solution-focused approaches empower clients to develop coping strategies. Effective counseling fosters self-awareness, emotional resilience, and personal growth, promoting mental well-being and long-term positive change.
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
                        Module 8: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques include active listening, empathy, and goal-setting to help individuals navigate challenges. Methods like cognitive-behavioral therapy,
                        {showMore[8] ? (
                          <>
                            mindfulness, and solution-focused approaches empower clients to develop coping strategies. Effective counseling fosters self-awareness, emotional resilience, and personal growth, promoting mental well-being and long-term positive change.
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
                          Module 9: Group Instructor Masterclass
                        </h2>
                        <p className="text-muted">
                          A Group Instructor Masterclass is designed to refine teaching skills, elevate class management, and improve participant engagement. It covers techniques for motivating diverse groups, structuring effective workouts, and fostering a positive environment. Instructors gain the confidence and expertise to lead dynamic, inclusive fitness sessions that inspire results.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>TRX Band Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Functional Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Tabata Training</b>
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
                          src="/assets/images/course-img/online-5.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-5.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Group Instructor Masterclass
                      </h2>
                      <p className="text-muted">
                        A Group Instructor Masterclass is designed to refine teaching skills, elevate class management, and improve participant engagement. It covers techniques
                        {showMore[9] ? (
                          <>
                            for motivating diverse groups, structuring effective workouts, and fostering a positive environment. Instructors gain the confidence and expertise to lead dynamic, inclusive fitness sessions that inspire results.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>TRX Band Training</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Functional Training</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Tabata Training</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Group Fitness Class Design and Teaching</b>
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
                          src="/assets/images/course-img/powerlifting-course.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Practical Application & Client Management,
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
                        Module 10: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By
                        {showMore[10] ? (
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
                  Start Your Fitness Career with a{" "}
                  <span className="m-0 text-blue-color">Personal Training Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      Becoming a certified personal trainer is easier than ever with the right training course. Whether you're looking for an online PT course or an in-person PT training course, structured learning helps you gain the skills needed to succeed in the fitness industry.
                    </p>
                    <p>
                      A well-designed personal training course covers essential topics such as exercise science, anatomy, strength training, and client assessment. Many online personal training courses provide flexible learning options, allowing you to study at your own pace while gaining industry-recognized certification.
                    </p>
                    <p>
                      For those aiming to become a gym trainer, enrolling in a gym trainer course or a gym personal trainer program is a great choice. These courses focus on workout programming, injury prevention, and effective coaching techniques. If you prefer distance learning, personal trainer classes online offer interactive sessions, video tutorials, and expert guidance.
                    </p>
                    <p>
                      Comprehensive personal training programs provide hands-on experience and theoretical knowledge, ensuring you are well-prepared to train clients of all fitness levels. By choosing the right PT training or personal trainer training course, you can build a successful career in fitness. Start your journey today with a top-rated online personal trainer certification and make a difference in the fitness world!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid p-0">
          {/* <div className="container">
                  <div className="covid mb-4 text-center">
                    <h2 className="h2-fs">
                      <span className="m-0 text-blue-color">Course </span>
                      include
                    </h2>
                  </div>
                  <div className="thm-bg-clr dector"></div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/img/zoom.webp"
                          }
                          alt="FG Group"
                        />
                        <h2 className="h5-fs mt-3">Zoom session</h2>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/open-book.webp"
                          }
                          alt="FG Group"
                        />
                        <h2 className="h5-fs mt-3">Book & Recorded session</h2>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
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
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
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
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
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
                    <div className="col-lg-4 col-md-6 mt-3 position-relative">
                      <div className="tabata blog2 py-5 imgty text-center">
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
              process.env.PUBLIC_URL + "/assets/images/img/course-include-online.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/course-include-online-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4 align-items-center">
              <div className="col-md-6">
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

                      <li>
                        <i className="fas fa-check"></i> Globally Recognized
                        Certifications
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Comprehensive
                        Curriculum Covering Latest Trends
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Interactive Live
                        Sessions with Trainers and Peers
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Regular Assessments &
                        Feedback
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Access to Exclusive
                        Study Groups
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Updated Study Material
                        and Case Studies
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Affordable Fees with
                        EMI Options
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Collaborations with Top
                        Fitness Brands
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Personalized Student
                        Support Team
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Continuous Professional
                        Development Opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <p className="mb-0 taks-p">Demo Certificate</p>
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/cpt_demo.webp"
                    }
                    width="85%"
                    alt="Course Certificate"
                  />
                </div>
                <div>
                  <span
                    className="taks-p d-none d-md-block text-center"
                    style={{ fontWeight: "500" }}
                  >
                    our Certificate is valid in 192 country
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MeetOurInstructure />
      <StudentTestimonial testimonials={testimonials} />
      {/* <OurStudentsWords /> */}
      <section className="margintop item-border-design">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Placement <span className="m-0 text-blue-color">Review</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <OwlCarousel
              loop
              autoplay
              id="owl-demo5"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                  dots: false,
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
          <div className="covid text-center mt-5">
            <h2 className="h2-fs">
              Our <span className="m-0 text-blue-color">Google Reviews</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>

          <OwlCarousel
            key={showMoreList.join("")}
            className="owl-theme"
            {...options}
          >
            {reviewses.map((review, index) => (
              <div key={`review-${index}`} className="item">
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
                    <p className="review-text">
                      {showMoreList[index] ? review.fullReview : review.review}
                    </p>
                    <button
                      className="btn"
                      onClick={() => toggleReadMore1(index)}
                      id="myBtnrx"
                      style={{ color: "#00afef", fontWeight: "500" }}
                    >
                      {showMoreList[index] ? "Read less" : "Read more"}
                    </button>
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
                <div
                  className="faq-answer active"
                  style={{ maxHeight: "none" }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseReviewSection course_id="6010e9f3eb38ac0a706af298" />

      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
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
      <FgiitFooter />
    </>
  );
}

export default OnlinePersonalTrainingCourse;
