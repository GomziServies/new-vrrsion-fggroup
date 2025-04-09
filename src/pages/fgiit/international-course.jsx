import React, { useState, useEffect } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import { Link } from "react-router-dom";
import OutstandingReview from "../../components/fgiit/outstandingResponse";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AccreditedCertification from "../../components/fgiit/acrediteCertificate";
import InternationalFlags from "../../components/fgiit/flags";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";

function InternationalCourse() {
  const canonicalUrl = window.location.href;

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  return (
    <>
      <Helmet>
        <title>International Fitness Course | Fitness Trainer Certification</title>
        <meta name="description" content="Get certified with our International Fitness Course! Boost your career as a fitness trainer and inspire others today!" />
        <meta name="keyword" content="Online Personal Training Course, Live Fitness Training, Zoom Fitness Classes, No Cost EMI Fitness Course, International Fitness Certification, Diploma in Personal Training, FGIIT, Fitness Instructor Certification, Personal Trainer Diploma, Recorded Fitness Sessions, Fitness E-books, Global Fitness Education, Online Fitness Diploma, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="International Fitness Course | Fitness Trainer Certification" />
        <meta property="og:description" content="Get certified with our International Fitness Course! Boost your career as a fitness trainer and inspire others today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/international-course" />
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
            fbq('init', '820409192621855');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=820409192621855&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course,
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training
      </p>
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Fitness International Course. "
        }
        options={{ pageRef: true }}
      />

      <FgiitHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 m-0">
          <OwlCarousel
            loop
            autoPlay
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
            <div className="item active">
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
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-2 order-md-1">
                <div className="forh">
                  <h1>FGIIT Skill Development Institute</h1>
                </div>
                <div className="describe d-none d-md-block">
                  <p className="ml-0 fs-16">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="describe d-block d-md-none">
                  <p className="ml-0 my-2 fs-14">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="text-center mt-4 mt-md-5 btn-for">
                  <a
                    href="#nutritrainer"
                    className="btn mb-3 mb-md-4"
                    style={{
                      background:
                        "linear-gradient( 194deg, rgb(218 204 255) 0%, rgb(79 79 255) 100% )",
                      color: "#000",
                      borderColor: "#000",
                    }}
                  >
                    Know more about our courses
                  </a>
                </div>
              </div>
              <div className="col-lg-7 order-1 order-md-2">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/english-course-img.jpg"
                  }
                  alt="FG Group"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blues">
        <div className="container-fluid">
          <div className="container px-0">
            <div className="covid">
              <h2 className="h2-fs text-center mt-2" style={{ color: "#333" }}>
                <span className="m-0 text-blue-color">Future Of</span> Fitness
                Courses
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3 md-md-5"></div>
            <div className="row" id="explore">
              <div className="col-md-12 mt-lg-4">
                <OwlCarousel
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
                  loop
                  autoPlay
                  dots={false}
                  nav
                  id="fwg-owl"
                  className="owl-carousel owl-theme mb-5"
                >
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/offline2.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">
                          Diploma In Personal Training Course
                        </h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Study Hours: <b>2 hour per session</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Every Alternate Days</b>
                        </p>
                        <div className="pb-1"></div>
                        <Link
                          to="/fgiit/english-diploma-in-personal-training-course"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-diploma-in-personal-training"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/offline3.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Diploma In Nutrition Course</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Study Hours: <b>2 hour per session</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Every Alternate Days</b>
                        </p>
                        <div className="pb-5"></div>

                        <Link
                          to="/fgiit/english-diploma-in-nutrition-course"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-diploma-in-nutrition-course"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/offline4.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 1 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">
                          Anabolic Androgenic Steroids MasterclassName
                          Certification
                        </h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>3 hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Every Sunday</b>
                        </p>
                        <div className="pb-4"></div>
                        <Link
                          to="/fgiit/english-anabolic-androgenic-steroids"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-anabolic-androgenic-steroids"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/Tabata-Workshop-banner.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Tabata Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>5 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-5"></div>
                        <Link
                          to="/fgiit/english-tabata-workshop"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-tabata-workshop"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/offline6.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Total Study Hours : <b>16 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-5"></div>

                        <Link
                          to="/fgiit/english-course-physiotherapy"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-course-physiotherapy"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/offline7.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">
                          Advance Clinical Nutrition Workshop
                        </h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Total Study Hours : <b>16 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-5"></div>
                        <Link
                          to="/fgiit/english-clinical-dietitian"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                        <Link
                          to="/fgiit/english-recorded-clinical-dietitian"
                          className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                        >
                          Affordable
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/trx-workshop-banner.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">TRX Band Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>5 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-4 mb-2"></div>

                        <Link
                          to="/fgiit/english-trx-and-workshop"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/Functional-Training-Workshop-banner.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Functional Training Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>5 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-4"></div>
                        <Link
                          to="/fgiit/english-functional-training-workshop"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/Mix_martial_art.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Mix Martial Arts Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>5 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-4"></div>
                        <Link
                          to="/fgiit/english-mix-martial-arts-workshop"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/powerlifting-banner.webp"
                          }
                          width="100%"
                          style={{
                            borderRadius: "10px 10px 0px 0px",
                            height: "250px",
                          }}
                          alt="fggroup"
                        />
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 2 Days
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 3,040 Rating)</span>
                        </div>
                        <p>
                          Session : <b>5 Hour</b>
                        </p>
                        <p>
                          Course Language: <b>English</b>
                        </p>
                        <p>
                          Days: <b>Saturday, Sunday</b>
                        </p>
                        <div className="pb-4"></div>
                        <Link
                          to="/fgiit/english-powerlifting-coach-workshop"
                          target="_blank"
                          className="btn mb-lg-2"
                        >
                          Premium
                        </Link>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margnitop">
        <div className="container-fluid">
          <div className="container pt-md-5 px-2 px-md-3">
            <div className="col-md-12 mt-3">
              <div className="covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  <span className="m-0 text-blue-color">
                    Students in all around
                  </span>
                  World
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
            </div>
            <div className="d-none d-md-block">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/fgiit/map.webp"}
                className="img-fluid"
                alt="FG Group"
              />
            </div>
            <div className="d-block d-md-none">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/fgiit/map.webp"}
                className="img-fluid"
                alt="FG Group"
                style={{ width: "110%" }}
              />
            </div>
            <div className="text-center">
              <h2 className="h2-fs">Student in Every Countries</h2>
              <div className="row mt-4">
                <div className="col-md-5 blog2">
                  <div>
                    <h2 className="h4-fs countries-h4">
                      Countries and Student Count
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-10">
                      <ul className="p-0 new-li">
                        <li>1. India</li>
                        <li>2. United States of America</li>
                        <li>3. Canada</li>
                        <li>4. Pakistan</li>
                        <li>5. South Africa</li>
                        <li>6. United Kingdom</li>
                        <li>7. Germany</li>
                        <li>8. Netherlands</li>
                        <li>9. Saudi Arabia</li>
                        <li>10. United Arab Emirates</li>
                      </ul>
                    </div>
                    <div className="col-4 d-none d-md-block">
                      <ul className="p-0 new-li">
                        <li className="justify-content-end">6500 Students</li>
                        <li className="justify-content-end">450 Students</li>
                        <li className="justify-content-end">350 Students</li>
                        <li className="justify-content-end">300 Students</li>
                        <li className="justify-content-end">55 Students</li>
                        <li className="justify-content-end">550 Students</li>
                        <li className="justify-content-end">400 Students</li>
                        <li className="justify-content-end">400 Students</li>
                        <li className="justify-content-end">350 Students</li>
                        <li className="justify-content-end">500 Students</li>
                      </ul>
                    </div>
                    <div className="col-2 d-block d-md-none">
                      <ul className="p-0 new-li">
                        <li className="justify-content-end">6500</li>
                        <li className="justify-content-end">450</li>
                        <li className="justify-content-end">350</li>
                        <li className="justify-content-end">300</li>
                        <li className="justify-content-end">55</li>
                        <li className="justify-content-end">550</li>
                        <li className="justify-content-end">400</li>
                        <li className="justify-content-end">400</li>
                        <li className="justify-content-end">350</li>
                        <li className="justify-content-end">500</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="blog2">
                    <div>
                      <h2 className="h4-fs countries-h4"
                        style={{ backgroundColor: "#92c7ff" }}
                      >
                        Demo Lecture
                      </h2>
                    </div>
                    <div className="mt-4 pb-md-5 pb-4">
                      <OwlCarousel
                        loop
                        autoplay
                        id="owl-demo13"
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
                          <div className="d-none d-md-block">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/w1HW58vK58Y?si=FykJ01lyJFbO4Jj8"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="d-block d-md-none">
                            <iframe
                              width="290"
                              height="180"
                              src="https://www.youtube.com/embed/w1HW58vK58Y?si=FykJ01lyJFbO4Jj8"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="item mx-md-3">
                          <div className="d-none d-md-block">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/I2M-UtAqFTU?si=3p78URAGatHty80Y"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="d-block d-md-none">
                            <iframe
                              width="290"
                              height="180"
                              src="https://www.youtube.com/embed/I2M-UtAqFTU?si=3p78URAGatHty80Y"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="item mx-md-3">
                          <div className="d-none d-md-block">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/A4IH6-o5Df0?si=aIJGFXvnv7j_mHy7"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="d-block d-md-none">
                            <iframe
                              width="290"
                              height="180"
                              src="https://www.youtube.com/embed/A4IH6-o5Df0?si=aIJGFXvnv7j_mHy7"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="item mx-md-3">
                          <div className="d-none d-md-block">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/OINNAOKC9JQ?si=1OASsofiiny6Kx65"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="d-block d-md-none">
                            <iframe
                              width="290"
                              height="180"
                              src="https://www.youtube.com/embed/OINNAOKC9JQ?si=1OASsofiiny6Kx65"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div>
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Which personal trainer{" "}
                  <span className="m-0 text-blue-color">certification</span> is
                  best?
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12 d-none d-md-block">
                  <div className="describe">
                    <p>
                      Our Dietitian And Personal Training Course Are Recognized
                      By The International Accreditation Certificate (Iao) For
                      The Achievement Of The Highest Standards Of Organizational
                      Management, Academic Management, And Institutional
                      Performance Through A Commitment To Quality And Continuous
                      Improvement That Is What Makes Us Unique And Well Known
                      For Your The Best Fitness Trainer Course In India Or You
                      Can Say Best Sports Nutrition Certification. You'll Get A
                      Certificate Once You Have Completed The Course Which Is
                      Valid In 192 Countries.FGIIT has also received approval by
                      Sports, Physical education, Fitness & Leisure sector skill
                      council (SPEFL-SC) and National Skill Development Council.
                      After getting a Certificate from FGIIT, it assures the
                      public and the employers that the candidate holds valid
                      and appropriate qualifications to perform his roles
                      effectively and safely in public interest.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 d-none d-md-block">
                  <div className="describe">
                    <p>
                      <b>
                        There Are Many Questions That Arise In Your Mind Like:
                      </b>
                    </p>
                    <p>
                      {" "}
                      - What Is Fitness Trainer Certification Courses/gym
                      Trainer Certified Course ?
                      <br /> - Importance Of Certified Fitness Trainer Course ?
                    </p>
                    <p>
                      All The Answers Are With Us. Contact Us And Get Your
                      Queries Solved Today
                    </p>
                  </div>
                </div>
                <div className="d-block d-md-none">
                  <div className="col-12">
                    <p className="text-muted mb-0">
                      Our Dietitian And Personal Training Course Are Recognized
                      By The International Accreditation Certificate (Iao) For
                      The Achievement Of The Highest Standards Of Organizational
                      Management, Academic Management, And Institutional
                      Performance Through A Commitment To Quality And Continuous
                      Improvement That Is What Makes Us Unique And Well
                      <span id="dotsr">.</span>
                    </p>
                    <div className="d-block d-md-block">
                      <span id="morer">
                        <div className="m-0 text-muted">
                          <p>
                            {" "}
                            Known For Your The Best Fitness Trainer Course In
                            India Or You Can Say Best Sports Nutrition
                            Certification. You'll Get A Certificate Once You
                            Have Completed The Course Which Is Valid In 192
                            Countries.FGIIT has also received approval by
                            Sports, Physical education, Fitness & Leisure sector
                            skill council (SPEFL-SC) and National Skill
                            Development Council. After getting a Certificate
                            from FGIIT, it assures the public and the employers
                            that the candidate holds valid and appropriate
                            qualifications to perform his roles effectively and
                            safely in public interest.
                          </p>
                          <p>
                            <b>
                              There Are Many Questions That Arise In Your Mind
                              Like:
                            </b>
                          </p>
                          <p>
                            - Is It A Personal Trainer Course In India ?
                            <br /> - What Is Fitness Trainer Certification
                            Courses/gym Trainer Certified Course ?
                            <br /> - Importance Of Certified Fitness Trainer
                            Course ?
                            <br /> - What Are The Nutritionist Course Fees/food
                            And Nutrition Course ?
                          </p>
                          <p>
                            All The Answers Are With Us. Contact Us And Get Your
                            Queries Solved Today
                          </p>
                        </div>
                      </span>
                      <div className="swap mt-3">
                        <button onclick="myBtnevents()" id="myBtnr">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="h3-fs ml-md-5 pl-md-3 fs-34"
                    >
                      Why FGIIT?
                    </h2>
                  </div>
                  <div>
                    <ul className="new-li">
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
                <div className="row mb-3">
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/english-course-logos.webp"
                      }
                      className="lazy"
                      width="100%"
                      alt="all logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OutstandingReview />
      <AccreditedCertification />
      <PartnerLogo />
      {/* <section className="margintop d-block d-md-none">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="container">
            <div className="tabata mb-4 text-center">
              <h2 className="h2-fs">Partner Brands For Job Placement</h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div id="owl-demo11" className="text-center">
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
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container-fluid margintop">
          <div className="container py-5">
            <div className="tabata">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="/blogs/top10-biggest-nutrition-myths">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog5.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">Top 10 Biggest Nutrition Myths</h2>
                        <p className="mb-0">
                          The debate on the topic of nutrition myths vs facts
                          has been going on for a long time. Nutrition myths in
                          2021 have grown considerably.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="/blogs/anabolic-steroids">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog6.webp"
                          }
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">What Are Anabolic Steroids?</h2>
                        <p className="mb-0">
                          Anabolic steroids are man-made substances that have
                          identical effects on a testosterone within the body.
                          They speed up recovery between workouts, boost fat
                          loss, and increase strength and muscle growth.
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
      <section className="margintop">
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Is It A{" "}
                          <Link
                            to="/blogs/gym-trainer-course"
                            style={{ color: "#007bff", fontSize: "20px" }}
                          >
                            Gym Trainer Course?
                          </Link>
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div className="colla" data-parent="#accordion">
                  <div className="card-body">
                    Yes, we offer you a personal trainer-certified course in
                    India, that is valid in 192 countries. Our Syllabus is Human
                    Anatomy, Human Physiology, Movements Muscle and exercise,
                    Practical exercise sessions, Scheduling of exercise, Differ
                    energy system, Types of Grips in exercises, Biomechanical
                    implementation, Principles of Exercises, Client
                    responsibilities, Types of Bars, Functional Training Posture
                    Analysis and it's exercise prescription, Injuries
                    Sport-specific training, TRX Workout, Anabolic-Androgenic
                    Steroids, Basics Of Dietetics, Job placement & Interview
                    training.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          Is This A Food And Nutritionist Course?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  className="colla"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, it gives you a brief about the nutritional value of
                    diets that can help you to build your career in the field of
                    fitness we offer basic of dietetics, Therapeutic Nutrition,
                    Weight management, supplement, Sports Nutrition, Practical
                    diet making, and Practical Consultation.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          Does Anabolic Steroid Is A Part Of The Offered CPT
                          Course?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  className="colse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, we give the knowledge about how steroids are used and
                    under what circumstances one should take them. We offer
                    Practical Module, Types of substance, What is Half-life?,
                    Fat Loss Cycle, Muscle Building Cycle, Safety Drugs, Post
                    Cycle Therapy, Sports Supplants, Exercise planning.
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
                          What Makes This CPT Certification As The Best
                          Certified Course In India?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="colle"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Our certification is affiliated with IAO which is valid in
                    192 countries and that is what makes us the to deliver you
                    the best-certified nutritionist & fitness trainer course in
                    India. with experience of 8+ years, Our faculties work in
                    the same industry so that they can give the brief knowledge
                    about the course and doubts you get.
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
                          What Is Included In Certified Tabata Course, Certified
                          Functional Training, Certified TRX Course?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="colle"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    These are one the very few and Rare courses that are being
                    offered to you and we are offering them to the best for your
                    knowledge all over India.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog">
            <div className="Info">
              <h2 className="h2-fs">FGIIT *Terms & Conditions :</h2>
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
                  Certification Will Be Provided After A 150 Marks Exam
                  Consisting Of 100 Marks Of MCQ, 2 Projects of 25 marks each.
                  You, Will, Be Given 2 Attempts For The Exam Only If You Fail
                  The Exam. In Case If You Have Not Completed The Course Or Are
                  Left With Studying Or Didn't Appear For The Exam For The Same,
                  You Have To Inform The Mentor's Priory And Extend Your Time By
                  1 Month After Paying <b style={{ color: "red" }}>2700/- </b>{" "}
                  As Plan-Extension Fee.
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
                    {/* <li>
                      <b>
                        A penalty of 1% will be levied per day on late
                        submission of EMI or Delayed Cheques or the portal will
                        be closed for the candidate.
                      </b>
                    </li> */}
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
                {/* <li>
                  <b>
                    The first installment of your desired course is of the
                    accreditation department i.e 50% amount of your course
                    followed by a flexible EMI system.
                  </b>
                </li> */}
              </ul>
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
      <InternationalFlags />
      <ContactInquiryForm note={"International Course Page Inquiry"} />
      <FgiitFooter />
    </>
  );
}

export default InternationalCourse;
