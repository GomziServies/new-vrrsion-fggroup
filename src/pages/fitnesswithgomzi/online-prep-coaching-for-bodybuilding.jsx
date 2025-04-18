/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OnlineProgramFormFwg from "../../components/online-fwg/onlineProgramForm";
import HowItWork from "../../components/fwg/howItWork";
import BlogsRtpTwo from "../../components/fwg/blog-rtp-two";
import { PrepCoachingProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import InquiryForm from "../../components/fwg/inquiry-form";
import Transformation from "../../components/fwg/transformation";
import OwlCarousel from "react-owl-carousel";
import ClientsTestimonial from "../../components/fwg/clinetvideoreview";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import FwgHeader from "../../components/partials/Header/fwgheader";
import { Helmet } from "react-helmet";

function OnlinePrepCoachingProgram() {
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
      question:
        "If I want to compete in bodybuilding, will you guide me about anabolic cycles?",
      answer:
        "Yes, we will provide you with complete guidance on anabolic cycles, including proper planning and design to ensure a safe and effective approach.",
    },
    {
      question:
        "How many months should I prepare with you to get the best results?",
      answer:
        "Typically, it takes around 6 to 12 months to become stage-ready, depending on your current muscle mass and goals.",
    },
    {
      question: "How much do I need to spend per month during my preparation?",
      answer:
        "The monthly cost varies based on your goals and plan, but it generally ranges between 3-4k, including supplements and steroids.",
    },
    {
      question: "Will I get 100% results with your coaching?",
      answer:
        "Yes, with over 12 years of experience, we've trained many successful clients and trainers. However, achieving 100% results depends on your commitment to regularly updating us and maintaining open communication on a daily basis.",
    },
  ];

  const testimonials = [
    {
      name: "Harshal Joshi",
      description: `I recently discovered FitnessWithGomzi, and joining their program has been a life-changing decision! With their expert guidance and tailored workouts, I was able to lose around 9kg in a healthy, sustainable way. The team is incredibly supportive, constantly motivating me to push my limits and stay consistent with my fitness goals.`,
      videoUrl: "mk3_gQ4G1-E",
      imageUrl: "/assets//images/fwg/harshal-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Navnish Saliyan",
      description: `My friend told me about FitnessWithGomzi, and I decided to join—and I'm so glad I did! In just a short time, I've lost around 5kg, thanks to their well-structured program and motivating trainers. The personalized workouts, combined with nutrition advice, have really helped me stay on track and feel healthier overall.`,
      videoUrl: "oq7jiXitX3o",
      imageUrl: "/assets/images/fwg/navnish-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Budhadev Sahu",
      description: `With the incredible support of FitnessWithGomzi, I've been able to compete at state championships! Their personalized training plans and expert guidance have taken my fitness to the next level, preparing me both mentally and physically for competition. The coaches truly understand how to push your limits while keeping the workouts balanced and effective.`,
      videoUrl: "Z4-bhRfFfno",
      imageUrl: "/assets/images/fwg/saho-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Milan Sali",
      description: `I came across this amazing nutrition class offered by FitnessWithGomzi, and it has completely transformed the way I approach my health! The class not only provided detailed insights into balanced nutrition but also taught me how to make sustainable, healthy eating choices. The team is incredibly knowledgeable, and their approach is easy to follow yet highly effective.`,
      videoUrl: "_sE7AxtfR_A",
      imageUrl: "/assets/images/fwg/milan-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Jayneel",
      description: `I joined FitnessWithGomzi and lost around 12kg in just 1.5 months! I'm incredibly thankful for their guidance and support throughout my fitness journey. The workouts are challenging but effective, and the nutrition advice has made all the difference in achieving my goals. The trainers keep me motivated every step of the way, and I've never felt stronger or more confident.`,
      videoUrl: "5XWZcCGaRJQ",
      imageUrl: "/assets/images/fwg/jayneel-v1.webp",
      date: "13 March 2023",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Online Prep Coaching Program | FG Group</title>
        <meta name="description" content="Online Prep Coaching Program." />
        <meta name="keyword" content="intermittent fasting, fasting intermittent fasting, weight loss, calorie counter, weight loss program, weight loss programmes, weight reduction programs, weight loss journey, intermittent fasting schedule, intermittent fasting times, calorie calculator for weight loss, ways to lose weight quickly, intermittent fasting for weight loss, calorie intake calculator, intermittent fasting and weight loss, diet food, best calorie tracking app, weight loss menu plans, fasting meals, application calorie, best weight loss program, top weight loss programs, fasting diet, fast weight loss, benefits of intermittent fasting, best weight loss system, top rated weight loss programs, good weight loss program, personalized weight loss, fasting support, weight loss meal plan, best diet to lose weight, weight loss foods, best food for weight loss, diet meal plans for weight loss, fasting for weight loss, lose fat, 0 calorie foods, fasting and weight loss, fasting time, loss weight food, diet plan, best weight loss app, diet plan to lose weight, weight loss plan, weight loss tips, 1200 calorie meal plan, calories for weight loss, daily calorie intake, weight loss meal, good weight loss apps, top weight loss apps, 7 day meal plan for weight loss, one meal a day, 1200 meal plan, 7 day weight loss diet plan, my fitness plan app, top rated weight loss apps, 1200 diet plan, 1200 calorie diet, foods to eat to lose weight, healthy diet meal plan, intermittent fasting how to, healthy eating diet plan, weight loss service, diets for weight loss, best meal tracking app, best diet foods, good diet foods, best ways to lose weight quickly, best way to lose weight fasting, best diet,
        intermittent fasting rules, best intermittent fasting for weight loss, ways to lose weight, best foods to eat to lose weight, nutrition solutions, cutting diet, foods that help you lose weight, intermittent fasting results, lose weight tracker, best intermittent fasting to lose weight diet meal plan, healthy meal plans for weight loss, calorie intake to lose weight, food diary, healthy diet plan for weight loss, best diet to lose weight quickly, best weight loss, healthy foods to lose weight, easiest way to lose weight, meal tracker app, foods to help lose weight, food journal, fat loss diet, calories per day, 3 day diet, types of diets, healthy eating plan for weight loss, good diet plan for weight loss, healthy food plans for weight loss, diet eating plan, healthy foods for diet, healthy diet meal plan for weight loss, losing weight for men, healthy eating meal plan for weight loss, healthy diet plan, free weight loss plan, nutrition coaching, best meal plans for weight loss, free diet plan for weight loss, weight loss diet plan for women, best diet plan for weight loss, 30 day weight loss challenge, quick weight loss, weight loss meal plan for women, intermittent fasting for beginners, intermittent fasting hours, best diet program for weight loss, crash diet, calorie intake, best food plan for weight loss, fasting diet plan for weight loss, free nutrition plan for weight loss, best nutrition plan for weight loss, lose weight plan for free, fasting types, hours for intermittent fasting, weight loss expert, free eating plan to lose weight, free food plan for weight loss, food fasting, help you lose weight, best healthy diet plan for weight loss, weight maintenance calories, weight loss food plan for women, weight loss coach, best free weight loss apps, diet meal, healthy eating plan, good diet plans, best intermittent fasting schedule, fasting schedule, healthy weight loss, weight loss diets for women, recommended calorie intake, lose 20 lbs in 2 months, best apps for intermittent fasting, model diet, good free weight loss apps, 
        best app for weight loss free, meal calorie counter, good intermittent fasting schedule, intermittent fasting diet plan, intermittent fasting diet, weight loss diet plan for men, 1200 calories a day, lose weight without exercise, food log, weight loss meal plans for men, weight loss at home, healthiest diet, food calculator, fasting diets for weight loss, average calorie intake, diet menu plan for weight loss diet programs, best calorie counting app, weight loss plan for women, intermittent fasting plan, lose weight in 30 days, online weight loss program, intermittent fasting meal plan, lose weight in a month,
        weight loss programs that work, workout and meal plan, healthy foods to eat to lose weight, weight loss plans that work, workout meal plan, calories needed to lose weight, intermittent fasting program, fitness meal plan, workout diet plan, gym diet, calorie intake for women, 30 day weight loss, fasting hours, lose weight in 3 months, meal calorie calculator, best veggies for weight loss, best meal for weight loss, meal plan and workout plan, 3 month weight loss, one meal a day fasting, recommended calories per day, fitness food plan, intermittent fasting food plan, online weight loss plans, best foods for cutting, best apps for fasting, workout food plan, calories required to lose weight, recommended daily calorie intake, weight loss regimen for women, free weight loss programs, personal weight loss coach, i need to lose weight, free intermittent fasting plan, weight loss coach online, best weight loss plan, simple weight loss reviews, calories per day to lose weight, diet food for weight loss, best fasting for weight loss, intermittent fasting schedule for women, cutting diet plan, cutting meal plan, help me lose weight, 2500 calorie meal plan, foods that make you lose weight, lose weight in 2 months, different types of diets, intermittent fasting windows, 3 day diet menu, calories for women, best nutritionist, workout and diet plan for weight loss, workout diet plan for weight loss, intermittent fasting chart, count your calories, lose 10 lbs in 2 months, basic diet plan, personal nutritionist and trainer, calories for women to lose weight, 6 month weight loss, ways to lose weight without working out, calorie intake for men, lose weight in 7 days, to lose weight how many calories, best weight loss advice, lose 100 lbs in 6 months, nutritionist food plan, workout and meal plan for weight loss, exercise and meal plan for weight loss, best weight loss programs for women, free fasting plan, 30 day meal plan for weight loss, diet plans for men, 
        diet chart for weight loss, weight loss plan for men, fasting diet for women, 30 day diet challenge, best diet for men, weight loss programs for men, weight loss menu, calories to eat to lose weight, most effective diet, fastest way to lose weight in a month, fasting programs, dietitian for weight loss, healthy diet to lose weight, gym diet plan, weight loss for beginners, natural ways to lose weight, cutting weight diet, nutrition website, cutting diet for women, quickest way to lose weight in a month, personalized meal plan for weight loss, foods to eat on a diet, healthy weight loss per month, diet and exercise, best diet food for weight loss, customized meal plans for weight loss, fasting methods, calorie counter calculator, most successful diet, weight loss company, cutting calories, healthy fasting, intermittent fasting meaning, one meal a day diet, diet foods for weight loss, cutting meals, no calorie foods, calories per day women, 2 month weight loss, best fitness app for weight loss, daily calories for men, lose weight safely, i have to lose weight, best exercise app to lose weight, fasting window, 2500 calories diet plan, weight loss coach near me, nutrition coach near me, nutrition plan, diet and exercise plan, weight loss food plan, free calorie tracker app, best online weight loss program, free calorie tracker, fasting diet plan, simple meal plan to lose weight, easy diet plan for weight loss, 1200 calorie diet plan, best way to lose weight for women, workout and diet plan, weight loss nutritionist near me, best fasting schedule, easy weight loss meal plan, easy weight loss, good diets, simple diet plan for weight loss, fasting for beginners, types of intermittent fasting, intermittent diet, different diets, best diet meals, best diet tracker app, indian diet plan for weight loss, weight loss coaching near me, calorie chart, diet for gym beginners, daily calorie intake for women, fasting diet schedule, meal and exercise plan, 
        fitness diet plan, different types of fasting, healthiest diet in the world, lose 20 lbs in 3 months, daily calories for women, diet and fitness plan, fastest way to lose 20 lbs, easiest meal plan for weight loss, workout and eating plan, nutritionists near me for weight loss, lose 10 lbs in one month, simple eating plan to lose weight, best diet plan, nutrition plan for weight loss, diet food plan, free diet plan, diets that work, best weight loss for women, personalized weight loss plan, best intermittent fasting, intermittent fasting schedule for weight loss, i need help losing weight, fasting schedule for weight loss, diet calculator, best app to help lose weight, good foods for weight loss, diet plan to reduce weight, weekly diet plan for weight loss, calories a day to lose weight, weekly meal plan for weight loss, weight loss diet for men, weight loss meals for men, eating for weight loss, 1200 calorie a day meal plan, calorie goal for weight loss, healthy ways to lose weight, lose weight in 3 days, healthiest weight loss diet, free fasting, custom weight loss plan, fasting program for weight loss, lose weight in one month, diet ideas for weight loss, custom nutrition plan, to lose weight how many calories should i eat, fastest way to lose 10 lbs, best weight loss programs near me, hcg diet plan, calorie intake calculator to lose weight, best apps to help you lose weight, free meal tracker, free diet tracker, diet plan for 1200 calories a day, lose 5 lbs in a month, meal plan personalized, online nutrition coach, diet plans for women, weight loss programs for women, free meal plans for weight loss, free weight loss apps no subscription, nutritionist for weight loss, simple diet plan, easy diet, fasting plan, calorie counter online, personal nutritionist, intermittent fasting for men, free food calorie calculator, free calorie calculator, balanced diet for weight loss, i want to lose weight, diet and exercise plan for weight loss, nutrition meal plan, ways to lose weight without exercise, 1200 calorie diet menu, healthy eating for weight loss, diet for men, fasting plan for weight loss, fat burning diet plan, list of diets, weight management programs, foods that promote weight loss, lose it app reviews, healthy calorie intake, lose weight without counting calories, real weight loss, easy 1200 calorie meal plan, 1200 calorie diet meal plan, best thing to eat to lose weight, best cutting diet, gyms in near me, gyms gym, workout center near me, gym workouts near me, gym workout near me, workout gyms near me, gym and fitness centers near me, fitness clubs near me, badminton courts near by me, zumba classes in near me, near me zumba class, near me zumba classes, zumba fitness class near me, zumba class in near me, zumba classes near by me, zumba class near by me, workout for shoulder in gym, shoulder exercise at gym, gym exercises shoulder, shoulder gym exercises, gym exercise shoulder, shoulder exercise gym, gym exercises for shoulders, shoulder gym workouts, shoulder exercise for gym, shoulder workouts for gym, shoulders exercises gym, exercise for shoulders in gym, gym exercise for shoulders, shoulder exercise in gym, shoulder workout at the gym, exercises for shoulder in gym, exercises for shoulders in gym, shoulder exercises for the gym, shoulders exercises in gym, exercises in gym for shoulders,
        shoulder exercises for gym, shoulder workouts for the gym, exercise of shoulder in gym, shoulder workouts in gym, shoulders workout at gym, back exercise for gym, gym workout shoulder, gym exercises back, back exercise at the gym, back workouts in the gym, gym back exercise, gym exercises for shoulder, back exercises at the gym, back exercise in the gym, dumbbell dumbbell, exercise for back in gym, shoulders exercises at gym, gym training back, exercises for back in gym, fitness cardio workout, gym exercise of chest, workout exercises for chest, gym workout for chest, cardio exercise workouts, cardio exercise workout, workout cardio, workout chest exercises, gym exercise chest, workouts cardio, cardio workout moves, workout exercises cardio, work out chest, chest gym exercise, gym chest exercises, cardio workouts exercises, chest workout exercise, cardio workout exercise, chest chest workout, workout exercises chest, cardio exercises workout, chest exercises and workouts, exercise cardio workout, fitness chest, workout for the chest, exercise to chest, workouts chest, chest workout in gym, gym workouts for chest, exercise for cardio, exercises to workout chest, exercises in gym for chest, exercises chest, chest exercises in gym, exercises in cardio, exercises for cardio, best health clubs near me, best gym in near me, best gyms in near me, best health club near me, great gyms near me, gymnasium near me with fees, best gym close to me, gym fee near me, gyms near me fees, blood exam near me, women gym near me, workout for chest at gym, exercise in gym for chest, chest gym exercises, gym chest exercise, exercise for chest at gym, exercises for chest at gym, gym chest workouts, how to lose weight lose fast, chest exercise at gym, gyms for women near me, gyms near me for women, gyms near me ladies, workout of abs, fitness abs workout, abs exercise workouts, abs exercises workout, fitness abs exercises, exercise abs workout, workout abs exercises, workout exercise for abs, women fitness gym near me, ab workout exercises, gym woman near me, women fitness center near me, women's fitness gym near me, exercises to abs,
         gym ladies near me, near by gyms, workout for reduce belly fat, exercise for reduce belly fat, belly fat reduce workout, exercise for belly fat reduction, belly fat reduction workout, exercises for reduce belly fat, reduce belly fat workout, workout for reducing belly fat, exercises for belly fat reduce, workout back exercises, back exercise exercise, back exercises workout, exercise to reduce the belly fat, back exercise back, back and exercises, workout exercises back, back exercise workout, exercise for tummy fat reduction, belly fat loss exercises, reduction of belly fat exercises, to reduce tummy fat exercise, tummy fat reduction exercise, exercises to reduce fat belly, exercises that reduce belly fat, exercise for reduce tummy fat, tummy fat reducing exercise, belly fat losing exercises, workouts reduce belly fat, exercises to reduce the belly fat, workout exercises for back, workout exercise for back, belly fat losing exercise, exercise reduce belly fat, reducing tummy fat exercise, sixpack, exercises of back, exercise for reducing belly fat, exercises for belly fat reduction, workout s, fitness india, workout exercises for weight loss, exercise workouts for belly fat, workout exercise for weight loss, exercise workouts lose weight, fitness for belly fat, workout weight loss, stomach fat exercise, weight loss exercise workout, workout and weight loss, exercise workout for weight loss, exercises for fat stomach, exercise for fat belly, weight loss and workout, exercises for fat belly, workout belly fat, fat stomach workout, weight reduction exercises, belly fat and exercise, weight reducing exercise, belly fat stomach exercise, gym nearest, home exercise for abs, near me protein shop, ab workout exercises at home, exercise for abs at home, exercises for abs gym, abs workout in home, abs exercise in home, abs exercises for home, ab at home exercises, abs exercise at home, benefit of milk with turmeric, at home exercises abs, home workout exercises for abs, at home abs workout, workout at home abs, gym exercise for abs, home workouts for abs, abs workout for home, abs exercise for home, workout at home for abs, abs home workout, abs exercises home, home ab workout, exercise for abs at gym, gym abs exercises, abs home exercise, exercises for abs in gym, gym for workout, chest workouts in home, at home workout for abs, workout abs at home, exercise at home chest, workouts at home for abs, gym workouts for cardio, home exercise for chest, abs best workout at home, exercises chest at home, at home workout for chest, workout for chest at home, workout for chest home, workout chest at home, at home workouts abs, home workout exercises for chest, cardio exercise at gym, chest workout in home, home exercises for chest, at home chest exercise, exercise abs workout at home, chest workout for home, at home exercise for chest, exercise at home for chest, abs home workout exercises, exercise chest at home, chest training at home, workout at home for chest, chest workouts for home, at home workout abs, cardio workouts for gym, at home workouts for chest, workout at home chest, chest exercise for home, abs workout exercise at home, exercise for chest at home, abs workout exercises at home, exercises for chest at home, cardio workouts for the gym, chest workout from home, chest workout exercises at home, exercises at home for chest, workouts at home for chest, chest workout at home, cardio workout at the gym, tummy fat workout, ab workout home, cardio workouts gym, cardio gym exercises, workout and gym, chest exercises for home, cardio exercises at gym, gym workout for cardio, exercise of chest at home, at home exercises for chest, workouts for chest at home, cardio workout at gym, exercise workout gym, chest workout for at home, home exercises for abs, gym workouts cardio, how to fitness at home, gym workout gym, cardio exercise gym, gym cardio exercise, gym for trainers, fitness center near by me, fitness places near me, exercise facilities near me, fitness facilities near me, fitness gyms close to me, near gym at me, near to me gym, fitness gym close to me, fitness center close to me, work out facility near me, fitness in home, exercise facility near me, unisex gym near me, exercise workouts at home, nearest fitness center to me, workout from home, fitness health clubs near me, near me fitness gym, fitness center gym near me, home exercise at home, fitness at home exercises, workout exercise at home, home exercise workout, fitness place near me, exercise workout home, exercises workout at home, exercise at home workout, exercises home workout, workouts in home, workout on home, home exercise workouts, exercise home workout, workout at home exercises, workout at home exercise, exercise workout at home, workout for home, fitness for weight loss, exercise for home workout, homework workout, belly fat reduction exercise, workout for at home, best fitness gyms near me, best workout gyms near me, closest gym, nearby gym near me, near by gym near me, top rated gyms near me, how reduce thigh fat, workout for upper chest, exercises for upper chest, how to reduce the thigh fat, cheap workout places near me, gym near me with fees near me, fitness gyms, fitness & gym, fitness near me, fit gym near me, fitness near by me, boxing gym close to me, fitness closest to me, fitness gym, fitness gym near me, fitness and gyms near me, fitness near to me, zumba near me, zumba fitness near me, cheapest gym near me, zumba classes, zoomba classes, a fitness gym, weight loss exercise best, fitness first, exercise to reduce fat from thighs, exercise to reduce fat from thigh, exercises to reduce fat on thighs, best exercise for fitness and weight loss, exercises to reduce thigh fat, exercises for reducing thigh fat, exercise for thigh fat reduce, exercises for back at home, arms workout, exercise to reduce the thigh fat, exercise to reduce fat on thighs, exercise for reducing thigh fat, home exercises for the back, exercises for thigh fat reduction, best exercise for loss weight, thigh exercises to lose fat, at home exercises for back, at home exercise for back, back workout exercises at home, at home workout for back, exercise for thigh fat reduction, workout for back at home, exercise for back at home, home exercises shoulders, back home exercises, home workout shoulder, dumbbell workout exercise, shoulder workouts for home, home shoulder workout, home workout for shoulder, at home back workout, shoulder exercises in home, shoulder home workout, back exercises in home, home exercise for back, best weight reduction exercises, shoulder exercise at home, shoulders home workout, shoulder workout for home, weight loss best exercise, thigh fat loss exercise, home exercise for shoulder, exercises for your back at home, back exercises home workout, shoulder workout at home, best fitness for weight loss, shoulder exercises from home, zumba fitness classes, best workout for lose weight, shoulder exercise in home, shoulders exercises at home, exercises for shoulder at home, workout for shoulder at home, shoulders workout at home, best weight loss workout, thighs fat loss exercise, at home workouts for back, at home back exercises, shoulder workout in home, shoulder exercise home, back workout in home, thigh fat loss exercises, back workouts for home, back workout for home, home exercises for shoulders, back exercise for home, home workout for shoulders, back at home exercise, shoulder exercises for home, back exercise in home, arm workout exercises, shoulder exercises home, home exercises for shoulder, 6 pack body, workout exercise for arms, fitness and strength training, near gym centres, pregnancy yoga classes near me, near gym centre, nearby gyms near me, nearby gym centre, nearest gym near me, nearest fitness center near me, nearest gym centre, personal fitness trainer near me, nearby gym to me, personal physical trainer near me, fitness personal trainer near me, private fitness trainer near me, fitness freaks, personal trainer near me, personal fitness coach near me, trainer near.me, personal instructor near me, private trainer near me, personality trainer near me, physical trainers near me, physical trainer near me, personal workout trainer near me, weight loss exercises for women at home, weight loss workout for women at home, fitness trainer near me, professional trainer near me, near me personal trainer, fitness instructor near me, weight loss exercise for female at home, personal fitness instructor near me, exercise for weight loss women at home, women weight loss exercises at home, weight loss exercise at home for women, exercise for weight loss for women at home, exercises for weight loss at home for female, workouts images, exercises to reduce fat in thighs, exercise for weight loss for female at home, weight loss workouts for women at home, at home weight loss workouts for women, exercise for women to lose weight at home, home workout for weight loss female, how to reduce belly fat in exercise, how to exercise to reduce belly fat, lower chest workout exercises, arms workout in gym, workout for 6 pack, workout for six pack, arms gym workout, 6 pack exercise, exercises six pack, arm gym workout, water cleanse recipe, arms workout gym, arm exercise gym, exercises 6 pack, how to reduce the belly fat with exercise, exercises for six pack, arms exercises in gym, exercise for arms in gym, exercises for 6 pack, home workouts to lose weight for women, how to reduce belly fat with exercise, trainer near me, how to reduce belly fat exercise, lean body for man, near me gym center, protein chapati, boxing coaches near me, lean body men, lean body for men, 6pack, near me gym near me, fitness club, fitness cardio workout at home, lean body male, only ladies gym near me, best exercises for reduce belly fat, swimming classes near me with fees, gym near me only for ladies, gyms only for ladies near me, exercises shoulders, lean man body, workouts at home cardio, best exercise reduce belly fat, cardio workout for at home, exercises for fat belly loss, resistance training exercises at home, best exercise for reducing belly fat, best exercises for reducing belly fat, strength training home workout, cardio exercises at home, chest exercises at home, fitness upper body workout, upper body training, home exercises cardio, exercises upper body, workout home cardio, workout of shoulder, home workout strength, workouts for stomach, protein powder homemade, homemade protein powder, home made protein powder, homemade protein supplement, protein homemade powder, nearby gym center, near gym center, gym near me with personal trainer, gyms near me with personal trainer, gym near me with trainer, fitness centers near, gym with a personal trainer near me, gyms with trainers near me, gym with personal trainers near me, gyms with personal trainer near me, personal trainer gyms near me, gym with instructor near me, trainer gym near me, gym with personal trainer near me, toning body, fitness center, personal physical trainer, fitness center near, fitness hub, fitness c, exercise to reduce belly fat for female at home, exercises to reduce belly fat for female at home, lose belly fat workout for women at home, gym trainer near me, gymnastic trainer near me, top workout programs, gym protein, best exercise for reduce belly fat, exercises for lower belly fat, exercises lower belly fat, home 6 pack workout, recipe bhindi masala, photos of fitness, gyms india, workout places around me, fitness center near my location, fitness studio near me, gyms fitness, workout gyms, gym for fitness, classes near me fitness, gyms near my location, gym centres, gym centre, gym india, exercise studios near me, gym nearby my location, gym near me within 800m, exercise studio near me, workout studios near me, closest gym to my location, gym near me within 400m, gym around me, fitness gym near my location, near my location gym, classes fitness near me, gyms nearby near me, workout studio near me, gym near my location, gyms nearby my location, fitness in gym, fitness classes close to me, gym nearby near me, fitness app, gym indian, gym website, fitness centres in india, fitness center in india, gyms for fitness, fitness centre in india, fitness classes near me, zumba classes near me only for ladies, fitness gym website, nearby studios, fitness application, six pack exercise in home, shoulder back exercises, dumbbell workout at home, exercise for lower body, checkpost near me, ladies weight loss workout, how to make protein powder at home, gyms around me, how to prepare protein powder at home, how to make protein powder in home, how make protein powder at home, workout programs at home, best gym, exercise to reduce weight at home, gym prices near me, best for gym, gym near me rates, near by gym centre, weight loss exercise in home, weight loss exercise for home, weight loss home exercise, weight loss at home exercise, gym near me and prices, gyms cost near me, weight loss in home exercise, gyms near me and prices, weight loss at home exercises, weight loss exercises for home, gym pricing near me, gym near me prices, gym cost near me, gym near me with prices, gym near me price, home weight loss exercise, weight losing exercises at home, exercises to reduce weight at home, weight loss exercises in home, weight loss exercises home, at home exercise for weight loss, how protein powder is made, weight loss exercises gym, weight loss fast exercise, losing weight exercises at home, lose weight home exercise, at home exercise weight loss, weight loss exercise from home, lose weight exercise home, weight losing exercise at home, weight loss home exercises, fast lose weight exercise, lose weight by exercising at home, lose weight with exercise at home, how the protein powder is made, lose weight at home exercise, at home exercises for weight loss, belly reduce workout, fitness exercises, weight loss exercises fast, fast weight losing exercise, nearby gyms for ladies, fast weight loss exercise, fastest weight loss exercise, gym workout images, gym workout photos, workout gym images, gym images hd, gym workouts images, nearest swimming classes, dumbbell workout, natural protein supplement, natural protein powder, near by gym in my location, best gym near me with fees, best gyms for women near me, best gym in india, best gym for women near me, protein powder natural, khichdi calories, gym fee, gym fees, fitness centers and gyms, protein supplements natural, gold gym in janakpuri, fit app, top rated gym near me, women's belly fat workout, best gym near me for ladies, india best gym, cheap gyms near me, belly fat workout for women, great chest workout at home, workouts at home for belly fat, exercise for belly fat for woman, best gym for ladies near me, exercise for lose thigh fat, perfect chest workout at home, belly fat exercise women, gym membership, gyms near me for free, gyms in, gym center, gym member, membership for gym, gym near me for free, free gym near me, gyms for free near me, gym for free near me, home fitness weight loss, surat gyms, surat gym, gym surat, gyms surat, weight reduction exercises at home, gyms in surat, membership of gym, near by me gym, exercise for weight loss in home, workout for weight loss at home, home weight loss workout, exercising at home for weight loss, gyms open near me, near gym by me, weight reducing exercises at home, exercise at home weight loss, workout home weight loss, fitness at home to lose weight, exercises at home for weight loss, weight loss workout home, exercise to weight loss at home, home exercise to reduce weight, weight reducing exercise at home, workout at home to lose weight, workout at home for weight loss, fitness at home for beginners, home workout to reduce weight, home workout weight loss, exercises at home for beginners, exercise for weight reduction at home, exercise weight loss at home, home workout lose weight, weight loss at home workout, workout to lose weight at home, beginner exercises at home, weight loss workout for home, gyms near me that are open, weight loss workouts for home, workouts for weight loss at home, lose weight workout at home, at home workout for weight loss, workouts at home for weight loss, workout at home weight loss, gym near me open now, workouts for home to lose weight, beginners exercise routine at home, exercise workouts at home to lose weight, workout at home for beginners, weight loss home workout, exercises for weight loss at home, gyms near me free, exercise for lose weight at home, gym open near me, at home workouts for weight loss, zumba dance near me, coffee for pre workout, exercise at home beginners, zumba dance studio near me, butt reduction exercises, gym opening near me, gym in bandra west, at home weight loss workout, workout beginners at home, exercise to reduce the buttocks, home workout to lose weight, weight loss routine at home, beginner exercise at home, at home beginners workout, gym near me open, exercise and lose weight at home, at home workout for beginner, exercise at home for weight loss, exercises to reduce butt, exercise to reduce butt, reducing buttocks exercise, exercise at home for beginners, workout at home lose weight, home exercises to reduce weight, home workout plans, chest and back exercises, at home exercises for beginners, fat burning chest exercises, workout at home beginner, loss weight workout at home, what exercise burns the most belly fat for female, gym in surat, exercise lose weight at home, workout for losing weight at home, at home exercise for beginners, workout to reduce buttocks, exercise routines for beginners at home, new gym near me, buttocks reduce exercise, exercise to lose weight at home, buttock reduce exercise, fitness routine for beginners at home, butt reduce exercise, open gym near.me" />
        <meta property="og:title" content="Online Prep Coaching Program | FG Group" />
        <meta property="og:description" content="Online Prep Coaching Program." />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/fitnesswithgomzi/online-prep-coaching-for-bodybuilding" />
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
      <p className="d-none">intermittent fasting, fasting intermittent fasting, weight loss, calorie counter, weight loss program, weight loss programmes, weight reduction programs, weight loss journey, intermittent fasting schedule, intermittent fasting times, calorie calculator for weight loss, ways to lose weight quickly, intermittent fasting for weight loss, calorie intake calculator, intermittent fasting and weight loss, diet food, best calorie tracking app, weight loss menu plans, fasting meals, application calorie, best weight loss program, top weight loss programs, fasting diet, fast weight loss, benefits of intermittent fasting, best weight loss system, top rated weight loss programs, good weight loss program, personalized weight loss, fasting support, weight loss meal plan, best diet to lose weight, weight loss foods, best food for weight loss, diet meal plans for weight loss, fasting for weight loss, lose fat, 0 calorie foods, fasting and weight loss, fasting time, loss weight food, diet plan, best weight loss app, diet plan to lose weight, weight loss plan, weight loss tips, 1200 calorie meal plan, calories for weight loss, daily calorie intake, weight loss meal, good weight loss apps, top weight loss apps, 7 day meal plan for weight loss, one meal a day, 1200 meal plan, 7 day weight loss diet plan, my fitness plan app, top rated weight loss apps, 1200 diet plan, 1200 calorie diet, foods to eat to lose weight, healthy diet meal plan, intermittent fasting how to, healthy eating diet plan, weight loss service, diets for weight loss, best meal tracking app, best diet foods, good diet foods, best ways to lose weight quickly, best way to lose weight fasting, best diet,
        intermittent fasting rules, best intermittent fasting for weight loss, ways to lose weight, best foods to eat to lose weight, nutrition solutions, cutting diet, foods that help you lose weight, intermittent fasting results, lose weight tracker, best intermittent fasting to lose weight diet meal plan, healthy meal plans for weight loss, calorie intake to lose weight, food diary, healthy diet plan for weight loss, best diet to lose weight quickly, best weight loss, healthy foods to lose weight, easiest way to lose weight, meal tracker app, foods to help lose weight, food journal, fat loss diet, calories per day, 3 day diet, types of diets, healthy eating plan for weight loss, good diet plan for weight loss, healthy food plans for weight loss, diet eating plan, healthy foods for diet, healthy diet meal plan for weight loss, losing weight for men, healthy eating meal plan for weight loss, healthy diet plan, free weight loss plan, nutrition coaching, best meal plans for weight loss, free diet plan for weight loss, weight loss diet plan for women, best diet plan for weight loss, 30 day weight loss challenge, quick weight loss, weight loss meal plan for women, intermittent fasting for beginners, intermittent fasting hours, best diet program for weight loss, crash diet, calorie intake, best food plan for weight loss, fasting diet plan for weight loss, free nutrition plan for weight loss, best nutrition plan for weight loss, lose weight plan for free, fasting types, hours for intermittent fasting, weight loss expert, free eating plan to lose weight, free food plan for weight loss, food fasting, help you lose weight, best healthy diet plan for weight loss, weight maintenance calories, weight loss food plan for women, weight loss coach, best free weight loss apps, diet meal, healthy eating plan, good diet plans, best intermittent fasting schedule, fasting schedule, healthy weight loss, weight loss diets for women, recommended calorie intake, lose 20 lbs in 2 months, best apps for intermittent fasting, model diet, good free weight loss apps,
        best app for weight loss free, meal calorie counter, good intermittent fasting schedule, intermittent fasting diet plan, intermittent fasting diet, weight loss diet plan for men, 1200 calories a day, lose weight without exercise, food log, weight loss meal plans for men, weight loss at home, healthiest diet, food calculator, fasting diets for weight loss, average calorie intake, diet menu plan for weight loss diet programs, best calorie counting app, weight loss plan for women, intermittent fasting plan, lose weight in 30 days, online weight loss program, intermittent fasting meal plan, lose weight in a month,
        weight loss programs that work, workout and meal plan, healthy foods to eat to lose weight, weight loss plans that work, workout meal plan, calories needed to lose weight, intermittent fasting program, fitness meal plan, workout diet plan, gym diet, calorie intake for women, 30 day weight loss, fasting hours, lose weight in 3 months, meal calorie calculator, best veggies for weight loss, best meal for weight loss, meal plan and workout plan, 3 month weight loss, one meal a day fasting, recommended calories per day, fitness food plan, intermittent fasting food plan, online weight loss plans, best foods for cutting, best apps for fasting, workout food plan, calories required to lose weight, recommended daily calorie intake, weight loss regimen for women, free weight loss programs, personal weight loss coach, i need to lose weight, free intermittent fasting plan, weight loss coach online, best weight loss plan, simple weight loss reviews, calories per day to lose weight, diet food for weight loss, best fasting for weight loss, intermittent fasting schedule for women, cutting diet plan, cutting meal plan, help me lose weight, 2500 calorie meal plan, foods that make you lose weight, lose weight in 2 months, different types of diets, intermittent fasting windows, 3 day diet menu, calories for women, best nutritionist, workout and diet plan for weight loss, workout diet plan for weight loss, intermittent fasting chart, count your calories, lose 10 lbs in 2 months, basic diet plan, personal nutritionist and trainer, calories for women to lose weight, 6 month weight loss, ways to lose weight without working out, calorie intake for men, lose weight in 7 days, to lose weight how many calories, best weight loss advice, lose 100 lbs in 6 months, nutritionist food plan, workout and meal plan for weight loss, exercise and meal plan for weight loss, best weight loss programs for women, free fasting plan, 30 day meal plan for weight loss, diet plans for men,
        diet chart for weight loss, weight loss plan for men, fasting diet for women, 30 day diet challenge, best diet for men, weight loss programs for men, weight loss menu, calories to eat to lose weight, most effective diet, fastest way to lose weight in a month, fasting programs, dietitian for weight loss, healthy diet to lose weight, gym diet plan, weight loss for beginners, natural ways to lose weight, cutting weight diet, nutrition website, cutting diet for women, quickest way to lose weight in a month, personalized meal plan for weight loss, foods to eat on a diet, healthy weight loss per month, diet and exercise, best diet food for weight loss, customized meal plans for weight loss, fasting methods, calorie counter calculator, most successful diet, weight loss company, cutting calories, healthy fasting, intermittent fasting meaning, one meal a day diet, diet foods for weight loss, cutting meals, no calorie foods, calories per day women, 2 month weight loss, best fitness app for weight loss, daily calories for men, lose weight safely, i have to lose weight, best exercise app to lose weight, fasting window, 2500 calories diet plan, weight loss coach near me, nutrition coach near me, nutrition plan, diet and exercise plan, weight loss food plan, free calorie tracker app, best online weight loss program, free calorie tracker, fasting diet plan, simple meal plan to lose weight, easy diet plan for weight loss, 1200 calorie diet plan, best way to lose weight for women, workout and diet plan, weight loss nutritionist near me, best fasting schedule, easy weight loss meal plan, easy weight loss, good diets, simple diet plan for weight loss, fasting for beginners, types of intermittent fasting, intermittent diet, different diets, best diet meals, best diet tracker app, indian diet plan for weight loss, weight loss coaching near me, calorie chart, diet for gym beginners, daily calorie intake for women, fasting diet schedule, meal and exercise plan,
        fitness diet plan, different types of fasting, healthiest diet in the world, lose 20 lbs in 3 months, daily calories for women, diet and fitness plan, fastest way to lose 20 lbs, easiest meal plan for weight loss, workout and eating plan, nutritionists near me for weight loss, lose 10 lbs in one month, simple eating plan to lose weight, best diet plan, nutrition plan for weight loss, diet food plan, free diet plan, diets that work, best weight loss for women, personalized weight loss plan, best intermittent fasting, intermittent fasting schedule for weight loss, i need help losing weight, fasting schedule for weight loss, diet calculator, best app to help lose weight, good foods for weight loss, diet plan to reduce weight, weekly diet plan for weight loss, calories a day to lose weight, weekly meal plan for weight loss, weight loss diet for men, weight loss meals for men, eating for weight loss, 1200 calorie a day meal plan, calorie goal for weight loss, healthy ways to lose weight, lose weight in 3 days, healthiest weight loss diet, free fasting, custom weight loss plan, fasting program for weight loss, lose weight in one month, diet ideas for weight loss, custom nutrition plan, to lose weight how many calories should i eat, fastest way to lose 10 lbs, best weight loss programs near me, hcg diet plan, calorie intake calculator to lose weight, best apps to help you lose weight, free meal tracker, free diet tracker, diet plan for 1200 calories a day, lose 5 lbs in a month, meal plan personalized, online nutrition coach, diet plans for women, weight loss programs for women, free meal plans for weight loss, free weight loss apps no subscription, nutritionist for weight loss, simple diet plan, easy diet, fasting plan, calorie counter online, personal nutritionist, intermittent fasting for men, free food calorie calculator, free calorie calculator, balanced diet for weight loss, i want to lose weight, diet and exercise plan for weight loss, nutrition meal plan, ways to lose weight without exercise, 1200 calorie diet menu, healthy eating for weight loss, diet for men, fasting plan for weight loss, fat burning diet plan, list of diets, weight management programs, foods that promote weight loss, lose it app reviews, healthy calorie intake, lose weight without counting calories, real weight loss, easy 1200 calorie meal plan, 1200 calorie diet meal plan, best thing to eat to lose weight, best cutting diet,
        gyms in near me, gyms gym, workout center near me, gym workouts near me, gym workout near me, workout gyms near me, gym and fitness centers near me, fitness clubs near me, badminton courts near by me, zumba classes in near me, near me zumba class, near me zumba classes, zumba fitness class near me, zumba class in near me, zumba classes near by me, zumba class near by me, workout for shoulder in gym, shoulder exercise at gym, gym exercises shoulder, shoulder gym exercises, gym exercise shoulder, shoulder exercise gym, gym exercises for shoulders, shoulder gym workouts, shoulder exercise for gym, shoulder workouts for gym, shoulders exercises gym, exercise for shoulders in gym, gym exercise for shoulders, shoulder exercise in gym, shoulder workout at the gym, exercises for shoulder in gym, exercises for shoulders in gym, shoulder exercises for the gym, shoulders exercises in gym, exercises in gym for shoulders,
        shoulder exercises for gym, shoulder workouts for the gym, exercise of shoulder in gym, shoulder workouts in gym, shoulders workout at gym, back exercise for gym, gym workout shoulder, gym exercises back, back exercise at the gym, back workouts in the gym, gym back exercise, gym exercises for shoulder, back exercises at the gym, back exercise in the gym, dumbbell dumbbell, exercise for back in gym, shoulders exercises at gym, gym training back, exercises for back in gym, fitness cardio workout, gym exercise of chest, workout exercises for chest, gym workout for chest, cardio exercise workouts, cardio exercise workout, workout cardio, workout chest exercises, gym exercise chest, workouts cardio, cardio workout moves, workout exercises cardio, work out chest, chest gym exercise, gym chest exercises, cardio workouts exercises, chest workout exercise, cardio workout exercise, chest chest workout, workout exercises chest, cardio exercises workout, chest exercises and workouts, exercise cardio workout, fitness chest, workout for the chest, exercise to chest, workouts chest, chest workout in gym, gym workouts for chest, exercise for cardio, exercises to workout chest, exercises in gym for chest, exercises chest, chest exercises in gym, exercises in cardio, exercises for cardio, best health clubs near me, best gym in near me, best gyms in near me, best health club near me, great gyms near me, gymnasium near me with fees, best gym close to me, gym fee near me, gyms near me fees, blood exam near me, women gym near me, workout for chest at gym, exercise in gym for chest, chest gym exercises, gym chest exercise, exercise for chest at gym, exercises for chest at gym, gym chest workouts, how to lose weight lose fast, chest exercise at gym, gyms for women near me, gyms near me for women, gyms near me ladies, workout of abs, fitness abs workout, abs exercise workouts, abs exercises workout, fitness abs exercises, exercise abs workout, workout abs exercises, workout exercise for abs, women fitness gym near me, ab workout exercises, gym woman near me, women fitness center near me, women's fitness gym near me, exercises to abs,
        gym ladies near me, near by gyms, workout for reduce belly fat, exercise for reduce belly fat, belly fat reduce workout, exercise for belly fat reduction, belly fat reduction workout, exercises for reduce belly fat, reduce belly fat workout, workout for reducing belly fat, exercises for belly fat reduce, workout back exercises, back exercise exercise, back exercises workout, exercise to reduce the belly fat, back exercise back, back and exercises, workout exercises back, back exercise workout, exercise for tummy fat reduction, belly fat loss exercises, reduction of belly fat exercises, to reduce tummy fat exercise, tummy fat reduction exercise, exercises to reduce fat belly, exercises that reduce belly fat, exercise for reduce tummy fat, tummy fat reducing exercise, belly fat losing exercises, workouts reduce belly fat, exercises to reduce the belly fat, workout exercises for back, workout exercise for back, belly fat losing exercise, exercise reduce belly fat, reducing tummy fat exercise, sixpack, exercises of back, exercise for reducing belly fat, exercises for belly fat reduction, workout s, fitness india, workout exercises for weight loss, exercise workouts for belly fat, workout exercise for weight loss, exercise workouts lose weight, fitness for belly fat, workout weight loss, stomach fat exercise, weight loss exercise workout, workout and weight loss, exercise workout for weight loss, exercises for fat stomach, exercise for fat belly, weight loss and workout, exercises for fat belly, workout belly fat, fat stomach workout, weight reduction exercises, belly fat and exercise, weight reducing exercise, belly fat stomach exercise, gym nearest, home exercise for abs, near me protein shop, ab workout exercises at home, exercise for abs at home, exercises for abs gym, abs workout in home, abs exercise in home, abs exercises for home, ab at home exercises, abs exercise at home, benefit of milk with turmeric, at home exercises abs, home workout exercises for abs, at home abs workout, workout at home abs, gym exercise for abs, home workouts for abs, abs workout for home, abs exercise for home, workout at home for abs, abs home workout, abs exercises home, home ab workout, exercise for abs at gym, gym abs exercises, abs home exercise, exercises for abs in gym, gym for workout, chest workouts in home, at home workout for abs, workout abs at home, exercise at home chest, workouts at home for abs, gym workouts for cardio, home exercise for chest, abs best workout at home, exercises chest at home, at home workout for chest, workout for chest at home, workout for chest home, workout chest at home, at home workouts abs, home workout exercises for chest, cardio exercise at gym, chest workout in home, home exercises for chest, at home chest exercise, exercise abs workout at home, chest workout for home, at home exercise for chest, exercise at home for chest, abs home workout exercises, exercise chest at home, chest training at home, workout at home for chest, chest workouts for home, at home workout abs, cardio workouts for gym, at home workouts for chest, workout at home chest, chest exercise for home, abs workout exercise at home, exercise for chest at home, abs workout exercises at home, exercises for chest at home, cardio workouts for the gym, chest workout from home, chest workout exercises at home, exercises at home for chest, workouts at home for chest, chest workout at home, cardio workout at the gym, tummy fat workout, ab workout home, cardio workouts gym, cardio gym exercises, workout and gym, chest exercises for home, cardio exercises at gym, gym workout for cardio, exercise of chest at home, at home exercises for chest, workouts for chest at home, cardio workout at gym, exercise workout gym, chest workout for at home, home exercises for abs, gym workouts cardio, how to fitness at home, gym workout gym, cardio exercise gym, gym cardio exercise, gym for trainers, fitness center near by me, fitness places near me, exercise facilities near me, fitness facilities near me, fitness gyms close to me, near gym at me, near to me gym, fitness gym close to me, fitness center close to me, work out facility near me, fitness in home, exercise facility near me, unisex gym near me, exercise workouts at home, nearest fitness center to me, workout from home, fitness health clubs near me, near me fitness gym, fitness center gym near me, home exercise at home, fitness at home exercises, workout exercise at home, home exercise workout, fitness place near me, exercise workout home, exercises workout at home, exercise at home workout, exercises home workout, workouts in home, workout on home, home exercise workouts, exercise home workout, workout at home exercises, workout at home exercise, exercise workout at home, workout for home, fitness for weight loss, exercise for home workout, homework workout, belly fat reduction exercise, workout for at home, best fitness gyms near me, best workout gyms near me, closest gym, nearby gym near me, near by gym near me, top rated gyms near me, how reduce thigh fat, workout for upper chest, exercises for upper chest, how to reduce the thigh fat, cheap workout places near me, gym near me with fees near me, fitness gyms, fitness & gym, fitness near me, fit gym near me, fitness near by me, boxing gym close to me, fitness closest to me, fitness gym, fitness gym near me, fitness and gyms near me, fitness near to me, zumba near me, zumba fitness near me, cheapest gym near me, zumba classes, zoomba classes, a fitness gym, weight loss exercise best, fitness first, exercise to reduce fat from thighs, exercise to reduce fat from thigh, exercises to reduce fat on thighs, best exercise for fitness and weight loss, exercises to reduce thigh fat, exercises for reducing thigh fat, exercise for thigh fat reduce, exercises for back at home, arms workout, exercise to reduce the thigh fat, exercise to reduce fat on thighs, exercise for reducing thigh fat, home exercises for the back, exercises for thigh fat reduction, best exercise for loss weight, thigh exercises to lose fat, at home exercises for back, at home exercise for back, back workout exercises at home, at home workout for back, exercise for thigh fat reduction, workout for back at home, exercise for back at home, home exercises shoulders, back home exercises, home workout shoulder, dumbbell workout exercise, shoulder workouts for home, home shoulder workout, home workout for shoulder, at home back workout, shoulder exercises in home, shoulder home workout, back exercises in home, home exercise for back, best weight reduction exercises, shoulder exercise at home, shoulders home workout, shoulder workout for home, weight loss best exercise, thigh fat loss exercise, home exercise for shoulder, exercises for your back at home, back exercises home workout, shoulder workout at home, best fitness for weight loss, shoulder exercises from home, zumba fitness classes, best workout for lose weight, shoulder exercise in home, shoulders exercises at home, exercises for shoulder at home, workout for shoulder at home, shoulders workout at home, best weight loss workout, thighs fat loss exercise, at home workouts for back, at home back exercises, shoulder workout in home, shoulder exercise home, back workout in home, thigh fat loss exercises, back workouts for home, back workout for home, home exercises for shoulders, back exercise for home, home workout for shoulders, back at home exercise, shoulder exercises for home, back exercise in home, arm workout exercises, shoulder exercises home, home exercises for shoulder, 6 pack body, workout exercise for arms, fitness and strength training, near gym centres, pregnancy yoga classes near me, near gym centre, nearby gyms near me, nearby gym centre, nearest gym near me, nearest fitness center near me, nearest gym centre, personal fitness trainer near me, nearby gym to me, personal physical trainer near me, fitness personal trainer near me, private fitness trainer near me, fitness freaks, personal trainer near me, personal fitness coach near me, trainer near.me, personal instructor near me, private trainer near me, personality trainer near me, physical trainers near me, physical trainer near me, personal workout trainer near me, weight loss exercises for women at home, weight loss workout for women at home, fitness trainer near me, professional trainer near me, near me personal trainer, fitness instructor near me, weight loss exercise for female at home, personal fitness instructor near me, exercise for weight loss women at home, women weight loss exercises at home, weight loss exercise at home for women, exercise for weight loss for women at home, exercises for weight loss at home for female, workouts images, exercises to reduce fat in thighs, exercise for weight loss for female at home, weight loss workouts for women at home, at home weight loss workouts for women, exercise for women to lose weight at home, home workout for weight loss female, how to reduce belly fat in exercise, how to exercise to reduce belly fat, lower chest workout exercises, arms workout in gym, workout for 6 pack, workout for six pack, arms gym workout, 6 pack exercise, exercises six pack, arm gym workout, water cleanse recipe, arms workout gym, arm exercise gym, exercises 6 pack, how to reduce the belly fat with exercise, exercises for six pack, arms exercises in gym, exercise for arms in gym, exercises for 6 pack, home workouts to lose weight for women, how to reduce belly fat with exercise, trainer near me, how to reduce belly fat exercise, lean body for man, near me gym center, protein chapati, boxing coaches near me, lean body men, lean body for men, 6pack, near me gym near me, fitness club, fitness cardio workout at home, lean body male, only ladies gym near me, best exercises for reduce belly fat, swimming classes near me with fees, gym near me only for ladies, gyms only for ladies near me, exercises shoulders, lean man body, workouts at home cardio, best exercise reduce belly fat, cardio workout for at home, exercises for fat belly loss, resistance training exercises at home, best exercise for reducing belly fat, best exercises for reducing belly fat, strength training home workout, cardio exercises at home, chest exercises at home, fitness upper body workout, upper body training, home exercises cardio, exercises upper body, workout home cardio, workout of shoulder, home workout strength, workouts for stomach, protein powder homemade, homemade protein powder, home made protein powder, homemade protein supplement, protein homemade powder, nearby gym center, near gym center, gym near me with personal trainer, gyms near me with personal trainer, gym near me with trainer, fitness centers near, gym with a personal trainer near me, gyms with trainers near me, gym with personal trainers near me, gyms with personal trainer near me, personal trainer gyms near me, gym with instructor near me, trainer gym near me, gym with personal trainer near me, toning body, fitness center, personal physical trainer, fitness center near, fitness hub, fitness c, exercise to reduce belly fat for female at home, exercises to reduce belly fat for female at home, lose belly fat workout for women at home, gym trainer near me, gymnastic trainer near me, top workout programs, gym protein, best exercise for reduce belly fat, exercises for lower belly fat, exercises lower belly fat, home 6 pack workout, recipe bhindi masala, photos of fitness, gyms india, workout places around me, fitness center near my location, fitness studio near me, gyms fitness, workout gyms, gym for fitness, classes near me fitness, gyms near my location, gym centres, gym centre, gym india, exercise studios near me, gym nearby my location, gym near me within 800m, exercise studio near me, workout studios near me, closest gym to my location, gym near me within 400m, gym around me, fitness gym near my location, near my location gym, classes fitness near me, gyms nearby near me, workout studio near me, gym near my location, gyms nearby my location, fitness in gym, fitness classes close to me, gym nearby near me, fitness app, gym indian, gym website, fitness centres in india, fitness center in india, gyms for fitness, fitness centre in india, fitness classes near me, zumba classes near me only for ladies, fitness gym website, nearby studios, fitness application, six pack exercise in home, shoulder back exercises, dumbbell workout at home, exercise for lower body, checkpost near me, ladies weight loss workout, how to make protein powder at home, gyms around me, how to prepare protein powder at home, how to make protein powder in home, how make protein powder at home, workout programs at home, best gym, exercise to reduce weight at home, gym prices near me, best for gym, gym near me rates, near by gym centre, weight loss exercise in home, weight loss exercise for home, weight loss home exercise, weight loss at home exercise, gym near me and prices, gyms cost near me, weight loss in home exercise, gyms near me and prices, weight loss at home exercises, weight loss exercises for home, gym pricing near me, gym near me prices, gym cost near me, gym near me with prices, gym near me price, home weight loss exercise, weight losing exercises at home, exercises to reduce weight at home, weight loss exercises in home, weight loss exercises home, at home exercise for weight loss, how protein powder is made, weight loss exercises gym, weight loss fast exercise, losing weight exercises at home, lose weight home exercise, at home exercise weight loss, weight loss exercise from home, lose weight exercise home, weight losing exercise at home, weight loss home exercises, fast lose weight exercise, lose weight by exercising at home, lose weight with exercise at home, how the protein powder is made, lose weight at home exercise, at home exercises for weight loss, belly reduce workout, fitness exercises, weight loss exercises fast, fast weight losing exercise, nearby gyms for ladies, fast weight loss exercise, fastest weight loss exercise, gym workout images, gym workout photos, workout gym images, gym images hd, gym workouts images, nearest swimming classes, dumbbell workout, natural protein supplement, natural protein powder, near by gym in my location, best gym near me with fees, best gyms for women near me, best gym in india, best gym for women near me, protein powder natural, khichdi calories, gym fee, gym fees, fitness centers and gyms, protein supplements natural, gold gym in janakpuri, fit app, top rated gym near me, women's belly fat workout, best gym near me for ladies, india best gym, cheap gyms near me, belly fat workout for women, great chest workout at home, workouts at home for belly fat, exercise for belly fat for woman, best gym for ladies near me, exercise for lose thigh fat, perfect chest workout at home, belly fat exercise women, gym membership, gyms near me for free, gyms in, gym center, gym member, membership for gym, gym near me for free, free gym near me, gyms for free near me, gym for free near me, home fitness weight loss, surat gyms, surat gym, gym surat, gyms surat, weight reduction exercises at home, gyms in surat, membership of gym, near by me gym, exercise for weight loss in home, workout for weight loss at home, home weight loss workout, exercising at home for weight loss, gyms open near me, near gym by me, weight reducing exercises at home, exercise at home weight loss, workout home weight loss, fitness at home to lose weight, exercises at home for weight loss, weight loss workout home, exercise to weight loss at home, home exercise to reduce weight, weight reducing exercise at home, workout at home to lose weight, workout at home for weight loss, fitness at home for beginners, home workout to reduce weight, home workout weight loss, exercises at home for beginners, exercise for weight reduction at home, exercise weight loss at home, home workout lose weight, weight loss at home workout, workout to lose weight at home, beginner exercises at home, weight loss workout for home, gyms near me that are open, weight loss workouts for home, workouts for weight loss at home, lose weight workout at home, at home workout for weight loss, workouts at home for weight loss, workout at home weight loss, gym near me open now, workouts for home to lose weight, beginners exercise routine at home, exercise workouts at home to lose weight, workout at home for beginners, weight loss home workout, exercises for weight loss at home, gyms near me free, exercise for lose weight at home, gym open near me, at home workouts for weight loss, zumba dance near me, coffee for pre workout, exercise at home beginners, zumba dance studio near me, butt reduction exercises, gym opening near me, gym in bandra west, at home weight loss workout, workout beginners at home, exercise to reduce the buttocks, home workout to lose weight, weight loss routine at home, beginner exercise at home, at home beginners workout, gym near me open, exercise and lose weight at home, at home workout for beginner, exercise at home for weight loss, exercises to reduce butt, exercise to reduce butt, reducing buttocks exercise, exercise at home for beginners, workout at home lose weight, home exercises to reduce weight, home workout plans, chest and back exercises, at home exercises for beginners, fat burning chest exercises, workout at home beginner, loss weight workout at home, what exercise burns the most belly fat for female, gym in surat, exercise lose weight at home, workout for losing weight at home, at home exercise for beginners, workout to reduce buttocks, exercise routines for beginners at home, new gym near me, buttocks reduce exercise, exercise to lose weight at home, buttock reduce exercise, fitness routine for beginners at home, butt reduce exercise, open gym near.me</p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <FwgHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Online Prep Coaching Program details. "
        }
        options={{ pageRef: true }}
      />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/rtp-five.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("vy5Iw4BWFdU")}
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
                          {PrepCoachingProgramData?.info1.map((info) => (
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
                    programData={PrepCoachingProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Prep Coaching For BodyBuilding."
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
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t4.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t1.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/41.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g3.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t5.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/42.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t4.webp"
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
                      "/assets/images/landing-page/t1.webp"
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
                      "/assets/images/landing-page/t4.webp"
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
                    src={process.env.PUBLIC_URL + "/assets/images/img/41.webp"}
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
                      "/assets/images/landing-page/g3.webp"
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
                      "/assets/images/landing-page/t2.webp"
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
                      "/assets/images/landing-page/g4.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>{" "} */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/t5.webp"
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
                      process.env.PUBLIC_URL + "/assets/images/fwg/body-1.webp"
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
                      process.env.PUBLIC_URL + "/assets/images/fwg/body-2.webp"
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
      {/* <Coaches /> */}

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
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="demoo text-center">
            <h2 className="h2-fs">
              FAQ
              <span className="m-0 text-blue-color">'s</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item" onClick={() => toggleAnswer(index)}>
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i
                      className={`fas fa-chevron-right ${activeIndex === index ? "active" : ""
                        }`}
                    ></i>
                  </div>
                </div>
                <div
                  className={`faq-answer ${activeIndex === index ? "active" : ""
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
      <InquiryForm />
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
                          {/* <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option> */}
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

export default OnlinePrepCoachingProgram;
