import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function FgiitAllLinks() {
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

  return (
    <>
      <Helmet>
        <title>Recorded Injury Rehabilitation Masterclass</title>
        <meta name="description" content="In our personal trainer courses we teach how to treat obesity, special needs and perform science based exercise." />
        <meta name="keyword" content="g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="Recorded Injury Rehabilitation Masterclass" />
        <meta property="og:description" content="In our personal trainer courses we teach how to treat obesity, special needs and perform science based exercise." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/fgiit-all-links" />
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
      <section>
        <div className="bg-green">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12 text-center d-flex profile-img">
                <div className="main-img profiles">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fgiit.webp"
                    }
                    alt="fgiit"
                  />
                </div>
              </div>
              <div className="col-12 profile-info text-center">
                <div className="social mt-4 mt-md-2">
                  <ul className="d-flex m-0 p-0 text-center">
                    <li>
                      <Link
                        to="https://www.facebook.com/fgit.citylight/"
                        className="facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/fgiit.surat/"
                        className="instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/dt-gautam-jani-561a50161/"
                        className="linkedin"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/channel/UCoqAUVmuQkFtfw1MYmn62vg"
                        className="youtube"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid mt-4">
          <div className="container">
            <div className="tabata farttys text-center">
              <h1>
                FGIIT All Social Media and{" "}
                <span className="m-0 text-blue-color">
                  {" "}
                  Webpages links
                </span>
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                <div className="links mt-2 mt-sm-4">
                  <div className="links-main">
                    <div className="link-course d-none d-md-block">
                      <Link
                        to="https://fggroup.in/fgiit/fitness-and-nutrition-courses"
                        className="d-flex align-items-center"
                      >
                        <div className="links-img-s">
                          <div className="links-img"></div>
                        </div>
                        <div className="link-info info-of-card">
                          <h2 className="h4-fs">Offline Courses available here</h2>
                          <p className="font-weight-bold font-s">
                            Nutri Trainer Course
                          </p>
                          <p>
                            FGIIT Is Here With The Perfect Blend Of All The
                            Major Courses Like Personal Training...
                          </p>
                        </div>
                        <div className="link-icon">
                          <i className="fas fa-paper-plane"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mobile d-block d-md-none">
                    <div className="mobile-card">
                      <Link
                        to="https://fggroup.in/fgiit/fitness-and-nutrition-courses"
                        className="btn btn-block btn-primary"
                      >
                        <div className="mobile-img">
                          <div className="links-img"></div>
                        </div>
                        <div className="moblie-info info-of-card">
                          <h2 className="h4-fs">Offline Courses available here</h2>
                          <p className="font-weight-bold font-s">
                            Nutri Trainer Course
                          </p>
                          <p>
                            FGIIT Is Here With The Perfect Blend Of All The
                            Major Courses Like Personal Training...
                          </p>
                        </div>
                        <div className="pt-4">
                          <div className="book1 m-0">
                            <h2 className="h6-fs">Book Your Spot Now</h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                <div className="links mt-2 mt-sm-4">
                  <div className="links-main">
                    <div className="link-course d-none d-md-block">
                      <Link
                        to="https://fggroup.in/fgiit/online-fitness-courses"
                        className="d-flex align-items-center"
                      >
                        <div className="links-img-s">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/offline2.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="link-info info-of-card">
                          <h2 className="h4-fs">Online Course available in all Course</h2>
                          <p className="font-weight-bold font-s">
                            Diploma In Personal Training Course
                          </p>
                          <p>
                            We Started These Nutrition Courses To Make The
                            Fitness And Nutrition Industry-Main Streamline After
                            The 10th...
                          </p>
                        </div>
                        <div className="link-icon">
                          <i className="fas fa-paper-plane"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mobile d-block d-md-none">
                    <div className="mobile-card">
                      <Link
                        to="https://fggroup.in/fgiit/online-fitness-courses"
                        className="btn btn-block btn-primary"
                      >
                        <div className="mobile-img">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/offline2.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="moblie-info info-of-card">
                          <h2 className="h4-fs">Online Course available in all Course</h2>
                          <p className="font-weight-bold font-s">
                            Diploma In Personal Training Course
                          </p>
                          <p>
                            We Started These Nutrition Courses To Make The
                            Fitness And Nutrition Industry-Main Streamline After
                            The 10th...
                          </p>
                        </div>
                        <div className="pt-4">
                          <div className="book1 m-0">
                            <h2 className="h6-fs">Book Your Spot Now</h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                <div className="links mt-2 mt-sm-4">
                  <div className="links-main">
                    <div className="link-course d-none d-md-block">
                      <Link
                        to="https://fggroup.in/fgiit/flexible-fitness-courses"
                        className="d-flex align-items-center"
                      >
                        <div className="links-img-s">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/offline5.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="link-info info-of-card">
                          <h2 className="h4-fs">Flexible Learning</h2>
                          <p className="font-weight-bold font-s">
                            Flexible Learning in your comfort zone
                          </p>
                          <p>
                            This Is The Foundation Course In Exercise Science
                            That Provides Comprehensive Theoretical
                          </p>
                        </div>
                        <div className="link-icon">
                          <i className="fas fa-paper-plane"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mobile d-block d-md-none">
                    <div className="mobile-card">
                      <Link
                        to="https://fggroup.in/fgiit/flexible-fitness-courses"
                        className="btn btn-block btn-primary"
                      >
                        <div className="mobile-img">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/offline5.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="moblie-info info-of-card">
                          <h2 className="h4-fs">Flexible Learning</h2>
                          <p className="font-weight-bold font-s">
                            Flexible Learning in your comfort zone
                          </p>
                          <p>
                            This Is The Foundation Course In Exercise Science
                            That Provides Comprehensive Theoretical
                          </p>
                        </div>
                        <div className="pt-4">
                          <div className="book1 m-0">
                            <h2 className="h6-fs">Book Your Spot Now</h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                <div className="links mt-2 mt-sm-4">
                  <div className="links-main">
                    <div className="link-course d-none d-md-block">
                      <Link
                        to="https://fggroup.in/fgiit/flexible-fitness-courses"
                        className="d-flex align-items-center"
                      >
                        <div className="links-img-s">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/combo-book.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="link-info info-of-card">
                          <h2 className="h4-fs">Study Material</h2>
                          <p className="font-weight-bold font-s">
                            Courses Books
                          </p>
                          <p>
                            Dr. Gautam Jani, Dt. Foram Desai, Dt. Chirag Pandey,
                            Dr. Asha Jiyani, Dr. Ishaver Patel
                          </p>
                        </div>
                        <div className="link-icon">
                          <i className="fas fa-paper-plane"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mobile d-block d-md-none">
                    <div className="mobile-card">
                      <Link
                        to="https://fggroup.in/fgiit/flexible-fitness-courses"
                        className="btn btn-block btn-primary"
                      >
                        <div className="mobile-img">
                          <div
                            className="links-img"
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/combo-book.webp)`,
                            }}
                          ></div>
                        </div>
                        <div className="moblie-info info-of-card">
                          <h2 className="h4-fs">Study Material</h2>
                          <p className="font-weight-bold font-s">
                            Courses Books
                          </p>
                          <p>
                            Dr. Gautam Jani, Dt. Foram Desai, Dt. Chirag Pandey,
                            Dr. Asha Jiyani, Dr. Ishaver Patel
                          </p>
                        </div>
                        <div className="pt-4">
                          <div className="book1 m-0">
                            <h2 className="h6-fs">Order Now</h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="pl-2 pt-4 m-0 h4-fs text-center title-hed">
              Latest Videos
            </h2>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
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
                      items: 1,
                    },
                    1000: {
                      items: 1,
                    },
                  }}
                >
                  <div className="links mt-2 mt-sm-4 items">
                    <div className="links-main">
                      <div className="link-course d-none d-md-block">
                        <a
                          onClick={() => openVideoModal("oNtDaU2L4gk")}
                          className="d-flex align-items-center custom"
                        >
                          <div className="links-img-s">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/healing_and_care15.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="link-info">
                            <h2 className="h4-fs">
                              What is SGPT & SGOT Test | Diet Pattern For Relief
                              | SGPT...
                            </h2>
                            <p>
                              Today discussing fitness myths that you should
                              avoid with your personal training clients..
                            </p>
                          </div>
                          <div className="link-icon">
                            <i className="fas fa-paper-plane"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mobile d-block d-md-none">
                      <div className="mobile-card">
                        <a
                          onClick={() => openVideoModal("oNtDaU2L4gk")}
                          className="btn btn-block btn-primary custom"
                        >
                          <div className="mobile-img">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/healing_and_care15.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="moblie-info">
                            <h2 className="h4-fs">
                              What is SGPT & SGOT Test | Diet Pattern For Relief
                              | SGPT...
                            </h2>
                            <p>
                              Today discussing fitness myths that you should
                              avoid with your personal training clients..
                            </p>
                          </div>
                          <div className="pt-4">
                            <div className="book1 m-0">
                              <h2 className="h6-fs">Watch Now</h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="links mt-2 mt-sm-4 items">
                    <div className="links-main">
                      <div className="link-course d-none d-md-block">
                        <a
                          onClick={() => openVideoModal("aLzkmslx6WY")}
                          className="d-flex align-items-center custom"
                        >
                          <div className="links-img-s">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/cupping.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="link-info">
                            <h2 className="h4-fs">
                              Benefits of Cupping Therapy What Is Cupping
                              Therapy ?
                            </h2>
                            <p>
                              You may have seen red spots like marks on
                              bodybuilders and athletes' bodies do you ever
                              thought...
                            </p>
                          </div>
                          <div className="link-icon">
                            <i className="fas fa-paper-plane"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mobile d-block d-md-none">
                      <div className="mobile-card">
                        <a
                          onClick={() => openVideoModal("aLzkmslx6WY")}
                          className="btn btn-block btn-primary custom"
                        >
                          <div className="mobile-img">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/cupping.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="moblie-info">
                            <h2 className="h4-fs">
                              Benefits of Cupping Therapy What Is Cupping
                              Therapy ?
                            </h2>
                            <p>
                              You may have seen red spots like marks on
                              bodybuilders and athletes' bodies do you ever
                              thought...
                            </p>
                          </div>
                          <div className="pt-4">
                            <div className="book1 m-0">
                              <h2 className="h6-fs">Watch Now</h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="links mt-2 mt-sm-4 items">
                    <div className="links-main">
                      <div className="link-course d-none d-md-block">
                        <a
                          onClick={() => openVideoModal("llN3JrA_I1g")}
                          className="d-flex align-items-center custom"
                        >
                          <div className="links-img-s">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/beginning-keto-diet.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="link-info">
                            <h2 className="h4-fs">
                              Lose Weight Fast | What Is Keto diet Hindi Weight
                              Loss Food...
                            </h2>
                            <p>
                              Here we have added a series of shoulder workout
                              with dumbbell and barbells. workouts are as
                              follows...
                            </p>
                          </div>
                          <div className="link-icon">
                            <i className="fas fa-paper-plane"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mobile d-block d-md-none">
                      <div className="mobile-card">
                        <a
                          onClick={() => openVideoModal("llN3JrA_I1g")}
                          className="btn btn-block btn-primary custom"
                        >
                          <div className="mobile-img">
                            <div
                              className="links-img"
                              style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/beginning-keto-diet.webp)`,
                              }}
                            ></div>
                          </div>
                          <div className="moblie-info">
                            <h2 className="h4-fs">
                              Lose Weight Fast | What Is Keto diet Hindi Weight
                              Loss Food...
                            </h2>
                            <p>
                              Here we have added a series of shoulder workout
                              with dumbbell and barbells. workouts are as
                              follows...
                            </p>
                          </div>
                          <div className="pt-4">
                            <div className="book1 m-0">
                              <h2 className="h6-fs">Watch Now</h2>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  know about
                  <span className="m-0 text-blue-color"> FGIIT</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-4"></div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 d-block d-lg-none mt-3">
                <div className="ply1">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="transform your body in 90 days"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/nutri-course.webp"
                      }
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("NgBzDMlv9Xc")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block mt-4 mt-md-0">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="transform your body in 90 days"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/nutri-course.webp"
                    }
                  />
                  <div className="video-btn">
                    <a
                      onClick={() => openVideoModal("NgBzDMlv9Xc")}
                      className="custom" aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="describe">
                  <p className="mb-1 mt-2 mt-md-0">
                    FGIIT Is Here With The Perfect Blend Of All The Major
                    Courses Like Personal Training, Dietician, Group Instructor,
                    Performance-Enhancing Drugs, And Supplementation. Yes, The
                    Nutri Trainer Course Is Here To Save Your Precious Time And
                    Give You A Wide Scope Of Getting An International Job, Help
                    People To Avoid Injuries, And Come Out Of Medical Illness,
                    And Ofcourse The Knowledge Of Proper Diet And Exercise Plan
                    Will Be Provided By Us.
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
            <div className="col-md-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  customized service By{" "}
                  <span className="m-0 text-blue-color">
                    our team
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-5"></div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div
                  className="blog2 het-rt"
                  style={{ backgroundColor: "#E5FEEF" }}
                >
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/teacher.webp"
                      }
                      alt="FG Group"
                      className="lazy w-50 img-fluid"
                    />
                  </div>
                  <div className="tabata mt-3">
                    <h2 className="h2-fs">Offline Fitness Courses</h2>
                    <p className="mt-3">
                      Dive into the knowledge of fitness & nutri on at our
                      institute.
                    </p>
                    <Link
                      to="/fgiit/fitness-and-nutrition-courses"
                      className="btn btn-read mt-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div
                  className="blog2 het-rt"
                  style={{ backgroundColor: "#E5FEEF" }}
                >
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/classroom.webp"
                      }
                      alt="FG Group"
                      className="lazy w-50 img-fluid"
                    />
                  </div>
                  <div className="tabata mt-3">
                    <h2 className="h2-fs">Online Fitness Courses</h2>
                    <p className="mt-3">
                      Be an expert fitness professional from the comfort of your
                      home.
                    </p>
                    <Link
                      to="/fgiit/online-fitness-courses"
                      className="btn btn-read mt-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div
                  className="blog2 het-rt"
                  style={{ backgroundColor: "#E5FEEF" }}
                >
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/happy-hour.webp"
                      }
                      alt="FG Group"
                      className="lazy w-50 img-fluid"
                    />
                  </div>
                  <div className="tabata mt-3">
                    <h2 className="h2-fs">Flexible Learning</h2>
                    <p className="mt-3">
                      Flexible learning for the ones who don't stay bounded.
                    </p>
                    <Link
                      to="/fgiit/flexible-fitness-courses"
                      className="btn btn-read mt-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-md-4 text-center">
                <div
                  className="blog2 het-rt"
                  style={{ backgroundColor: "#E5FEEF" }}
                >
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/bookrtp.webp"
                      }
                      alt="FG Group"
                      className="lazy w-50 img-fluid"
                    />
                  </div>
                  <div className="tabata mt-3">
                    <h2 className="h2-fs">Study Material</h2>
                    <p className="mt-3">
                      All fitness-related books and e-books are available from
                      us.
                    </p>
                    <Link
                      to="/book/health-books"
                      className="btn btn-read mt-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div
                  className="blog2 het-rt"
                  style={{ backgroundColor: "#E5FEEF" }}
                >
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/informative.webp"
                      }
                      alt="FG Group"
                      className="lazy w-50 img-fluid"
                    />
                  </div>
                  <div className="tabata mt-3">
                    <h2 className="h2-fs">Student Corner</h2>
                    <p className="mt-3">
                      All new information regarding our course and events is
                      available here.
                    </p>
                    <Link to="/student-corner" className="btn btn-read mt-3">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container pt-5">
            <div className="col-md-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  satisfying Reviews
                  <span className="m-0 text-blue-color">
                    Of Our Clients
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-5"></div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blogs-link blog2">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="benefits of teas"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/milan.webp"
                      }
                    />
                  </div>
                  <div className="mt-md-2">
                    <h2 className="mb-3 h3-fs fs-22">
                      Milan Sali
                    </h2>
                    <p className="text-muted">
                      I Came Across This Nutrition Class Which Is Fitness With
                      Gomzi...I Have Done Nutritionist Course Here ..The
                      Teachers Are Very Good...They Are So Kind And Helpful By
                      Nature..I Got To Learn A Lot Of New Things And Gained So
                      Much Knowledge...
                    </p>
                    <a
                      href="https://youtu.be/_sE7AxtfR_A"
                      data-flashy-type="video"
                      className="custom btn btn-read mt-3"
                    >
                      watch now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blogs-link blog2">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="benefits of teas"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/jayneel.webp"
                      }
                    />
                  </div>
                  <div className="mt-md-2">
                    <h2 className="mb-3 h4-fs fs-22">
                      Jayneel
                    </h2>
                    <p className="text-muted">
                      I Joined Fitness With Gomzi 3 Months Ago And The
                      Experience Was Great. I Lost 8 Kgs In 3 Months Which Is
                      Absolutely Great And Also Improved My Height At The Age Of
                      16. Thank You Foram Mam And Gautam Sir For The
                      Transformation.
                    </p>
                    <a
                      href="https://youtu.be/5XWZcCGaRJQ"
                      data-flashy-type="video"
                      className="custom btn btn-read mt-3"
                    >
                      watch now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blogs-link blog2">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="benefits of teas"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/weightloss_reviews29.webp"
                      }
                    />
                  </div>
                  <div className="mt-md-2">
                    <h2 className="mb-3 h5-fs fs-22">
                      Hiren Jogiya
                    </h2>
                    <p className="text-muted">
                      I Feel Very Lucky And Greatful To Find FGIIT Institute. I
                      Am Doing Online Dietitian Course From FGIIT And All The
                      Lectures Are Nicely Conducted And Explained By Dr Gautam
                      Jani. Thank You So Much Gautam Sir And Foram Ma'am.
                    </p>
                    <a
                      href="https://youtu.be/gsCMnRGSDcI"
                      data-flashy-type="video"
                      className="custom btn btn-read mt-3"
                    >
                      watch now
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
            <div className="row align-items-center">
              <div className="col-12">
                <div className="demoo text-center mb-4">
                  <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                    new
                    <span className="m-0 text-blue-color ml-2">
                      blog
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-md-5"></div>
              </div>
              <div className="col-md-4">
                <div className="blogs-link">
                  <div
                    className="ply1 child-img"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="benefits of teas"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/anabolic-seteroid.webp"
                      }
                    />
                  </div>
                  <div className="farttys blog2">
                    <h2 className="mb-3 h2-fs">What Are Anabolic Steroids?</h2>
                    <p className="text-muted">
                      Anabolic Steroids Are Man-Made Substances That Have
                      Identical Effects On A Testosterone Within The Body.
                    </p>
                    <a
                      href="/blogs/anabolic-steroids"
                      target="_blank"
                      className="btn btn-read mt-3"
                    >
                      Read know
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blogs-link">
                  <div
                    className="ply1 child-img"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="benefits of teas"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/keto-diets.webp"
                      }
                    />
                  </div>
                  <div className="farttys blog2">
                    <h2 className="mb-5 h2-fs">What Is Keto Diet?</h2>
                    <p className="text-muted mt-1">
                      The Keto Diet Plan Is An Extremely Low Carb, High-Fat
                      Eating Regimen. This Eating Regimen Shares
                      Comparability...
                    </p>
                    <a
                      href="../blogs/keto-diet"
                      target="_blank"
                      className="btn btn-read mt-3"
                    >
                      Read know
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blogs-link">
                  <div
                    className="ply1 child-img"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                  >
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      alt="fggroup"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/digital-marketing.webp"
                      }
                    />
                  </div>
                  <div className="farttys blog2">
                    <h2 className="mb-3 h2-fs">What Is Digital Marketing?</h2>
                    <p className="text-muted">
                      The Industry Today Is Brimming With Numerous Services And
                      Products Where You As A Consumer Can Easily Lose Track...
                    </p>
                    <a
                      href="../blogs/what-is-digital-marketing"
                      target="_blank"
                      className="btn btn-read mt-3"
                    >
                      Read know
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center margin mb-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                <div className="links-main">
                  <div className="forms">
                    <h2 className="mb-3 h4-fs">
                      Become a part of the Fit Bharat Mission
                    </h2>
                    <p className="mb-3">Enter your Email for Future Programs</p>
                    <form action="">
                      <div className="forms-input d-flex">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="form-control"
                          name="email"
                          required
                        />
                        <button className="btn-1 btn-light btn">Join</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FgiitFooter />
    </>
  );
}

export default FgiitAllLinks;
