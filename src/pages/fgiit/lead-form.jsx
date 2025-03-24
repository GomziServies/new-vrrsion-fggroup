import React, { useState } from "react";
import { bookDemoLecture } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function LeadForm() {
  const canonicalUrl = window.location.href;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: null,
    slot: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const getTimeSlotOptions = (course) => {
    switch (course) {
      case "600e698486d2eb34f0796e20":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="14:00">02:00 pm To 03:00 pm</option>
          </>
        );

      case "6010e899eb38ac0a706af297":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="13:00">01:00 pm To 02:00 pm</option>
          </>
        );

      case "62ca5619342a0f40d3672143":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="15:00">03:00 pm To 04:00 pm</option>
          </>
        );

      case "61e8b18c74eefa46b05548a0":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="14:00">02:00 pm To 03:00 pm</option>
          </>
        );

      case "61e8b1c374eefa46b05548a6":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="14:00">02:00 pm To 03:00 pm</option>
          </>
        );

      case "61838b7b21abcf4633d86315":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="12:00">12:00 pm To 01:00 pm</option>
          </>
        );

      case "627eb6206c033c16f2d5bce5":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="15:00">03:00 pm To 04:00 pm</option>
          </>
        );

      case "6324db9cae47f19e757dbd45":
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="13:00">01:00 pm To 02:00 pm</option>
          </>
        );

      default:
        return (
          <>
            <option value="" hidden>
              Select Time Slot
            </option>
            <option value="06:00">06:00 am To 07:00 pm</option>
            <option value="19:00">07:00 pm to 08:00 pm</option>
          </>
        );
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.date ||
      !formData.slot ||
      !formData.course
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
      return;
    }

    const { name, email, mobile, date, slot, course } = formData;

    let formattedDate;
    if (typeof date === "string") {
      const [month, day, year] = date.split("/");
      formattedDate = `${year}-${month}-${day}`;
    } else {
      formattedDate = date.toISOString().split("T")[0];
    }

    let message = "No message";
    switch (course) {
      case "600e698486d2eb34f0796e20":
        message =
          "I have booked a demo lecture for Diploma In Personal Training course Course at " +
          formattedDate +
          " " +
          slot;
        break;

      case "6010e899eb38ac0a706af297":
        message =
          "I have booked a demo lecture for Diploma In Nutrition course at " +
          formattedDate +
          " " +
          slot;
        break;

      case "62ca5619342a0f40d3672143":
        message =
          "I have booked a demo lecture for Diploma In Business Management Course at " +
          formattedDate +
          " " +
          slot;
        break;

      case "61e8b18c74eefa46b05548a0":
        message =
          "I have booked a demo lecture for Anabolic Androgenic Steroids at " +
          formattedDate +
          " " +
          slot;
        break;

      case "61e8b1c374eefa46b05548a6":
        message =
          "I have booked a demo lecture for Group Instructor Workshop at " +
          formattedDate +
          " " +
          slot;
        break;

      case "61838b7b21abcf4633d86315":
        message =
          "I have booked a demo lecture for Injury Rehabilitation Workshop at " +
          formattedDate +
          " " +
          slot;
        break;

      case "627eb6206c033c16f2d5bce5":
        message =
          "I have booked a demo lecture for Advance Clinical Nutrition Workshop at " +
          formattedDate +
          " " +
          slot;
        break;

      case "6324db9cae47f19e757dbd45":
        message =
          "I have booked a demo lecture for Python Programming And Learn Core & Advance Python Course at " +
          formattedDate +
          " " +
          slot;
        break;

      default:
        break;
    }

    const payload = {
      name,
      email,
      mobile,
      message,
      subject: "Demo Lecture Registration",
      developer_notes: {
        topic: "Demo Lecture",
        course_id: course,
        date: `${formattedDate} ${slot}`,
      },
    };

    await bookDemoLecture(payload);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      date: null,
      slot: "",
      course: "",
    });
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <>
      <Helmet>
        <title>Book a live Demo lecture</title>
        <meta name="description" content="FG Group offers best Certified Personal Trainer, Nutrition, Health and Fitness Courses for your career development" />
        <meta name="keyword" content="dietitian in india, best dietitian in surat, best nutritionist in india, online nutrition consultant,vegetarian diet plan for weight loss, best online dietitian, online dietician for weight loss,vegetarian diet chart for weight loss for female, online dietician consultation, best nutritionist for weight loss, dietician online, diet plan to gain weight, best diet plan for fat loss, best diet for fat loss and muscle gain, best online dietician for weight loss, nutritionist, dietitian, Best Nutritionist in India, Best Dietician In India, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="Book a live Demo lecture" />
        <meta property="og:description" content="FG Group offers best Certified Personal Trainer, Nutrition, Health and Fitness Courses for your career development" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/lead-form" />
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
      <div className="mt-4 new-lead-form-design d-none d-md-block">
        <div className="container-fluid">
          <div className="container blogss">
            <div className="row position-relative">
              <div className="col-lg-5 image-fix-lead-form">
                <div className="p-3  lead-form-image">
                  <div className="text-center ">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/fg_group.webp"
                      }
                      alt="Fg Group"
                      className="img-fluid"
                      width="120px"
                    />
                  </div>
                  <div className="demoo mt-5">
                    <h2 className="mb-2 fs-30">
                      Book A Live Demo Lecture
                    </h2>
                    <span className="text-dark">
                      Share your details here to schedule a free live demo
                      session
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-3 p-md-3">
                  <div className="mb-0 p-0">
                    <div className="d-block" id="formmi">
                      <div className="close-btn">
                        <Link to="/fgiit/fitness-courses">
                          <i className="fas fa-times"></i>
                        </Link>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-12 pl-2 pl-md-0">
                          <p className="mb-0 mt-2 mt-md-3">Full Name :-</p>
                          <div className="input-group align-items-center">
                            <span>
                              <i className="far fa-user"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control fr"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              style={{ color: "#000!important" }}
                              placeholder="Enter Your name"
                              id="txt_book_session_name"
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Email Address :-</p>
                          <div className="input-group align-items-center">
                            <span>
                              <i className="fas fa-envelope"></i>
                            </span>
                            <input
                              type="email"
                              className="form-control fr"
                              placeholder="Enter Email name"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Phone Number :-</p>
                          <div className="input-group align-items-center mb-3">
                            <span>
                              <i className="fas fa-phone-alt"></i>
                            </span>
                            <input
                              type="number"
                              className="form-control fr"
                              placeholder="Enter Your contact Number"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Course Name :-</p>
                          <div className="input-group align-items-center mb-3">
                            <span className="pr-2">
                              <i className="fas fa-user-graduate"></i>
                            </span>
                            <select
                              className="num-employ pl-0"
                              name="course"
                              value={formData.course}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  course: e.target.value,
                                })
                              }
                            >
                              <option value="" hidden>
                                Select Course
                              </option>
                              <option
                                value="62ca5619342a0f40d3672143"
                                id="diploma-b-m"
                              >
                                Diploma In Business Management
                              </option>
                              <option
                                value="61e8b18c74eefa46b05548a0"
                                id="anabolic-a-s"
                              >
                                Anabolic Androgenic Steroids
                              </option>
                              <option
                                value="600e698486d2eb34f0796e20"
                                id="diploma-p-t"
                              >
                                Diploma In Personal Training course
                              </option>
                              <option
                                value="6010e899eb38ac0a706af297"
                                id="diploma-n-c"
                              >
                                Diploma In Nutrition course
                              </option>
                              <option
                                value="61e8b1c374eefa46b05548a6"
                                id="group-i-w"
                              >
                                Group Instructor Workshop
                              </option>
                              <option
                                value="61838b7b21abcf4633d86315"
                                id="injury-r-w"
                              >
                                Injury Rehabilitation Workshop
                              </option>
                              <option
                                value="627eb6206c033c16f2d5bce5"
                                id="advance-c-n"
                              >
                                Advance Clinical Nutrition Workshop
                              </option>
                            </select>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p className="mb-0">Date :-</p>
                              <DatePicker
                                selected={formData.date}
                                onChange={handleDateChange}
                                minDate={tomorrow}
                                className="form-control input-group fr p-2"
                                placeholderText="Choose a date"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="mb-0">Time :-</p>
                              <div className="input-group align-items-center mb-3 py-1 ">
                                <span className="pr-2">
                                  <i className="fas fa-clock"></i>
                                </span>
                                <select
                                  className="form-control fr border-0"
                                  name="slot"
                                  value={formData.slot}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      slot: e.target.value,
                                    })
                                  }
                                  style={{ width: "70%" }}
                                >
                                  {getTimeSlotOptions(formData.course)}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Book Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 new-lead-form-design d-block d-md-none">
        <div className="container-fluid">
          <div className="container blogss">
            <div className="row">
              <div className="col-lg-5 border-right border-bottom">
                <div className="p-3">
                  <div className="text-center">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/fg_group.webp"
                      }
                      alt="Fg Group"
                      className="img-fluid"
                      width="120px"
                    />
                  </div>
                  <div className="demoo mt-5">
                    <h2 className="mb-2 fs-30">
                      Book A Live Demo Lecture
                    </h2>
                    <span className="text-dark">
                      Share your details here to schedule a free live demo
                      session
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-3 p-md-3">
                  <div className="mb-0 p-0">
                    <div className="d-block" id="formmi">
                      <div className="close-btn">
                        <Link to="/fgiit/fitness-courses">
                          <i className="fas fa-times"></i>
                        </Link>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-12 pl-2 pl-md-0">
                          <p className="mb-0 mt-2 mt-md-3">Full Name :-</p>
                          <div className="input-group align-items-center">
                            <span>
                              <i className="far fa-user"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control fr"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              style={{ color: "#000!important" }}
                              placeholder="Enter Your name"
                              id="txt_book_session_name"
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Email Address :-</p>
                          <div className="input-group align-items-center">
                            <span>
                              <i className="fas fa-envelope"></i>
                            </span>
                            <input
                              type="email"
                              className="form-control fr"
                              placeholder="Enter Email name"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Phone Number :-</p>
                          <div className="input-group align-items-center mb-3">
                            <span>
                              <i className="fas fa-phone-alt"></i>
                            </span>
                            <input
                              type="number"
                              className="form-control fr"
                              placeholder="Enter Your contact Number"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                            />
                          </div>
                          <p className="mb-0 mt-2 mt-md-3">Course Name :-</p>
                          <div className="input-group align-items-center mb-3 py-1">
                            <span className="pr-2">
                              <i className="fas fa-user-graduate"></i>
                            </span>
                            <select
                              className="form-control fr border-0"
                              name="course"
                              value={formData.course}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  course: e.target.value,
                                })
                              }
                            >
                              <option value="" hidden>
                                Select Course
                              </option>
                              <option
                                value="62ca5619342a0f40d3672143"
                                id="diploma-b-m"
                              >
                                Diploma In Business Management
                              </option>
                              <option
                                value="61e8b18c74eefa46b05548a0"
                                id="anabolic-a-s"
                              >
                                Anabolic Androgenic Steroids
                              </option>
                              <option
                                value="600e698486d2eb34f0796e20"
                                id="diploma-p-t"
                              >
                                Diploma In Personal Training course
                              </option>
                              <option
                                value="6010e899eb38ac0a706af297"
                                id="diploma-n-c"
                              >
                                Diploma In Nutrition course
                              </option>
                              <option
                                value="61e8b1c374eefa46b05548a6"
                                id="group-i-w"
                              >
                                Group Instructor Workshop
                              </option>
                              <option
                                value="61838b7b21abcf4633d86315"
                                id="injury-r-w"
                              >
                                Injury Rehabilitation Workshop
                              </option>
                              <option
                                value="627eb6206c033c16f2d5bce5"
                                id="advance-c-n"
                              >
                                Advance Clinical Nutrition Workshop
                              </option>
                            </select>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p className="mb-0">Date :-</p>
                              <DatePicker
                                selected={formData.date}
                                onChange={handleDateChange}
                                minDate={tomorrow}
                                className="form-control input-group fr p-2"
                                placeholderText="Choose a date"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="mb-0">Time :-</p>
                              <div className="input-group align-items-center mb-3 py-1 ">
                                <span className="pr-2">
                                  <i className="fas fa-clock"></i>
                                </span>
                                <select
                                  className="form-control fr border-0"
                                  name="slot"
                                  value={formData.slot}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      slot: e.target.value,
                                    })
                                  }
                                  style={{ width: "70%" }}
                                >
                                  {getTimeSlotOptions(formData.course)}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Book Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadForm;
