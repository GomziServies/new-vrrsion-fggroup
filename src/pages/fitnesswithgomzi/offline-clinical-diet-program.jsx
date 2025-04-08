/* eslint-disable jsx-a11y/anchor-is-valid */
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
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OnlineProgramFormFwg from "../../components/online-fwg/onlineProgramForm";
import HowItWork from "../../components/fwg/howItWork";
import BlogsRtpTwo from "../../components/fwg/blog-rtp-two";
import { Link } from "react-router-dom";
import { OfflineClinicalDietProgramData } from "../../components/offline-fwg/AllOfflineProgramData";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import ClientsTestimonial from "../../components/fwg/clinetvideoreview";
import Transformation from "../../components/fwg/transformation";
import { Helmet } from "react-helmet";

function OfflineClinicalDietProgram() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

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
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "What is RTP 3.0, and who is it for?",
      answer:
        "RTP 3.0 is a specialized weight management and fitness program for individuals dealing with clinical illnesses such as diabetes, hypertension, or other chronic conditions. It offers a tailored approach to exercise, diet, and regular health monitoring to manage these conditions effectively.",
    },
    {
      question: "What services are included in RTP 3.0?",
      answer:
        "RTP 3.0 includes personal training sessions, customized diet and exercise plans, monthly progress measurements, an exercise consultant program, and a free full-body checkup. Continuous updates and adjustments to the plan are provided based on health progress.",
    },
    {
      question: "How does RTP 3.0 help with managing clinical illnesses?",
      answer:
        "RTP 3.0 incorporates medically sound fitness routines and nutrition strategies that are specifically designed to manage chronic illnesses. The program emphasizes safe and effective exercises, dietary modifications, and regular health assessments to improve overall well-being.",
    },

    {
      question: "Will I get personalized support in RTP 3.0?",
      answer:
        "Yes, RTP 3.0 offers personalized sessions with certified personal trainers and dietitians who will tailor the program according to your medical needs and goals. You also have access to exercise consultants for ongoing support.",
    },
    {
      question: "Do I need a doctor's consultation before starting RTP 3.0?",
      answer:
        "Yes, it's recommended to consult with your doctor before beginning RTP 3.0, especially if you have pre-existing medical conditions. Our trainers and dietitians will work closely with you and your healthcare provider to ensure the program aligns with your medical requirements.",
    },
  ];

  const testimonials = [
    {
      name: "Jitendra Dua",
      description: `I recently discovered FitnessWithGomzi, and joining their program has been a life-changing decision! With their expert guidance and tailored workouts, I was able to lose around 9kg in a healthy, sustainable way. The team is incredibly supportive, constantly motivating me to push my limits and stay consistent with my fitness goals.`,
      videoUrl: "TTo1ms1bCQs",
      imageUrl: "/assets//images/fwg/rtp-3-one.webp",
      date: "13 March 2023",
    },
    {
      name: "Daksha",
      description: `My friend told me about FitnessWithGomzi, and I decided to join—and I'm so glad I did! In just a short time, I've lost around 5kg, thanks to their well-structured program and motivating trainers. The personalized workouts, combined with nutrition advice, have really helped me stay on track and feel healthier overall.`,
      videoUrl: "IRGmI-YCWsc",
      imageUrl: "/assets/images/fwg/rtp-3-two.webp",
      date: "13 March 2023",
    },
    {
      name: "Shree Acharya",
      description: `With the incredible support of FitnessWithGomzi, I've been able to compete at state championships! Their personalized training plans and expert guidance have taken my fitness to the next level, preparing me both mentally and physically for competition. The coaches truly understand how to push your limits while keeping the workouts balanced and effective.`,
      videoUrl: "Yv4kJLnICKI",
      imageUrl: "/assets/images/fwg/rtp-3-three.webp",
      date: "13 March 2023",
    },
  ];
  const [activeElement, setActiveElement] = useState("fatty-lvr");

  const handleClick = (element) => {
    setActiveElement(element);
  };
  return (
    <>
      <Helmet>
        <title>Offline Clinical Diet Program | FG Group</title>
        <meta
          name="description"
          content="Gym trainer course will teach you how to present the exercise properly in scientific manner also it has detail information on human anatomy, Human physiology, Kinesiology, principles of exercise, component of fitness, exercise planning, supplements, performance enhancement drugs and many more."
        />
        <meta
          name="keyword"
          content="intermittent fasting, fasting intermittent fasting, weight loss, calorie counter, weight loss program, weight loss programmes, weight reduction programs, weight loss journey, intermittent fasting schedule, intermittent fasting times, calorie calculator for weight loss, ways to lose weight quickly, intermittent fasting for weight loss, calorie intake calculator, intermittent fasting and weight loss, diet food, best calorie tracking app, weight loss menu plans, fasting meals, application calorie, best weight loss program, top weight loss programs, fasting diet, fast weight loss, benefits of intermittent fasting, best weight loss system, top rated weight loss programs, good weight loss program, personalized weight loss, fasting support, weight loss meal plan, best diet to lose weight, weight loss foods, best food for weight loss, diet meal plans for weight loss, fasting for weight loss, lose fat, 0 calorie foods, fasting and weight loss, fasting time, loss weight food, diet plan, best weight loss app, diet plan to lose weight, weight loss plan, weight loss tips, 1200 calorie meal plan, calories for weight loss, daily calorie intake, weight loss meal, good weight loss apps, top weight loss apps, 7 day meal plan for weight loss, one meal a day, 1200 meal plan, 7 day weight loss diet plan, my fitness plan app, top rated weight loss apps, 1200 diet plan, 1200 calorie diet, foods to eat to lose weight, healthy diet meal plan, intermittent fasting how to, healthy eating diet plan, weight loss service, diets for weight loss, best meal tracking app, best diet foods, good diet foods, best ways to lose weight quickly, best way to lose weight fasting, best diet,
        intermittent fasting rules, best intermittent fasting for weight loss, ways to lose weight, best foods to eat to lose weight, nutrition solutions, cutting diet, foods that help you lose weight, intermittent fasting results, lose weight tracker, best intermittent fasting to lose weight diet meal plan, healthy meal plans for weight loss, calorie intake to lose weight, food diary, healthy diet plan for weight loss, best diet to lose weight quickly, best weight loss, healthy foods to lose weight, easiest way to lose weight, meal tracker app, foods to help lose weight, food journal, fat loss diet, calories per day, 3 day diet, types of diets, healthy eating plan for weight loss, good diet plan for weight loss, healthy food plans for weight loss, diet eating plan, healthy foods for diet, healthy diet meal plan for weight loss, losing weight for men, healthy eating meal plan for weight loss, healthy diet plan, free weight loss plan, nutrition coaching, best meal plans for weight loss, free diet plan for weight loss, weight loss diet plan for women, best diet plan for weight loss, 30 day weight loss challenge, quick weight loss, weight loss meal plan for women, intermittent fasting for beginners, intermittent fasting hours, best diet program for weight loss, crash diet, calorie intake, best food plan for weight loss, fasting diet plan for weight loss, free nutrition plan for weight loss, best nutrition plan for weight loss, lose weight plan for free, fasting types, hours for intermittent fasting, weight loss expert, free eating plan to lose weight, free food plan for weight loss, food fasting, help you lose weight, best healthy diet plan for weight loss, weight maintenance calories, weight loss food plan for women, weight loss coach, best free weight loss apps, diet meal, healthy eating plan, good diet plans, best intermittent fasting schedule, fasting schedule, healthy weight loss, weight loss diets for women, recommended calorie intake, lose 20 lbs in 2 months, best apps for intermittent fasting, model diet, good free weight loss apps, 
        best app for weight loss free, meal calorie counter, good intermittent fasting schedule, intermittent fasting diet plan, intermittent fasting diet, weight loss diet plan for men, 1200 calories a day, lose weight without exercise, food log, weight loss meal plans for men, weight loss at home, healthiest diet, food calculator, fasting diets for weight loss, average calorie intake, diet menu plan for weight loss diet programs, best calorie counting app, weight loss plan for women, intermittent fasting plan, lose weight in 30 days, online weight loss program, intermittent fasting meal plan, lose weight in a month,
        weight loss programs that work, workout and meal plan, healthy foods to eat to lose weight, weight loss plans that work, workout meal plan, calories needed to lose weight, intermittent fasting program, fitness meal plan, workout diet plan, gym diet, calorie intake for women, 30 day weight loss, fasting hours, lose weight in 3 months, meal calorie calculator, best veggies for weight loss, best meal for weight loss, meal plan and workout plan, 3 month weight loss, one meal a day fasting, recommended calories per day, fitness food plan, intermittent fasting food plan, online weight loss plans, best foods for cutting, best apps for fasting, workout food plan, calories required to lose weight, recommended daily calorie intake, weight loss regimen for women, free weight loss programs, personal weight loss coach, i need to lose weight, free intermittent fasting plan, weight loss coach online, best weight loss plan, simple weight loss reviews, calories per day to lose weight, diet food for weight loss, best fasting for weight loss, intermittent fasting schedule for women, cutting diet plan, cutting meal plan, help me lose weight, 2500 calorie meal plan, foods that make you lose weight, lose weight in 2 months, different types of diets, intermittent fasting windows, 3 day diet menu, calories for women, best nutritionist, workout and diet plan for weight loss, workout diet plan for weight loss, intermittent fasting chart, count your calories, lose 10 lbs in 2 months, basic diet plan, personal nutritionist and trainer, calories for women to lose weight, 6 month weight loss, ways to lose weight without working out, calorie intake for men, lose weight in 7 days, to lose weight how many calories, best weight loss advice, lose 100 lbs in 6 months, nutritionist food plan, workout and meal plan for weight loss, exercise and meal plan for weight loss, best weight loss programs for women, free fasting plan, 30 day meal plan for weight loss, diet plans for men, 
        diet chart for weight loss, weight loss plan for men, fasting diet for women, 30 day diet challenge, best diet for men, weight loss programs for men, weight loss menu, calories to eat to lose weight, most effective diet, fastest way to lose weight in a month, fasting programs, dietitian for weight loss, healthy diet to lose weight, gym diet plan, weight loss for beginners, natural ways to lose weight, cutting weight diet, nutrition website, cutting diet for women, quickest way to lose weight in a month, personalized meal plan for weight loss, foods to eat on a diet, healthy weight loss per month, diet and exercise, best diet food for weight loss, customized meal plans for weight loss, fasting methods, calorie counter calculator, most successful diet, weight loss company, cutting calories, healthy fasting, intermittent fasting meaning, one meal a day diet, diet foods for weight loss, cutting meals, no calorie foods, calories per day women, 2 month weight loss, best fitness app for weight loss, daily calories for men, lose weight safely, i have to lose weight, best exercise app to lose weight, fasting window, 2500 calories diet plan, weight loss coach near me, nutrition coach near me, nutrition plan, diet and exercise plan, weight loss food plan, free calorie tracker app, best online weight loss program, free calorie tracker, fasting diet plan, simple meal plan to lose weight, easy diet plan for weight loss, 1200 calorie diet plan, best way to lose weight for women, workout and diet plan, weight loss nutritionist near me, best fasting schedule, easy weight loss meal plan, easy weight loss, good diets, simple diet plan for weight loss, fasting for beginners, types of intermittent fasting, intermittent diet, different diets, best diet meals, best diet tracker app, indian diet plan for weight loss, weight loss coaching near me, calorie chart, diet for gym beginners, daily calorie intake for women, fasting diet schedule, meal and exercise plan, 
        fitness diet plan, different types of fasting, healthiest diet in the world, lose 20 lbs in 3 months, daily calories for women, diet and fitness plan, fastest way to lose 20 lbs, easiest meal plan for weight loss, workout and eating plan, nutritionists near me for weight loss, lose 10 lbs in one month, simple eating plan to lose weight, best diet plan, nutrition plan for weight loss, diet food plan, free diet plan, diets that work, best weight loss for women, personalized weight loss plan, best intermittent fasting, intermittent fasting schedule for weight loss, i need help losing weight, fasting schedule for weight loss, diet calculator, best app to help lose weight, good foods for weight loss, diet plan to reduce weight, weekly diet plan for weight loss, calories a day to lose weight, weekly meal plan for weight loss, weight loss diet for men, weight loss meals for men, eating for weight loss, 1200 calorie a day meal plan, calorie goal for weight loss, healthy ways to lose weight, lose weight in 3 days, healthiest weight loss diet, free fasting, custom weight loss plan, fasting program for weight loss, lose weight in one month, diet ideas for weight loss, custom nutrition plan, to lose weight how many calories should i eat, fastest way to lose 10 lbs, best weight loss programs near me, hcg diet plan, calorie intake calculator to lose weight, best apps to help you lose weight, free meal tracker, free diet tracker, diet plan for 1200 calories a day, lose 5 lbs in a month, meal plan personalized, online nutrition coach, diet plans for women, weight loss programs for women, free meal plans for weight loss, free weight loss apps no subscription, nutritionist for weight loss, simple diet plan, easy diet, fasting plan, calorie counter online, personal nutritionist, intermittent fasting for men, free food calorie calculator, free calorie calculator, balanced diet for weight loss, i want to lose weight, diet and exercise plan for weight loss, nutrition meal plan, ways to lose weight without exercise, 1200 calorie diet menu, healthy eating for weight loss, diet for men, fasting plan for weight loss, fat burning diet plan, list of diets, weight management programs, foods that promote weight loss, lose it app reviews, healthy calorie intake, lose weight without counting calories, real weight loss, easy 1200 calorie meal plan, 1200 calorie diet meal plan, best thing to eat to lose weight, best cutting diet, gyms in near me, gyms gym, workout center near me, gym workouts near me, gym workout near me, workout gyms near me, gym and fitness centers near me, fitness clubs near me, badminton courts near by me, zumba classes in near me, near me zumba class, near me zumba classes, zumba fitness class near me, zumba class in near me, zumba classes near by me, zumba class near by me, workout for shoulder in gym, shoulder exercise at gym, gym exercises shoulder, shoulder gym exercises, gym exercise shoulder, shoulder exercise gym, gym exercises for shoulders, shoulder gym workouts, shoulder exercise for gym, shoulder workouts for gym, shoulders exercises gym, exercise for shoulders in gym, gym exercise for shoulders, shoulder exercise in gym, shoulder workout at the gym, exercises for shoulder in gym, exercises for shoulders in gym, shoulder exercises for the gym, shoulders exercises in gym, exercises in gym for shoulders,
        shoulder exercises for gym, shoulder workouts for the gym, exercise of shoulder in gym, shoulder workouts in gym, shoulders workout at gym, back exercise for gym, gym workout shoulder, gym exercises back, back exercise at the gym, back workouts in the gym, gym back exercise, gym exercises for shoulder, back exercises at the gym, back exercise in the gym, dumbbell dumbbell, exercise for back in gym, shoulders exercises at gym, gym training back, exercises for back in gym, fitness cardio workout, gym exercise of chest, workout exercises for chest, gym workout for chest, cardio exercise workouts, cardio exercise workout, workout cardio, workout chest exercises, gym exercise chest, workouts cardio, cardio workout moves, workout exercises cardio, work out chest, chest gym exercise, gym chest exercises, cardio workouts exercises, chest workout exercise, cardio workout exercise, chest chest workout, workout exercises chest, cardio exercises workout, chest exercises and workouts, exercise cardio workout, fitness chest, workout for the chest, exercise to chest, workouts chest, chest workout in gym, gym workouts for chest, exercise for cardio, exercises to workout chest, exercises in gym for chest, exercises chest, chest exercises in gym, exercises in cardio, exercises for cardio, best health clubs near me, best gym in near me, best gyms in near me, best health club near me, great gyms near me, gymnasium near me with fees, best gym close to me, gym fee near me, gyms near me fees, blood exam near me, women gym near me, workout for chest at gym, exercise in gym for chest, chest gym exercises, gym chest exercise, exercise for chest at gym, exercises for chest at gym, gym chest workouts, how to lose weight lose fast, chest exercise at gym, gyms for women near me, gyms near me for women, gyms near me ladies, workout of abs, fitness abs workout, abs exercise workouts, abs exercises workout, fitness abs exercises, exercise abs workout, workout abs exercises, workout exercise for abs, women fitness gym near me, ab workout exercises, gym woman near me, women fitness center near me, women's fitness gym near me, exercises to abs,
         gym ladies near me, near by gyms, workout for reduce belly fat, exercise for reduce belly fat, belly fat reduce workout, exercise for belly fat reduction, belly fat reduction workout, exercises for reduce belly fat, reduce belly fat workout, workout for reducing belly fat, exercises for belly fat reduce, workout back exercises, back exercise exercise, back exercises workout, exercise to reduce the belly fat, back exercise back, back and exercises, workout exercises back, back exercise workout, exercise for tummy fat reduction, belly fat loss exercises, reduction of belly fat exercises, to reduce tummy fat exercise, tummy fat reduction exercise, exercises to reduce fat belly, exercises that reduce belly fat, exercise for reduce tummy fat, tummy fat reducing exercise, belly fat losing exercises, workouts reduce belly fat, exercises to reduce the belly fat, workout exercises for back, workout exercise for back, belly fat losing exercise, exercise reduce belly fat, reducing tummy fat exercise, sixpack, exercises of back, exercise for reducing belly fat, exercises for belly fat reduction, workout s, fitness india, workout exercises for weight loss, exercise workouts for belly fat, workout exercise for weight loss, exercise workouts lose weight, fitness for belly fat, workout weight loss, stomach fat exercise, weight loss exercise workout, workout and weight loss, exercise workout for weight loss, exercises for fat stomach, exercise for fat belly, weight loss and workout, exercises for fat belly, workout belly fat, fat stomach workout, weight reduction exercises, belly fat and exercise, weight reducing exercise, belly fat stomach exercise, gym nearest, home exercise for abs, near me protein shop, ab workout exercises at home, exercise for abs at home, exercises for abs gym, abs workout in home, abs exercise in home, abs exercises for home, ab at home exercises, abs exercise at home, benefit of milk with turmeric, at home exercises abs, home workout exercises for abs, at home abs workout, workout at home abs, gym exercise for abs, home workouts for abs, abs workout for home, abs exercise for home, workout at home for abs, abs home workout, abs exercises home, home ab workout, exercise for abs at gym, gym abs exercises, abs home exercise, exercises for abs in gym, gym for workout, chest workouts in home, at home workout for abs, workout abs at home, exercise at home chest, workouts at home for abs, gym workouts for cardio, home exercise for chest, abs best workout at home, exercises chest at home, at home workout for chest, workout for chest at home, workout for chest home, workout chest at home, at home workouts abs, home workout exercises for chest, cardio exercise at gym, chest workout in home, home exercises for chest, at home chest exercise, exercise abs workout at home, chest workout for home, at home exercise for chest, exercise at home for chest, abs home workout exercises, exercise chest at home, chest training at home, workout at home for chest, chest workouts for home, at home workout abs, cardio workouts for gym, at home workouts for chest, workout at home chest, chest exercise for home, abs workout exercise at home, exercise for chest at home, abs workout exercises at home, exercises for chest at home, cardio workouts for the gym, chest workout from home, chest workout exercises at home, exercises at home for chest, workouts at home for chest, chest workout at home, cardio workout at the gym, tummy fat workout, ab workout home, cardio workouts gym, cardio gym exercises, workout and gym, chest exercises for home, cardio exercises at gym, gym workout for cardio, exercise of chest at home, at home exercises for chest, workouts for chest at home, cardio workout at gym, exercise workout gym, chest workout for at home, home exercises for abs, gym workouts cardio, how to fitness at home, gym workout gym, cardio exercise gym, gym cardio exercise, gym for trainers, fitness center near by me, fitness places near me, exercise facilities near me, fitness facilities near me, fitness gyms close to me, near gym at me, near to me gym, fitness gym close to me, fitness center close to me, work out facility near me, fitness in home, exercise facility near me, unisex gym near me, exercise workouts at home, nearest fitness center to me, workout from home, fitness health clubs near me, near me fitness gym, fitness center gym near me, home exercise at home, fitness at home exercises, workout exercise at home, home exercise workout, fitness place near me, exercise workout home, exercises workout at home, exercise at home workout, exercises home workout, workouts in home, workout on home, home exercise workouts, exercise home workout, workout at home exercises, workout at home exercise, exercise workout at home, workout for home, fitness for weight loss, exercise for home workout, homework workout, belly fat reduction exercise, workout for at home, best fitness gyms near me, best workout gyms near me, closest gym, nearby gym near me, near by gym near me, top rated gyms near me, how reduce thigh fat, workout for upper chest, exercises for upper chest, how to reduce the thigh fat, cheap workout places near me, gym near me with fees near me, fitness gyms, fitness & gym, fitness near me, fit gym near me, fitness near by me, boxing gym close to me, fitness closest to me, fitness gym, fitness gym near me, fitness and gyms near me, fitness near to me, zumba near me, zumba fitness near me, cheapest gym near me, zumba classes, zoomba classes, a fitness gym, weight loss exercise best, fitness first, exercise to reduce fat from thighs, exercise to reduce fat from thigh, exercises to reduce fat on thighs, best exercise for fitness and weight loss, exercises to reduce thigh fat, exercises for reducing thigh fat, exercise for thigh fat reduce, exercises for back at home, arms workout, exercise to reduce the thigh fat, exercise to reduce fat on thighs, exercise for reducing thigh fat, home exercises for the back, exercises for thigh fat reduction, best exercise for loss weight, thigh exercises to lose fat, at home exercises for back, at home exercise for back, back workout exercises at home, at home workout for back, exercise for thigh fat reduction, workout for back at home, exercise for back at home, home exercises shoulders, back home exercises, home workout shoulder, dumbbell workout exercise, shoulder workouts for home, home shoulder workout, home workout for shoulder, at home back workout, shoulder exercises in home, shoulder home workout, back exercises in home, home exercise for back, best weight reduction exercises, shoulder exercise at home, shoulders home workout, shoulder workout for home, weight loss best exercise, thigh fat loss exercise, home exercise for shoulder, exercises for your back at home, back exercises home workout, shoulder workout at home, best fitness for weight loss, shoulder exercises from home, zumba fitness classes, best workout for lose weight, shoulder exercise in home, shoulders exercises at home, exercises for shoulder at home, workout for shoulder at home, shoulders workout at home, best weight loss workout, thighs fat loss exercise, at home workouts for back, at home back exercises, shoulder workout in home, shoulder exercise home, back workout in home, thigh fat loss exercises, back workouts for home, back workout for home, home exercises for shoulders, back exercise for home, home workout for shoulders, back at home exercise, shoulder exercises for home, back exercise in home, arm workout exercises, shoulder exercises home, home exercises for shoulder, 6 pack body, workout exercise for arms, fitness and strength training, near gym centres, pregnancy yoga classes near me, near gym centre, nearby gyms near me, nearby gym centre, nearest gym near me, nearest fitness center near me, nearest gym centre, personal fitness trainer near me, nearby gym to me, personal physical trainer near me, fitness personal trainer near me, private fitness trainer near me, fitness freaks, personal trainer near me, personal fitness coach near me, trainer near.me, personal instructor near me, private trainer near me, personality trainer near me, physical trainers near me, physical trainer near me, personal workout trainer near me, weight loss exercises for women at home, weight loss workout for women at home, fitness trainer near me, professional trainer near me, near me personal trainer, fitness instructor near me, weight loss exercise for female at home, personal fitness instructor near me, exercise for weight loss women at home, women weight loss exercises at home, weight loss exercise at home for women, exercise for weight loss for women at home, exercises for weight loss at home for female, workouts images, exercises to reduce fat in thighs, exercise for weight loss for female at home, weight loss workouts for women at home, at home weight loss workouts for women, exercise for women to lose weight at home, home workout for weight loss female, how to reduce belly fat in exercise, how to exercise to reduce belly fat, lower chest workout exercises, arms workout in gym, workout for 6 pack, workout for six pack, arms gym workout, 6 pack exercise, exercises six pack, arm gym workout, water cleanse recipe, arms workout gym, arm exercise gym, exercises 6 pack, how to reduce the belly fat with exercise, exercises for six pack, arms exercises in gym, exercise for arms in gym, exercises for 6 pack, home workouts to lose weight for women, how to reduce belly fat with exercise, trainer near me, how to reduce belly fat exercise, lean body for man, near me gym center, protein chapati, boxing coaches near me, lean body men, lean body for men, 6pack, near me gym near me, fitness club, fitness cardio workout at home, lean body male, only ladies gym near me, best exercises for reduce belly fat, swimming classes near me with fees, gym near me only for ladies, gyms only for ladies near me, exercises shoulders, lean man body, workouts at home cardio, best exercise reduce belly fat, cardio workout for at home, exercises for fat belly loss, resistance training exercises at home, best exercise for reducing belly fat, best exercises for reducing belly fat, strength training home workout, cardio exercises at home, chest exercises at home, fitness upper body workout, upper body training, home exercises cardio, exercises upper body, workout home cardio, workout of shoulder, home workout strength, workouts for stomach, protein powder homemade, homemade protein powder, home made protein powder, homemade protein supplement, protein homemade powder, nearby gym center, near gym center, gym near me with personal trainer, gyms near me with personal trainer, gym near me with trainer, fitness centers near, gym with a personal trainer near me, gyms with trainers near me, gym with personal trainers near me, gyms with personal trainer near me, personal trainer gyms near me, gym with instructor near me, trainer gym near me, gym with personal trainer near me, toning body, fitness center, personal physical trainer, fitness center near, fitness hub, fitness c, exercise to reduce belly fat for female at home, exercises to reduce belly fat for female at home, lose belly fat workout for women at home, gym trainer near me, gymnastic trainer near me, top workout programs, gym protein, best exercise for reduce belly fat, exercises for lower belly fat, exercises lower belly fat, home 6 pack workout, recipe bhindi masala, photos of fitness, gyms india, workout places around me, fitness center near my location, fitness studio near me, gyms fitness, workout gyms, gym for fitness, classes near me fitness, gyms near my location, gym centres, gym centre, gym india, exercise studios near me, gym nearby my location, gym near me within 800m, exercise studio near me, workout studios near me, closest gym to my location, gym near me within 400m, gym around me, fitness gym near my location, near my location gym, classes fitness near me, gyms nearby near me, workout studio near me, gym near my location, gyms nearby my location, fitness in gym, fitness classes close to me, gym nearby near me, fitness app, gym indian, gym website, fitness centres in india, fitness center in india, gyms for fitness, fitness centre in india, fitness classes near me, zumba classes near me only for ladies, fitness gym website, nearby studios, fitness application, six pack exercise in home, shoulder back exercises, dumbbell workout at home, exercise for lower body, checkpost near me, ladies weight loss workout, how to make protein powder at home, gyms around me, how to prepare protein powder at home, how to make protein powder in home, how make protein powder at home, workout programs at home, best gym, exercise to reduce weight at home, gym prices near me, best for gym, gym near me rates, near by gym centre, weight loss exercise in home, weight loss exercise for home, weight loss home exercise, weight loss at home exercise, gym near me and prices, gyms cost near me, weight loss in home exercise, gyms near me and prices, weight loss at home exercises, weight loss exercises for home, gym pricing near me, gym near me prices, gym cost near me, gym near me with prices, gym near me price, home weight loss exercise, weight losing exercises at home, exercises to reduce weight at home, weight loss exercises in home, weight loss exercises home, at home exercise for weight loss, how protein powder is made, weight loss exercises gym, weight loss fast exercise, losing weight exercises at home, lose weight home exercise, at home exercise weight loss, weight loss exercise from home, lose weight exercise home, weight losing exercise at home, weight loss home exercises, fast lose weight exercise, lose weight by exercising at home, lose weight with exercise at home, how the protein powder is made, lose weight at home exercise, at home exercises for weight loss, belly reduce workout, fitness exercises, weight loss exercises fast, fast weight losing exercise, nearby gyms for ladies, fast weight loss exercise, fastest weight loss exercise, gym workout images, gym workout photos, workout gym images, gym images hd, gym workouts images, nearest swimming classes, dumbbell workout, natural protein supplement, natural protein powder, near by gym in my location, best gym near me with fees, best gyms for women near me, best gym in india, best gym for women near me, protein powder natural, khichdi calories, gym fee, gym fees, fitness centers and gyms, protein supplements natural, gold gym in janakpuri, fit app, top rated gym near me, women's belly fat workout, best gym near me for ladies, india best gym, cheap gyms near me, belly fat workout for women, great chest workout at home, workouts at home for belly fat, exercise for belly fat for woman, best gym for ladies near me, exercise for lose thigh fat, perfect chest workout at home, belly fat exercise women, gym membership, gyms near me for free, gyms in, gym center, gym member, membership for gym, gym near me for free, free gym near me, gyms for free near me, gym for free near me, home fitness weight loss, surat gyms, surat gym, gym surat, gyms surat, weight reduction exercises at home, gyms in surat, membership of gym, near by me gym, exercise for weight loss in home, workout for weight loss at home, home weight loss workout, exercising at home for weight loss, gyms open near me, near gym by me, weight reducing exercises at home, exercise at home weight loss, workout home weight loss, fitness at home to lose weight, exercises at home for weight loss, weight loss workout home, exercise to weight loss at home, home exercise to reduce weight, weight reducing exercise at home, workout at home to lose weight, workout at home for weight loss, fitness at home for beginners, home workout to reduce weight, home workout weight loss, exercises at home for beginners, exercise for weight reduction at home, exercise weight loss at home, home workout lose weight, weight loss at home workout, workout to lose weight at home, beginner exercises at home, weight loss workout for home, gyms near me that are open, weight loss workouts for home, workouts for weight loss at home, lose weight workout at home, at home workout for weight loss, workouts at home for weight loss, workout at home weight loss, gym near me open now, workouts for home to lose weight, beginners exercise routine at home, exercise workouts at home to lose weight, workout at home for beginners, weight loss home workout, exercises for weight loss at home, gyms near me free, exercise for lose weight at home, gym open near me, at home workouts for weight loss, zumba dance near me, coffee for pre workout, exercise at home beginners, zumba dance studio near me, butt reduction exercises, gym opening near me, gym in bandra west, at home weight loss workout, workout beginners at home, exercise to reduce the buttocks, home workout to lose weight, weight loss routine at home, beginner exercise at home, at home beginners workout, gym near me open, exercise and lose weight at home, at home workout for beginner, exercise at home for weight loss, exercises to reduce butt, exercise to reduce butt, reducing buttocks exercise, exercise at home for beginners, workout at home lose weight, home exercises to reduce weight, home workout plans, chest and back exercises, at home exercises for beginners, fat burning chest exercises, workout at home beginner, loss weight workout at home, what exercise burns the most belly fat for female, gym in surat, exercise lose weight at home, workout for losing weight at home, at home exercise for beginners, workout to reduce buttocks, exercise routines for beginners at home, new gym near me, buttocks reduce exercise, exercise to lose weight at home, buttock reduce exercise, fitness routine for beginners at home, butt reduce exercise, open gym near.me"
        />
        <meta
          property="og:title"
          content="Offline Clinical Diet Program | FG Group"
        />
        <meta
          property="og:description"
          content="Gym trainer course will teach you how to present the exercise properly in scientific manner also it has detail information on human anatomy, Human physiology, Kinesiology, principles of exercise, component of fitness, exercise planning, supplements, performance enhancement drugs and many more."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fitnesswithgomzi/weight-loss-programs"
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
        intermittent fasting, fasting intermittent fasting, weight loss, calorie
        counter, weight loss program, weight loss programmes, weight reduction
        programs, weight loss journey, intermittent fasting schedule,
        intermittent fasting times, calorie calculator for weight loss, ways to
        lose weight quickly, intermittent fasting for weight loss, calorie
        intake calculator, intermittent fasting and weight loss, diet food, best
        calorie tracking app, weight loss menu plans, fasting meals, application
        calorie, best weight loss program, top weight loss programs, fasting
        diet, fast weight loss, benefits of intermittent fasting, best weight
        loss system, top rated weight loss programs, good weight loss program,
        personalized weight loss, fasting support, weight loss meal plan, best
        diet to lose weight, weight loss foods, best food for weight loss, diet
        meal plans for weight loss, fasting for weight loss, lose fat, 0 calorie
        foods, fasting and weight loss, fasting time, loss weight food, diet
        plan, best weight loss app, diet plan to lose weight, weight loss plan,
        weight loss tips, 1200 calorie meal plan, calories for weight loss,
        daily calorie intake, weight loss meal, good weight loss apps, top
        weight loss apps, 7 day meal plan for weight loss, one meal a day, 1200
        meal plan, 7 day weight loss diet plan, my fitness plan app, top rated
        weight loss apps, 1200 diet plan, 1200 calorie diet, foods to eat to
        lose weight, healthy diet meal plan, intermittent fasting how to,
        healthy eating diet plan, weight loss service, diets for weight loss,
        best meal tracking app, best diet foods, good diet foods, best ways to
        lose weight quickly, best way to lose weight fasting, best diet,
        intermittent fasting rules, best intermittent fasting for weight loss,
        ways to lose weight, best foods to eat to lose weight, nutrition
        solutions, cutting diet, foods that help you lose weight, intermittent
        fasting results, lose weight tracker, best intermittent fasting to lose
        weight diet meal plan, healthy meal plans for weight loss, calorie
        intake to lose weight, food diary, healthy diet plan for weight loss,
        best diet to lose weight quickly, best weight loss, healthy foods to
        lose weight, easiest way to lose weight, meal tracker app, foods to help
        lose weight, food journal, fat loss diet, calories per day, 3 day diet,
        types of diets, healthy eating plan for weight loss, good diet plan for
        weight loss, healthy food plans for weight loss, diet eating plan,
        healthy foods for diet, healthy diet meal plan for weight loss, losing
        weight for men, healthy eating meal plan for weight loss, healthy diet
        plan, free weight loss plan, nutrition coaching, best meal plans for
        weight loss, free diet plan for weight loss, weight loss diet plan for
        women, best diet plan for weight loss, 30 day weight loss challenge,
        quick weight loss, weight loss meal plan for women, intermittent fasting
        for beginners, intermittent fasting hours, best diet program for weight
        loss, crash diet, calorie intake, best food plan for weight loss,
        fasting diet plan for weight loss, free nutrition plan for weight loss,
        best nutrition plan for weight loss, lose weight plan for free, fasting
        types, hours for intermittent fasting, weight loss expert, free eating
        plan to lose weight, free food plan for weight loss, food fasting, help
        you lose weight, best healthy diet plan for weight loss, weight
        maintenance calories, weight loss food plan for women, weight loss
        coach, best free weight loss apps, diet meal, healthy eating plan, good
        diet plans, best intermittent fasting schedule, fasting schedule,
        healthy weight loss, weight loss diets for women, recommended calorie
        intake, lose 20 lbs in 2 months, best apps for intermittent fasting,
        model diet, good free weight loss apps, best app for weight loss free,
        meal calorie counter, good intermittent fasting schedule, intermittent
        fasting diet plan, intermittent fasting diet, weight loss diet plan for
        men, 1200 calories a day, lose weight without exercise, food log, weight
        loss meal plans for men, weight loss at home, healthiest diet, food
        calculator, fasting diets for weight loss, average calorie intake, diet
        menu plan for weight loss diet programs, best calorie counting app,
        weight loss plan for women, intermittent fasting plan, lose weight in 30
        days, online weight loss program, intermittent fasting meal plan, lose
        weight in a month, weight loss programs that work, workout and meal
        plan, healthy foods to eat to lose weight, weight loss plans that work,
        workout meal plan, calories needed to lose weight, intermittent fasting
        program, fitness meal plan, workout diet plan, gym diet, calorie intake
        for women, 30 day weight loss, fasting hours, lose weight in 3 months,
        meal calorie calculator, best veggies for weight loss, best meal for
        weight loss, meal plan and workout plan, 3 month weight loss, one meal a
        day fasting, recommended calories per day, fitness food plan,
        intermittent fasting food plan, online weight loss plans, best foods for
        cutting, best apps for fasting, workout food plan, calories required to
        lose weight, recommended daily calorie intake, weight loss regimen for
        women, free weight loss programs, personal weight loss coach, i need to
        lose weight, free intermittent fasting plan, weight loss coach online,
        best weight loss plan, simple weight loss reviews, calories per day to
        lose weight, diet food for weight loss, best fasting for weight loss,
        intermittent fasting schedule for women, cutting diet plan, cutting meal
        plan, help me lose weight, 2500 calorie meal plan, foods that make you
        lose weight, lose weight in 2 months, different types of diets,
        intermittent fasting windows, 3 day diet menu, calories for women, best
        nutritionist, workout and diet plan for weight loss, workout diet plan
        for weight loss, intermittent fasting chart, count your calories, lose
        10 lbs in 2 months, basic diet plan, personal nutritionist and trainer,
        calories for women to lose weight, 6 month weight loss, ways to lose
        weight without working out, calorie intake for men, lose weight in 7
        days, to lose weight how many calories, best weight loss advice, lose
        100 lbs in 6 months, nutritionist food plan, workout and meal plan for
        weight loss, exercise and meal plan for weight loss, best weight loss
        programs for women, free fasting plan, 30 day meal plan for weight loss,
        diet plans for men, diet chart for weight loss, weight loss plan for
        men, fasting diet for women, 30 day diet challenge, best diet for men,
        weight loss programs for men, weight loss menu, calories to eat to lose
        weight, most effective diet, fastest way to lose weight in a month,
        fasting programs, dietitian for weight loss, healthy diet to lose
        weight, gym diet plan, weight loss for beginners, natural ways to lose
        weight, cutting weight diet, nutrition website, cutting diet for women,
        quickest way to lose weight in a month, personalized meal plan for
        weight loss, foods to eat on a diet, healthy weight loss per month, diet
        and exercise, best diet food for weight loss, customized meal plans for
        weight loss, fasting methods, calorie counter calculator, most
        successful diet, weight loss company, cutting calories, healthy fasting,
        intermittent fasting meaning, one meal a day diet, diet foods for weight
        loss, cutting meals, no calorie foods, calories per day women, 2 month
        weight loss, best fitness app for weight loss, daily calories for men,
        lose weight safely, i have to lose weight, best exercise app to lose
        weight, fasting window, 2500 calories diet plan, weight loss coach near
        me, nutrition coach near me, nutrition plan, diet and exercise plan,
        weight loss food plan, free calorie tracker app, best online weight loss
        program, free calorie tracker, fasting diet plan, simple meal plan to
        lose weight, easy diet plan for weight loss, 1200 calorie diet plan,
        best way to lose weight for women, workout and diet plan, weight loss
        nutritionist near me, best fasting schedule, easy weight loss meal plan,
        easy weight loss, good diets, simple diet plan for weight loss, fasting
        for beginners, types of intermittent fasting, intermittent diet,
        different diets, best diet meals, best diet tracker app, indian diet
        plan for weight loss, weight loss coaching near me, calorie chart, diet
        for gym beginners, daily calorie intake for women, fasting diet
        schedule, meal and exercise plan, fitness diet plan, different types of
        fasting, healthiest diet in the world, lose 20 lbs in 3 months, daily
        calories for women, diet and fitness plan, fastest way to lose 20 lbs,
        easiest meal plan for weight loss, workout and eating plan,
        nutritionists near me for weight loss, lose 10 lbs in one month, simple
        eating plan to lose weight, best diet plan, nutrition plan for weight
        loss, diet food plan, free diet plan, diets that work, best weight loss
        for women, personalized weight loss plan, best intermittent fasting,
        intermittent fasting schedule for weight loss, i need help losing
        weight, fasting schedule for weight loss, diet calculator, best app to
        help lose weight, good foods for weight loss, diet plan to reduce
        weight, weekly diet plan for weight loss, calories a day to lose weight,
        weekly meal plan for weight loss, weight loss diet for men, weight loss
        meals for men, eating for weight loss, 1200 calorie a day meal plan,
        calorie goal for weight loss, healthy ways to lose weight, lose weight
        in 3 days, healthiest weight loss diet, free fasting, custom weight loss
        plan, fasting program for weight loss, lose weight in one month, diet
        ideas for weight loss, custom nutrition plan, to lose weight how many
        calories should i eat, fastest way to lose 10 lbs, best weight loss
        programs near me, hcg diet plan, calorie intake calculator to lose
        weight, best apps to help you lose weight, free meal tracker, free diet
        tracker, diet plan for 1200 calories a day, lose 5 lbs in a month, meal
        plan personalized, online nutrition coach, diet plans for women, weight
        loss programs for women, free meal plans for weight loss, free weight
        loss apps no subscription, nutritionist for weight loss, simple diet
        plan, easy diet, fasting plan, calorie counter online, personal
        nutritionist, intermittent fasting for men, free food calorie
        calculator, free calorie calculator, balanced diet for weight loss, i
        want to lose weight, diet and exercise plan for weight loss, nutrition
        meal plan, ways to lose weight without exercise, 1200 calorie diet menu,
        healthy eating for weight loss, diet for men, fasting plan for weight
        loss, fat burning diet plan, list of diets, weight management programs,
        foods that promote weight loss, lose it app reviews, healthy calorie
        intake, lose weight without counting calories, real weight loss, easy
        1200 calorie meal plan, 1200 calorie diet meal plan, best thing to eat
        to lose weight, best cutting diet, gyms in near me, gyms gym, workout
        center near me, gym workouts near me, gym workout near me, workout gyms
        near me, gym and fitness centers near me, fitness clubs near me,
        badminton courts near by me, zumba classes in near me, near me zumba
        class, near me zumba classes, zumba fitness class near me, zumba class
        in near me, zumba classes near by me, zumba class near by me, workout
        for shoulder in gym, shoulder exercise at gym, gym exercises shoulder,
        shoulder gym exercises, gym exercise shoulder, shoulder exercise gym,
        gym exercises for shoulders, shoulder gym workouts, shoulder exercise
        for gym, shoulder workouts for gym, shoulders exercises gym, exercise
        for shoulders in gym, gym exercise for shoulders, shoulder exercise in
        gym, shoulder workout at the gym, exercises for shoulder in gym,
        exercises for shoulders in gym, shoulder exercises for the gym,
        shoulders exercises in gym, exercises in gym for shoulders, shoulder
        exercises for gym, shoulder workouts for the gym, exercise of shoulder
        in gym, shoulder workouts in gym, shoulders workout at gym, back
        exercise for gym, gym workout shoulder, gym exercises back, back
        exercise at the gym, back workouts in the gym, gym back exercise, gym
        exercises for shoulder, back exercises at the gym, back exercise in the
        gym, dumbbell dumbbell, exercise for back in gym, shoulders exercises at
        gym, gym training back, exercises for back in gym, fitness cardio
        workout, gym exercise of chest, workout exercises for chest, gym workout
        for chest, cardio exercise workouts, cardio exercise workout, workout
        cardio, workout chest exercises, gym exercise chest, workouts cardio,
        cardio workout moves, workout exercises cardio, work out chest, chest
        gym exercise, gym chest exercises, cardio workouts exercises, chest
        workout exercise, cardio workout exercise, chest chest workout, workout
        exercises chest, cardio exercises workout, chest exercises and workouts,
        exercise cardio workout, fitness chest, workout for the chest, exercise
        to chest, workouts chest, chest workout in gym, gym workouts for chest,
        exercise for cardio, exercises to workout chest, exercises in gym for
        chest, exercises chest, chest exercises in gym, exercises in cardio,
        exercises for cardio, best health clubs near me, best gym in near me,
        best gyms in near me, best health club near me, great gyms near me,
        gymnasium near me with fees, best gym close to me, gym fee near me, gyms
        near me fees, blood exam near me, women gym near me, workout for chest
        at gym, exercise in gym for chest, chest gym exercises, gym chest
        exercise, exercise for chest at gym, exercises for chest at gym, gym
        chest workouts, how to lose weight lose fast, chest exercise at gym,
        gyms for women near me, gyms near me for women, gyms near me ladies,
        workout of abs, fitness abs workout, abs exercise workouts, abs
        exercises workout, fitness abs exercises, exercise abs workout, workout
        abs exercises, workout exercise for abs, women fitness gym near me, ab
        workout exercises, gym woman near me, women fitness center near me,
        women's fitness gym near me, exercises to abs, gym ladies near me, near
        by gyms, workout for reduce belly fat, exercise for reduce belly fat,
        belly fat reduce workout, exercise for belly fat reduction, belly fat
        reduction workout, exercises for reduce belly fat, reduce belly fat
        workout, workout for reducing belly fat, exercises for belly fat reduce,
        workout back exercises, back exercise exercise, back exercises workout,
        exercise to reduce the belly fat, back exercise back, back and
        exercises, workout exercises back, back exercise workout, exercise for
        tummy fat reduction, belly fat loss exercises, reduction of belly fat
        exercises, to reduce tummy fat exercise, tummy fat reduction exercise,
        exercises to reduce fat belly, exercises that reduce belly fat, exercise
        for reduce tummy fat, tummy fat reducing exercise, belly fat losing
        exercises, workouts reduce belly fat, exercises to reduce the belly fat,
        workout exercises for back, workout exercise for back, belly fat losing
        exercise, exercise reduce belly fat, reducing tummy fat exercise,
        sixpack, exercises of back, exercise for reducing belly fat, exercises
        for belly fat reduction, workout s, fitness india, workout exercises for
        weight loss, exercise workouts for belly fat, workout exercise for
        weight loss, exercise workouts lose weight, fitness for belly fat,
        workout weight loss, stomach fat exercise, weight loss exercise workout,
        workout and weight loss, exercise workout for weight loss, exercises for
        fat stomach, exercise for fat belly, weight loss and workout, exercises
        for fat belly, workout belly fat, fat stomach workout, weight reduction
        exercises, belly fat and exercise, weight reducing exercise, belly fat
        stomach exercise, gym nearest, home exercise for abs, near me protein
        shop, ab workout exercises at home, exercise for abs at home, exercises
        for abs gym, abs workout in home, abs exercise in home, abs exercises
        for home, ab at home exercises, abs exercise at home, benefit of milk
        with turmeric, at home exercises abs, home workout exercises for abs, at
        home abs workout, workout at home abs, gym exercise for abs, home
        workouts for abs, abs workout for home, abs exercise for home, workout
        at home for abs, abs home workout, abs exercises home, home ab workout,
        exercise for abs at gym, gym abs exercises, abs home exercise, exercises
        for abs in gym, gym for workout, chest workouts in home, at home workout
        for abs, workout abs at home, exercise at home chest, workouts at home
        for abs, gym workouts for cardio, home exercise for chest, abs best
        workout at home, exercises chest at home, at home workout for chest,
        workout for chest at home, workout for chest home, workout chest at
        home, at home workouts abs, home workout exercises for chest, cardio
        exercise at gym, chest workout in home, home exercises for chest, at
        home chest exercise, exercise abs workout at home, chest workout for
        home, at home exercise for chest, exercise at home for chest, abs home
        workout exercises, exercise chest at home, chest training at home,
        workout at home for chest, chest workouts for home, at home workout abs,
        cardio workouts for gym, at home workouts for chest, workout at home
        chest, chest exercise for home, abs workout exercise at home, exercise
        for chest at home, abs workout exercises at home, exercises for chest at
        home, cardio workouts for the gym, chest workout from home, chest
        workout exercises at home, exercises at home for chest, workouts at home
        for chest, chest workout at home, cardio workout at the gym, tummy fat
        workout, ab workout home, cardio workouts gym, cardio gym exercises,
        workout and gym, chest exercises for home, cardio exercises at gym, gym
        workout for cardio, exercise of chest at home, at home exercises for
        chest, workouts for chest at home, cardio workout at gym, exercise
        workout gym, chest workout for at home, home exercises for abs, gym
        workouts cardio, how to fitness at home, gym workout gym, cardio
        exercise gym, gym cardio exercise, gym for trainers, fitness center near
        by me, fitness places near me, exercise facilities near me, fitness
        facilities near me, fitness gyms close to me, near gym at me, near to me
        gym, fitness gym close to me, fitness center close to me, work out
        facility near me, fitness in home, exercise facility near me, unisex gym
        near me, exercise workouts at home, nearest fitness center to me,
        workout from home, fitness health clubs near me, near me fitness gym,
        fitness center gym near me, home exercise at home, fitness at home
        exercises, workout exercise at home, home exercise workout, fitness
        place near me, exercise workout home, exercises workout at home,
        exercise at home workout, exercises home workout, workouts in home,
        workout on home, home exercise workouts, exercise home workout, workout
        at home exercises, workout at home exercise, exercise workout at home,
        workout for home, fitness for weight loss, exercise for home workout,
        homework workout, belly fat reduction exercise, workout for at home,
        best fitness gyms near me, best workout gyms near me, closest gym,
        nearby gym near me, near by gym near me, top rated gyms near me, how
        reduce thigh fat, workout for upper chest, exercises for upper chest,
        how to reduce the thigh fat, cheap workout places near me, gym near me
        with fees near me, fitness gyms, fitness & gym, fitness near me, fit gym
        near me, fitness near by me, boxing gym close to me, fitness closest to
        me, fitness gym, fitness gym near me, fitness and gyms near me, fitness
        near to me, zumba near me, zumba fitness near me, cheapest gym near me,
        zumba classes, zoomba classes, a fitness gym, weight loss exercise best,
        fitness first, exercise to reduce fat from thighs, exercise to reduce
        fat from thigh, exercises to reduce fat on thighs, best exercise for
        fitness and weight loss, exercises to reduce thigh fat, exercises for
        reducing thigh fat, exercise for thigh fat reduce, exercises for back at
        home, arms workout, exercise to reduce the thigh fat, exercise to reduce
        fat on thighs, exercise for reducing thigh fat, home exercises for the
        back, exercises for thigh fat reduction, best exercise for loss weight,
        thigh exercises to lose fat, at home exercises for back, at home
        exercise for back, back workout exercises at home, at home workout for
        back, exercise for thigh fat reduction, workout for back at home,
        exercise for back at home, home exercises shoulders, back home
        exercises, home workout shoulder, dumbbell workout exercise, shoulder
        workouts for home, home shoulder workout, home workout for shoulder, at
        home back workout, shoulder exercises in home, shoulder home workout,
        back exercises in home, home exercise for back, best weight reduction
        exercises, shoulder exercise at home, shoulders home workout, shoulder
        workout for home, weight loss best exercise, thigh fat loss exercise,
        home exercise for shoulder, exercises for your back at home, back
        exercises home workout, shoulder workout at home, best fitness for
        weight loss, shoulder exercises from home, zumba fitness classes, best
        workout for lose weight, shoulder exercise in home, shoulders exercises
        at home, exercises for shoulder at home, workout for shoulder at home,
        shoulders workout at home, best weight loss workout, thighs fat loss
        exercise, at home workouts for back, at home back exercises, shoulder
        workout in home, shoulder exercise home, back workout in home, thigh fat
        loss exercises, back workouts for home, back workout for home, home
        exercises for shoulders, back exercise for home, home workout for
        shoulders, back at home exercise, shoulder exercises for home, back
        exercise in home, arm workout exercises, shoulder exercises home, home
        exercises for shoulder, 6 pack body, workout exercise for arms, fitness
        and strength training, near gym centres, pregnancy yoga classes near me,
        near gym centre, nearby gyms near me, nearby gym centre, nearest gym
        near me, nearest fitness center near me, nearest gym centre, personal
        fitness trainer near me, nearby gym to me, personal physical trainer
        near me, fitness personal trainer near me, private fitness trainer near
        me, fitness freaks, personal trainer near me, personal fitness coach
        near me, trainer near.me, personal instructor near me, private trainer
        near me, personality trainer near me, physical trainers near me,
        physical trainer near me, personal workout trainer near me, weight loss
        exercises for women at home, weight loss workout for women at home,
        fitness trainer near me, professional trainer near me, near me personal
        trainer, fitness instructor near me, weight loss exercise for female at
        home, personal fitness instructor near me, exercise for weight loss
        women at home, women weight loss exercises at home, weight loss exercise
        at home for women, exercise for weight loss for women at home, exercises
        for weight loss at home for female, workouts images, exercises to reduce
        fat in thighs, exercise for weight loss for female at home, weight loss
        workouts for women at home, at home weight loss workouts for women,
        exercise for women to lose weight at home, home workout for weight loss
        female, how to reduce belly fat in exercise, how to exercise to reduce
        belly fat, lower chest workout exercises, arms workout in gym, workout
        for 6 pack, workout for six pack, arms gym workout, 6 pack exercise,
        exercises six pack, arm gym workout, water cleanse recipe, arms workout
        gym, arm exercise gym, exercises 6 pack, how to reduce the belly fat
        with exercise, exercises for six pack, arms exercises in gym, exercise
        for arms in gym, exercises for 6 pack, home workouts to lose weight for
        women, how to reduce belly fat with exercise, trainer near me, how to
        reduce belly fat exercise, lean body for man, near me gym center,
        protein chapati, boxing coaches near me, lean body men, lean body for
        men, 6pack, near me gym near me, fitness club, fitness cardio workout at
        home, lean body male, only ladies gym near me, best exercises for reduce
        belly fat, swimming classes near me with fees, gym near me only for
        ladies, gyms only for ladies near me, exercises shoulders, lean man
        body, workouts at home cardio, best exercise reduce belly fat, cardio
        workout for at home, exercises for fat belly loss, resistance training
        exercises at home, best exercise for reducing belly fat, best exercises
        for reducing belly fat, strength training home workout, cardio exercises
        at home, chest exercises at home, fitness upper body workout, upper body
        training, home exercises cardio, exercises upper body, workout home
        cardio, workout of shoulder, home workout strength, workouts for
        stomach, protein powder homemade, homemade protein powder, home made
        protein powder, homemade protein supplement, protein homemade powder,
        nearby gym center, near gym center, gym near me with personal trainer,
        gyms near me with personal trainer, gym near me with trainer, fitness
        centers near, gym with a personal trainer near me, gyms with trainers
        near me, gym with personal trainers near me, gyms with personal trainer
        near me, personal trainer gyms near me, gym with instructor near me,
        trainer gym near me, gym with personal trainer near me, toning body,
        fitness center, personal physical trainer, fitness center near, fitness
        hub, fitness c, exercise to reduce belly fat for female at home,
        exercises to reduce belly fat for female at home, lose belly fat workout
        for women at home, gym trainer near me, gymnastic trainer near me, top
        workout programs, gym protein, best exercise for reduce belly fat,
        exercises for lower belly fat, exercises lower belly fat, home 6 pack
        workout, recipe bhindi masala, photos of fitness, gyms india, workout
        places around me, fitness center near my location, fitness studio near
        me, gyms fitness, workout gyms, gym for fitness, classes near me
        fitness, gyms near my location, gym centres, gym centre, gym india,
        exercise studios near me, gym nearby my location, gym near me within
        800m, exercise studio near me, workout studios near me, closest gym to
        my location, gym near me within 400m, gym around me, fitness gym near my
        location, near my location gym, classes fitness near me, gyms nearby
        near me, workout studio near me, gym near my location, gyms nearby my
        location, fitness in gym, fitness classes close to me, gym nearby near
        me, fitness app, gym indian, gym website, fitness centres in india,
        fitness center in india, gyms for fitness, fitness centre in india,
        fitness classes near me, zumba classes near me only for ladies, fitness
        gym website, nearby studios, fitness application, six pack exercise in
        home, shoulder back exercises, dumbbell workout at home, exercise for
        lower body, checkpost near me, ladies weight loss workout, how to make
        protein powder at home, gyms around me, how to prepare protein powder at
        home, how to make protein powder in home, how make protein powder at
        home, workout programs at home, best gym, exercise to reduce weight at
        home, gym prices near me, best for gym, gym near me rates, near by gym
        centre, weight loss exercise in home, weight loss exercise for home,
        weight loss home exercise, weight loss at home exercise, gym near me and
        prices, gyms cost near me, weight loss in home exercise, gyms near me
        and prices, weight loss at home exercises, weight loss exercises for
        home, gym pricing near me, gym near me prices, gym cost near me, gym
        near me with prices, gym near me price, home weight loss exercise,
        weight losing exercises at home, exercises to reduce weight at home,
        weight loss exercises in home, weight loss exercises home, at home
        exercise for weight loss, how protein powder is made, weight loss
        exercises gym, weight loss fast exercise, losing weight exercises at
        home, lose weight home exercise, at home exercise weight loss, weight
        loss exercise from home, lose weight exercise home, weight losing
        exercise at home, weight loss home exercises, fast lose weight exercise,
        lose weight by exercising at home, lose weight with exercise at home,
        how the protein powder is made, lose weight at home exercise, at home
        exercises for weight loss, belly reduce workout, fitness exercises,
        weight loss exercises fast, fast weight losing exercise, nearby gyms for
        ladies, fast weight loss exercise, fastest weight loss exercise, gym
        workout images, gym workout photos, workout gym images, gym images hd,
        gym workouts images, nearest swimming classes, dumbbell workout, natural
        protein supplement, natural protein powder, near by gym in my location,
        best gym near me with fees, best gyms for women near me, best gym in
        india, best gym for women near me, protein powder natural, khichdi
        calories, gym fee, gym fees, fitness centers and gyms, protein
        supplements natural, gold gym in janakpuri, fit app, top rated gym near
        me, women's belly fat workout, best gym near me for ladies, india best
        gym, cheap gyms near me, belly fat workout for women, great chest
        workout at home, workouts at home for belly fat, exercise for belly fat
        for woman, best gym for ladies near me, exercise for lose thigh fat,
        perfect chest workout at home, belly fat exercise women, gym membership,
        gyms near me for free, gyms in, gym center, gym member, membership for
        gym, gym near me for free, free gym near me, gyms for free near me, gym
        for free near me, home fitness weight loss, surat gyms, surat gym, gym
        surat, gyms surat, weight reduction exercises at home, gyms in surat,
        membership of gym, near by me gym, exercise for weight loss in home,
        workout for weight loss at home, home weight loss workout, exercising at
        home for weight loss, gyms open near me, near gym by me, weight reducing
        exercises at home, exercise at home weight loss, workout home weight
        loss, fitness at home to lose weight, exercises at home for weight loss,
        weight loss workout home, exercise to weight loss at home, home exercise
        to reduce weight, weight reducing exercise at home, workout at home to
        lose weight, workout at home for weight loss, fitness at home for
        beginners, home workout to reduce weight, home workout weight loss,
        exercises at home for beginners, exercise for weight reduction at home,
        exercise weight loss at home, home workout lose weight, weight loss at
        home workout, workout to lose weight at home, beginner exercises at
        home, weight loss workout for home, gyms near me that are open, weight
        loss workouts for home, workouts for weight loss at home, lose weight
        workout at home, at home workout for weight loss, workouts at home for
        weight loss, workout at home weight loss, gym near me open now, workouts
        for home to lose weight, beginners exercise routine at home, exercise
        workouts at home to lose weight, workout at home for beginners, weight
        loss home workout, exercises for weight loss at home, gyms near me free,
        exercise for lose weight at home, gym open near me, at home workouts for
        weight loss, zumba dance near me, coffee for pre workout, exercise at
        home beginners, zumba dance studio near me, butt reduction exercises,
        gym opening near me, gym in bandra west, at home weight loss workout,
        workout beginners at home, exercise to reduce the buttocks, home workout
        to lose weight, weight loss routine at home, beginner exercise at home,
        at home beginners workout, gym near me open, exercise and lose weight at
        home, at home workout for beginner, exercise at home for weight loss,
        exercises to reduce butt, exercise to reduce butt, reducing buttocks
        exercise, exercise at home for beginners, workout at home lose weight,
        home exercises to reduce weight, home workout plans, chest and back
        exercises, at home exercises for beginners, fat burning chest exercises,
        workout at home beginner, loss weight workout at home, what exercise
        burns the most belly fat for female, gym in surat, exercise lose weight
        at home, workout for losing weight at home, at home exercise for
        beginners, workout to reduce buttocks, exercise routines for beginners
        at home, new gym near me, buttocks reduce exercise, exercise to lose
        weight at home, buttock reduce exercise, fitness routine for beginners
        at home, butt reduce exercise, open gym near.me
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <SimpleHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Offline Clinical Diet Program details. "
        }
        options={{ pageRef: true }}
      />
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
                          "/assets/images/fwg/rtp-three.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("_mzIsKUkcFY")}
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
                        <h2 className="h6-fs course-title">Program Info</h2>
                        <ul className="course-list">
                          {OfflineClinicalDietProgramData?.info1.map((info) => (
                            <li>
                              <i className={info.icon}></i>
                              {info.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-5 position-relative">
                <div className="black-before-2">
                  <OnlineProgramFormFwg
                    programData={OfflineClinicalDietProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Diploma In Personal Training Course."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Transformation />
      <section className="mt-5 studentsreview-1 d-none d-md-block">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-5">
                <div className="covid text-center">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
                <div className="col-md-12">
                  <div className="world-ca d-none d-md-block">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/travel.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div>
              </div>
              <div>
                <OwlCarousel
                  loop
                  id="owl-active"
                  className="owl-carousel owl-theme mt-4"
                  navText={[
                    '<i class="fas fa-arrow-left"></i>',
                    '<i class="fas fa-arrow-right"></i>',
                  ]}
                  dots={false}
                  nav={true}
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
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/daksha-before.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div>

                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss-4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-5.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss-2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-6.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-7.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 studentsreview-1 d-block d-md-none">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-2">
            <div className="pb-5">
              <div className="py-md-5">
                <div className="covid text-center">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
                <div className="col-md-12">
                  <div className="world-ca d-none d-md-block">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-7.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/daksha-before.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss-2.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>

                {/* <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-4.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />


                </div> */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss-4.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-5.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                {/* <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-1.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div> */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-6.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-7.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWork />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span style={{ color: " #00afef", margin: "0px" }}>
                  scientific result of our
                </span>{" "}
                client (by clinical reports)
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="d-md-block my-md-5">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                nav={false}
                id="owl-reports"
                className="owl-carousel-reports owl-theme"
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
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/thyroid-before.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/thyroid-after.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/ushaben-before.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/ushaben-after.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgot-sgpt-before.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgot-sgpt-after.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/vaibhav-before.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/vaibhav-after.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Heal your diseases with
                <span className="m-0 text-blue-color"> our clinical diets</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="youtube-video">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                nav={false}
                id="owl-demo"
                className=" owl-theme"
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
                  <a
                    onClick={() => handleClick("fatty-lvr")}
                    id="fattys"
                    aria-label="Fg Group"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    onClick={() => handleClick("sgpt")}
                    id="sgpts"
                    aria-label="Fg Group"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/healing_and_care15.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    onClick={() => handleClick("ketogenic")}
                    id="keto"
                    aria-label="Fg Group"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/beginning-keto-diet.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="cup">
                  <a
                    onClick={() => handleClick("cupping")}
                    id="cup"
                    aria-label="Fg Group"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/cupping.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                {/* <div className="item" id="anabolic">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/q_a_series1.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="weight-l">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/child.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="thyro">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/thyroid.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="diabets">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/diabetes-1.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="knee">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/knee-pain.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="back">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/back-pain.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="shoulders">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/shoulder-pain.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="kidney">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/kidney.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="acidity-pain">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/acidity.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="ulcers">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/ulcer.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="erectile-dysfunction">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/erectile.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div>
                <div className="item" id="varicose">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/varicose.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </a>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section
        id="fatty-lvr"
        style={{ display: activeElement === "fatty-lvr" ? "block" : "none" }}
      >
        <section className="margintop">
          <div className="container-fluid">
            <div className="container blog2">
              <div className="describe demoo mt-3 mt-md-5">
                <h2 className="h2-fs text-center text-333-color">
                  <span className="m-0 text-blue-color">
                    What to Know About{" "}
                  </span>
                  Fatty Liver Disease
                </h2>
              </div>
              <div className="thm-bg-clr dector"></div>
              <div className="row align-items-center">
                <div className="col-lg-6 d-block d-lg-none mt-3">
                  <div className="ply1">
                    <div className="ply1 black-before">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="transform your body in 90 days"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/fatty.webp"
                        }
                      />
                      <div className="video-btn">
                        <a
                          onClick={() => openVideoModal("6uyrkB9iPzQ")}
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
                </div>
                <div className="col-lg-6">
                  <div className="describe">
                    <p>
                      There is a disease that is affected to around 30% of the
                      population of India. And the disease is Fatty Liver, there
                      are lots of reasons for the fatty liver but the main
                      reasons are eating junk foods and drinking alcohol more
                      frequently. Fatty liver occurs when too much fat builds up
                      in liver cells. Although it is normal to have a tiny
                      amount of fat in these cells, the liver is considered
                      fatty if more than 5% of it is fat. If you are suffering
                      ....
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block mt-4 mt-md-0">
                  <div className="ply1 black-before">
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="transform your body in 90 days"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                      }
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("6uyrkB9iPzQ")}
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
              </div>
              <div className="row align-items-center mt-md-5 mt-3">
                <div className="col-lg-6">
                  <div className="ply-1 child-img">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy img-fluid"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/fatty-liver-1.webp"
                      }
                      alt="fatty liver"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mt-md-3">
                  <div className="Info">
                    <div className="tabata farttys">
                      <h2 className="h2-fs mt-3 mt-md-0 mb-3 mb-md-0">
                        Fatty Liver Disease: Symptoms, Causes &amp; Prevention
                      </h2>
                      <p className="mt-0">
                        The problem of liver disease signifies that you just
                        have unwanted or further fat in your liver. The
                        condition is additionally related to many alternative
                        medical problems like sort a pair of polygenic
                        disorders, obesity, and hypoglycemic agent resistance
                        disorder. Normally, your liver cells could have some
                        quantity of fat, however, if the quantity of fat will
                        increases, it will cause some menacing things. Left
                        untreated, it will cause severe liver issues likewise. a
                        person has to remember the causes, symptoms, and
                        treatment of liver disease.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2
                      className="my-3 h5-fs"
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: "700",
                        textTransform: "capitalize!important",
                      }}
                    >
                      Understanding the liver disease
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        In medical terms, liver disease is understood as viscus
                        steatosis. The liver is that the second largest organ
                        within the flesh and is to blame for process nutrients
                        from food and drinks you ingest and for filtering out
                        harmful substances from the body. once over 5-10% of the
                        liver is fat, it's thought about to be fatty.
                      </p>
                      <p className="mt-3">
                        <b>
                          The className of liver disease will be diversified
                          into 2 varieties,{" "}
                        </b>
                      </p>
                      <p className="mt-3">
                        <ul>
                          <li>Alcoholic disease (AFLD)</li>
                          <li>Nonalcoholic disease (NAFLD)</li>
                        </ul>
                      </p>
                      <p className="mt-3">
                        Based on the most cause behind the matter.
                      </p>
                      <p className="mt-3">
                        This sickness causes severe injury to the liver,
                        generating its unable to get rid of toxins and turn out
                        gall because it is meant to. If your liver has an
                        excessive amount of fat in it, it will cause scarring
                        and inflammation, and eventually, liver failure.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid">
            <div className="container blog2">
              <div className="describe demoo mt-5">
                <h2 className="h2-fs text-center text-333-color">
                  <span className="m-0 text-blue-color">Symptoms Of</span> Liver
                  Disease
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-5"></div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ply-1 child-img trns-off">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/fatty-liver-2.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Fg Group"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tabata mt-lg-5 mt-2">
                    <h2
                      className="mt-lg-5 h5-fs"
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: "700",
                        textTransform: "capitalize!important",
                      }}
                    >
                      Symptoms of liver disease
                    </h2>
                    <p className="mt-3">
                      <b>
                        For some, there aren't any noticeable symptoms of liver
                        disease. Regardless, once the symptoms do show up, they
                        include:
                      </b>
                    </p>
                    <p className="mt-3">
                      <ul>
                        <li>Tired feeling and weakness</li>
                        <li>
                          Mild pain within the abdomen, towards the proper of
                          the middle
                        </li>
                        <li>
                          Increased liver catalyst levels (like AST and ALT)
                        </li>
                        <li>Elevated levels of hypoglycemic agent and lipid</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tabata mt-3">
                <h2 className="h2-fs ml-3 text-center">
                  What Causes liver disease
                </h2>
                <p className="mt-3 ml-4">
                  <b>
                    Some factors could contribute to the event of liver disease,
                    including:
                  </b>
                </p>
                <p className="mt-3"></p>
                <ul>
                  <li>
                    Liver fat storage is supported by inferior inflammation,
                    which is caused by fleshiness.
                  </li>
                  <li>
                    People with excessive belly fat area unit a lot of at risk
                    of obtaining a liver disease than others.
                  </li>
                  <li>
                    People with sort a pair of polygenic disorder or metabolic
                    syndrome area unit proof against the hypoglycemic agent or
                    have high levels of a hypoglycemic agent, each of that
                    promotes fat storage within the liver.
                  </li>
                  <li>
                    Consuming refined carbs additionally will increase liver fat
                    storage, particularly within the case of rotund people.
                  </li>
                  <li>
                    Due to the high fruit sugar concentration, frequent
                    consumption of honied beverages like soda or energy drinks
                    can even push liver fat accumulation. this can be because of
                    the high fruit sugar concentration.
                  </li>
                  <li>
                    Impaired gut health, leaky gut, or imbalances in gut
                    bacteria can even contribute to the event of NAFLD.
                  </li>
                  <li>
                    Some less-common causes embrace viral hepatitis, speedy
                    weight loss, exposure to sure toxins, genes, and also the
                    aspect effects of some medicines.
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        id="sgpt"
        style={{ display: activeElement === "sgpt" ? "block" : "none" }}
      >
        <section className="margintop">
          <div className="container-fluid pt-3">
            <div className="container blog2">
              <div className="">
                <div className="describe demoo mt-3 mt-md-5">
                  <h2 className="h2-fs text-center text-333-color">
                    <span className="m-0 text-blue-color">
                      Everything You Need To Know{" "}
                    </span>
                    About SGPT & SGOT Test
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
                <div className="row align-items-center">
                  <div className="col-lg-6 d-block d-lg-none mt-3">
                    <div className="ply1 ">
                      <div className="ply1 black-before">
                        <img
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="transform your body in 90 days"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/healing_and_care15.webp"
                          }
                        />
                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("oNtDaU2L4gk")}
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
                  </div>
                  <div className="col-lg-6">
                    <div className="describe">
                      <p>
                        The Bottom Line Of A Healthy Body May Be A Healthy
                        Liver. The Liver Assists In A Very Heap Of Body
                        Functions And Conjointly Flushes Out Toxins And Helps In
                        Metabolism. Taking Care Of The Liver Becomes Simple
                        After You Build A Healthy Mode Of Your Habit. Following
                        A Healthy Mode Keeps You Match And Conjointly Keeps Your
                        Liver Removed From Diseases. Everything That You Just
                        Consume, As Well As Medicines And Alcohol, Is Filtered
                        By Your Liver. Hence...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block mt-4 mt-md-0">
                    <div className="ply1 black-before">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="transform your body in 90 days"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/healing_and_care15.webp"
                        }
                      />
                      <div className="video-btn">
                        <a
                          onClick={() => openVideoModal("oNtDaU2L4gk")}
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
                </div>
                <div className="row mt-md-5 mt-3">
                  <div className="col-lg-12">
                    <div className="tabata mt-5">
                      <h2 className="h2-fs">What Is SGPT & SGOT Test</h2>
                      <p className="mt-3">
                        The bottom line of a healthy body may be a healthy
                        liver. The liver assists in a very heap of body
                        functions and conjointly flushes out toxins and helps in
                        metabolism. Taking care of the liver becomes simple
                        after you build a healthy mode of your habit. Following
                        a healthy mode keeps you match and conjointly keeps your
                        liver removed from diseases. Everything that you just
                        consume, as well as medicines and alcohol, is filtered
                        by your liver. Hence, it's a crucial organ for the body
                        to perform properly. hindrance is usually higher than
                        cure, therefore taking care of your liver will assist
                        you in avoiding treatments and complications. SGPT &
                        SGOT square measure the enzymes made by your liver & its
                        cells. High SGPT/SGOT is a sign of liver cell injury,
                        they have to be detected through regular health
                        checkups.
                      </p>
                      <p className="mt-3">
                        Follow these mode habits to stay your liver and your
                        body in their healthiest state.
                      </p>
                      <p className="mt-3">
                        Keep a tab on everything you consume increase vitamin D
                        in your diet: vitamin D helps in preventing harm to your
                        liver and reducing SGPT levels. Oranges, soy milk,
                        mushrooms, apples, eggs, fortified cereals, tofu, dairy
                        farm merchandise, cod liver oil, oysters, and
                        inexperienced bifoliate vegetables square measure
                        sensible sources of vitamin D. Eat nutrient-rich food:
                        Organic, plant-based diet is that the best for your
                        liver because it helps in its functioning. Avoid
                        overwhelming an excessive amount of salt and sodium-rich
                        foods.
                      </p>
                      <p className="mt-3">
                        Eat additional vegetables & fruits: Fruits and
                        vegetables that square measure high in antioxidants,
                        like kiwi, pomegranate, papaya, carrot, spinach, bell
                        pepper square measure sensible for your liver's health.
                      </p>
                      <p className="mt-3">
                        Avoid deep cooked & junk foods: It's higher to be a
                        feeder and prevent meat, chicken, pork, cheese, bacon,
                        effervescent drinks, and butter.
                      </p>
                      <p className="mt-3">
                        Restrict alcoholic beverages & quit smoking: Alcohol is
                        that the most harmful factor for the liver. overwhelming
                        vasoconstrictor of any kind will absorb toxins like
                        vasoconstrictor and ammonia into your blood. The liver
                        features a powerful time filtering them and therefore
                        turning into weak.
                      </p>
                      <p className="mt-3">
                        Don't self-medicate: Metabolizing medication is simply
                        too abundant work for the liver, thus having medicines
                        not prescribed by a professional medical man will do
                        additional hurt than sensible.
                      </p>
                      <h2
                        className="mt-5 h5-fs"
                        style={{
                          fontFamily: "Nunito sans-serif",
                          fontWeight: "700",
                          textTransform: "capitalize!important",
                        }}
                      >
                        Exercise often
                      </h2>
                      <p className="mt-3">
                        Regular exercise is imperative for maintaining a healthy
                        liver. It reduces the strain on your liver and will
                        increase your energy levels. Exercise conjointly aids in
                        preventing avoirdupois that may be a risk issue for
                        liver diseases.
                      </p>
                    </div>
                    <div className="tabata mt-5">
                      <div className="card border border-success">
                        <div className="card-header border-bottom alert-success border-success">
                          <h2
                            className="my-3 h5-fs"
                            style={{
                              fontFamily: "Nunito sans-serif",
                              fontWeight: "700",
                              textTransform: "capitalize!important",
                            }}
                          >
                            Go for regular preventive health checkups
                          </h2>
                        </div>
                        <div className="card-body">
                          <blockquote className="blockquote mb-0">
                            <p className="mt-3">
                              Liver dysfunctions and SGPT/SGOT levels don't
                              continually show symptoms, therefore until the
                              time you get to understand concerning any harm to
                              your liver, it's already too late. It ends up in
                              high treatment prices and several cases
                              life-fatalities.
                            </p>
                            <p className="mt-3">
                              SGPT & SGOT square measure the enzymes made by the
                              liver & by different kinds of cells. High SGPT or
                              SGOT is typically a sign of liver cell injury.
                            </p>
                            <p className="mt-3">
                              Adopting healthy modifications besides a specially
                              designed diet for healthy liver is that the best
                              resolution to the question of the way to lower
                              SGPT & SGOT.
                            </p>
                            <p className="mt-3">
                              This same diet is often the solution if you're
                              curious about the way to lower SGOT. drill on top
                              of mentioned sensible habits to guard your liver
                              against being broken.
                            </p>
                            <p className="mt-3">
                              However, obtaining your liver medical checkup done
                              often helps in avoiding health complications. Get
                              your check done by a sure care organization.
                            </p>
                            <p className="mt-3">
                              The bottom line of a healthy body may be a healthy
                              liver. The liver assists in a very heap of body
                              functions and conjointly flushes out toxins and
                              helps in metabolism. Taking care of the liver
                              becomes simple after you build a healthy mode of
                              your habit. Following a healthy mode keeps you
                              match and conjointly keeps your liver removed from
                              diseases. Everything that you just consume, as
                              well as medicines and alcohol, is filtered by your
                              liver.
                            </p>
                            <p className="mt-3">
                              The liver will regenerate itself once it's healing
                              from a malady. However, if it suffers a major
                              injury, it loses its ability to regenerate, and
                              might additionally end in liver failure.
                              Preventive health checkups facilitate in catching
                              such complications at associate early stage, once
                              there's an occasion for treatment and saving a
                              life.
                            </p>
                            <p className="mt-3">
                              <b>
                                Knowing the progression of the disease will
                                assist you in understanding why preventive care
                                is thus important:
                              </b>
                            </p>
                            <p className="mt-3">
                              <ul>
                                <li>
                                  Inflammation - There aren't any signs that
                                  indicate it's attributable to disease that's
                                  why preventive screening tests area unit quite
                                  essential.
                                </li>
                                <li>
                                  Fibrosis - long inflammation ends up in
                                  pathology. correct treatment will cure this
                                  condition.
                                </li>
                                <li>
                                  Chronic liver disease/Cirrhosis - Severe sort
                                  of pathology that may more cause cancer of the
                                  liver.
                                </li>
                                <li>
                                  Liver Cancer - Early detection will aid in
                                  forming a treatment arrangement that helps to
                                  get over cancer of the liver.
                                </li>
                                <li>
                                  Liver failure - Advanced stage of disease
                                  wherever the liver loses its functions. A
                                  liver transplant is the solely survival
                                  possibility.
                                </li>
                              </ul>
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div className="tabata mt-5">
                      <h2 className="mt-5 h2-fs">
                        Screening tests for liver disease:
                      </h2>
                      <p className="mt-1">
                        - Liver operate panel (liver panel)
                      </p>
                      <p className="mt-1">- Liver protein tests</p>
                      <p className="mt-1">- Antibody tests</p>
                      <p className="mt-1">- Computed tomography (CT) scan</p>
                      <p className="mt-1">- Ultrasound</p>
                      <p className="mt-1">- Elastography</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop d-block d-md-none">
          <div className="container-fluid bg-light pt-1">
            <div className="container blog2">
              <div className="d-flex justify-content-center">
                <div className="col-lg-10">
                  <div className="tabata mt-4">
                    <h2 className="h2-fs">Recovered Patients from SGPT SGOT</h2>
                    <div id="owl-recoverd" className="owl-carousel owl-theme">
                      <div className="item mx-3">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgpt-group-1.webp"
                          }
                          alt="weight loss transformation"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgpt-group-2.webp"
                          }
                          alt="weight loss transformation"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgpt-group-3.webp"
                          }
                          alt="weight loss transformation"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgpt-group-4.webp"
                          }
                          alt="weight loss transformation"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/sgpt-group-5.webp"
                          }
                          alt="weight loss transformation"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                        />
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
              <div className="tabata mt-5">
                <div className="card border border-success">
                  <div className="card-header border-bottom alert-success border-success">
                    <h2 className="h2-fs">
                      Who wants preventive screening for liver disease?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <ul>
                          <li>
                            Those who have health conditions like polygenic
                            disease, high triglycerides, high blood pressure,
                            vesica malady, or anemia.
                          </li>
                          <li>
                            If experiencing the signs of a liver disfunction.
                          </li>
                          <li>Heavy alcohol drinkers.</li>
                          <li>Those who have a case history of the disease.</li>
                          <li>
                            Those who area unit already diagnosed with the
                            disease.
                          </li>
                          <li>
                            Liver diseases cannot solely cause you to be
                            terribly sick however can also be traumatizing and
                            threatening for your life. distinguishing these
                            risks at associate early stage will facilitate in
                            providing applicable treatment and save the liver
                            functions.
                          </li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2 className="h2-fs">
                      What area unit the traditional levels of SGOT and SGPT?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <ul>
                          <li>
                            Normal levels of SGPT: 7-56 units/liter of body
                            fluid.
                          </li>
                          <li>
                            Normal levels of SGOT: 5-40 units/liter of body
                            fluid.
                          </li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-success">
                  <div className="card-header border-bottom alert-success border-success">
                    <h2 className="h2-fs">
                      what is the elevated level of SGOT and SGPT?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        SGPT is a gift preponderantly within the liver and once
                        it's created in excess, it leaks into the blood. the
                        traditional vary of SGPT is regarding seven to fifty-six
                        units/liter of body fluid. a really high level of SGPT
                        within the blood indicates some injury or problems
                        associated with the liver.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2 className="h2-fs">
                      What area unit the causes of high SGPT levels?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <b>
                          Following area unit a number of conditions and
                          diseases inflicting inflated SGPT levels:
                        </b>
                      </p>
                      <p className="mt-3">
                        <ul>
                          <li>Drinking excess alcohol</li>
                          <li>Acute hepatitis A and B</li>
                          <li>Celiac malady (Autoimmune disorder)</li>
                          <li>Heart attack</li>
                          <li>Diabetes</li>
                          <li>Obesity</li>
                          <li>Hepatitis C</li>
                          <li>
                            Infectious kissing disease mononucleosis caused by
                            Epstein-Barr virus
                          </li>
                          <li>Gallbladder inflammation (cholecystitis)</li>
                          <li>
                            Dermatomyositis (Inflammation of skin and muscles)
                          </li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-success">
                  <div className="card-header border-bottom alert-success border-success">
                    <h2 className="h2-fs">
                      What area unit symptoms of high SGPT levels?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <b>
                          The most common symptoms of high SGPT level include:
                        </b>
                      </p>
                      <p className="mt-3">
                        <ul>
                          <li>Nausea and forcing out</li>
                          <li>Weakness or fatigue</li>
                          <li>Swelling in legs</li>
                          <li>Shortness of breath</li>
                          <li>Excessive bruising or hemorrhage</li>
                          <li>Jaundice</li>
                        </ul>
                      </p>
                      <p className="mt-3">
                        <b>
                          If you discover these symptoms, you ought to at once
                          consult your doctor for more investigations.
                        </b>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2 className="h2-fs">
                      What area unit the causes of high SGOT levels?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <b>
                          The high SGOT levels will indicate the subsequent
                          disorders:
                        </b>
                      </p>
                      <p className="mt-3">
                        <ul>
                          <li>pancreatitis</li>
                          <li>heart injury, probably from an attack</li>
                          <li>muscle injuries</li>
                          <li>kidney malady</li>
                          <li>liver injury from toxins like excess alcohol</li>
                          <li>acute liver disease</li>
                          <li>gallbladder malady</li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5">
                <div className="card border border-success">
                  <div className="card-header border-bottom alert-success border-success">
                    <h2 className="h2-fs">
                      Which diseases Cause elevated SGOT and SGPT within the
                      blood?
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        <b>
                          The most common diseases that cause abnormally high
                          SGOT and SGPT are:
                        </b>
                      </p>
                      <p className="mt-3">
                        <ul>
                          <li>hepatitis A or B or C</li>
                          <li>chronic hepatitis</li>
                          <li>
                            cirrhosis of the liver (fibrosis of liver
                            attributable to prolonged inflammation of the liver)
                          </li>
                          <li>liver injury from alcohol</li>
                          <li>
                            hemochromatosis (a genetic condition caused because
                            of long-standing liver damage), and reduced blood
                            flow to the liver (from shock or heart failure).
                          </li>
                        </ul>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        id="ketogenic"
        style={{ display: activeElement === "ketogenic" ? "block" : "none" }}
      >
        <section className="margintop">
          <div className="container-fluid">
            <div className="container blog2">
              <div className="describe demoo mt-3 mt-md-5">
                <h2 className="h2-fs text-center text-333-color">
                  truth about
                  <span className="m-0 text-blue-color"> knee pain</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector"></div>
              <div className="row">
                <div className="col-12">
                  <div className="row align-items-center mt-4">
                    <div className="col-lg-6 d-block d-lg-none mt-3">
                      <div className="ply1">
                        <div className="ply1 black-before">
                          <img
                            width="100%"
                            style={{ borderRadius: "10px" }}
                            alt="transform your body in 90 days"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/knee-pain.webp"
                            }
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("KmaS_plKfAo")}
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
                    </div>
                    <div className="col-lg-6">
                      <div className="describe">
                        <p className="mt-3 mt-lg-0">
                          Severe knee pain can occur in people of all ages for a
                          variety of reasons. Knowing the cause of severe knee
                          pain can help a person seek treatment, relieve
                          symptoms, and regain mobility. The knee is the joint
                          between the upper and lower leg bones. It allows the
                          leg to bend and provides stability to support the
                          weight of the body. The knee supports movements such
                          as walking, running, crouching, jumping, and turning.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block mt-4 mt-md-0">
                      <div className="ply1 black-before">
                        <img
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="transform your body in 90 days"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/knee-pain.webp"
                          }
                        />
                        <div className="video-btn">
                          <Link
                            to="https://youtu.be/KmaS_plKfAo"
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
                  </div>
                </div>
              </div>
              <div className="row align-items-center mt-md-5 mt-3">
                <div className="col-lg-6">
                  <div className="ply-1 child-img">
                    <img
                      className="lazy img-fluid"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/chronic-knee-pain.webp"
                      }
                      alt="Fg Group"
                    />
                  </div>
                </div>
                <div className="col-lg-5 mt-md-3">
                  <div className="Info">
                    <div className="tabata farttys">
                      <h2 className="mt-3 h5-fs">
                        Several parts help where the knee pain does its job,
                        including:
                      </h2>
                      <ul className="mt-3 pl-3">
                        <li>bones</li>
                        <li>cartilage</li>
                        <li>muscles</li>
                        <li>ligaments</li>
                        <li>tendons</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-4 ml-3">
                  <div className="tabata farttys">
                    <p className="">
                      Any of these parts are susceptible to disease and injury,
                      which can lead to severe knee pain.
                    </p>
                    <h2 className="h4-fs mt-3">Fracture</h2>
                    <p className="mt-3">
                      A fracture can cause sudden knee pain. A tibial plateau
                      fracture involves the tibia and patella. This type of
                      fracture causes:
                    </p>
                    <ul className="mt-3">
                      <li>edema</li>
                      <li>sharp pain</li>
                      <li>inability to move the joint</li>
                    </ul>
                    <p>
                      Fractures of the distal femur involve the lower part of
                      the thigh and the patella and cause similar symptoms. A
                      fractured patella may also occur, causing intense pain and
                      swelling.
                    </p>
                    <p>
                      Fractures that involve these bones can occur from
                      traumatic injuries or simple falls.
                    </p>
                    <h2 className="h4-fs mt-3">Tendinitis</h2>
                    <p className="mt-3">
                      Tendons connect your joints to your bones. Repetitive
                      activities (such as walking or running) can cause
                      inflammation and swelling of your tendons. This condition
                      is known as tendinitis.
                    </p>
                    <p>
                      Knee tendinitis is quite common. Patellar tendinitis
                      (jumper's knee) and quadriceps tendinitis are specific
                      subtypes of this condition.
                    </p>
                    <p>
                      Tension, swelling, and dull pain are typical symptoms of
                      tendonitis in the knee. You may also not be able to move
                      the affected joint until you rest it.
                    </p>
                    <h2 className="h4-fs mt-3">Runner's knee</h2>
                    <p className="mt-3">
                      Runner's knee refers to knee pain that starts behind or
                      around the kneecap. This condition is common in active
                      adults.
                    </p>
                    <p>
                      Symptoms include a dull throbbing behind the kneecap,
                      especially where the knee meets the femur or femur.
                      Runner's knee can also cause the knee to crack and crush.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid">
            <div className="container">
              <div className="tabata mt-5 d-none d-md-block">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2
                      className="my-3 h4-fs"
                      style={{
                        fontFamily: "Nunito sans-serif",
                        fontWeight: "700",
                        textTransform: "capitalize!important",
                      }}
                    >
                      Torn neck
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        Commonly injured ligaments in the knee are the anterior
                        cruciate ligament (ACL) and the medial collateral
                        ligament (MCL).
                      </p>
                      <p>
                        The PCL, LCL, and MPFL ligaments in the knee can also
                        tear. These ligaments connect the bones above and below
                        the patella.
                      </p>
                      <p>
                        It is not uncommon for one of these ligaments to tear,
                        especially in athletes. Sometimes you can pinpoint the
                        exact moment the tear occurred in your gear on the
                        soccer field or playing too much tennis.
                      </p>
                      <p>
                        Other times, the cause of the injury is less traumatic.
                        For example, hitting the knee at the wrong angle can
                        tear the ACL.
                      </p>
                      <p>
                        If you tear one of these ligaments, you will usually
                        hear a popping sound followed by swelling. This is
                        usually followed by severe knee pain. You may not be
                        able to move the joint without the help of a brace.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-5 d-none d-md-block">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <h2
                      className="my-3 h4-fs"
                      style={{
                        fontFamily: "Nunito sans-serif",
                        fontWeight: "700",
                        textTransform: "capitalize!important",
                      }}
                    >
                      Osteoarthritis
                    </h2>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-3">
                        Sudden knee pain could indicate the onset of
                        osteoarthritis (OA). OA is the most common type of
                        arthritis.
                      </p>
                      <p>
                        Elderly people are most at risk of this condition,
                        especially athletes and people working in the
                        construction industry who often perform repetitive
                        movements.
                      </p>
                      <p>
                        Pain, tenderness, and inflammation of the knee are signs
                        that OA is starting to develop. In most cases, knee pain
                        does not appear suddenly. It is more likely to cause a
                        gradually increasing level of pain.
                      </p>
                      <p>
                        While OA can only affect one knee, it is more likely to
                        damage both knees.
                      </p>
                      <h2 className="h4-fs my-4">Bursitis</h2>
                      <p>
                        Bursae are fluid-filled sacs between your joints. The
                        bursae can become inflamed around the knees and cause
                        bursitis.
                      </p>
                      <p>
                        Repeated bending of the knees or bleeding into the bursa
                        can cause the sudden onset of bursitis symptoms. Knee
                        bursitis is not one of the most common places for this
                        condition to occur, but it is not rare.
                      </p>
                      <p>
                        Acute pain and swelling of one or both knees are the
                        most common symptoms of bursitis.
                      </p>
                      <h2 className="h4-fs my-4">An injured meniscus</h2>
                      <p>
                        The menisci are pieces of cartilage in the knee. An
                        injured or torn meniscus is a common condition that
                        results from violent twisting of the knee.
                      </p>
                      <p>
                        If you injure your meniscus, you may hear a popping
                        sound followed by an immediate sharp pain as well as
                        swelling. The affected knee may feel locked in place.
                        This condition tends to affect only one knee at a time.
                      </p>
                      <h2 className="h4-fs my-4">Infectious arthritis</h2>
                      <p>
                        Infectious arthritis is an acute form of arthritis that
                        develops from the infected fluid surrounding your joint.
                        If left untreated, the fluid can become septic.
                      </p>
                      <p>
                        Septic arthritis is considered a medical emergency that
                        requires emergency surgery.
                      </p>
                      <p>
                        This condition causes sudden pain in only one knee. If
                        you have a history of arthritis, gout, or a weakened
                        immune system, you may increase your risk of infectious
                        arthritis.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section
        className="margintop"
        id="cupping"
        style={{ display: activeElement === "cupping" ? "block" : "none" }}
      >
        <div className="container-fluid">
          <div className="container blog2">
            <div className="demoo mt-3 mt-md-5">
              <h2 className="h2-fs text-center text-333-color">
                detected about{" "}
                <span className="m-0 text-blue-color">Ulcer</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row align-items-center">
              <div className="col-lg-6 d-block d-lg-none mt-3">
                <div className="ply1">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/ulcer.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="transform your body in 90 days"
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("1Qfgpak6d2c")}
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
              </div>
              <div className="col-lg-6">
                <div className="describe">
                  <p>
                    Ulcers are ulcers on the lining of the stomach or small
                    intestine. Ulcers can also be on your esophagus (throat).
                    Most ulcers are located in the small intestine. These ulcers
                    are called duodenal ulcers. Stomach ulcers are called peptic
                    ulcers. Ulcers in the throat are called esophageal ulcers.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block mt-4 mt-md-0">
                <div className="ply1 black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/ulcer.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="transform your body in 90 days"
                  />
                  <div className="video-btn">
                    <a
                      onClick={() => openVideoModal("1Qfgpak6d2c")}
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
            </div>
            <div className="row align-items-center mt-md-5 mt-3">
              <div className="col-lg-6">
                <div className="ply-1 child-img trns-off">
                  <img
                    className="lazy img-fluid"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/Ulcers.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Fg Group"
                  />
                </div>
              </div>
              <div className="col-lg-6 mt-md-3">
                <div className="Info">
                  <div className="tabata farttys">
                    <h2 className="h2-fs mt-2 mb-2">
                      Common symptoms of an ulcer include:
                    </h2>
                    <ul className="ul-sp pl-3">
                      <li>
                        Discomfort between meals or at night (duodenal ulcer)
                      </li>
                      <li>
                        Discomfort when eating or drinking (stomach ulcer)
                      </li>
                      <li>Stomach pain that wakes you up at night</li>
                      <li>Feel fast</li>
                      <li>Bloating, burning, or dull pain in the stomach</li>
                      <li>It comes and goes for days or weeks at a time</li>
                      <li>The discomfort lasts minutes to hours</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 pl-4 pl-md-5">
                <div className="tabata">
                  <h2 className="mt-4 h5-fs">
                    If your ulcer perforates (tears open), it becomes a bleeding
                    ulcer. This can cause the following symptoms:
                  </h2>
                  <ul className="ul-sp pl-3">
                    <li>Nausea</li>
                    <li>Vomiting of blood</li>
                    <li>Unexpected weight loss</li>
                    <li>Blood in the stool or dark stools</li>
                    <li>Pain in the back</li>
                  </ul>
                  <p className="mt-3">
                    Most ulcers are caused by Helicobacter pylori (H. pylori).
                    It is a bacterial infection. Acids from the foods we eat can
                    make pain and discomfort worse. Long-term use of aspirin or
                    anti-inflammatory drugs (ibuprofen) is also a common cause
                    of ulcers. Stress and spicy foods can make the ulcer worse.
                  </p>
                  <p className="mt-3">
                    The ulcer diet is meant to help reduce the pain and
                    irritation that comes from a peptic ulcer, a painful ulcer
                    on the lining of the stomach, esophagus, or small intestine.
                  </p>
                  <p className="mt-3">
                    Food or drink does not cause or heal ulcers. However, some
                    foods help repair damaged tissue, while others irritate your
                    ulcer and compromise the natural protective lining of your
                    digestive tract.
                  </p>
                  <p>
                    Adding an ulcer diet to your treatment can help you feel
                    better faster and possibly prevent another ulcer in the
                    future.
                  </p>
                  <h2 className="mt-4 h5-fs">
                    An ulcer diet, combined with your healthcare provider's
                    treatment advice, can provide relief because it can:
                  </h2>
                  <ul className="ul-sp pl-3">
                    <li>
                      Correct the nutritional deficiencies that are contributing
                      to your symptoms
                    </li>
                    <li>
                      Provide the protein and other nutrients your body needs to
                      heal
                    </li>
                    <li>
                      It will help you avoid foods that irritate the ulcer
                    </li>
                    <li>
                      Help with related conditions such as Crohn's disease,
                      celiac disease, or bacterial infections
                    </li>
                  </ul>
                  <p className="mt-3">
                    Many peptic ulcers are caused by the long-term use of
                    nonsteroidal anti-inflammatory drugs (NSAIDs), which can
                    damage the lining of the digestive tract. Others are caused
                    by a bacterial infection known as Helicobacter pylori. The
                    ulcer diet adds foods with antibacterial properties and
                    compounds that promote healing in both cases.
                  </p>
                </div>
              </div>
            </div>
            <div className="tabata mt-5">
              <div className="card border border-info">
                <div className="card-header border-bottom alert-info border-info">
                  <h2
                    className="my-3 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                      textTransform: "capitalize!important",
                    }}
                  >
                    TYPES OF ULCERS ARE:
                  </h2>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h2 className="h5-fs">PEPTIC ULCER:</h2>
                    <p className="mt-3">
                      These develop on the inside lining of the stomach and the
                      upper portion of the small intestine or esophagus. They
                      form when digestive juices damage the lining of the
                      stomach or intestine. These are most often caused by
                      inflammation after being infected by H.pylori and
                      long-term use of painkillers.
                    </p>
                    <p>There are three types of peptic ulcers:</p>
                    <ul>
                      <li>Gastric ulcers</li>
                      <li>Esophageal ulcers</li>
                      <li>Duodenal ulcers</li>
                    </ul>
                    <h2 className="mt-4 h5-fs">Parietal ulcers:</h2>
                    <p className="mt-3">
                      These are open sores that develop on the outside of the
                      ankle, feet, toes, and heels. They develop from damage to
                      blood vessels due to insufficient blood flow to the
                      tissue. Arterial ulcers appear red, yellow, or black with
                      hairless skin and leg pain.
                    </p>
                    <h2 className="mt-4 h5-fs">VENOUS ULCERS:</h2>
                    <p className="mt-3">
                      It is the most common type of leg ulcer and often forms on
                      the leg, below the knee, and on the inside of the ankle.
                      They occur as a result of damaged veins that are caused by
                      insufficient blood flow back to the heart. A person may
                      also have inflammation, swelling, itchy skin, scabs, and a
                      discharge.
                    </p>
                    <h2 className="mt-4 h5-fs">MOUTH ULCER:</h2>
                    <p className="mt-3">
                      These are small sores or lesions that develop in the mouth
                      or at the base of the gums. They are also known as canker
                      sores. Mouth ulcers are caused by biting the inside of the
                      face, harsh brushing, food allergies, hormonal changes,
                      vitamin deficiencies, bacterial infections, and other
                      serious illnesses.
                    </p>
                    <h2 className="mt-4 h5-fs">GENITAL ULCER:</h2>
                    <p className="mt-3">
                      These develop on the genitals including the vagina, penis,
                      anus, or surrounding areas. Genital ulcers usually occur
                      as a result of trauma, inflammatory conditions, sexually
                      transmitted infections, or allergic reactions to skin care
                      products. They are accompanied by a rash, pain, itching,
                      swelling of the nodes in the groin, and fever.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 studentsreview-1">
        <div className="container-fluid px-0">
          <div className="d-md-block d-none">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/fwg/coaches.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
          <div className="d-md-none d-block">
            <img
              className="img-fluid"
              src={"/assets/images/fwg/coaches-mobile.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
        </div>
      </section>
      <ClientsTestimonial testimonials={testimonials} />
      <BlogsRtpTwo />
      <section className="gym-image-fwg margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0 mb-4">
        <div className="container">
          <div className="demoo text-center mt-4">
            <h2 className="h2-fs">
              Gym
              <span className="m-0 text-blue-color"> Exercises</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div id="menu">
            <ul className="menuList">
              <li>
                <img src="/assets/images/fwg/adajan-gym-3.jpg" alt="img1" />
              </li>
              <li>
                <img src="/assets/images/fwg/adajan-gym-4.jpg" alt="img2" />
              </li>
              <li>
                <img src="/assets/images/img/achievement_13.webp" alt="img3" />
              </li>
              <li>
                <img src="/assets/images/img/gym-excercise-1.webp" alt="img4" />
              </li>
              <li>
                <img src="/assets/images/img/gym-excercise-2.webp" alt="img5" />
              </li>
              <li>
                <img src="/assets/images/fwg/adajan-gym-6.jpg" alt="img6" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fwg-webinar-page-faq  mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">FAQS</h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item" onClick={() => toggleAnswer(index)}>
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i
                      className={`fas fa-chevron-right ${
                        activeIndex === index ? "active" : ""
                      }`}
                    ></i>
                  </div>
                </div>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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

export default OfflineClinicalDietProgram;
