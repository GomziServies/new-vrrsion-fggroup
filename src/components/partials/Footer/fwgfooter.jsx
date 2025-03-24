import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ChatBotFWGComponent from "../../chat-bot-fwg";

function FwgFooter() {
  const [selectedAddress, setSelectedAddress] = useState("vesu");
  const [visibleCount, setVisibleCount] = useState(2);

  const moreKeyword = () => {
    setVisibleCount((prevCount) => prevCount + 40);
  };

  const links = [
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for upper chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to reduce the thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        cheap workout places near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fit gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness near by me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness closest to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise workouts for belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercise for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise workouts lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fitness for belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        stomach fat exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss exercise workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout and weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise workout for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        benefits of intermittent fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss system
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        top rated weight loss programs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        good weight loss program
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        personalized weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting support
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        weight loss foods
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best food for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet meal plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        0 calorie foods
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting and weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting time
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        loss weight food
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet plan to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss tips
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        daily calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss meal
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        good weight loss apps
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        top weight loss apps
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        7 day meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        one meal a day
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        1200 meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        7 day weight loss diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        my fitness plan app
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        top rated weight loss apps
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        1200 diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        foods to eat to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy diet meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting how to
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy eating diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss service
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diets for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best meal tracking app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best diet foods
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        good diet foods
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best ways to lose weight quickly
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best way to lose weight fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting rules
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best intermittent fasting for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        ways to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best foods to eat to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition solutions
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        foods that help you lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting results
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight tracker
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best intermittent fasting to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy meal plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie intake to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">food diary</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet to lose weight quickly
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        healthy foods to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        easiest way to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        meal tracker app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        foods to help lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        food journal
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fat loss diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories per day
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        3 day diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        types of diets
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy eating plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        good diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        healthy food plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet eating plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        healthy foods for diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        healthy diet meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        losing weight for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        healthy eating meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        free weight loss plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition coaching
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best meal plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        free diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss diet plan for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        30 day weight loss challenge
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        quick weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss meal plan for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting for beginners
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting hours
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best diet program for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        crash diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best food plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fasting diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        free nutrition plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best nutrition plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight plan for free
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting types
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        hours for intermittent fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss expert
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free eating plan to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        free food plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        food fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        help you lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best healthy diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight maintenance calories
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        weight loss food plan for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss coach
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        best free weight loss apps
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet meal
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy eating plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        good diet plans
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best intermittent fasting schedule
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting schedule
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss diets for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        recommended calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 20 lbs in 2 months
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        best apps for intermittent fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        model diet
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        good free weight loss apps
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best app for weight loss free
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        meal calorie counter
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        good intermittent fasting schedule
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss diet plan for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calories a day
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight without exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">food log</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss meal plans for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthiest diet
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        food calculator
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        fasting diets for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        average calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        diet menu plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        diet programs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best calorie counting app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss plan for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in 30 days
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        online weight loss program
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in a month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss programs that work
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout and meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        healthy foods to eat to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss plans that work
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories needed to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting program
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fitness meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie intake for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        30 day weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting hours
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in 3 months
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        meal calorie calculator
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best veggies for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best meal for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        meal plan and workout plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        3 month weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        one meal a day fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        recommended calories per day
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        fitness food plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting food plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        online weight loss plans
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best foods for cutting
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        best apps for fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        workout food plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories required to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        recommended daily calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss regimen for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free weight loss programs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        personal weight loss coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        i need to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free intermittent fasting plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss coach online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best weight loss plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        simple weight loss reviews
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories per day to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        diet food for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best fasting for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting schedule for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        help me lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        2500 calorie meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/protein-makhana-bhel">
        foods that make you lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in 2 months
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        different types of diets
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting windows
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        3 day diet menu
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        best nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout and diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting chart
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        count your calories
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 10 lbs in 2 months
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        basic diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        personal nutritionist and trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories for women to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        6 month weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        ways to lose weight without working out
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie intake for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in 7 days
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        to lose weight how many calories
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss advice
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 100 lbs in 6 months
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        nutritionist food plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout and meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise and meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best weight loss programs for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free fasting plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        30 day meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet plans for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        diet chart for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss plan for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fasting diet for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        30 day diet challenge
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best diet for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss programs for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss menu
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories to eat to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        most effective diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fastest way to lose weight in a month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting programs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        dietitian for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy diet to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss for beginners
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        natural ways to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting weight diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition website
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting diet for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        quickest way to lose weight in a month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        personalized meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        foods to eat on a diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        healthy weight loss per month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet and exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        best diet food for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        customized meal plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting methods
      </Link>
    </div>,

    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym workouts for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to workout chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises in gym for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest exercises in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises in cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best health clubs near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gym in near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gyms in near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best health club near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        great gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gymnasium near me with fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best gym close to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym fee near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms near me fees
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        women gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for chest at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise in gym for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest gym exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym chest exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for chest at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for chest at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym chest workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to lose weight lose fast
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest exercise at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms for women near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms near me for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms near me ladies
      </Link>
    </div>,
  ];

  const links1 = [
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness gyms
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness & gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for fat stomach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for fat belly
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss and workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for fat belly
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fat stomach workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight reduction exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat and exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight reducing exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat stomach exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym nearest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        home exercise for abs
      </Link>
    </div>,
    <div>
      <Link to="https://www.gomzilifesciences.in/">near me protein shop</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        ab workout exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercise for abs at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises for abs gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs workout in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercise in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercises for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        ab at home exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercise at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        at home exercises abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        home workout exercises for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        at home abs workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout at home abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        gym exercise for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        home workouts for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs workout for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercise for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout at home for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercises home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        home ab workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercise for abs at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        gym abs exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs home exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises for abs in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym for workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workouts in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        at home workout for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout abs at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise at home chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workouts at home for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym workouts for cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercise for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs best workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home workout for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for chest home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        at home workouts abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workout exercises for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercise at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercises for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home chest exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercise abs workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home exercise for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise at home for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs home workout exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest training at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout at home for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workouts for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        at home workout abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workouts for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home workouts for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout at home chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest exercise for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs workout exercise at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs workout exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workouts for the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout from home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises at home for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts at home for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workout at the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        tummy fat workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        ab workout home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workouts gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio gym exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout and gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest exercises for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercises at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym workout for cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise of chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home exercises for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts for chest at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workout at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise workout gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout for at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        home exercises for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym workouts cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        how to fitness at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym workout gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercise gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym cardio exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        gym for trainers
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness center near by me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness places near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise facilities near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness facilities near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness gyms close to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near gym at me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near to me gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness gym close to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness center close to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        work out facility near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise facility near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        unisex gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise workouts at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearest fitness center to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout from home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness health clubs near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near me fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness center gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        home exercise at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness at home exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout exercise at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        home exercise workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness place near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise workout home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercises workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise at home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercises home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workouts in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout on home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        home exercise workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout at home exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout at home exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fitness for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        exercise for home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        homework workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat reduction exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout for at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best fitness gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best workout gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        closest gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearby gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near by gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        top rated gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how reduce thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for upper chest
      </Link>
    </div>,

    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout back exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercises workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to reduce the belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back and exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for tummy fat reduction
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat loss exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        reduction of belly fat exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        to reduce tummy fat exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        tummy fat reduction exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to reduce fat belly
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises that reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for reduce tummy fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        tummy fat reducing exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat losing exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to reduce the belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercise for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat losing exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        reducing tummy fat exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        sixpack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises of back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for reducing belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for belly fat reduction
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout s
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness india
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises for weight loss
      </Link>
    </div>,

    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fat burning diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        list of diets
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight management programs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        foods that promote weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose it app reviews
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        healthy calorie intake
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        lose weight without counting calories
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        real weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        easy 1200 calorie meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie diet meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best thing to eat to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        best cutting diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms in near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gyms gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout center near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym workouts near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym workout near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        workout gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym and fitness centers near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness clubs near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for shoulder in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercises shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder gym exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercise shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercises for shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder gym workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workouts for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders exercises gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for shoulders in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercise for shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workout at the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for shoulder in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for shoulders in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises for the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders exercises in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises in gym for shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workouts for the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise of shoulder in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workouts in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders workout at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise for gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym workout shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercises back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise at the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back workouts in the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym back exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercises for shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercises at the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise in the gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        dumbbell dumbbell
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for back in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders exercises at gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym training back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for back in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness cardio workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercise of chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym workout for chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercise workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercise workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout chest exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym exercise chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workout moves
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises cardio
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        work out chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest gym exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        gym chest exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workouts exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest workout exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio workout exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest chest workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercises chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        cardio exercises workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        chest exercises and workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise cardio workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fitness chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for the chest
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to chest
      </Link>
    </div>,

    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout of abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        fitness abs workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercise workouts
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        abs exercises workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        fitness abs exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercise abs workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout abs exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout exercise for abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        women fitness gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        ab workout exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym woman near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        women fitness center near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        women's fitness gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises to abs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym ladies near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near by gyms
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat reduce workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for belly fat reduction
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        belly fat reduction workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        reduce belly fat workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for reducing belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for belly fat reduce
      </Link>
    </div>,
  ];

  const links2 = [
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        gym near me with fees near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness and gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness near to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        zumba near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        zumba fitness near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        cheapest gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        zumba classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        zoomba classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        a fitness gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss exercise best
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to reduce fat from thighs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to reduce fat from thigh
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to reduce fat on thighs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best exercise for fitness and weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to reduce thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for reducing thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for thigh fat reduce
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for back at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arms workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to reduce the thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise to reduce fat on thighs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for reducing thigh fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercises for the back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for thigh fat reduction
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best exercise for loss weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        thigh exercises to lose fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home exercises for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home exercise for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back workout exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home workout for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for thigh fat reduction
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for back at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for back at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercises shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back home exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workout shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        dumbbell workout exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workouts for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home shoulder workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workout for shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home back workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercises in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercise for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight reduction exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workout for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss best exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        thigh fat loss exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercise for shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for your back at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercises home workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best fitness for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises from home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        zumba fitness classes
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best workout for lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for shoulder at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout for shoulder at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulders workout at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        thighs fat loss exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home workouts for back
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home back exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder workout in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercise home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back workout in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        thigh fat loss exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back workouts for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back workout for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercises for shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workout for shoulders
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back at home exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises for home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        back exercise in home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arm workout exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        shoulder exercises home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home exercises for shoulder
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        6 pack body
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout exercise for arms
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness and strength training
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near gym centres
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near gym centre
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearby gyms near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearby gym centre
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearest gym near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearest fitness center near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearest gym centre
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nearby gym to me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal physical trainer near me
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
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        fitness freaks
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness coach near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer near.me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        private trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personality trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical trainers near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        physical trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal workout trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss exercises for women at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss workout for women at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        professional trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        near me personal trainer
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        fitness instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss exercise for female at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        personal fitness instructor near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for weight loss women at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        women weight loss exercises at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss exercise at home for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for weight loss for women at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises for weight loss at home for female
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workouts images
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercises to reduce fat in thighs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for weight loss for female at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss workouts for women at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        at home weight loss workouts for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for women to lose weight at home
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workout for weight loss female
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to reduce belly fat in exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to exercise to reduce belly fat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lower chest workout exercises
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arms workout in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout for 6 pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        workout for six pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arms gym workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        6 pack exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises six pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arm gym workout
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arms workout gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arm exercise gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises 6 pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to reduce the belly fat with exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises for six pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        arms exercises in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        exercise for arms in gym
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        exercises for 6 pack
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        home workouts to lose weight for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to reduce belly fat with exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/personal-trainer-courses">
        trainer near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        how to reduce belly fat exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lean body for man
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        near me gym center
      </Link>
    </div>,

    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        calorie counter calculator
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        most successful diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss company
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        cutting calories
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting meaning
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        one meal a day diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        diet foods for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/prep-coaching-for-bodybuilding">
        cutting meals
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        no calorie foods
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories per day women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        2 month weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best fitness app for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        daily calories for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight safely
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        i have to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best exercise app to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting window
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        2500 calories diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss coach near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition coach near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet and exercise plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        weight loss food plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        free calorie tracker app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        best online weight loss program
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        free calorie tracker
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        simple meal plan to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        easy diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best way to lose weight for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout and diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss nutritionist near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best fasting schedule
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        easy weight loss meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        easy weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        good diets
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        simple diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting for beginners
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        types of intermittent fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        different diets
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet meals
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet tracker app
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        indian diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        weight loss coaching near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie chart
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet for gym beginners
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        daily calorie intake for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting diet schedule
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        meal and exercise plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fitness diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        different types of fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthiest diet in the world
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 20 lbs in 3 months
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        daily calories for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet and fitness plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fastest way to lose 20 lbs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        easiest meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        workout and eating plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nutritionists near me for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 10 lbs in one month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        simple eating plan to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        nutrition plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">diet food plan</Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diets that work
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        personalized weight loss plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best intermittent fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting schedule for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        i need help losing weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting schedule for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        diet calculator
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best app to help lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/recipe/healthy-khichdi">
        good foods for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet plan to reduce weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weekly diet plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calories a day to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weekly meal plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss diet for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss meals for men
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        eating for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie a day meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie goal for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy ways to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in 3 days
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthiest weight loss diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free fasting
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        custom weight loss plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting program for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose weight in one month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet ideas for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        custom nutrition plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        to lose weight how many calories should i eat
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fastest way to lose 10 lbs
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        best weight loss programs near me
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        hcg diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        calorie intake calculator to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        best apps to help you lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free meal tracker
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free diet tracker
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        diet plan for 1200 calories a day
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        lose 5 lbs in a month
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        meal plan personalized
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        online nutrition coach
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet plans for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        weight loss programs for women
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        free meal plans for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        free weight loss apps no subscription
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        nutritionist for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        simple diet plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        easy diet
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        fasting plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        calorie counter online
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        personal nutritionist
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        intermittent fasting for men
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        free food calorie calculator
      </Link>
    </div>,
    <div>
      <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
        free calorie calculator
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        balanced diet for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        i want to lose weight
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet and exercise plan for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses">
        nutrition meal plan
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        ways to lose weight without exercise
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
        1200 calorie diet menu
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        healthy eating for weight loss
      </Link>
    </div>,
    <div>
      <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
        diet for men
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
              <div className="col-md-3 f1 f2">
                <h2 className="h4-fs">Fitness With Gomzi</h2>
                <p>
                  Achieve your fitness goals with expert diets, training, and weight management tips for effective weight loss or weight gain!
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
                  <Link to="/fgiit/fitness-and-nutrition-courses">FGIIT</Link>
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
                  <h2 className="h4-fs">Follow Us</h2>
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
                  <Link>+91-8866842520</Link>
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
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    intermittent fasting
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    fasting intermittent fasting
                  </Link>
                </div>
                <div>
                  <Link to="/fgiit/online-fitness-courses">weight loss</Link>
                </div>
                <div>
                  <Link to="/fgiit/fitness-and-nutrition-courses">calorie counter</Link>
                </div>
                <div>
                  <Link to="/blogs/anabolic-steroids">weight loss program</Link>
                </div>
                <div>
                  <Link to="/fgiit/online-fitness-courses">
                    weight loss programmes
                  </Link>
                </div>
                <div>
                  <Link to="/blogs/nutrition-course-india">
                    weight reduction programs
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    weight loss journey
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    intermittent fasting schedule
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    intermittent fasting times
                  </Link>
                </div>
                <div>
                  <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
                    calorie calculator for weight loss
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    ways to lose weight quickly
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    intermittent fasting for weight loss
                  </Link>
                </div>
                <div>
                  <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
                    calorie intake calculator
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    intermittent fasting and weight loss
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/recipe/healthy-khichdi">
                    diet food
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1">
                    best calorie tracking app
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
                    weight loss menu plans
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    fasting meals
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs">
                    application calorie
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    best weight loss program
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    top weight loss programs
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    fasting diet
                  </Link>
                </div>
                <div>
                  <Link to="https://fggroup.in/fitnesswithgomzi/rapid-weight-loss">
                    fast weight loss
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
        <div className="container-fluid text-center py-1 ft m-0">
          <h2 className=" h4-fs" style={{ border: "none" }}>
            Fitness With Gomzi
          </h2>
        </div>
      </footer>

      <ChatBotFWGComponent />
    </>
  );
}

export default FwgFooter;
