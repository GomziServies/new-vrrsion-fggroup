import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BecomeMemberFgiitFaqs from "../../components/fgiit/become-member-faq";
import FgiitBlogs from "../../components/fgiit/fgiit-blogs";
import EventsProgramFgiit from "../../components/fgiit/eventsProgram";

function BecomeMemberAtFgiit() {
  const [showMore, setShowMore] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const canonicalUrl = window.location.href;

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreI = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Helmet>
        <title>Become a Member at FGIIT - FG Group of Institutions</title>
        <meta name="description" content="Join the FG Group of Institutions by becoming a member of FGIIT. Enjoy access to a wide range of resources, including state-of-the-art facilities, expert faculty, and innovative programs." />
        <meta name="keyword" content="FGIIT, FG Group of Institutions, membership, resources, facilities, faculty, programs, g y m full form, full form gym, certified fitness, certification fitness, certification for fitness, certificate in fitness, fitness india, trainer for gym, course nutrition, nutrients course, course on nutrition, courses in nutrition, course for nutritionist, course nutritionist, courses for nutrition, course for nutrition, courses for nutritionist, courses on nutrition, course of nutrition, g y m ka full form, courses of nutrition, course of nutritionist, courses for dietitian, course for dietician, courses of dietician, course of dietician, dietitian course, v academy, personal fitness instructor near me, personal workout trainer near me, fitness instructor near me, fitness instructors near me, physical training near me, fitness personal trainer near me, private fitness trainer near me, near me personal trainer, professional trainer near me, personal physical trainer near me, personal fitness coach near me, massage and therapy, massage therapist, massage for therapists, nutritionist dietician course, massage and therapy near me, gym with instructor near me, gym with a personal trainer near me, personal training trainer, personal fitness instructor, personal physical trainer, gymnastic trainer near me, gym near me with personal trainer, near me massage therapy, massage therapist near me, ultimate fitness gym, therapist massage near me, teacher training course in yoga, indian institute of nutrition, teacher training course for yoga, teacher training course yoga, teacher training yoga course, professional fitness gym, masseur in mumbai, gym india, fitness centres in india, gyms india, gym indian, massager in mumbai, yoga certification, yoga certificate, best gymnasium, certification of yoga, certified yoga, yoga certified course, yoga certificate course, certificate course yoga, certification course in yoga, yoga certificate courses, what is the full form of gym, certificate course for yoga, yoga certified courses, yoga course certificate, yoga certification courses, yoga certification course, certificate yoga course, course of yoga, certification for yoga, certificate yoga, certificate courses in yoga, certificate course in yoga, course on yoga, course in yoga, certificate yoga courses, fitness full form, certificate of yoga, courses on yoga, certification yoga, courses in yoga, fitness trainer classes, personal fitness trainer course, gym personal trainer course, course for fitness trainer, gym fitness instructor courses, training institute, course for personal trainer, classes for personal trainer, course fitness trainer, courses for personal trainer, gym trainer courses, personal fitness trainer courses, gym fitness trainer course, courses for fitness trainer, courses for gym trainer, course personal trainer, personal trainer training course, personal fitness instructor course, fitness trainer courses, personal trainer courses, personal trainer course, 
        gym trainer course, fitness trainer course, personal trainer and fitness instructor courses, fitness trainer, indian best gym, india's best gym, physical trainer course, personal trainer training, yoga certificate download, best gym in india, institute training, yoga instructor yoga teacher, personal training and, best gym of india, instructor yoga, yoga instructor, india best gym, personal trainer classes, nutrition courses online, trained yoga instructor, nutrition course online, ifs training centre, nutritionist course online, training yoga instructor, yoga training teacher course, i fitness, india's no 1 it institute, train to be a yoga instructor, india no 1 it institute, course diet, diet courses, yoga instructor class, dietician online course, dietitian online courses, online course for dietician, dietician courses online, dietitian courses online, online dietician course, dietetics course online, dietitian online course, dietitian course online, online courses for dietician, yoga instructor courses, dietician course online, course yoga instructor, dietetics courses online, online dietician courses, online course for dietitian, fitness trainer for home, course for yoga teacher, fitness coaching, courses for yoga teacher, yoga teacher courses, fitness trainer home, course yoga teacher india, personal home trainer, dietetics online course, yoga instructor training in india, yoga instructor course india, yoga teaching course, yoga instructor course in india, gym training, yoga teacher training course india, courses for yoga instructor, yoga teaching courses india, yoga instructor india, courses yoga teacher, yoga training course india, personal home fitness trainer, yoga teaching course india, dietetics online courses, yoga teacher course in india, yoga teacher training course in india, yoga instructor certification in india, teaching yoga course, yoga training courses india, india yoga instructor course, yoga instructor training india, yoga teaching course in india, dietitian online classes, yoga teacher courses india, become a yoga teacher in india, teach yoga courses, fitness coach, certificate for fitness trainer, personal trainer and certification, certified fitness trainer, personal fitness trainer certification, certification for personal fitness trainer, certification of fitness trainer, personal trainer fitness certification, fitness trainer certification, fitness trainer cert, certificate for personal training, fitness trainer certificate, certified fitness trainer certification, personal fitness trainer certificate, certificate fitness trainer, personal fitness instructor certification, gym fitness trainer, certification for fitness trainer, certification for physical trainer, personal instructor certification, gym with personal trainer, personal trainer certification, private trainer certification, physical training academy near me, professional fitness, gyms with personal trainer, certified personal trainer certification, certified personal fitness trainer, gym coaching, gym private trainer, personal training gyms, gym coach, personal trainer cert, gym professional trainer, fitness online class, certification for a personal trainer, private trainer gym, the fitness gym, become certified personal trainer, personal trainer and gym, personal training for gym, gym for personal trainers, personal training gym, yoga instructor classes, personal trainers gym, how do i become a yoga instructor, how to become yoga certified instructor, how to get yoga certified, personal trainer at gym, how to train as a yoga instructor, personal training at gym, course for yoga instructor, gym trainer personal, how to become a yoga instructor, how to get yoga certification, how to become certified yoga instructor, how to become a certified yoga instructor, personal trainer with gym, online yoga certification training, how to become a certified yoga teacher, how to get certified for yoga, fitness trainer bangalore, how to become certified yoga teacher, personal training in gym, how to become a yoga teacher, how to get certified as a yoga instructor, how to become yoga instructor, fit india gym, how to become yoga certified, fitness india gym, yoga teacher course, physical training, how can i become yoga instructor, how to yoga instructor, yoga instructor course, vs fitness gym, online yoga instructor course, gym full name, online yoga teacher course, online yoga instructor training, how do you become a yoga instructor, personal trainer in gym, fitness online classes, yoga teaching course online, how become yoga instructor, my fitness coach, trainer yoga, massage therapy classes, fitness trainer income, massage therapist course, massage therapist courses, massage therapist classes, physical fitness trainer salary, fitness trainer earnings, course for massage therapist, course for massage therapy, massage therapy course, courses for massage therapist, therapy massage courses, massage therapy courses, courses on massage therapy, courses for massage therapy, courses massage therapy, course of massage therapist, fitness personal trainer salary, salary of gym trainer, therapeutic massage course, therapeutic massage courses, gym trainer salary, therapist massage, online courses for nutritionist, nutrition class online, classes for massage therapy, online nutritionist course, online nutrition courses, fitness trainer online, online nutrition class, ifs mumbai, online courses nutrition, online courses of nutrition, course nutrition online, online nutrition course, online fitness trainer, online personal trainer, nutritionist online course, online class for nutrition, online courses in nutrition, courses online nutrition, online classes in nutrition, online course for nutrition, online course on nutrition, nutrition online course, online courses for nutrition, nutritionist online courses, courses on nutrition online, nutritionist online classes, online course nutrition, online fitness instructor, food nutrition courses online, food and nutrition course online, online personal fitness coach, nutrition science course online, online yoga teaching course, online course for nutritionist, mumbai massage spa, offline training, personal online trainer, personal fitness trainer online, best academy, personal online fitness trainer, online yoga teacher training, online personal fitness trainer, spa massage mumbai, food nutritionist course online, yoga courses online, online yoga instructor classes, food and nutrition online course, nutrition online class, nutrition science online course, spa and massage in mumbai, online yoga instructor courses, online classes on nutrition, online course on yoga, food and nutrition courses online, food nutrition course online, online classes nutrition, yoga certification course by government of india, yoga teacher course online, personal fitness coach online, online learning nutrition, course online india, ifsa academy, gym trainer online, yoga certified trainer, yoga training certificate, certificate for yoga instructor, certified courses in nutrition, certified yoga trainer, class gym, personal gym trainer, nutrition courses certificate, certified yoga instructor course, massage online, certification courses in nutrition, gym trainers online, nutritionist certification course, teacher yoga certification, gym with personal training, become yoga instructor certified, certified yoga instructor, certification yoga instructor, online gym instructor, certified nutritionist course, certification for yoga instructor, online gym personal trainer, teach yoga certification, yoga trainer certification, nutrition certificate courses, nutrition certificate course, gym personal trainer online, gym with personal trainers, get certified as a yoga instructor, becoming certified yoga instructor, become a certified yoga teacher, teaching yoga certification, certified nutrition course, yoga instructor certification, yoga certification india, yoga training courses in india, instructor gym personal, diet and nutrition course, yoga teacher license, courses for yoga instructor india, certified yoga teacher, yoga training course in india, yoga instructor license, courses in diet and nutrition, become a certified yoga trainer, diet nutrition course, getting yoga certified, certificate course in nutrition, getting certified as a yoga instructor, certification to teach yoga, yoga teacher certification, online trainer gym, diet & nutrition courses, certification for yoga teacher, nutrition course certificate, get yoga certified, yoga teaching license, diet and nutrition courses, certificate nutrition courses, certified nutritionist courses, certificate yoga instructor, yoga trainer certificate, largest gym in india, biggest gym in india, courses on diet and nutrition, certificate yoga teacher, yoga instructor certification india, online gym trainer, diet nutrition courses, course in diet and nutrition, online gym trainers, yoga training course, one fitness gym, get certified in yoga, training coach, professional gym, get certified to teach yoga, getting certified in yoga, nutritionist certificate course, gym one fitness, yoga certification in india, certification yoga teacher, certification in yoga teaching, gym online trainer, india biggest gym, fitness course, course fitness, fitness courses, sports and nutrition courses, course in sports nutrition, course for fitness, trainer courses, courses fitness, fitness for training, gym personal trainer, certification fitness health, fitness academy near me, fitness and health certification, gym with fitness trainer, fitness and training, sport and nutrition courses, best institute, courses on fitness, sports and nutrition course, gym trainer course fees, ifs academy, therapist course, sports nutrition course, fitness training, dietician course fees, sports nutrition courses, sports nutritionist course, what is full form of gym, which institute, course for therapist, health and fitness certifications, sports training near me, training and fitness, trainer in gym, sports nutrition classes, therapist courses, sports trainers near me, yoga training courses, best gym training, gym academy, yoga instructor certification near me, gym academy near me, india no1 gym, personal fitness trainer, fitness professional, best academy near me, fitness and personal trainer, yoga personal trainer, fitness trainer in mumbai, online massage, personal fitness trainer in mumbai, fitness professionals, personal trainer mumbai, fitness trainer mumbai, no 1 gym in india, india's no 1 institute, gym trainer for ladies, personal trainer for yoga, mumbai personal trainer, how to become a nutritionist in india, personal fitness trainer mumbai, india no 1 institute, personal fitness trainers, indian no 1 institute, ifs academy pune, how to become nutritionist in india, sports fitness of india, k11 certification, personal trainer in mumbai, aerial yoga in pune, yoga instructor course near me, yoga instructor training near me, gym trainer woman, training the trainer courses, gym trainer for women, aerial yoga pune, personal trainer for fitness, institute of eight limbs and fitness centre, gym trainer women, pt course, gym course, course for massage, gym courses, p t course, online fitness certification, fitness certification online, online nutrition courses in india, online nutrition course india, yoga trainer classes, courses on nutrition in india, course on nutrition in india, nutrition course online india, pt courses, online nutritionist courses in india, massage courses, online nutrition course in india, massage course, fitness acdemy, nutrition courses in india, online nutrition courses india, nutrition courses online in india, online course on nutrition in india, nutrition courses online india, gym instructor, online nutritionist course in india, spa and massage therapist, courses in nutrition in india, yoga trainer course, course of massage, nutritionist course india, how to become a gym trainer, yoga trainer courses, nutrition course fees, nutrition course in india, online fitness coach, course massage, how to become fitness trainer, online courses on nutrition in india, spa massage therapist, indian fitness gym, k 11 fitness academy fees, nutritionist courses in india, k11 fitness academy fees, nutritionist course online india, workout programs near me, spa massage therapy, nutrition online course india, nutritionist course in india, spa therapist massage, spa and massage therapy, certification for trainer, how to become personal trainer, trainer certified, online workout coach, how to become personal fitness trainer, certified trainer, massage therapy spa, online workout coaching, how to become a personal fitness trainer, spa therapy massage, nutritionist course fees, coaching online fitness, how to be become a personal trainer, how do you become a personal trainer, spa massage treatment, fitness online coaching, nutrition courses fees, india no 1 gym, fitness coach online, sports institute in india, best course india, train gym, certified trainers, trainers academy, massage spa therapy, proton fitness academy, certified trainer certificate, certificate for trainer, certificate of trainer, certification for trainers, how to become fitness, nutrition course india, workout coach online, online coach fitness, training academy, online coaching fitness, fitness coaching online, coach fitness online, certified trainer certification, online fitness coaching, nutrition courses india, online certificate in fitness, fitness academy, certification courses for personal trainer, certified fitness trainer courses, personal trainer income, physical trainer salary, physical training salary, personal trainer earnings, salary for a personal trainer, salary of fitness trainer, personal trainer certification course, personal fitness trainer salary, fitness trainer certification courses, salary for personal trainer, salary for fitness trainer, personal trainer pay rate, fitness trainer certification course, certified personal trainer courses, personal fitness trainer certification course, personal trainer certified course, private trainer salary, certificate fitness online, personal instructor salary, nutrition fitness course, how to become a physical fitness trainer, fitness trainer certificate course, fitness nutrition courses, personal trainer certificate courses, certified personal trainer classes, classes for personal trainer certification, fitness nutritionist course, personal trainer certification courses, how to become gym trainer, fitness and nutrition courses, fitness & nutrition courses, certified fitness trainer course, personal fitness instructor salary, nutrition and fitness courses, courses on fitness and nutrition, nutrition and fitness course, courses in fitness and nutrition, nutrition courses near me, personal trainer salary, gym trainer rates, courses in nutrition and fitness, nutrition fitness courses, fitness nutrition course, fitness trainer salary, certified personal trainer course, course in fitness and nutrition, courses for nutrition and fitness, certified training certificate, nutrition course after 12th, nutritionist course near me, online nutrition, personal trainer in gym cost, nutritionist courses after 12th, nutritionist classes near me, gym personal trainer cost, gym and fitness, cost of gym personal trainer, female gym trainer near me, nutrition diploma courses, top rated gym in india, personal gym trainer cost, physical trainer, india's number one it institute, nutrition course near me, fitness and gym, india's biggest gym, top gyms in india, indian number one it institute, top gym in india, india top gym, courses nutrition diploma, gym certificate, gym training course, personal trainers course, certificate gym trainer, certified gym trainer, certification for gym instructor, courses for personal training, gym trainer certification, gym personal trainer certification, how to get a fitness certification, best nutritionist courses in india, diploma personal training, diploma in personal training, good personal trainers near me, best fitness trainer near me, trainer certification course, physical training centre near me, gym trainer certificate, personal training courses, gym training courses, gym instructor certificate, classes for personal training, pt training course, trainer certification courses, personal training course, best nutrition course in india, pt training courses, good personal trainer near me, personal training training, courses in personal training, personal training diploma, personal fitness training course, best nutrition courses in india, course personal training, certified trainer courses, online courses in nutrition and dietetics, dietetics and nutrition courses online, best training institute, fitness model india, fitness models in india, exercise science academy, trainer training, fitness instructor, no1 body builder in india, indian gym trainer, gym full form bodybuilding, female fitness trainers near me, nutritionist for gym, india fitness, nutrition and dietetics course online, advanced fitness, sport gym, online courses on nutrition and dietetics, gym personal trainer bangalore, nutrition online, name of trainer, weight loss online course, physical training academy, fitness online, certification courses for trainers, number one academy, indian fitness model, india top rated gym, fitness model in india, certification in nutrition, certified nutritionist certificate, fitness trainer training courses, online fitness trainer job, online course in nutrition and dietetics, india fitness model, online classes for personal trainer, personal fitness trainer course online, online fitness trainer course, fitness coach certification, personal trainer course online, online personal trainer classes, online fitness trainer courses, online personal trainer course, personal trainer courses online, online fitness trainer classes, fitness coach license, fitness coaching certification, fitness training class, gym trainer course near me, gym personal trainer cost per month, masseur training, masseur course, strength and conditioning course in india, fitness training course, fitness training courses, online gym, online gym classes, strength and conditioning courses in india, online yoga certification classes, female gym trainer, nutritionist & fitness consultant, nutritionist certificate, nutrition certification, the best academy, online workout classes india, personal fitness coaching, review for gym trainer, nutrition and fitness consultant, female personal trainer, top institute, gym best, nutritionist certification, trainers india, gym class online, fitness in india, nutrition courses details, nutrition certificate, online fitness, fitness fitness, yoga training online certification, online gym class, personal trainer women, indian fitness club, personal trainer female, personal trainer online course, online fitness course, online fitness courses, online diet and nutrition courses, personal trainer gym price, mission india fit, trainers in india, online courses in diet and nutrition, personal trainer gym fees, one on one gym, online diet course, certified gym trainer course, fitness certification in india, diploma in fitness training, fitness institute, gym trainer experience certificate, personal trainer course fees, personal trainers online, fitness training center, fitness certification courses india, certified personal training course, aerobics trainer certification, gym training center, online fitness trainers in india, certification course in strength & conditioning coach, fitness trainers training institute, exercise centers for sick people in india, fitness trainers training academy, certification course in yoga instructor, personal fitness training center, advanced diploma in fitness training" />
        <meta property="og:title" content="Become a Member at FGIIT - FG Group of Institutions" />
        <meta property="og:description" content="Join the FG Group of Institutions by becoming a member of FGIIT. Enjoy access to a wide range of resources, including state-of-the-art facilities, expert faculty, and innovative programs." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/become-member-at-fgiit" />
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
        <div className="container-fluid p-0">
          <div className="bg-full-bd height-respo d-none d-md-block bodybuilding-banner-3">
            <div className="container">
              <div className="col-12 text-center pt-5">
                <div className="demoo pt-5 mt-5 mb-4 fgiitan">
                  <h1 style={{ color: "#ffffff" }}>WORK FROM HOME</h1>
                  <p className="mt-3">
                    Grab this wonderful opportunity to work from home
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-full-bd height-respo d-block d-md-none bodybuilding-banner-4">
            <div className="container">
              <div className="container">
                <div className="col-12 text-center pt-5">
                  <div className="demoo pt-5 mt-5 mb-4 fgiitan">
                    <h2 className="h1-fs" style={{ color: "#ffffff" }}>WORK FROM HOME</h2>
                    <p className="mt-3">
                      Grab this wonderful opportunity to work from home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-1 order-2">
                <div className="design-h1">
                  <h2 style={{ color: "#333" }} className="m-0 pt-1 pt-md-0 h1-fs">
                    Change Your Career
                    <span className="m-0 text-blue-color">
                      {" "}
                      Today With FGIIT
                    </span>
                  </h2>
                </div>
                <div className="design-describe">
                  <div className="mt-2 d-block d-md-none">
                    <p className="m-0">
                      The vision of our company is to create a referral program
                      that empowers trainers to help their clients achieve their
                      health and wellness goals through personalized diet and
                      fitness programs. We aim to build a community of
                      passionate trainers who will spread the word about our
                      high-quality programs to their networks.
                      {showMore ? (
                        <span className="new-span">
                          Through our referral program, we provide competitive
                          commissions and exceptional customer service, and our
                          ultimate goal is to make a positive impact on people's
                          health and wellness while also providing a rewarding
                          business opportunity for our partners.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMore}
                      id="myBtnn"
                      style={{ color: "#00afef", fontWeight: "500" }}
                    >
                      {showMore ? "Read less" : "Read more"}
                    </span>
                  </div>
                  <div className="mt-2 d-none d-md-block">
                    <p className="m-0">
                      The vision of our company is to create a referral program
                      that empowers trainers to help their clients achieve their
                      health and wellness goals through personalized diet and
                      fitness programs.We aim to build a community of passionate
                      trainers
                      {showMore ? (
                        <span className="new-span">
                          who will spread the word about our high-quality
                          programs to their networks. Through our referral
                          program, we provide competitive commissions and
                          exceptional customer service, and our ultimate goal is
                          to make a positive impact on people's health and
                          wellness while also providing a rewarding business
                          opportunity for our partners.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={toggleReadMoreI}
                      id="myBtnn"
                      style={{ color: "#00afef", fontWeight: "500" }}
                    >
                      {showMore ? "Read less" : "Read more"}
                    </span>
                  </div>
                  <div className="design-describe">
                    <div className="design-btn mt-3 d-block d-md-none">
                      <a
                        onClick={() => openVideoModal("3v2japWqCMc")}
                        className="custom btn-design"
                      >
                        Watch Video
                      </a>
                    </div>
                    <div className="design-btn mt-3 d-none d-md-block">
                      <a
                        onClick={() => openVideoModal("3v2japWqCMc")}
                        className="custom btn-design"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-md-4 mb-2 mt-4 order-1 order-md-2">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Become Member"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/become-member.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("3v2japWqCMc")}
                      className="custom clickof" aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="demoo text-center mt-5">
              <h2 className="h2-fs">
                Best Opportunity{" "}
                <span className="m-0 text-blue-color">
                  {" "}
                  for you
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    width={"64px"}
                    className="mt-3"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/learning.webp"
                    }
                    alt="fggroup"
                  />
                  <h2 className="mt-3 pb-1 pb-md-2 mb-md-0 h5-fs">Who can join?</h2>
                  <p className="text-dark" style={{ fontWeight: "600" }}>
                    Criteria 10+2, Command over a language, Certified from
                    Health and Fitness courses, Basic Mobile and computer
                    knowledge.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    width={"64px"}
                    alt="recorded session"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icon/work-from-home.webp"
                    }
                  />
                  <h2 className="mt-3 mb-md-0 h5-fs">Work from home</h2>
                  <p className="text-dark m-0" style={{ fontWeight: "600" }}>
                    Remote work, flexibility, autonomy, productivity,
                    communication, technology, virtual meetings, time
                    management, work-life balance.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    width={"64px"}
                    alt="job placement"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icon/calendar.webp"
                    }
                  />
                  <h2 className="mt-3 pb-1 pb-md-2 mb-md-0 h5-fs">Fix salary </h2>
                  <p className="text-dark" style={{ fontWeight: "600" }}>
                    Stable income, predictable expenses, easy budgeting, reduced
                    financial stress, reliable cash flow.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    width={"64px"}
                    alt="book"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icon/commission.webp"
                    }
                  />
                  <h2 className="mt-3 pb-1 pb-md-2 mb-md-0 h5-fs">Commission</h2>
                  <p className="text-dark" style={{ fontWeight: "600" }}>
                    Opportunity for higher earnings, rewards for sales
                    performance, motivation to exceed goals, potential for
                    flexibility.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    width={"64px"}
                    alt="course certification"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icon/diagram.webp"
                    }
                  />
                  <h2 className="mt-3 mb-md-0 h5-fs">Slabs for growth </h2>
                  <p className="text-dark m-0" style={{ fontWeight: "600" }}>
                    Clear advancement path, structured career development,
                    opportunity for promotions, transparent performance
                    evaluation, goal-oriented growth.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    width={"64px"}
                    alt="FG Group"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icon/hierarchical.webp"
                    }
                  />
                  <h2 className="mt-3 h5-fs">Structure given as flow chart </h2>
                  <p className="text-dark mb-1" style={{ fontWeight: "600" }}>
                    Clear hierarchy, defined roles, efficient For more
                    information{" "}
                  </p>
                  <a
                    href="/pdf/FGIITAN_Member_Income_Structure.pdf"
                    download="Structure"
                    className="btn btn-primary"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="shap-img">
                  <LazyLoadImage
                    className="mb-md"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/join-us-team.png"
                    }
                    alt="fggroup"
                  />
                </div>
                <div className="ply1"></div>
              </div>
              <div className="col-md-7">
                <div className="">
                  <div className="forh d-none d-md-block">
                    <h2 className="h2-fs">Start Your Journey Today with FGIIT</h2>
                  </div>
                  <div className="forh d-block d-md-none text-center mt-3">
                    <h2 className="h2-fs">Start Your Journey Today with FGIIT</h2>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div className="img-round">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/job-interview.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">Primary Interview</h2>
                      </div>
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div className="img-round bg-warning">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/interview.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">Final Interview</h2>
                      </div>
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div className="img-round bg-success">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/audit.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">Registration</h2>
                      </div>
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div
                          className="img-round"
                          style={{ backgroundColor: "#0088d6" }}
                        >
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/exercise.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">Orientation training</h2>
                      </div>
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div className="img-round bg-info">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/activity.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">Daily training</h2>
                      </div>
                      <div className="col-md-4 col-6 text-center mt-4">
                        <div
                          className="img-round"
                          style={{ backgroundColor: "#000dab" }}
                        >
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/business-meeting.webp"
                            }
                            className="img-fluid"
                            alt="Primary Interview"
                          />
                        </div>
                        <h2 className="round-h5 ml-1 h5-fs">
                          Quarterly offline meet ups
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="col-lg-12">
              <div className="covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  FGIITAN MEMBER
                  <span
                    style={{
                      color: "#00afef",
                      margin: "0px",
                      fontWeight: "800",
                    }}
                  >
                    INCOME STRUCTURE
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector"></div>
            </div>
            <div className="row align-items-center pb-4 d-none d-md-block">
              <div className="design-describe text-center">
                <div className="mt-2">
                  <p className="m-0">
                    Earn big with our exciting opportunity! Get a guaranteed
                    ₹4000 per month fixed salary, plus the chance to earn even
                    more. Your target is just 10 clients, and you could make
                    ₹10,000 or more. We'll provide you with the tools you need,
                    including support through social media posts, expert sales
                  </p>
                  <p className="d-none">
                    pitching techniques, and personalized one-to-one marketing
                    strategies. Whether you're looking to boost your income or
                    start a new venture, this is the perfect chance. Join us now
                    and unlock your earning potential!
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="col-lg-12 pl-1">
                <div className="covid text-center">
                  <div className="img-round-2 blog2 d-none d-md-block">
                    <h2 className="h5-fs">COMMISSION SLAB</h2>
                  </div>
                  <div
                    className="img-round-3 d-block d-md-none"
                    style={{
                      border: "2px solid #0497ec",
                      borderRadius: "10px",
                      padding: "5px",
                      width: "160px",
                      margin: "auto",
                    }}
                  >
                    <h2
                      className=" h5-fs fs-15"
                      style={{
                        color: "#0497ec",
                        marginTop: "5px",
                      }}
                    >
                      COMMISSION SLAB
                    </h2>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-flex justify-content-center mt-3">
                <div className="left-line">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="430"
                    height="76"
                    viewBox="0 0 430 76"
                    fill="none"
                  >
                    <path
                      d="M429.903 6C429.903 8.94552 427.515 11.3333 424.569 11.3333C421.624 11.3333 419.236 8.94552 419.236 6C419.236 3.05448 421.624 0.666667 424.569 0.666667C427.515 0.666667 429.903 3.05448 429.903 6ZM405.016 31.2517L405.078 32.2497L405.047 32.2517H405.016V31.2517ZM11.3333 70C11.3333 72.9455 8.94552 75.3333 6 75.3333C3.05448 75.3333 0.666666 72.9455 0.666666 70C0.666666 67.0545 3.05448 64.6667 6 64.6667C8.94552 64.6667 11.3333 67.0545 11.3333 70ZM425.557 5.84014C426.179 9.68618 426.518 15.9136 423.947 21.391C421.327 26.9722 415.779 31.577 405.078 32.2497L404.953 30.2537C415.028 29.6203 419.868 25.3725 422.137 20.541C424.454 15.6057 424.182 9.8603 423.582 6.15986L425.557 5.84014ZM405.016 32.2517H60.9944V30.2517H405.016V32.2517ZM60.9944 32.2517C50.4337 32.2517 36.8603 34.8588 25.9633 40.9202C15.0878 46.9696 7 56.3738 7 70H5C5 55.4139 13.716 45.444 24.9911 39.1724C36.2446 32.9127 50.1683 30.2517 60.9944 30.2517V32.2517Z"
                      fill="#769CFF"
                    />
                  </svg>
                </div>
                <div className="left-line-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="196"
                    height="76"
                    viewBox="0 0 196 76"
                    fill="none"
                  >
                    <path
                      d="M195.144 6C195.144 8.94552 192.756 11.3333 189.811 11.3333C186.865 11.3333 184.478 8.94552 184.478 6C184.478 3.05448 186.865 0.666667 189.811 0.666667C192.756 0.666667 195.144 3.05448 195.144 6ZM181.224 31.2517L181.366 32.2416L181.295 32.2517H181.224V31.2517ZM11.3333 70C11.3333 72.9455 8.94552 75.3333 6 75.3333C3.05448 75.3333 0.666669 72.9455 0.666669 70C0.666669 67.0545 3.05448 64.6667 6 64.6667C8.94552 64.6667 11.3333 67.0545 11.3333 70ZM190.808 5.92906C191.079 9.73124 191.221 15.8263 190.119 21.1679C189.569 23.8375 188.694 26.392 187.312 28.386C185.914 30.4037 183.977 31.8678 181.366 32.2416L181.082 30.2618C183.033 29.9825 184.518 28.907 185.668 27.2467C186.836 25.5626 187.638 23.3008 188.161 20.7641C189.206 15.693 189.08 9.81525 188.813 6.07094L190.808 5.92906ZM181.224 32.2517H30.1503V30.2517H181.224V32.2517ZM30.1503 32.2517C21.5182 32.2517 7 42.1068 7 70H5C5 41.4687 19.9988 30.2517 30.1503 30.2517V32.2517Z"
                      fill="#769CFF"
                    />
                  </svg>
                </div>
                <div className="center-line ml-4">
                  <svg
                    width="12"
                    height="85"
                    viewBox="0 0 12 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.66679 79.4637C0.646753 82.4092 3.01827 84.8132 5.96372 84.8332C8.90917 84.8532 11.3132 82.4817 11.3332 79.5363C11.3532 76.5908 8.98173 74.1868 6.03628 74.1668C3.09083 74.1468 0.686827 76.5183 0.66679 79.4637ZM5.50002 5.9932L5.00002 79.4932L6.99998 79.5068L7.49998 6.0068L5.50002 5.9932Z"
                      fill="#1a4e77"
                    />
                  </svg>
                </div>
                <div className="right-line-2 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="176"
                    height="76"
                    viewBox="0 0 176 76"
                    fill="none"
                  >
                    <path
                      d="M0.835173 6C0.835173 8.94552 3.22299 11.3333 6.16851 11.3333C9.11402 11.3333 11.5018 8.94552 11.5018 6C11.5018 3.05448 9.11402 0.666667 6.16851 0.666667C3.22299 0.666667 0.835173 3.05448 0.835173 6ZM13.822 31.2517L13.6634 32.239L13.7422 32.2517H13.822V31.2517ZM164.667 70C164.667 72.9455 167.054 75.3333 170 75.3333C172.946 75.3333 175.333 72.9455 175.333 70C175.333 67.0545 172.946 64.6667 170 64.6667C167.054 64.6667 164.667 67.0545 164.667 70ZM5.17051 5.93674C4.92971 9.73562 4.80393 15.819 5.78293 21.1467C6.27182 23.8072 7.04872 26.3527 8.27753 28.3419C9.51756 30.3492 11.2633 31.8535 13.6634 32.239L13.9806 30.2644C12.3149 29.9968 11.0111 28.9615 9.97904 27.2908C8.93573 25.6019 8.21781 23.3311 7.75 20.7853C6.81561 15.7003 6.92896 9.81086 7.1665 6.06326L5.17051 5.93674ZM13.822 32.2517H148.475V30.2517H13.822V32.2517ZM148.475 32.2517C155.998 32.2517 169 41.989 169 70H171C171 41.5865 157.693 30.2517 148.475 30.2517V32.2517Z"
                      fill="#EBD61E"
                    />
                  </svg>
                </div>
                <div className="right-line ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="377"
                    height="76"
                    viewBox="0 0 377 76"
                    fill="none"
                  >
                    <path
                      d="M0.0427232 6C0.0427232 8.94552 2.43054 11.3333 5.37606 11.3333C8.32158 11.3333 10.7094 8.94552 10.7094 6C10.7094 3.05448 8.32158 0.666667 5.37606 0.666667C2.43054 0.666667 0.0427232 3.05448 0.0427232 6ZM22.4564 31.2517L22.3846 32.2491L22.4205 32.2517H22.4564V31.2517ZM365.667 70C365.667 72.9455 368.054 75.3333 371 75.3333C373.946 75.3333 376.333 72.9455 376.333 70C376.333 67.0545 373.946 64.6667 371 64.6667C368.054 64.6667 365.667 67.0545 365.667 70ZM4.38591 5.85994C3.84339 9.69512 3.54961 15.8937 5.7853 21.3454C6.91074 24.0898 8.68362 26.6597 11.3943 28.6258C14.1051 30.5921 17.6945 31.9116 22.3846 32.2491L22.5282 30.2543C18.1444 29.9388 14.9284 28.7186 12.5686 27.0068C10.2085 25.295 8.64537 23.0485 7.63575 20.5866C5.60131 15.6256 5.8412 9.85137 6.3662 6.14006L4.38591 5.85994ZM22.4564 32.2517H322.962V30.2517H22.4564V32.2517ZM322.962 32.2517C332.147 32.2517 343.962 34.8485 353.449 40.8898C362.901 46.9085 370 56.3068 370 70H372C372 55.4809 364.421 45.5051 354.524 39.2028C344.662 32.9229 332.458 30.2517 322.962 30.2517V32.2517Z"
                      fill="#EBD61E"
                    />
                  </svg>
                </div>
              </div>
              <div className="d-none d-md-block">
                <div className="row text-center slab">
                  <div
                    className="col-md-2 blog2 text-center m-3 "
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div
                      className="number-round mt-2"
                      style={{
                        backgroundColor: "#0497ec",
                        color: "#fff",
                        fontSize: "35px",
                        margin: "auto",
                      }}
                    >
                      1
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹20,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        Result 10% on Sales Lead form FGIIT will be given
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#d1ebff"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div
                      className="number-round mt-2"
                      style={{
                        backgroundColor: "#0497ec",
                        color: "#fff",
                        fontSize: "35px",
                        margin: "auto",
                      }}
                    >
                      2
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹80,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        12% Commision Started Education courses and services add
                        to the Sales
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#cbe465"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div
                      className="number-round mt-2"
                      style={{
                        backgroundColor: "#0497ec",
                        color: "#fff",
                        fontSize: "35px",
                        margin: "auto",
                      }}
                    >
                      3
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹1,40,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        15% Commision Started FGIITAN can add members below
                        them.
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#cbe465"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div
                      className="number-round mt-2"
                      style={{
                        backgroundColor: "#0497ec",
                        color: "#fff",
                        fontSize: "35px",
                        margin: "auto",
                      }}
                    >
                      4
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹2,00,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        17.5% Commision Started Franchise Options Available
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#cbe465"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div
                      className="number-round mt-2"
                      style={{
                        backgroundColor: "#0497ec",
                        color: "#fff",
                        fontSize: "35px",
                        margin: "auto",
                      }}
                    >
                      5
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹3,00,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        20% Commision Started Master Franchise Options Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className="row text-center slab">
                  <div
                    className="col-md-2 d-flex blog2 text-center m-3 "
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div className=" mt-2" style={{ margin: "auto" }}>
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/end-point.png"
                        }
                        width="45px"
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹20,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        Result 10% on Sales Lead form FGIIT will be given
                      </p>
                      <p
                        className="mb-0 fs-15"
                        style={{ fontWeight: "900" }}
                      >
                        <b>Salary : ₹4000 Fix + ₹2000</b>
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#30a5ff"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 d-flex blog2 text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div className=" mt-2" style={{ margin: "auto" }}>
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/goal.png"
                        }
                        width="45px"
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹80,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        12% Commision Started Education courses and services add
                        to the Sales
                      </p>
                      <p
                        className="mb-0 fs-15"
                        style={{ fontWeight: "900" }}
                      >
                        <b>Salary : ₹4000 Fix + ₹9,600</b>
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#30a5ff"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 d-flex text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div className=" mt-2" style={{ margin: "auto" }}>
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/team.png"
                        }
                        width="45px"
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹1,40,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        15% Commision Started FGIITAN can add members below
                        them.
                      </p>
                      <p
                        className="mb-0 fs-15"
                        style={{ fontWeight: "900" }}
                      >
                        <b>Salary : ₹4000 Fix + ₹21,000</b>
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#30a5ff"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 d-flex text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div className=" mt-2" style={{ margin: "auto" }}>
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/franchise.png"
                        }
                        width="45px"
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹2,00,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        17.5% Commision Started Franchise Options Available
                      </p>
                      <p
                        className="mb-0 fs-15"
                        style={{ fontWeight: "900" }}
                      >
                        <b>Salary : ₹4000 Fix + ₹35,000</b>
                      </p>
                    </div>
                  </div>
                  <div className="d-block d-md-none m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="44"
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <path
                        d="M1.16679 5.96372C1.14675 8.90917 3.51827 11.3132 6.46372 11.3332C9.40917 11.3532 11.8132 8.98173 11.8332 6.03628C11.8532 3.09083 9.48173 0.686827 6.53628 0.66679C3.59083 0.646753 1.18683 3.01827 1.16679 5.96372ZM0.945707 38.463C0.92567 41.4084 3.29719 43.8124 6.24264 43.8325C9.18809 43.8525 11.5921 41.481 11.6121 38.5355C11.6322 35.5901 9.26065 33.1861 6.3152 33.166C3.36975 33.146 0.965744 35.5175 0.945707 38.463ZM5.50002 5.9932L5.27894 38.4924L7.27889 38.5061L7.49998 6.0068L5.50002 5.9932Z"
                        fill="#30a5ff"
                      />
                    </svg>
                  </div>
                  <div
                    className="col-md-2 blog2 d-flex text-center m-3"
                    style={{ backgroundColor: "#d1ebff", padding: "15px" }}
                  >
                    <div className="mt-4" style={{ margin: "auto" }}>
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/master-franchise.png"
                        }
                        width="45px"
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata mt-2 ml-3 text-left">
                      <h2 className="h6-fs">
                        <b>₹3,00,000/- MARK ACHIEVED</b>
                      </h2>
                      <p className="mb-0 fs-12">
                        20% Commision Started Master Franchise Options Available
                      </p>
                      <p
                        className="mb-0 fs-15"
                        style={{ fontWeight: "900" }}
                      >
                        <b>Salary : ₹4000 Fix + ₹60,000</b>
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
        <div className="container-fluid py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    Benefits of
                    <span className="m-0 text-blue-color">
                      Becoming a member
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/working-hours.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Flexible working hours</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/work-from-home.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Comfort of your home</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/motivation.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Training support</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/market.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Growth opportunity</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/invesment-7.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Personality Development</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog text-center p-4">
                    <div className="">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/invesment-6.webp"
                        }
                        className="img-fluid"
                        width={"64px"}
                        alt="FG Group"
                      />
                    </div>
                    <div className="tabata">
                      <h2 className="h4-fs">Rewards</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margnitop">
        <div className="container-fluid">
          <div className="container pt-md-5">
            <div className="col-md-12">
              <div className="covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  <span className="m-0 text-blue-color">
                    Outstanding{" "}
                  </span>
                  Response
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
              <OwlCarousel
                loop
                autoplay
                dots={true}
                id="owl-demo"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 2,
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtu.be/IB3r7I7Z2zY"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/xAMczxGyrbc?feature=share"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/XQuXwYE31zc?feature=share"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/aI4wdD47mqk?feature=share"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/298VUNwuJuM?feature=share"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/A0Zp7b5Sz1g?feature=share"
                        data-flashy-type="video"
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
                      width="100%"
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <a
                        href="https://youtube.com/8V3s6RDTQqM?feature=share"
                        data-flashy-type="video"
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
      <section className="margnitop" style={{ marginTop: "100px" }}>
        <div className="container-fluid mt-3 m-0 p-0">
          <div className="bg-g">
            <div className="container py-2 py-md-4">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="social-links">
                    <h2 className="text-center text-md-left h4-fs">
                      Grab This Wonderful Opportunity To Work From Home.
                    </h2>
                    <i className="fas fa-arrow-right d-none d-md-block"></i>
                  </div>
                </div>
                <div className="col-md-2 d-none d-md-none"></div>
                <div className="col-md-6 col-12 d-flex justify-content-center">
                  <div className="social-card">
                    <div className="img-of-social img-of">
                      <Link to="/fgiit/fgiit-all-links" target="_blank">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/fgiit.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </Link>
                      to{" "}
                    </div>
                    <div className="social-title text-center">
                      <Link
                        to="/fgiit/fgiit-all-links"
                        target="_blank"
                        className="btn-3"
                      >
                        Apply Now
                      </Link>
                      to{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventsProgramFgiit />
      <BecomeMemberFgiitFaqs />

      <FgiitBlogs />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're{" "}
                <span className="m-0 text-blue-color">
                  Here To Help
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  effect="blur"
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
                  className="form-control fr mt-2"
                  id="txt_contact_name"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  className="form-control fr mt-2"
                  id="txt_contact_email"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  className="form-control fr mt-2"
                  id="txt_contact_mobile"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">Select City</p>
                <select
                  id="txt_contact_form_city"
                  className="form-control fr mt-2"
                >
                  <option value="" hidden>
                    Select City
                  </option>
                  <option value="AGARTALA">AGARTALA</option>
                  <option value="AGRA">AGRA</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="AIZWAL">AIZWAL</option>
                  <option value="AJMER">AJMER</option>
                  <option value="ALLAHABAD">ALLAHABAD</option>
                  <option value="ALLEPPEY">ALLEPPEY</option>
                  <option value="ALIBAUG">ALIBAUG</option>
                  <option value="ALMORA">ALMORA</option>
                  <option value="ALSISAR">ALSISAR</option>
                  <option value="ALWAR">ALWAR</option>
                  <option value="AMBALA">AMBALA</option>
                  <option value="AMLA">AMLA</option>
                  <option value="AMRITSAR">AMRITSAR</option>
                  <option value="ANAND">ANAND</option>
                  <option value="ANAND">ANAND</option>
                  <option value="ASHTAMUDI">ASHTAMUDI</option>
                  <option value="AULI">AULI</option>
                  <option value="AURANGABAD">AURANGABAD</option>
                  <option value="BADDI">BADDI</option>
                  <option value="BADRINATH">BADRINATH</option>
                  <option value="BALASINOR">BALASINOR</option>
                  <option value="BALRAMPUR">BALRAMPUR</option>
                  <option value="BAMBORA">BAMBORA</option>
                  <option value="BANDHAVGARH">BANDHAVGARH</option>
                  <option value="BANDIPUR">BANDIPUR</option>
                  <option value="BANGALORE">BANGALORE</option>
                  <option value="BARBIL">BARBIL</option>
                  <option value="BAREILLY">BAREILLY</option>
                  <option value="BEHROR">BEHROR</option>
                  <option value="BELGAUM">BELGAUM</option>
                  <option value="BERHAMPUR">BERHAMPUR</option>
                  <option value="BETALGHAT">BETALGHAT</option>
                  <option value="BHARATPUR">BHARATPUR</option>
                  <option value="BHANDARDARA">BHANDARDARA</option>
                  <option value="BHARUCH">BHARUCH</option>
                  <option value="BHAVANGADH">BHAVANGADH</option>
                  <option value="BHAVNAGAR">BHAVNAGAR</option>
                  <option value="BHILAI">BHILAI</option>
                  <option value="BHIMTAL">BHIMTAL</option>
                  <option value="BHOPAL">BHOPAL</option>
                  <option value="BHUBANESHWAR">BHUBANESHWAR</option>
                  <option value="BHUJ">BHUJ</option>
                  <option value="BIKANER">BIKANER</option>
                  <option value="BINSAR">BINSAR</option>
                  <option value="BODHGAYA">BODHGAYA</option>
                  <option value="BUNDI">BUNDI</option>
                  <option value="Dharampur">CALICUT</option>
                  <option value="Dhari">CANANNORE</option>
                  <option value="Dhola">CHAIL</option>
                  <option value="Dholka">CHAMBA</option>
                  <option value="Dhoraji">CHANDIGARH</option>
                  <option value="Dhrangadhra">CHENNAI</option>
                  <option value="Dhrol">CHIKMAGALUR</option>
                  <option value="Dhuwaran">CHIPLUN</option>
                  <option value="CHITRAKOOT">CHITRAKOOT</option>
                  <option value="CHITTORGARH">CHITTORGARH</option>
                  <option value="COIMBATORE">COIMBATORE</option>
                  <option value="COONOOR">COONOOR</option>
                  <option value="COORG">COORG</option>
                  <option value="CORBETT NATIONAL PARK">
                    CORBETT NATIONAL PARK
                  </option>
                  <option value="CUTTACK">CUTTACK</option>
                  <option value="DABHOSA">DABHOSA</option>
                  <option value="DALHOUSIE">DALHOUSIE</option>
                  <option value="DAMAN">DAMAN</option>
                  <option value="DANDELI">DANDELI</option>
                  <option value="DAPOLI">DAPOLI</option>
                  <option value="DARJEELING">DARJEELING</option>
                  <option value="DAUSA">DAUSA</option>
                  <option value="DEHRADUN">DEHRADUN</option>
                  <option value="DHARAMSHALA">DHARAMSHALA</option>
                  <option value="DIBRUGARH">DIBRUGARH</option>
                  <option value="DIGHA">DIGHA</option>
                  <option value="DIU">DIU</option>
                  <option value="DIVE AGAR">DIVE AGAR</option>
                  <option value="DOOARS">DOOARS</option>
                  <option value="DURGAPUR">DURGAPUR</option>
                  <option value="DURSHET">DURSHET</option>
                  <option value="DWARKA">DWARKA</option>
                  <option value="FARIDABAD">FARIDABAD</option>
                  <option value="FIROZABAD">FIROZABAD</option>
                  <option value="GANGOTRI">GANGOTRI</option>
                  <option value="GANGTOK">GANGTOK</option>
                  <option value="GANAPATIPULE">GANAPATIPULE</option>
                  <option value="GANDHIDHAM">GANDHIDHAM</option>
                  <option value="GANDHINAGAR">GANDHINAGAR</option>
                  <option value="GARHMUKTESHWAR">GARHMUKTESHWAR</option>
                  <option value="GARHWAL">GARHWAL</option>
                  <option value="GAYA">GAYA</option>
                  <option value="GHAZIABAD">GHAZIABAD</option>
                  <option value="GOA">GOA</option>
                  <option value="GOKHARNA">GOKHARNA</option>
                  <option value="GONDAL">GONDAL</option>
                  <option value="GORAKHPUR">GORAKHPUR</option>
                  <option value="GREATER NOIDA">GREATER NOIDA</option>
                  <option value="GULMARG">GULMARG</option>
                  <option value="GURGAON">GURGAON</option>
                  <option value="GURUVAYOOR">GURUVAYOOR</option>
                  <option value="GUWAHATI">GUWAHATI</option>
                  <option value="GWALIOR">GWALIOR</option>
                  <option value="HALEBID">HALEBID</option>
                  <option value="HAMPI">HAMPI</option>
                  <option value="HANSI">HANSI</option>
                  <option value="HARIDWAR">HARIDWAR</option>
                  <option value="HASSAN">HASSAN</option>
                  <option value="HOSPET">HOSPET</option>
                  <option value="HOSUR">HOSUR</option>
                  <option value="HUBLI">HUBLI</option>
                  <option value="HYDERABAD">HYDERABAD</option>
                  <option value="IDUKKI">IDUKKI</option>
                  <option value="IGATPURI">IGATPURI</option>
                  <option value="IMPHAL">IMPHAL</option>
                  <option value="INDORE">INDORE</option>
                  <option value="JABALPUR">JABALPUR</option>
                  <option value="JAIPUR">JAIPUR</option>
                  <option value="JAISALMER">JAISALMER</option>
                  <option value="JALANDHAR">JALANDHAR</option>
                  <option value="JALGAON">JALGAON</option>
                  <option value="JAMBUGODHA">JAMBUGODHA</option>
                  <option value="JAMMU">JAMMU</option>
                  <option value="JAMNAGAR">JAMNAGAR</option>
                  <option value="JAMSHEDPUR">JAMSHEDPUR</option>
                  <option value="JAWHAR">JAWHAR</option>
                  <option value="JHANSI">JHANSI</option>
                  <option value="JODHPUR">JODHPUR</option>
                  <option value="JOJAWAR">JOJAWAR</option>
                  <option value="JORHAT">JORHAT</option>
                  <option value="JUNAGADH">JUNAGADH</option>
                  <option value="KABINI">KABINI</option>
                  <option value="KALIMPONG">KALIMPONG</option>
                  <option value="KANATAL">KANATAL</option>
                  <option value="KANCHIPURAM">KANCHIPURAM</option>
                  <option value="KANHA">KANHA</option>
                  <option value="KANPUR">KANPUR</option>
                  <option value="KANYAKUMARI">KANYAKUMARI</option>
                  <option value="KARGIL">KARGIL</option>
                  <option value="KARJAT">KARJAT</option>
                  <option value="KARNAL">KARNAL</option>
                  <option value="KARUR">KARUR</option>
                  <option value="KARWAR">KARWAR</option>
                  <option value="KASARGOD">KASARGOD</option>
                  <option value="KASAULI">KASAULI</option>
                  <option value="KASHIPUR">KASHIPUR</option>
                  <option value="KASHID">KASHID</option>
                  <option value="KATRA">KATRA</option>
                  <option value="KAUSANI">KAUSANI</option>
                  <option value="KAZA">KAZA</option>
                  <option value="KAZIRANGA">KAZIRANGA</option>
                  <option value="KEDARNATH">KEDARNATH</option>
                  <option value="KHAJJIAR">KHAJJIAR</option>
                  <option value="KHAJURAHO">KHAJURAHO</option>
                  <option value="KHANDALA">KHANDALA</option>
                  <option value="KHIMSAR">KHIMSAR</option>
                  <option value="KOCHIN">KOCHIN</option>
                  <option value="KODAIKANAL">KODAIKANAL</option>
                  <option value="KOLHAPUR">KOLHAPUR</option>
                  <option value="KOLKATA">KOLKATA</option>
                  <option value="KOLLAM">KOLLAM</option>
                  <option value="KOTA">KOTA</option>
                  <option value="KOTAGIRI">KOTAGIRI</option>
                  <option value="KOTTAYAM">KOTTAYAM</option>
                  <option value="KOVALAM">KOVALAM</option>
                  <option value="KUFRI">KUFRI</option>
                  <option value="KUMBALGARH">KUMBALGARH</option>
                  <option value="KULLU">KULLU</option>
                  <option value="KUMARAKOM">KUMARAKOM</option>
                  <option value="KUMBAKONAM">KUMBAKONAM</option>
                  <option value="KUMILY">KUMILY</option>
                  <option value="KURSEONG">KURSEONG</option>
                  <option value="KUSHINAGAR">KUSHINAGAR</option>
                  <option value="LACHUNG">LACHUNG</option>
                  <option value="LEH">LEH</option>
                  <option value="LAKSHADWEEP">LAKSHADWEEP</option>
                  <option value="LONAVALA">LONAVALA</option>
                  <option value="LOTHAL">LOTHAL</option>
                  <option value="LUCKNOW">LUCKNOW</option>
                  <option value="LUDHIANA">LUDHIANA</option>
                  <option value="LUMBINI">LUMBINI</option>
                  <option value="MADURAI">MADURAI</option>
                  <option value="MAHABALESHWAR">MAHABALESHWAR</option>
                  <option value="MAHABALIPURAM">MAHABALIPURAM</option>
                  <option value="MALAPPURAM">MALAPPURAM</option>
                  <option value="MALPE">MALPE</option>
                  <option value="MALSHEJ GHAT">MALSHEJ GHAT</option>
                  <option value="MALVAN">MALVAN</option>
                  <option value="MANALI">MANALI</option>
                  <option value="MANDAVI">MANDAVI</option>
                  <option value="MANDAWA">MANDAWA</option>
                  <option value="MANESAR">MANESAR</option>
                  <option value="MARARRI">MARARRI</option>
                  <option value="MANDORMONI">MANDORMONI</option>
                  <option value="MANGALORE">MANGALORE</option>
                  <option value="MANMAD">MANMAD</option>
                  <option value="MARCHULA">MARCHULA</option>
                  <option value="MATHERAN">MATHERAN</option>
                  <option value="MATHURA">MATHURA</option>
                  <option value="MCLEODGANJ">MCLEODGANJ</option>
                  <option value="MOHALI">MOHALI</option>
                  <option value="MOUNT ABU">MOUNT ABU</option>
                  <option value="MORADABAD">MORADABAD</option>
                  <option value="MORBI">MORBI</option>
                  <option value="MUKTESHWAR">MUKTESHWAR</option>
                  <option value="MUMBAI">MUMBAI</option>
                  <option value="MUNDRA">MUNDRA</option>
                  <option value="MUNNAR">MUNNAR</option>
                  <option value="MURUD JANJIRA">MURUD JANJIRA</option>
                  <option value="MUSSOORIE">MUSSOORIE</option>
                  <option value="MYSORE">MYSORE</option>
                  <option value="NADUKANI">NADUKANI</option>
                  <option value="NAGAPATTINAM">NAGAPATTINAM</option>
                  <option value="NAGARHOLE">NAGARHOLE</option>
                  <option value="NAGAUR FORT">NAGAUR FORT</option>
                  <option value="NAGOTHANE">NAGOTHANE</option>
                  <option value="NAGPUR">NAGPUR</option>
                  <option value="NAHAN">NAHAN</option>
                  <option value="NAINITAL">NAINITAL</option>
                  <option value="NALDHERA">NALDHERA</option>
                  <option value="NANDED">NANDED</option>
                  <option value="NAPNE">NAPNE</option>
                  <option value="NASIK">NASIK</option>
                  <option value="NAVI MUMBAI">NAVI MUMBAI</option>
                  <option value="NERAL">NERAL</option>
                  <option value="NEW DELHI">NEW DELHI</option>
                  <option value="NILGIRI">NILGIRI</option>
                  <option value="NOIDA">NOIDA</option>
                  <option value="OOTY">OOTY</option>
                  <option value="ORCHHA">ORCHHA</option>
                  <option value="OSIAN">OSIAN</option>
                  <option value="PACHMARHI">PACHMARHI</option>
                  <option value="PALAMPUR">PALAMPUR</option>
                  <option value="PALANPUR">PALANPUR</option>
                  <option value="PALI">PALI</option>
                  <option value="PAHALGAM">PAHALGAM</option>
                  <option value="PALITANA">PALITANA</option>
                  <option value="PALLAKAD">PALLAKAD</option>
                  <option value="PANCHGANI">PANCHGANI</option>
                  <option value="PANCHKULA">PANCHKULA</option>
                  <option value="PANNA">PANNA</option>
                  <option value="PANHALA">PANHALA</option>
                  <option value="PANVEL">PANVEL</option>
                  <option value="PANTNAGAR">PANTNAGAR</option>
                  <option value="PARWANOO">PARWANOO</option>
                  <option value="PATIALA">PATIALA</option>
                  <option value="PATHANKOT">PATHANKOT</option>
                  <option value="PATNA">PATNA</option>
                  <option value="PATNITOP">PATNITOP</option>
                  <option value="PELLING">PELLING</option>
                  <option value="PENCH">PENCH</option>
                  <option value="PHAGWARA">PHAGWARA</option>
                  <option value="PHALODI">PHALODI</option>
                  <option value="PINJORE">PINJORE</option>
                  <option value="PONDICHERRY">PONDICHERRY</option>
                  <option value="POOVAR">POOVAR</option>
                  <option value="PORBANDAR">PORBANDAR</option>
                  <option value="PORT BLAIR">PORT BLAIR</option>
                  <option value="POSHINA">POSHINA</option>
                  <option value="PRAGPUR">PRAGPUR</option>
                  <option value="PUNE">PUNE</option>
                  <option value="PURI">PURI</option>
                  <option value="PUSKHAR">PUSKHAR</option>
                  <option value="PUTTAPARTHI">PUTTAPARTHI</option>
                  <option value="RAI BAREILLY">RAI BAREILLY</option>
                  <option value="RAICHAK">RAICHAK</option>
                  <option value="RAIPUR">RAIPUR</option>
                  <option value="RAJASTHAN">RAJASTHAN</option>
                  <option value="RAJGIR">RAJGIR</option>
                  <option value="RAJKOT">RAJKOT</option>
                  <option value="RAJPIPLA">RAJPIPLA</option>
                  <option value="RAJSAMAND">RAJSAMAND</option>
                  <option value="RAJAHMUNDRY">RAJAHMUNDRY</option>
                  <option value="RAMESHWARAM">RAMESHWARAM</option>
                  <option value="RAM NAGAR">RAM NAGAR</option>
                  <option value="RAMGARH">RAMGARH</option>
                  <option value="RANAKPUR">RANAKPUR</option>
                  <option value="RANCHI">RANCHI</option>
                  <option value="RANIKHET">RANIKHET</option>
                  <option value="RANNY">RANNY</option>
                  <option value="RANTHAMBORE">RANTHAMBORE</option>
                  <option value="RATNAGIRI">RATNAGIRI</option>
                  <option value="RAVANGLA">RAVANGLA</option>
                  <option value="RISHIKESH">RISHIKESH</option>
                  <option value="RISHYAP">RISHYAP</option>
                  <option value="ROHETGARH">ROHETGARH</option>
                  <option value="ROURKELA">ROURKELA</option>
                  <option value="SAJAN">SAJAN</option>
                  <option value="SALEM">SALEM</option>
                  <option value="SAPUTARA">SAPUTARA</option>
                  <option value="SASAN GIR">SASAN GIR</option>
                  <option value="SATTAL">SATTAL</option>
                  <option value="SAWAI MADHOPUR">SAWAI MADHOPUR</option>
                  <option value="SAWANTWADI">SAWANTWADI</option>
                  <option value="SECUNDERABAD">SECUNDERABAD</option>
                  <option value="SHILLONG">SHILLONG</option>
                  <option value="SHIMLA">SHIMLA</option>
                  <option value="SHIMLIPAL">SHIMLIPAL</option>
                  <option value="SHIRDI">SHIRDI</option>
                  <option value="SHARAVANBELGOLA">SHARAVANBELGOLA</option>
                  <option value="SHIVANASAMUDRA">SHIVANASAMUDRA</option>
                  <option value="SIANA">SIANA</option>
                  <option value="SILIGURI">SILIGURI</option>
                  <option value="SILVASSA">SILVASSA</option>
                  <option value="SIVAGANGA DISTRICT">SIVAGANGA DISTRICT</option>
                  <option value="SOLAN">SOLAN</option>
                  <option value="SONAULI">SONAULI</option>
                  <option value="SRINAGAR">SRINAGAR</option>
                  <option value="SUNDERBAN">SUNDERBAN</option>
                  <option value="SURAT">SURAT</option>
                  <option value="TANJORE">TANJORE</option>
                  <option value="TAPOLA">TAPOLA</option>
                  <option value="TARAPITH">TARAPITH</option>
                  <option value="THANE">THANE</option>
                  <option value="THEKKADY">THEKKADY</option>
                  <option value="THIRVANNAMALAI">THIRVANNAMALAI</option>
                  <option value="THIRUVANANTHAPURAM">THIRUVANANTHAPURAM</option>
                  <option value="TIRUCHIRAPALLI">TIRUCHIRAPALLI</option>
                  <option value="TIRUPUR">TIRUPUR</option>
                  <option value="TIRUPATI">TIRUPATI</option>
                  <option value="THRISSUR">THRISSUR</option>
                  <option value="UDAIPUR">UDAIPUR</option>
                  <option value="UDHAMPUR">UDHAMPUR</option>
                  <option value="UDUPI">UDUPI</option>
                  <option value="UJJAIN">UJJAIN</option>
                  <option value="UTTARKASHI">UTTARKASHI</option>
                  <option value="VADODARA">VADODARA</option>
                  <option value="VAGAMON">VAGAMON</option>
                  <option value="VARKALA">VARKALA</option>
                  <option value="VAPI">VAPI</option>
                  <option value="VARANASI">VARANASI</option>
                  <option value="VELANKANNI">VELANKANNI</option>
                  <option value="VELLORE">VELLORE</option>
                  <option value="VERAVAL">VERAVAL</option>
                  <option value="VIJAYAWADA">VIJAYAWADA</option>
                  <option value="VIKRAMGADH">VIKRAMGADH</option>
                  <option value="VISHAKAPATNAM">VISHAKAPATNAM</option>
                  <option value="WAYANAD">WAYANAD</option>
                  <option value="WANKANER">WANKANER</option>
                  <option value="YAMUNOTRI">YAMUNOTRI</option>
                  <option value="YERCAUD">YERCAUD</option>
                  <option value="YUKSOM">YUKSOM</option>
                  <option value="Other">Other</option>
                </select>
                <p className="mb-0 mt-4">Expeted Income</p>
                <select
                  id="txt_contact_form_expected_income"
                  className="form-control fr mt-2"
                >
                  <option value="" hidden>
                    Select Income
                  </option>
                  <option value="20,000 INR">₹20,000/-</option>
                  <option value="80,000 INR">₹80,000/-</option>
                  <option value="1,40,000 INR">₹1,40,000/-</option>
                  <option value="2,00,000 INR">₹2,00,000/-</option>
                  <option value="3,00,000 INR">₹3,00,000/-</option>
                </select>
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  placeholder="Message"
                  className="form-control fr mt-2"
                  id="txt_contact_message"
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

export default BecomeMemberAtFgiit;
