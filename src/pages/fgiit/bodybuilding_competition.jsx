import React from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PrizesAndAwards from "../../components/fgiit/prizesAwards";
import VendorsAndSponsor from "../../components/fgiit/vendorsSponsar";
import { Helmet } from "react-helmet";

function BodybuildingCompetition() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Flexible Fitness Courses | Personal Trainer & Gym Trainer Courses</title>
        <meta name="description" content="Here is one of the best ways to keep on learning while having a job or work at the same time with this online gym trainer course & dietitian course" />
        <meta name="keyword" content="nutritionist and dietitian course, dietitian course details, course for gym trainer, course to be a personal trainer, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="Flexible Fitness Courses | Personal Trainer & Gym Trainer Courses" />
        <meta property="og:description" content="Here is one of the best ways to keep on learning while having a job or work at the same time with this online gym trainer course & dietitian course" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/bodybuilding_competition" />
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
      <FgiitHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <div className="bg-full-bd height-respo d-none d-md-block bodybuilding-banner-1">
            <div className="container">
              <div className="col-12 text-center">
                <div
                  className="demoo mb-5 fgiitan"
                  style={{ marginTop: "-50px" }}
                >
                  <h1 style={{ color: "#ffffff" }}>FGIIT Classic</h1>
                </div>
              </div>
            </div>
            <div className="col-12 text-center pt-5">
              <div className="demoo pt-5 mt-5 mb-4 fgiitan">
                <h2 className="fs-40 text-white">
                  Bodybuilding Mega Event With Mega Prize Money Up To 4,00,000
                </h2>
                <p className="mt-3">
                  Indian Nutritionist & Personal Trainer Association ( INPTA )
                </p>
              </div>
            </div>
          </div>
          <div className="bg-full-bd height-respo d-block d-md-none bodybuilding-banner-2">
            <div className="container">
              <div className="col-12 text-center">
                <div className="demoo fgiitan">
                  <h2 className="h1-fs">FGIIT Classic</h2>
                </div>
              </div>
              <div className="col-12 px-0">
                <div className="col-12 text-center px-0">
                  <div className="demoo pt-3 mt-2 mb-4 fgiitan">
                    <h2 className="fs-27 text-white">
                      Indian Nutritionist & Personal Trainer Association (INPTA)
                    </h2>
                    <p className="mt-3 px-1 fs-20">
                      Bodybuilding Mega Event With Mega Prize Money Up To
                      4,00,000
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <Link to="/" style={{ border: "none" }}>
                      <div>
                        {/* <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-w.webp"
                          }
                          width="60px"
                          style={{ marginLeft: "40px" }}
                          className="blogo2"
                          alt="fgiit"
                        /> */}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "20px" }}>
        <div className="container-fluid p-0">
          <div className="d-block d-md-none">
            <div className="">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      SCHEDULING
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12">
                  <div
                    className="scheduling-card text-center overlay-bg2"
                    style={{ padding: "2.5rem" }}
                  >
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata mb-3">
                          <div className="demoo text-center mb-4 m-0 bodybuilding-image-1">
                            <h2
                              style={{ color: "#ffffff" }}
                              className="m-0 text-center h5-fs"
                            >
                              Registration and Weighing for All Athletes
                            </h2>
                          </div>
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-calendar-alt"></i> Date:
                            </span>
                            2 March 2024
                          </h2>
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="far fa-clock"></i> Time:
                            </span>{" "}
                            09:00am To 04pm
                          </h2>
                          <h2 className="h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-map-marker-alt"></i> Venue:
                            </span>{" "}
                            abs gym, laldarwaja, near Soham Residency, surat
                            395003
                          </h2>
                        </div>
                        <div className="tabata">
                          <div className="demoo text-center mb-4 m-0 bodybuilding-image-1">
                            <h2
                              style={{ color: "#ffffff" }}
                              className="m-0 text-center h5-fs"
                            >
                              Competition On
                            </h2>
                          </div>
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-calendar-alt"></i> Date:
                            </span>
                            3 March 2024
                          </h2>
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="far fa-clock"></i> Repoting Time:
                            </span>{" "}
                            Morning 7:00am
                          </h2>
                          <h2 className="h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-map-marker-alt"></i> Venue:
                            </span>
                            Shree Surti Modh Vanik Wadi Lal Darwaja Main Road
                            Near Sims Hospital, Surat - 395003
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "20px" }}>
        <div className="container-fluid p-0">
          <div className="d-none d-md-block">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg">
                    <h2
                      className="mb-3 p-2 text-center category-heading h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        width: "181px",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>
                        Open Bodybuilding
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata text-center">
                          <div className="row mt-4">
                            <div className="col-6">
                              <h2 className="text-center mb-3 h4-fs">
                                <span style={{ color: "#2f8dcb" }}>1.</span>
                                <span style={{ color: "#ffffff" }}>
                                  UP to 55 KG
                                </span>
                              </h2>
                            </div>

                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>2.</span>
                                <span style={{ color: "#ffffff" }}>
                                  55 to 65 KG
                                </span>
                              </h2>
                            </div>

                            <div className="col-6">
                              <h2 className="text-center mb-3 h4-fs">
                                <span style={{ color: "#2f8dcb" }}>3.</span>
                                <span style={{ color: "#ffffff" }}>
                                  65 to 70 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>4.</span>
                                <span style={{ color: "#ffffff" }}>
                                  70 to 75 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center mb-3 h4-fs">
                                <span style={{ color: "#2f8dcb" }}>5.</span>
                                <span style={{ color: "#ffffff" }}>
                                  75 to 80 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>6.</span>
                                <span style={{ color: "#ffffff" }}>
                                  80 to 85 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center mb-3 h4-fs">
                                <span style={{ color: "#2f8dcb" }}>7.</span>
                                <span style={{ color: "#ffffff" }}>
                                  85 to 90 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>8.</span>
                                <span style={{ color: "#ffffff" }}>
                                  UP to 90 KG
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg3">
                    <h2
                      className="mb-3 p-2 text-center category-heading h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        width: "181px",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>Men's Physique</span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata text-center">
                          <h2 className="text-center h4-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Short men's Physique
                            </span>
                          </h2>
                          <h2
                            className="text-center h3-fs fs-35"
                            style={{ fontWeight: "700" }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Under 170cm
                            </span>
                          </h2>
                          <h2 className="text-center h4-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Tall men's Physique
                            </span>
                          </h2>
                          <h2
                            className="text-center h4-fs fs-35"
                            style={{ fontWeight: "700" }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Above 170cm
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none">
            <div className="">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      CATEGORY AND DIVISION
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-md-12">
                  <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg">
                    <h2
                      className="mb-3 p-2 h5-fs text-center category-heading"
                      style={{
                        backgroundColor: "#2f8dcb",
                        width: "181px",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>
                        Open Bodybuilding
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata text-center">
                          <div className="row">
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>1.</span>
                                <span style={{ color: "#ffffff" }}>
                                  UP to 55 KG
                                </span>
                              </h2>
                            </div>

                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>2.</span>
                                <span style={{ color: "#ffffff" }}>
                                  55 to 65 KG
                                </span>
                              </h2>
                            </div>

                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>3.</span>
                                <span style={{ color: "#ffffff" }}>
                                  65 to 70 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>4.</span>
                                <span style={{ color: "#ffffff" }}>
                                  70 to 75 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>5.</span>
                                <span style={{ color: "#ffffff" }}>
                                  75 to 80 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>6.</span>
                                <span style={{ color: "#ffffff" }}>
                                  80 to 85 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>7.</span>
                                <span style={{ color: "#ffffff" }}>
                                  85 to 90 KG
                                </span>
                              </h2>
                            </div>
                            <div className="col-6">
                              <h2 className="text-center h4-fs">
                                <span style={{ color: "#2f8dcb" }}>8.</span>
                                <span style={{ color: "#ffffff" }}>
                                  UP to 90 KG
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block d-md-none">
                  <div className="">
                    <div>
                      <div className="col-md-12">
                        <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg3">
                          <h2
                            className="mb-3 p-2 text-center category-heading h5-fs"
                            style={{
                              backgroundColor: "#2f8dcb",
                              width: "200px",
                              borderRadius: "0px 0px 5px 5px",
                            }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Open bodybuilding Price
                            </span>
                          </h2>
                          <div className="row">
                            <div className="col-12 p-0">
                              <div className="tabata text-center">
                                <h2 className="text-center h4-fs">
                                  <span style={{ color: "#2f8dcb" }}>
                                    Champion of Champions
                                  </span>
                                </h2>
                                <h2
                                  className="text-center h3-fs fs-25"
                                  style={{
                                    fontWeight: "700",
                                  }}
                                >
                                  <span style={{ color: "#ffffff" }}>
                                    ₹1,00,000
                                  </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                          color
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="scheduling-card text-center pt-0 pb-0">
                          <h2
                            className="mb-3 p-2 h5-fs text-center ml-1"
                            style={{
                              backgroundColor: "#2f8dcb",
                              borderRadius: "0px 0px 5px 5px",
                            }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Open bodybuilding ( group price )
                            </span>
                          </h2>
                          <div className="row mb-4">
                            <div className=" col-4">
                              <div className="tabata">
                                <h2 className="mb-3 h4-fs">
                                  <span style={{ color: "#000000" }}>
                                    Place
                                  </span>
                                </h2>
                                <h2 className="ml-4 h5-fs">1st</h2>
                                <h2 className="ml-4 h5-fs">2st</h2>
                                <h2 className="ml-4 h5-fs">3st</h2>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="tabata">
                                <h2 className="h4-fs">
                                  <span style={{ color: "#000000" }}>
                                    Medal
                                  </span>
                                </h2>
                                <div>
                                  <LazyLoadImage
                                    effect="blur"
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/assets/images/mix-img/oldmedal.png"
                                    }
                                    width="30px"
                                    alt="FG Group"
                                  />
                                </div>
                                <div>
                                  <LazyLoadImage
                                    effect="blur"
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/assets/images/mix-img/siler-medal.png"
                                    }
                                    width="30px"
                                    alt="FG Group"
                                  />
                                </div>
                                <div>
                                  <LazyLoadImage
                                    effect="blur"
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/assets/images/mix-img/broze-medal.png"
                                    }
                                    width="30px"
                                    alt="FG Group"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="tabata">
                                <h2 className="h4-fs">
                                  <span style={{ color: "#000000" }}>
                                    Price
                                  </span>
                                </h2>
                                <h2 className="ml-2 mt-2 h5-fs">₹10,000</h2>
                                <h2 className="ml-2 mt-2 h5-fs">₹7,000</h2>
                                <h2 className="ml-2 mt-2 h5-fs">₹5,000</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg3">
                    <h2
                      className="mb-3 p-2 text-center category-heading h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        width: "181px",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>Men's Physique</span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata text-center">
                          <h2 className="text-center h4-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Short men's Physique
                            </span>
                          </h2>
                          <h2
                            className="text-center h3-fs fs-25"
                            style={{ fontWeight: "600" }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Under 170cm
                            </span>
                          </h2>
                          <h2 className="text-center h4-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Tall men's Physique
                            </span>
                          </h2>
                          <h2
                            className="text-center h4-fs fs-25"
                            style={{ fontWeight: "600" }}
                          >
                            <span style={{ color: "#ffffff" }}>
                              Above 170cm
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="scheduling-card text-center pl-4 pr-4 pt-0 overlay-bg3">
                    <h2
                      className="mb-3 p-2 text-center category-heading h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        width: "181px",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>
                        {" "}
                        men's physique Price{" "}
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0">
                        <div className="tabata text-center">
                          <h2 className="text-center h4-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Champion of Champions
                            </span>
                          </h2>
                          <h2
                            className="text-center h3-fs fs-25"
                            style={{ fontWeight: "700" }}
                          >
                            <span style={{ color: "#ffffff" }}>₹50,000</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className="col-md-12">
                      <div className="scheduling-card text-center pt-0 pb-0">
                        <h2
                          className="mb-3 p-2 h5-fs text-center ml-1"
                          style={{
                            backgroundColor: "#2f8dcb",
                            borderRadius: "0px 0px 5px 5px",
                          }}
                        >
                          <span style={{ color: "#ffffff" }}>
                            Men's physique ( group price )
                          </span>
                        </h2>
                        <div className="row mb-4">
                          <div className=" col-4">
                            <div className="tabata">
                              <h2 className="mb-3 h4-fs">
                                <span style={{ color: "#000000" }}>Place</span>
                              </h2>
                              <h2 className="ml-4 h5-fs">1st</h2>
                              <h2 className="ml-4 h5-fs">2st</h2>
                              <h2 className="ml-4 h5-fs">3st</h2>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="tabata">
                              <h2 className="h4-fs">
                                <span style={{ color: "#000000" }}>Medal</span>
                              </h2>
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/mix-img/goldmedal.png"
                                }
                                width="30px"
                                alt="FG Group"
                              />
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/mix-img/silver-medal.png"
                                }
                                width="30px"
                                alt="FG Group"
                              />
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/mix-img/bronze-medal.png"
                                }
                                width="30px"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="tabata">
                              <h2 className="h4-fs">
                                <span style={{ color: "#000000" }}>Price</span>
                              </h2>
                              <h2 className="ml-2 h5-fs">₹10,000</h2>
                              <h2 className="ml-2 mt-2 h5-fs">₹7,000</h2>
                              <h2 className="ml-2 mt-2 h5-fs">₹5,000</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="scheduling-card text-center pt-0 pb-0">
                    <h2
                      className="mb-3 p-2 text-center ml-1 h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "#ffffff" }}>
                        REGISTRATION INFORMATION
                      </span>
                    </h2>
                    <div className="row mb-2">
                      <div className=" col-12">
                        <div className="tabata text-left">
                          <h2 className="mb-3 h2-fs fs-20">
                            <span style={{ color: "#000000" }}>Game Fees:</span>
                            <span style={{ color: "#2f8dcb" }}>
                              Before 15 Feb ₹1000
                            </span>
                          </h2>
                          <h2 className="h3-fs mb-3 fs-20">
                            <span style={{ color: "#000000" }}>Game Fees:</span>
                            <span style={{ color: "#2f8dcb" }}>
                              After 15 Feb ₹1000
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tabata text-left mb-3">
                          <h2 className="h4-fs">
                            <span style={{ color: "#000000" }}>
                              Entry Pass:
                            </span>
                            <span style={{ color: "#2f8dcb" }}> ₹250</span>
                          </h2>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-2 tabata text-left">
                          <h2 className="h4-fs">
                            <span
                              style={{ color: "#000000", fontSize: "18px" }}
                            >
                              {" "}
                              Meal will be Provided for Participant:
                            </span>
                          </h2>
                          <div className="d-flex mt-3">
                            <div>
                              <LazyLoadImage
                                effect="blur"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/fwg/vegetarian.jpg"
                                }
                                width="100px"
                                style={{
                                  border: "2px solid #00afef",
                                  borderRadius: "5px",
                                }}
                                alt="FG Group"
                              />
                              <h2 className="ml-2 h6-fs">
                                <span style={{ color: "#000000" }}>
                                  Vegetarian
                                </span>
                              </h2>
                            </div>
                            <div className="ml-2">
                              <LazyLoadImage
                                effect="blur"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/fwg/eggiterian.jpg"
                                }
                                width="100px"
                                style={{
                                  border: "2px solid #00afef",
                                  borderRadius: "5px",
                                }}
                                alt="FG Group"
                              />
                              <h2 className="h6-fs ml-2">
                                <span style={{ color: "#000000" }}>
                                  Eggiterian
                                </span>
                              </h2>
                            </div>
                            <div className="ml-2">
                              <LazyLoadImage
                                effect="blur"
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/fwg/nonveg.jpg"
                                }
                                width="100px"
                                style={{
                                  border: "2px solid #00afef",
                                  borderRadius: "5px",
                                }}
                                alt="FG Group"
                              />
                              <h2 className="h6-fs ml-2">
                                <span style={{ color: "#000000" }}>
                                  non-Vege
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="btn btn-started mb-2"
                      onclick="openModal()"
                      style={{ backgroundColor: "#2f8dcb" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "20px" }}>
        <div className="container-fluid p-0">
          <div className="d-none d-md-block">
            <div className="container">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      INFORMATION
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="scheduling-card text-center pt-0">
                    <h2
                      className="mb-3 p-2 text-center h5-fs ml-1"
                      style={{
                        backgroundColor: "#2f8dcb",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "white" }}>
                        Registration Information
                      </span>
                    </h2>
                    <div className="row">
                      <div className="col-12">
                        <div className="tabata">
                          <h2 className="mb-3 h4-fs fs-20">
                            <span style={{ color: "#000000" }}>Game Fees:</span>
                            <span style={{ color: "#2f8dcb" }}>
                              Before 15 Feb ₹1000
                            </span>
                          </h2>
                          <h2 className="mb-3 h4-fs fs-20">
                            <span style={{ color: "#000000" }}></span>
                            <span
                              style={{ color: "#2f8dcb", marginLeft: "95px" }}
                            >
                              After 15 Feb ₹1500
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tabata text-left ml-3">
                          <h2 className=" h4-fs fs-20">
                            <span style={{ color: "#000000" }}>
                              Entry Pass:
                            </span>
                            <span style={{ color: "#2f8dcb" }}> ₹250</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <a
                      className="btn btn-started"
                      onclick="openModal()"
                      style={{ backgroundColor: "#2f8dcb" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="scheduling-card text-center pt-0">
                    <h2
                      className="mb-3 p-2 text-center ml-1 h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "white" }}>Contact Us</span>
                    </h2>
                    <div style={{ padding: "0px 28px", marginTop: "40px" }}>
                      <div>
                        <div className="tabata">
                          <h2 className="mb-4 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              Contact no:
                            </span>
                            +91 8866842520
                          </h2>
                        </div>
                      </div>
                      <div>
                        <div className="tabata">
                          <h2 className="h5-fs">
                            <span style={{ color: "#2f8dcb" }}>Address:</span> A
                            301, Ambrosia Business Hub, VIP Road, beside SMC
                            Garden, Vesu, Surat, Gujarat-395007
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="scheduling-card text-center pt-0 overlay-bg2"
                    style={{ paddingLeft: "2.5rem" }}
                  >
                    <h2
                      className="mb-3 p-2 text-center h5-fs"
                      style={{
                        backgroundColor: "#2f8dcb",
                        borderRadius: "0px 0px 5px 5px",
                      }}
                    >
                      <span style={{ color: "white" }}>Contest Venue </span>
                    </h2>
                    <div className="row">
                      <div className="col-12 p-0 mt-3">
                        <div className="tabata">
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-calendar-alt"></i> Date:
                            </span>
                            February 2024
                          </h2>
                          <h2 className="mb-3 h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="far fa-clock"></i> Time:
                            </span>{" "}
                            07:00AM
                          </h2>
                          <h2 className="h5-fs">
                            <span style={{ color: "#2f8dcb" }}>
                              <i className="fas fa-map-marker-alt"></i> Venue:
                            </span>{" "}
                            Shree Surti Modh Vanik Wadi Lal Darwaja Main Road
                            Near Sims Hospital, Surat-395003
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="">
                <div className="col-12 mt-4">
                  <div className="container">
                    <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                      <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                        CONTACT INFORMATION
                      </h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-md-12">
                    <div className="scheduling-card text-center p-4">
                      <div className="row">
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <h2 className="mb-3 h5-fs">
                              <span style={{ color: "#2f8dcb" }}>
                                Contact no:
                              </span>
                              +91 8866842520
                            </h2>
                            <h2 className="h5-fs">
                              <span style={{ color: "#2f8dcb" }}>Address:</span>{" "}
                              A 301, Ambrosia Business Hub, VIP Road, beside SMC
                              Garden, Vesu, Surat, Gujarat- 395007
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VendorsAndSponsor />
      <PrizesAndAwards />
      <section style={{ marginTop: "20px" }}>
        <div className="container-fluid p-0">
          <div className="d-none d-md-block">
            <div className="container">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      FLOOR MAP
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="col-12">
                  <div className="scheduling-card text-center">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/mix-img/floormap.jpeg"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none">
            <div className="row">
              <div className="col-12">
                <div className="scheduling-card text-center pt-0">
                  <h2
                    className="mb-3 p-2 text-center ml-1 h5-fs"
                    style={{
                      backgroundColor: "#2f8dcb",
                      borderRadius: "0px 0px 5px 5px",
                    }}
                  >
                    <span style={{ color: "#ffffff" }}>FLOOR MAP</span>
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/mix-img/floormap.jpeg"
                    }
                    width="100%"
                    alt="FG Group"
                  />
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
              <h2 className="text-center text-333-color h2-fs">
                We're{" "}
                <span className="m-0 text-blue-color">
                  Here To Help
                </span>
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
                  id="txt_contact_name"
                  className="form-control fr mt-2"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  id="txt_contact_email"
                  className="form-control fr mt-2"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  id=""
                  className="form-control fr mt-2"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">Select Category</p>
                <select
                  id="txt_contact_course"
                  className="form-control fr mt-2"
                >
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="Open Bodybuilding">Open Bodybuilding</option>
                  <option value="Men's Physique">Men's Physique</option>
                </select>
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  id="txt_contact_message"
                  placeholder="Message"
                  className="form-control fr mt-2"
                ></textarea>
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onclick="sendContactInquiry()"
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FgiitFooter />
    </>
  );
}

export default BodybuildingCompetition;
