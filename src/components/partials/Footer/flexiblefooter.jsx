import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ChatBotFgiitComponent from "../../chat-bot-fgiit";

function FlexibleFooter() {
  const [selectedAddress, setSelectedAddress] = useState("vesu");
  const [visibleCount, setVisibleCount] = useState(2);

  const moreKeyword = () => {
    setVisibleCount((prevCount) => prevCount + 40);
  };

  const links = [
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        g y m full form
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        full form gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">certified fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">certification fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        certification for fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">certificate in fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">fitness india</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrients course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course on nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course for nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses for nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course for nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses for nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses on nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course of nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        g y m ka full form
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses of nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course of nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses for dietitian
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course for dietician
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses of dietician
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course of dietician
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        dietitian course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal workout trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness instructors near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical training near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness personal trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        private fitness trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        near me personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        professional trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal physical trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness coach near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist dietician course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with a personal trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal physical trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gymnastic trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym near me with personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        indian institute of nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        professional fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness centres in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym indian
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gymnasium
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        what is the full form of gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness full form
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        course for fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym fitness instructor courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        training institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        course for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        classes for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        course fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        courses for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym fitness trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        courses for fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        courses for gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        course personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer training course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness instructor course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer and fitness instructor courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian best gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india's best gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gym in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        institute training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training and
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gym of india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india best gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india's no 1 it institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india no 1 it institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietician online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietitian online courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course for dietician
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietician courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietitian courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online dietician course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietetics course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietitian online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietitian course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses for dietician
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietician course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietetics courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online dietician courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course for dietitian
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal home trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietetics online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal home fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietetics online courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        dietitian online classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate for fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer and certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification of fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer fitness certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer cert
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate for personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified fitness trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        personal fitness instructor certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for physical trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal instructor certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        private trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical training academy near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        professional fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gyms with personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym private trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training gyms
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer cert
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym professional trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        fitness online class
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for a personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        private trainer gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        the fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        become certified personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer and gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym for personal trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainers gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer personal
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer with gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        physical training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym full name
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        fitness online classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        my fitness coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer income
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical fitness trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer earnings
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness personal trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        salary of gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses for nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition class online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutritionist course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        fitness trainer online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition class
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses of nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        course nutrition online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutritionist online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online class for nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        courses online nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online classes in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course for nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course on nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses for nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutritionist online courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        courses on nutrition online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutritionist online classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course nutrition
      </Link>
    </div>,
  ];

  const links1 = [
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online fitness instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food nutrition courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food and nutrition course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online personal fitness coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition science course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course for nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        offline training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal online trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal fitness trainer online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal online fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food nutritionist course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food and nutrition online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition online class
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition science online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online classes on nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food and nutrition courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        food nutrition course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online classes nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal fitness coach online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online learning nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        course online india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        gym trainer online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certified courses in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">class gym</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certification courses in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        gym trainers online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist certification course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online gym instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certified nutritionist course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online gym personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition certificate courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition certificate course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        gym personal trainer online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with personal trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certified nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        instructor gym personal
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet and nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses in diet and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certificate course in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online trainer gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet & nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet and nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certificate nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certified nutritionist courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">largest gym in india</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">biggest gym in india</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses on diet and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diet nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course in diet and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online gym trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        training coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">professional gym</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist certificate course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym one fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        gym online trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india biggest gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">fitness course</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">course fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">fitness courses</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports and nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course in sports nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">course for fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">courses fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness for training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certification fitness health
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness academy near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness and health certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym with fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness and training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sport and nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">courses on fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports and nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer course fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        dietician course fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports nutritionist course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        what is full form of gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        which institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        health and fitness certifications
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        sports training near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        training and fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        sports nutrition classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        sports trainers near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        best gym training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym academy near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india no1 gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness professional
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best academy near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness and personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness professionals
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        no 1 gym in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india's no 1 institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer for ladies
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        how to become a nutritionist in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india no 1 institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian no 1 institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        how to become nutritionist in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        sports fitness of india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer woman
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        training the trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer for fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        pt course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">gym course</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">gym courses</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        p t course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online fitness certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        fitness certification online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition course india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses on nutrition in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course on nutrition in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course online india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        pt courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutritionist courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition course in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness acdemy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        nutrition courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutrition courses india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition courses online in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online course on nutrition in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutrition courses online india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online nutritionist course in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses in nutrition in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist course india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become a gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses on nutrition in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        nutritionist course online india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        workout programs near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition online course india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist course in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer certified
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online workout coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online workout coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become a personal fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist course fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        coaching online fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to be become a personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how do you become a personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        fitness online coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india no 1 gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">fitness coach online</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">best course india</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        train gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainers academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified trainer certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate for trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate of trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        how to become fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        workout coach online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online coach fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        training academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online coaching fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        fitness coaching online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        coach fitness online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        online fitness coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online certificate in fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification courses for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified fitness trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer income
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical training salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer earnings
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        salary for a personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        salary of fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer certification course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer certification courses
      </Link>
    </div>,
  ];

  const links2 = [
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        salary for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        salary for fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer pay rate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer certification course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer certification course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer certified course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        private trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        certificate fitness online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal instructor salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition fitness course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become a physical fitness trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer certificate course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer certificate courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal trainer classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        classes for personal trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness nutritionist course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer certification courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        how to become gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness and nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness & nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified fitness trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness instructor salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition and fitness courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses on fitness and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition and fitness course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses in fitness and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer rates
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses in nutrition and fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition fitness courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        fitness nutrition course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer salary
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        course in fitness and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses for nutrition and fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified training certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course after 12th
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist course near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        online nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer in gym cost
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist courses after 12th
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist classes near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer cost
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym and fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        cost of gym personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        female gym trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition diploma courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        top rated gym in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal gym trainer cost
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india's number one it institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition course near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness and gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india's biggest gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        top gyms in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian number one it institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        top gym in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india top gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        courses nutrition diploma
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">gym certificate</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">gym training course</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainers course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certificate gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification for gym instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        courses for personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        how to get a fitness certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        best nutritionist courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        diploma personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        diploma in personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        good personal trainers near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        best fitness trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer certification course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical training centre near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym training courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym instructor certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        classes for personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        pt training course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer certification courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        best nutrition course in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        pt training courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        good personal trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        courses in personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal training diploma
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness training course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        best nutrition courses in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        course personal training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses in nutrition and dietetics
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        dietetics and nutrition courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best training institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness model india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness models in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness instructor
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        no1 body builder in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        indian gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym full form bodybuilding
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        female fitness trainers near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition and dietetics course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        advanced fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        online courses on nutrition and dietetics
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer bangalore
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        name of trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        physical training academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certification courses for trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        number one academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian fitness model
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india top rated gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness model in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certification in nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        certified nutritionist certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer training courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness trainer job
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        online course in nutrition and dietetics
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        india fitness model
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online classes for personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal fitness trainer course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness coach certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal trainer course online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online personal trainer classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness trainer courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online personal trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal trainer courses online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness trainer classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness coach license
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness coaching certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness training class
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer course near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym personal trainer cost per month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">fitness training course</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        fitness training courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        online gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online gym classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        female gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist & fitness consultant
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        the best academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online workout classes india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        review for gym trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition and fitness consultant
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        female personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        top institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym best
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutritionist certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainers india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        gym class online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition courses details
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        nutrition certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">online fitness</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness fitness
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online gym class
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian fitness club
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer female
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal trainer online course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online fitness course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online fitness courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online diet and nutrition courses
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer gym price
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        mission india fit
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainers in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/food-and-nutrition-course">
        online courses in diet and nutrition
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer gym fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        one on one gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-fitness-courses">
        online diet course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified gym trainer course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        fitness certification in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        diploma in fitness training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym trainer experience certificate
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer course fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        personal trainers online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness training center
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-courses">
        fitness certification courses india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        certified personal training course
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        aerobics trainer certification
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym training center
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/online-personal-training-course">
        online fitness trainers in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        certification course in strength & conditioning coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainers training institute
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise centers for sick people in india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainers training academy
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness training center
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/course-for-dietician">
        advanced diploma in fitness training
      </Link>
    </div>,
  ];

  return (
    <>
      <footer>
        <div
          className="container-fluid"
          style={{ backgroundColor: "black", padding: "50px 0px 25px 0px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 f1">
                <div>
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/fg-group1.webp"
                    }
                    alt="fg group"
                  />
                </div>
                <p>
                  Enhance your fitness knowledge with expert courses, learning resources, and study materials for a healthier lifestyle!
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">FG Brands</h2>
                <p className="mb-4">
                  <Link to="/fitnesswithgomzi/rapid-weight-loss">
                    Fitness With Gomzi
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="./fgiit/fitness-and-nutrition-courses">FGIIT</Link>
                </p>
                <p className="mb-4">
                  <Link to="/fgdigital/online-digital-marketing-training">
                    FGDIGITAL
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/recipe/free-weight-loss-recipe-videos">
                    FGMEALS
                  </Link>
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">Links</h2>
                <p className="mb-4">
                  <Link to="/contact">CONTACT US</Link>
                </p>
                <p className="mb-4">
                  <Link to="/blogs/benefits-of-protein">BLOG</Link>
                </p>
                <p className="mb-4">
                  <Link to="/fitness-brand-franchise">FRANCHISE</Link>
                </p>
                <p className="mb-4">
                  <Link to="/career">CAREERS</Link>
                </p>
              </div>
              <div className="col-md-3 f3 pl-2">
                <div>
                  <h2 className="mb-2 h4-fs">Follow Us</h2>
                  <Link
                    to="https://www.facebook.com/gajani2/"
                    aria-label="Fg Group"
                    className="fb"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/fitnesswithgomzi/"
                    className="insta"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ"
                    className="you"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/dt-gautam-jani-561a50161/"
                    className="in"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>

                <div>
                  <h2 className="mb-2 text-white mt-3 h4-fs">Download App</h2>
                  <Link
                    className="mx-2 my-1"
                    to="https://play.google.com/store/apps/details?id=com.fwg_app"
                  >
                    <img
                      className="thestorelogos"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/googleplay.webp"
                      }
                      style={{ width: "120px" }}
                      alt="Download on the App Store"
                      border="0"
                    />
                  </Link>
                  <Link to="https://apps.apple.com/in/app/fg/id1661113769"
                    className="mx-2 my-1">
                    <img
                      className="thestorelogos"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/appstore.webp"
                      }
                      style={{ width: "120px" }}
                      alt="Download on the App Store"
                      border="0"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 f2">
                <h2 className="mb-2 h4-fs">Name</h2>
                <p>
                  <Link>GOMZI CONSULTING SERVICES PRIVATE LIMITED</Link>
                </p>
              </div>
              <div className="col-md-6 f2">
                <h2 className="mb-2 h4-fs">phone no.</h2>
                <p>
                  <Link>+91-9081091068</Link>
                </p>
              </div>
              <div className="col-md-3 mt-4 f2">
                <h2 className="mb-2 h4-fs">Branches</h2>
                <p
                  className={
                    selectedAddress === "vesu"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("vesu")}
                >
                  Vesu
                </p>
                <p
                  className={
                    selectedAddress === "adajan"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("adajan")}
                >
                  Adajan
                </p>
                <p
                  className={
                    selectedAddress === "bharuch"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("bharuch")}
                >
                  Bharuch
                </p>
              </div>
              <div className="col-md-6 mt-4 f2">
                <h2 className="mb-2 h4-fs">Address</h2>
                {selectedAddress === "adajan" && (
                  <p>
                    <Link>
                      228-TIME SQUARE, GauravPath Road, TP 10 Main Rd, opp.
                      Shree Bharti Residency, Surat, Gujarat 394510
                    </Link>
                  </p>
                )}
                {selectedAddress === "bharuch" && (
                  <p>
                    <Link>
                      3rd Floor, Sun Commercial Space, L&T Cir, opp. Ratri
                      Bazar, Amit Nagar, Jay Santhoshi Nagar, Karelibagh,
                      Vadodara, Gujarat 390018
                    </Link>
                  </p>
                )}
                {selectedAddress === "vesu" && (
                  <p>
                    <Link>
                      A- 301, Ambrosia Business Hub, VIP Road, beside SMC
                      Garden, Vesu, Surat, Gujarat 395007
                    </Link>
                  </p>
                )}
              </div>
              <div className="col-md-3 mt-4 f2">
                <h2 className="mb-3 h4-fs">Location</h2>
                {selectedAddress === "adajan" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7969846182373!2d72.7696569!3d21.200222300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc214d910a7%3A0x94149c2d93e524c4!2sFitness%20With%20Gomzi%20Adajan%20-%20Best%20Fitness%20Centre%20in%20Adajan%20%7C%20Best%20Weight%20Loss%20Centre%20in%20Adajan!5e0!3m2!1sen!2sin!4v1731922108719!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {selectedAddress === "bharuch" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.756586534009!2d73.19562929456228!3d22.32504372114373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfbefea1cbb9%3A0xeda2b6b3cee28b02!2sFGIIT%20%7C%20Dietician%20Courses%20%26%20Fitness%20Courses%20in%20Baroda!5e0!3m2!1sen!2sin!4v1731922400231!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {selectedAddress === "vesu" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3149929422043!2d72.76821987503466!3d21.139859180537464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053ff8c9e1e01%3A0x84d16c5b68835c00!2sFitness%20With%20Gomzi%20-%20Best%20Dietitian%20In%20Surat%2C%20Best%20Nutritionist%20In%20Surat%20-%20500%20INR%20consulting%20charges!5e0!3m2!1sen!2sin!4v1711949397536!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="row ft">
              <div className="col-sm-12 p-0 mb-3">
                <h2 className="h4-fs">RELATED SEARCHES</h2>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="">weight loss recipes for dinner</Link>
                </div>
                <div>
                  <Link to="">weight loss dinner</Link>
                </div>
                <div>
                  <Link to="/blogs/keto-diet">dietitian in india</Link>
                </div>
                <div>
                  <Link to="/blogs/keto-diet">best dietitian in surat</Link>
                </div>
                <div>
                  <Link to="/blogs/benefits-of-protein">
                    best nutritionist in india
                  </Link>
                </div>
                <div>
                  <Link to="/contact">online nutrition consultant</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="">fat loss diet</Link>
                </div>
                <div>
                  <Link to="">fitness center near me</Link>
                </div>
                <div>
                  <Link to="/">vegetarian diet plan for weight loss</Link>
                </div>
                <div>
                  <Link to="/contact">best online dietitian</Link>
                </div>
                <div>
                  <Link to="/contact">Online Dietician For Weight Loss</Link>
                </div>
                <div>
                  <Link to="/">vegetarian diet chart for weight loss</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="">weight Gain dry fruits</Link>
                </div>
                <div>
                  <Link to="">weight loss dry fruits</Link>
                </div>
                <div>
                  <Link to="">diet to lose weight</Link>
                </div>
                <div>
                  <Link to="/contact">Online Dietician Consultation</Link>
                </div>
                <div>
                  <Link to="/blogs/top10-biggest-nutrition-myths">
                    Best Nutritionist For Weight Loss
                  </Link>
                </div>
                <div>
                  <Link to="/blogs/fatloss-vs-weightloss">
                    Dietician Online
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                {links.slice(0, visibleCount)}{" "}
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                {links1.slice(0, visibleCount)}{" "}
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                {links2.slice(0, visibleCount)}{" "}
                {visibleCount < links2.length && (
                  <p
                    className="text-white w-100 read-more-but"
                    onClick={moreKeyword}
                    style={{ cursor: "pointer" }}
                  >
                    Read More
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatBotFgiitComponent />
    </>
  );
}

export default FlexibleFooter;
