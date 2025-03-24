import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

//Profile
import UserProfile from "./pages/account/profile";
import UserOrder from "./pages/account/order";

//User Account
import Home from "./pages/home";
import OnlineCheckOut from "./pages/fgiit/online-check-out";
import HomePageFwg from "./pages/fitnesswithgomzi/fwg-homepage";
import OnlineClinicalDietProgram from "./pages/fitnesswithgomzi/online-clinical-diet-program";
import OnlineCorporateFitnessProgram from "./pages/fitnesswithgomzi/online-corporate-fitness-program";
import OnlineProgramCheckOut from "./pages/fitnesswithgomzi/check-out";
import ThankYouPage from "./pages/fgiit/thank-you-purchase-book";
import ThankYouPageInternational from "./pages/fgiit/thank-you-purchase-international";
import ThankYouPageOnline from "./pages/fgiit/thank-you-purchase-online";
import ThankYouPageOffline from "./pages/fgiit/thank-you-purchase-offline";
import ThankYouPageFWG from "./pages/fitnesswithgomzi/thank-you-purchase-fwg";
import ContactINPTA from "./pages/inpta/contact-inpta";
import LocalPartner from "./pages/inpta/local-partner";
import ChatBotFGIIT from "./pages/fgiit/chatbot";
import ChatBotFWG from "./pages/fitnesswithgomzi/fwg-chatbot";
import ContactPage from "./pages/contact";
import AboutUsPage from "./pages/about-us";
import FgiitTermsCondition from "./pages/fgiit-terms-condition";

//INPT Page
const INPTPage = lazy(() =>
  import("./pages/indian-nutritionist-and-personal-trainer-association")
);

// Fgdigital
const OnlineDigitalMarketingTraining = lazy(() =>
  import("./pages/fgdigital/online-digital-marketing-training")
);
const GymManagementSoftware = lazy(() =>
  import("./pages/fgdigital/gym-management-software")
);

// Franchise
const FitnessBrandFranchise = lazy(() =>
  import("./pages/fitness-brand-franchise")
);

// Alumini Fgiit
const AluminiFgiit = lazy(() => import("./pages/alumini-fgiit"));

// Fgiit
const CheckOutCourse = lazy(() => import("./pages/fgiit/check-out"));
const ThankYouPageBook = lazy(() =>
  import("./pages/fgiit/thank-you-purchase-book")
);
const ThankYouPageFlexible = lazy(() =>
  import("./pages/fgiit/thank-you-purchase-flexible")
);
const FitnessCourses = lazy(() => import("./pages/fgiit/fitness-courses"));
const FitnessAndNutritionCourses = lazy(() =>
  import("./pages/fgiit/fitness-and-nutrition-courses")
);
const OnlineFitnessCourses = lazy(() => import("./pages/fgiit/online-fitness-courses"));
const FlexibleFitnessCourses = lazy(() =>
  import("./pages/fgiit/flexible-fitness-courses")
);
const PersonalTrainerCourses = lazy(() =>
  import("./pages/fgiit/personal-trainer-courses")
);
const CourseOfDietician = lazy(() =>
  import("./pages/fgiit/course-of-dietician")
);
const OnlineFitnessAndNutritionCourses = lazy(() =>
  import("./pages/fgiit/online-fitness-and-nutrition-courses")
);
const CourseForDietician = lazy(() =>
  import("./pages/fgiit/course-for-dietician")
);
const AnabolicSteroidsCourse = lazy(() =>
  import("./pages/fgiit/anabolic-steroids-course")
);
const FitnessInstructorCourse = lazy(() =>
  import("./pages/fgiit/offline-trx-and-workshop")
);
const OfflineGroupInstructor = lazy(() =>
  import("./pages/fgiit/fitness-instructor-course")
);
const OfflineTabataWorkshop = lazy(() =>
  import("./pages/fgiit/offline-tabata-workshop")
);
const OfflineFunctionalTrainingWorkshop = lazy(() =>
  import("./pages/fgiit/offline-functional-training-workshop")
);
const OfflineCheckOut = lazy(() => import("./pages/fgiit/offline-check-out"));
const OfflineMixMartialArtsWorkshop = lazy(() =>
  import("./pages/fgiit/offline-mix-martial-arts-workshop")
);
const PowerliftingCourse = lazy(() =>
  import("./pages/fgiit/powerlifting-course")
);
const InjuryRehabilitationProgram = lazy(() =>
  import("./pages/fgiit/injury-rehabilitation-program")
);
const ClinicalDietitian = lazy(() =>
  import("./pages/fgiit/clinical-dietitian")
);
const OnlinePersonalTrainingCourse = lazy(() => import("./pages/fgiit/online-personal-training-course"));
const FoodAndNutritionCourse = lazy(() =>
  import("./pages/fgiit/food-and-nutrition-course")
);
const AnabolicSteroidTestosterone = lazy(() =>
  import("./pages/fgiit/anabolic-steroid-testosterone")
);
const OnlineFitnessInstructorCourse = lazy(() =>
  import("./pages/fgiit/online-fitness-instructor-course")
);
const OnlineTrxBandWorkshop = lazy(() =>
  import("./pages/fgiit/online-trx-band-workshop")
);
const OnlineTabataWorkshop = lazy(() =>
  import("./pages/fgiit/online-tabata-workshop")
);
const OnlineFunctionalTrainingWorkshop = lazy(() =>
  import("./pages/fgiit/online-functional-training-workshop")
);
const OnlineMartialArtsWorkshop = lazy(() =>
  import("./pages/fgiit/online-martial-arts-workshop")
);
const OnlinePowerliftingCourse = lazy(() =>
  import("./pages/fgiit/online-powerlifting-course")
);
const CourseOfPhysiotherapy = lazy(() =>
  import("./pages/fgiit/course-of-physiotherapy")
);
const ClinicalDietsForHealthAndWellness = lazy(() =>
  import("./pages/fgiit/clinical-diets-for-health-and-wellness")
);
const InternationalCourse = lazy(() =>
  import("./pages/fgiit/international-course")
);
const NutritionAndFitnessCourses = lazy(() =>
  import("./pages/fgiit/nutrition-and-fitness-courses")
);
const PersonalTrainingCourse = lazy(() =>
  import("./pages/fgiit/personal-training-course")
);
const DieticianCourseOnline = lazy(() =>
  import("./pages/fgiit/dietician-course-online")
);
const AnabolicAndrogenicSteroids = lazy(() =>
  import("./pages/fgiit/anabolic-androgenic-steroids")
);
const PhysiotherapyCourse = lazy(() =>
  import("./pages/fgiit/physiotherapy-course")
);
const OnlineGroupInstructorMasterclass = lazy(() =>
  import("./pages/fgiit/online-group-instructor-masterclass")
);
const ClinicalNutritionCourse = lazy(() =>
  import("./pages/fgiit/clinical-nutrition-course")
);
const GymManagementCourse = lazy(() =>
  import("./pages/fgiit/gym-management-course")
);
const EnglishDiplomaInPersonalTrainingCourse = lazy(() =>
  import("./pages/fgiit/english-diploma-in-personal-training-course")
);
const EnglishDiplomaInNutritionCourse = lazy(() =>
  import("./pages/fgiit/english-diploma-in-nutrition-course")
);
const EnglishAnabolicAndrogenicSteroids = lazy(() =>
  import("./pages/fgiit/english-anabolic-androgenic-steroids")
);
const EnglishTabataWorkshop = lazy(() =>
  import("./pages/fgiit/english-tabata-workshop")
);
const EnglishCoursePhysiotherapy = lazy(() =>
  import("./pages/fgiit/english-course-physiotherapy")
);
const EnglishClinicalDietitian = lazy(() =>
  import("./pages/fgiit/english-clinical-dietitian")
);
const EnglishTrxAndWorkshop = lazy(() =>
  import("./pages/fgiit/english-trx-and-workshop")
);
const EnglishFunctionalTrainingWorkshop = lazy(() =>
  import("./pages/fgiit/english-functional-training-workshop")
);
const EnglishMixMartialArtsWorkshop = lazy(() =>
  import("./pages/fgiit/english-mix-martial-arts-workshop")
);
const EnglishPowerliftingCoachWorkshop = lazy(() =>
  import("./pages/fgiit/english-powerlifting-coach-workshop")
);
const EnglishRecordedDiplomaInPersonalTraining = lazy(() =>
  import("./pages/fgiit/english-recorded-diploma-in-personal-training")
);
const EnglishRecordedDiplomaInNutritionCourse = lazy(() =>
  import("./pages/fgiit/english-recorded-diploma-in-nutrition-course")
);
const EnglishRecordedAnabolicAndrogenicSteroids = lazy(() =>
  import("./pages/fgiit/english-recorded-anabolic-androgenic-steroids")
);
const EnglishRecordedTabataWorkshop = lazy(() =>
  import("./pages/fgiit/english-recorded-tabata-workshop")
);
const EnglishRecordedCoursePhysiotherapy = lazy(() =>
  import("./pages/fgiit/english-recorded-course-physiotherapy")
);
const EnglishRecordedClinicalDietitian = lazy(() =>
  import("./pages/fgiit/english-recorded-clinical-dietitian")
);
const FgiitAllLinks = lazy(() => import("./pages/fgiit/fgiit-all-links"));
const LeadForm = lazy(() => import("./pages/fgiit/lead-form"));
const FitnessTrainingAndPlacement = lazy(() =>
  import("./pages/fgiit/fitness-training-and-placement")
);
// const BodybuildingCompetition = lazy(() =>
//   import("./pages/fgiit/bodybuilding_competition")
// );
const BecomeMemberAtFgiit = lazy(() =>
  import("./pages/fgiit/become-member-at-fgiit")
);
const StudentCorner = lazy(() => import("./pages/student-corner"));
const HealthBooks = lazy(() =>
  import("./pages/Book/health-books")
);

// Book
const WeightLossProgramme = lazy(() =>
  import("./pages/Book/weight-loss-programme")
);
const CheckOutBook = lazy(() => import("./pages/Book/check-out"));
const PersonalTrainingBook = lazy(() =>
  import("./pages/Book/personal-fitness-trainer-course")
);
const NutritionBook = lazy(() => import("./pages/Book/nutrition-and-dietetics-course"));
const SteriodsBook = lazy(() =>
  import("./pages/Book/steroids-book")
);
const FitnessInstructorCourseBook = lazy(() =>
  import("./pages/Book/fitness-instructor-course-book")
);
const InjuryRehab = lazy(() => import("./pages/Book/injury-rehab"));
const ClinicalNutritionBooks = lazy(() =>
  import("./pages/Book/clinical-nutrition-books")
);
const ManagementBook = lazy(() => import("./pages/Book/health-and-fitness-books"));
const BestBooksForPowerlifting = lazy(() =>
  import("./pages/Book/best-books-for-powerlifting")
);
const FitnessBooks = lazy(() =>
  import("./pages/Book/fitness-books")
);
const WeightManagementProgram = lazy(() =>
  import("./pages/Book/weight-management-program")
);
const ClinicalDietToRecoverYourHealthPart1 = lazy(() =>
  import("./pages/Book/clinical-diet-to-recover-your-health-part-1")
);
const ClinicalDietToRecoverYourHealthPart2 = lazy(() =>
  import("./pages/Book/clinical-diet-to-recover-your-health-part-2")
);
const HealthAndWellnessProgramBook = lazy(() =>
  import("./pages/Book/health-and-wellness-program-book")
);
const PrepCoachingProgramBook = lazy(() =>
  import("./pages/Book/prep-coaching-program-book")
);
const FitnessCoursesBook = lazy(() =>
  import("./pages/Book/fitness-courses-book")
);
const InHomeExerciseMachine = lazy(() =>
  import("./pages/Book/in-home-exercise-machine")
);

// FWG
const FlexibleWeightLossProgram = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-weight-loss-program")
);
const FlexibleWeightManagment = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-weight-managment")
);
const FlexibleClinicalDiets = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-clinical-diets")
);
const FlexibleCorporateWellness = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-corporate-wellness")
);
const FlexiblePrepCoachingForBodybuilding = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-prep-coaching-for-bodybuilding")
);
const FWGFormPage = lazy(() => import("./pages/fitnesswithgomzi/fwg-form"));
const LightWeightVsHeavyWeight = lazy(() =>
  import("./pages/fitnesswithgomzi/light-weight-vs-heavy-weight")
);
const HowToPerformDeadlift = lazy(() =>
  import("./pages/fitnesswithgomzi/how-to-perform-deadlift")
);
const GoodCarbsBadCarbs = lazy(() =>
  import("./pages/fitnesswithgomzi/good-carbs-bad-carbs")
);
const WorkoutSplit = lazy(() =>
  import("./pages/fitnesswithgomzi/workout-split")
);
const FullBodyWarmup = lazy(() =>
  import("./pages/fitnesswithgomzi/full-body-warmup")
);
const BenefitsOfVeganDiet = lazy(() =>
  import("./pages/fitnesswithgomzi/benefits-of-vegan-diet")
);
const MacrosCalculation = lazy(() =>
  import("./pages/fitnesswithgomzi/macros-calculation")
);
const BenefitsOfSprouts = lazy(() =>
  import("./pages/fitnesswithgomzi/benefits-of-sprouts")
);
const PrepCoachingForBodybuilding = lazy(() =>
  import("./pages/fitnesswithgomzi/prep-coaching-for-bodybuilding")
);
const HealthAndFitnessBooks = lazy(() =>
  import("./pages/fitnesswithgomzi/health-and-fitness-books")
);
const FlexibleFitnessPlans = lazy(() =>
  import("./pages/fitnesswithgomzi/flexible-fitness-plans")
);
const OnlineRapidWeightLoss = lazy(() =>
  import("./pages/fitnesswithgomzi/online-rapid-weight-loss")
);
const OnlinePersonalTraining = lazy(() =>
  import("./pages/fitnesswithgomzi/online-personal-training")
);

// Recipe
const BananaChocolateSmoothie = lazy(() =>
  import("./pages/recipe/banana-chocolate-smoothie")
);
const BlueberryProteinSmoothie = lazy(() =>
  import("./pages/recipe/blueberry-protein-smoothie")
);
const OrangeCarrotSmoothie = lazy(() =>
  import("./pages/recipe/orange-carrot-smoothie")
);
const BroccoliAlmondSoup = lazy(() =>
  import("./pages/recipe/broccoli-almond-soup")
);
const VegetablePulav = lazy(() => import("./pages/recipe/vegetable-pulav"));
const HealthyKhichdi = lazy(() => import("./pages/recipe/healthy-khichdi"));
const FreeWeightLossRecipeVideos = lazy(() =>
  import("./pages/recipe/free-weight-loss-recipe-videos")
);
const BananaVanillaSmoothie = lazy(() =>
  import("./pages/recipe/banana-vanilla-smoothie")
);
const ChocolateOatSmoothie = lazy(() =>
  import("./pages/recipe/chocolate-oat-smoothie")
);
const MixedBerriesSmoothie = lazy(() =>
  import("./pages/recipe/mixed-berries-smoothie")
);
const OatsBananaSmoothie = lazy(() =>
  import("./pages/recipe/oats-banana-smoothie")
);
const OrangeProteinSmoothie = lazy(() =>
  import("./pages/recipe/orange-protein-smoothie")
);
const YellowSmoothie = lazy(() => import("./pages/recipe/yellow-smoothie"));
const SweetPotatoSmoothie = lazy(() =>
  import("./pages/recipe/sweet-potato-smoothie")
);
const StrawberrySmoothie = lazy(() =>
  import("./pages/recipe/strawberry-smoothie")
);
const StrawberriesBananaSmoothie = lazy(() =>
  import("./pages/recipe/strawberries-banana-smoothie")
);
const VegetableSoup = lazy(() => import("./pages/recipe/vegetable-soup"));
const ProteinChickpeaSalad = lazy(() =>
  import("./pages/recipe/protein-chickpea-salad")
);
const ProteinSproutSalad = lazy(() =>
  import("./pages/recipe/protein-sprout-salad")
);
const ProteinMakhanaBhel = lazy(() =>
  import("./pages/recipe/protein-makhana-bhel")
);
const MixedVegetableSalad = lazy(() =>
  import("./pages/recipe/mixed-vegetable-salad")
);

// Blog
const BenefitsOfProtein = lazy(() =>
  import("./pages/blogs/benefits-of-protein")
);
const Homeostatisblogs = lazy(() => import("./pages/blogs/homeostatis"));
const CellTypesBlogs = lazy(() => import("./pages/blogs/cell-types"));
const WeightLossBlog = lazy(() => import("./pages/blogs/weight-loss"));
const HealthyEatingHabits = lazy(() =>
  import("./pages/blogs/healthy-eating-habits")
);
const SevenMostEffectiveExercises = lazy(() =>
  import("./pages/blogs/7-most-effective-exercises")
);
const HomeWorkoutPlan = lazy(() => import("./pages/blogs/home-workout-plan"));
const Top10BiggestNutritionMyths = lazy(() =>
  import("./pages/blogs/top10-biggest-nutrition-myths")
);
const HowToGetFlexibleBody = lazy(() =>
  import("./pages/blogs/how-to-get-flexible-body")
);
const FatlossVsWeightloss = lazy(() =>
  import("./pages/blogs/fatloss-vs-weightloss")
);
const IceBath = lazy(() => import("./pages/blogs/ice-bath"));
const KetoDiet = lazy(() => import("./pages/blogs/keto-diet"));
const WhatAreMinerals = lazy(() => import("./pages/blogs/what-are-minerals"));
const WhatIsDigitalMarketing = lazy(() =>
  import("./pages/blogs/what-is-digital-marketing")
);
const FreeToolsForBeginnerYoutubers = lazy(() =>
  import("./pages/blogs/free-tools-for-beginner-youtubers")
);
const BestTeaForWeightLoss = lazy(() =>
  import("./pages/blogs/best-tea-for-weight-loss")
);
const GreenTeaBenefitsAndSideEffects = lazy(() =>
  import("./pages/blogs/green-tea-benefits-and-side-effects")
);
const YogaForWeightLoss = lazy(() =>
  import("./pages/blogs/yoga-for-weight-loss")
);
const Type2Diabetes = lazy(() => import("./pages/blogs/type-2-diabetes"));
const WriteProfessionalResume = lazy(() =>
  import("./pages/blogs/write-professional-resume")
);
const InterviewPreparationGuide = lazy(() =>
  import("./pages/blogs/interview-preparation-guide")
);
const MangoForWeightLoss = lazy(() =>
  import("./pages/blogs/mango-for-weight-loss")
);
const HealthyEatingHabitsForYourKids = lazy(() =>
  import("./pages/blogs/Healthy-Eating-Habits-For-your-Kids")
);
const StartYourFitnessTransformation = lazy(() =>
  import("./pages/blogs/start-your-fitness-transformation")
);
const WhyPeopleHateGym = lazy(() =>
  import("./pages/blogs/why-people-hate-gym")
);
const IgniteYourNutritionJourneyExploreThePowerOfaNutritionCourse = lazy(() =>
  import(
    "./pages/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course"
  )
);
const VegetarianDietPlanForWeightLoss = lazy(() =>
  import("./pages/blogs/vegetarian-diet-plan-for-weight-loss")
);
const AnabolicSteroids = lazy(() => import("./pages/blogs/anabolic-steroids"));
const ChoosingTheRightFitnessCertificationProgramInIndia = lazy(() =>
  import(
    "./pages/blogs/choosing-the-right-fitness-certification-program-in-India"
  )
);
const GymTrainerCourseBlog = lazy(() =>
  import("./pages/blogs/gym-trainer-course")
);
const LearnAboutBodyCompositionHowItAffectsYourHealth = lazy(() =>
  import(
    "./pages/blogs/learn-about-body-composition-how-it-affects-your-health"
  )
);
const NutritionCourseIndia = lazy(() =>
  import("./pages/blogs/nutrition-course-india")
);
const OnlineDietitianPlanVsInPersonConsultation = lazy(() =>
  import("./pages/blogs/online-dietitian-plan-vs-In-person-consultation")
);
const TheImportanceOfFitnessEducationInTodaysWorld = lazy(() =>
  import("./pages/blogs/the-importance-of-fitness-education-in-todays-world")
);
const TopSupplementsForWeightGain = lazy(() =>
  import("./pages/blogs/top-supplements-for-weight-gain")
);
const HowSupplementsHelpYouLiveHealthyLife = lazy(() =>
  import("./pages/blogs/how-supplements-help-you-live-healthy-life")
);
const BestWheyProteinInIndia = lazy(() =>
  import("./pages/blogs/best-whey-protein-in-india")
);

// Equipments
const Equipments = lazy(() => import("./pages/equipments/equipments"));
const Treadmill = lazy(() => import("./pages/equipments/treadmill"));
const SeatedCalfRaise = lazy(() =>
  import("./pages/equipments/seated-calf-raise")
);
const BackExtension = lazy(() => import("./pages/equipments/back-extension"));
const CableCrossOver = lazy(() =>
  import("./pages/equipments/cable-cross-over")
);
const PowerGauge = lazy(() => import("./pages/equipments/power-gauge"));
const PlateLoader = lazy(() => import("./pages/equipments/plate-loader"));
const BicepPreacherCurl = lazy(() =>
  import("./pages/equipments/bicep-preacher-curl")
);
const ShoulderPress = lazy(() => import("./pages/equipments/shoulder-press"));
const BackBlaster = lazy(() => import("./pages/equipments/back-blaster"));
const ChestPress = lazy(() => import("./pages/equipments/chest-press"));
const LegExtensionCurl = lazy(() =>
  import("./pages/equipments/leg-extension-curl")
);
const StationaryBikes = lazy(() =>
  import("./pages/equipments/stationary-bikes")
);
const MachineChestFlies = lazy(() =>
  import("./pages/equipments/machine-chest-flies")
);
const DumbbellRackWithDumbbell = lazy(() =>
  import("./pages/equipments/dumbbell-rack-with-dumbbell")
);
const MedicineBall = lazy(() => import("./pages/equipments/medicine-ball"));
const LegPressMachine = lazy(() =>
  import("./pages/equipments/leg-press-machine")
);
const CardioStrengthMachine = lazy(() =>
  import("./pages/equipments/cardio-strength-machine")
);

// Policy
const AppPrivacyPolicy = lazy(() => import("./pages/app-privacy-policy"));
const CancellationPolicy = lazy(() => import("./pages/cancellation-policy"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsCondition = lazy(() => import("./pages/terms-condition"));
const ReturnRefund = lazy(() => import("./pages/return-refund"));

// 404
const NotFoundPage = lazy(() => import("./pages/404"));

//

// ScrollRestoration
const ScrollRestoration = lazy(() => import("./components/scroll-restoration"));
const BachelorOfNutrition = lazy(() =>
  import("./pages/Book/bachelor-nutrition")
);
const FGIITLanding = lazy(() =>
  import("./pages/webinar/fgiit-webinar/fgiit-webinar")
);

// Branch
const FwgBarodaBranch = lazy(() =>
  import("./pages/branches/fwg-baroda-branch")
);
const FGIITBarodaBranch = lazy(() =>
  import("./pages/branches/fgiit-baroda-branch")
);
const FGIITAdajanBranch = lazy(() =>
  import("./pages/branches/fgiit-adajan-branch")
);
const FwgAdajanBranch = lazy(() =>
  import("./pages/branches/fwg-adajan-branch")
);
const InptaFGGroup = lazy(() => import("./pages/inpta/home-inpta"));
const TrainingAndPlacementINPTA = lazy(() =>
  import("./pages/inpta/training-and-placement-inpta")
);
const JobPlacementInpta = lazy(() => import("./pages/inpta/job-placement"));
const BecomeAMember = lazy(() => import("./pages/inpta/become-member"));
const ContactInpta = lazy(() => import("./pages/inpta/contact-us"));
const PartnersINPTA = lazy(() => import("./pages/inpta/partners"));
const InptaCertificate = lazy(() => import("./pages/inpta/inpta-certificate"));
const InptaEvent = lazy(() => import("./pages/inpta/event"));
const FranchisePage = lazy(() => import("./pages/franchises"));
const FwgWebinar = lazy(() => import("./pages/fwg-webinar"));
const FgiitWebinar = lazy(() => import("./pages/fgiit-webinar"));
const ScheduleCall = lazy(() => import("./pages/schedual-call"));
const FgiitDemoSession = lazy(() => import("./pages/fgiit-demo-session"));
const FranchiseDemoSession = lazy(() => import("./pages/franchise-call"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumini-fgiit" element={<AluminiFgiit />} />
        <Route
          path="/fitness-brand-franchise"
          element={<FitnessBrandFranchise />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/fwg-webinar" element={<FwgWebinar />} />
        <Route path="/fgiit-webinar" element={<FgiitWebinar />} />
        <Route path="/schedule-call" element={<ScheduleCall />} />
        <Route path="/fgiit-demo-session" element={<FgiitDemoSession />} />
        <Route path="/franchise-call" element={<FranchiseDemoSession />} />
        <Route path="/fgiit-baroda-branch" element={<FGIITBarodaBranch />} />
        <Route path="/fgiit-adajan-branch" element={<FGIITAdajanBranch />} />
        <Route path="/fwg-baroda-branch" element={<FwgBarodaBranch />} />
        <Route path="/fwg-adajan-branch" element={<FwgAdajanBranch />} />
        <Route path="/app-privacy-policy" element={<AppPrivacyPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/fgiit-terms-condition" element={<FgiitTermsCondition />} />
        <Route path="/return-refund" element={<ReturnRefund />} />
        <Route
          path="/indian-nutritionist-and-personal-trainer-association"
          element={<INPTPage />}
        />
        <Route path="/inpta/home-inpta" element={<InptaFGGroup />} />
        <Route
          path="/inpta/training-and-placement-inpta"
          element={<TrainingAndPlacementINPTA />}
        />
        <Route path="/inpta/job-placement" element={<JobPlacementInpta />} />
        <Route path="/inpta/become-member" element={<BecomeAMember />} />
        <Route path="/inpta/contact-us" element={<ContactInpta />} />
        <Route path="/inpta/partners" element={<PartnersINPTA />} />
        <Route path="/inpta/inpta-certificate" element={<InptaCertificate />} />
        <Route path="/inpta/event" element={<InptaEvent />} />
        <Route path="/inpta/contact-inpta" element={<ContactINPTA />} />
        <Route path="/inpta/local-partner" element={<LocalPartner />} />
        <Route
          path="/blogs/benefits-of-protein"
          element={<BenefitsOfProtein />}
        />
        <Route path="/blogs/homeostatis" element={<Homeostatisblogs />} />
        <Route path="/blogs/cell-types" element={<CellTypesBlogs />} />
        <Route path="/blogs/weight-loss" element={<WeightLossBlog />} />
        <Route
          path="/blogs/healthy-eating-habits"
          element={<HealthyEatingHabits />}
        />
        <Route
          path="/blogs/7-most-effective-exercises"
          element={<SevenMostEffectiveExercises />}
        />
        <Route path="/blogs/home-workout-plan" element={<HomeWorkoutPlan />} />
        <Route
          path="/blogs/top10-biggest-nutrition-myths"
          element={<Top10BiggestNutritionMyths />}
        />
        <Route
          path="/blogs/how-to-get-flexible-body"
          element={<HowToGetFlexibleBody />}
        />
        <Route
          path="/blogs/fatloss-vs-weightloss"
          element={<FatlossVsWeightloss />}
        />
        <Route path="/blogs/ice-bath" element={<IceBath />} />
        <Route path="/blogs/keto-diet" element={<KetoDiet />} />
        <Route path="/blogs/what-are-minerals" element={<WhatAreMinerals />} />
        <Route
          path="/blogs/what-is-digital-marketing"
          element={<WhatIsDigitalMarketing />}
        />
        <Route
          path="/blogs/free-tools-for-beginner-youtubers"
          element={<FreeToolsForBeginnerYoutubers />}
        />
        <Route
          path="/blogs/best-tea-for-weight-loss"
          element={<BestTeaForWeightLoss />}
        />
        <Route
          path="/blogs/green-tea-benefits-and-side-effects"
          element={<GreenTeaBenefitsAndSideEffects />}
        />
        <Route
          path="/blogs/yoga-for-weight-loss"
          element={<YogaForWeightLoss />}
        />
        <Route path="/blogs/type-2-diabetes" element={<Type2Diabetes />} />
        <Route
          path="/blogs/write-professional-resume"
          element={<WriteProfessionalResume />}
        />
        <Route
          path="/blogs/interview-preparation-guide"
          element={<InterviewPreparationGuide />}
        />
        <Route
          path="/blogs/mango-for-weight-loss"
          element={<MangoForWeightLoss />}
        />
        <Route
          path="/blogs/healthy-eating-habits-for-your-kids"
          element={<HealthyEatingHabitsForYourKids />}
        />
        <Route
          path="/blogs/start-your-fitness-transformation"
          element={<StartYourFitnessTransformation />}
        />
        <Route
          path="/blogs/why-people-hate-gym"
          element={<WhyPeopleHateGym />}
        />
        <Route
          path="/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course"
          element={
            <IgniteYourNutritionJourneyExploreThePowerOfaNutritionCourse />
          }
        />
        <Route
          path="/blogs/vegetarian-diet-plan-for-weight-loss"
          element={<VegetarianDietPlanForWeightLoss />}
        />
        <Route path="/blogs/anabolic-steroids" element={<AnabolicSteroids />} />
        <Route
          path="/blogs/choosing-the-right-fitness-certification-program-in-India"
          element={<ChoosingTheRightFitnessCertificationProgramInIndia />}
        />
        <Route
          path="/blogs/gym-trainer-course"
          element={<GymTrainerCourseBlog />}
        />
        <Route
          path="/blogs/learn-about-body-composition-how-it-affects-your-health"
          element={<LearnAboutBodyCompositionHowItAffectsYourHealth />}
        />
        <Route
          path="/blogs/nutrition-course-india"
          element={<NutritionCourseIndia />}
        />
        <Route
          path="/blogs/online-dietitian-plan-vs-In-person-consultation"
          element={<OnlineDietitianPlanVsInPersonConsultation />}
        />
        <Route
          path="/blogs/the-importance-of-fitness-education-in-todays-world"
          element={<TheImportanceOfFitnessEducationInTodaysWorld />}
        />
        <Route
          path="/blogs/top-supplements-for-weight-gain"
          element={<TopSupplementsForWeightGain />}
        />
        <Route
          path="/blogs/how-supplements-help-you-live-healthy-life"
          element={<HowSupplementsHelpYouLiveHealthyLife />}
        />
        <Route
          path="/blogs/best-whey-protein-in-india"
          element={<BestWheyProteinInIndia />}
        />
        {/* Blog */}
        {/* Recipe */}
        <Route
          path="/recipe/free-weight-loss-recipe-videos"
          element={<FreeWeightLossRecipeVideos />}
        />
        <Route
          path="/recipe/banana-chocolate-smoothie"
          element={<BananaChocolateSmoothie />}
        />
        <Route
          path="/recipe/blueberry-protein-smoothie"
          element={<BlueberryProteinSmoothie />}
        />
        <Route
          path="/recipe/orange-carrot-smoothie"
          element={<OrangeCarrotSmoothie />}
        />
        <Route
          path="/recipe/broccoli-almond-soup"
          element={<BroccoliAlmondSoup />}
        />
        <Route path="/recipe/vegetable-pulav" element={<VegetablePulav />} />
        <Route path="/recipe/healthy-khichdi" element={<HealthyKhichdi />} />
        <Route
          path="/recipe/banana-vanilla-smoothie"
          element={<BananaVanillaSmoothie />}
        />
        <Route
          path="/recipe/chocolate-oat-smoothie"
          element={<ChocolateOatSmoothie />}
        />
        <Route
          path="/recipe/mixed-berries-smoothie"
          element={<MixedBerriesSmoothie />}
        />
        <Route
          path="/recipe/oats-banana-smoothie"
          element={<OatsBananaSmoothie />}
        />
        <Route
          path="/recipe/orange-protein-smoothie"
          element={<OrangeProteinSmoothie />}
        />
        <Route path="/recipe/yellow-smoothie" element={<YellowSmoothie />} />
        <Route
          path="/recipe/sweet-potato-smoothie"
          element={<SweetPotatoSmoothie />}
        />
        <Route
          path="/recipe/strawberry-smoothie"
          element={<StrawberrySmoothie />}
        />
        <Route
          path="/recipe/strawberries-banana-smoothie"
          element={<StrawberriesBananaSmoothie />}
        />
        <Route path="/recipe/vegetable-soup" element={<VegetableSoup />} />
        <Route
          path="/recipe/protein-chickpea-salad"
          element={<ProteinChickpeaSalad />}
        />
        <Route
          path="/recipe/protein-sprout-salad"
          element={<ProteinSproutSalad />}
        />
        <Route
          path="/recipe/protein-makhana-bhel"
          element={<ProteinMakhanaBhel />}
        />
        <Route
          path="/recipe/mixed-vegetable-salad"
          element={<MixedVegetableSalad />}
        />
        {/* Recipe */}
        {/* equipments */}
        <Route path="/equipments/equipments" element={<Equipments />} />
        <Route
          path="/equipments/cardio-strength-machine"
          element={<CardioStrengthMachine />}
        />
        <Route path="/equipments/treadmill" element={<Treadmill />} />
        <Route
          path="/equipments/seated-calf-raise"
          element={<SeatedCalfRaise />}
        />
        <Route path="/equipments/back-extension" element={<BackExtension />} />
        <Route
          path="/equipments/cable-cross-over"
          element={<CableCrossOver />}
        />
        <Route path="/equipments/power-gauge" element={<PowerGauge />} />
        <Route path="/equipments/plate-loader" element={<PlateLoader />} />
        <Route
          path="/equipments/bicep-preacher-curl"
          element={<BicepPreacherCurl />}
        />
        <Route path="/equipments/shoulder-press" element={<ShoulderPress />} />
        <Route path="/equipments/back-blaster" element={<BackBlaster />} />
        <Route path="/equipments/chest-press" element={<ChestPress />} />
        <Route
          path="/equipments/leg-extension-curl"
          element={<LegExtensionCurl />}
        />
        <Route
          path="/equipments/stationary-bikes"
          element={<StationaryBikes />}
        />
        <Route
          path="/equipments/machine-chest-flies"
          element={<MachineChestFlies />}
        />
        <Route
          path="/equipments/dumbbell-rack-with-dumbbell"
          element={<DumbbellRackWithDumbbell />}
        />
        <Route path="/equipments/medicine-ball" element={<MedicineBall />} />
        <Route
          path="/equipments/leg-press-machine"
          element={<LegPressMachine />}
        />
        {/* equipments */}
        {/* Book */}
        <Route
          path="/book/weight-loss-programme"
          element={<WeightLossProgramme />}
        />
        <Route path="/book/check-out" element={<CheckOutBook />} />
        <Route
          path="/book/personal-fitness-trainer-course"
          element={<PersonalTrainingBook />}
        />
        <Route path="/book/nutrition-and-dietetics-course" element={<NutritionBook />} />
        <Route
          path="/book/steroids-book"
          element={<SteriodsBook />}
        />
        <Route
          path="/book/fitness-instructor-course-book"
          element={<FitnessInstructorCourseBook />}
        />
        <Route path="/book/injury-rehab" element={<InjuryRehab />} />
        <Route
          path="/book/clinical-nutrition-books"
          element={<ClinicalNutritionBooks />}
        />
        <Route path="/book/health-and-fitness-books" element={<ManagementBook />} />
        <Route
          path="/book/best-books-for-powerlifting"
          element={<BestBooksForPowerlifting />}
        />
        <Route
          path="/book/fitness-books"
          element={<FitnessBooks />}
        />
        <Route
          path="/book/weight-management-program"
          element={<WeightManagementProgram />}
        />
        <Route
          path="/book/clinical-diet-to-recover-your-health-part-1"
          element={<ClinicalDietToRecoverYourHealthPart1 />}
        />
        <Route
          path="/book/clinical-diet-to-recover-your-health-part-2"
          element={<ClinicalDietToRecoverYourHealthPart2 />}
        />
        <Route
          path="/book/health-and-wellness-program-book"
          element={<HealthAndWellnessProgramBook />}
        />
        <Route
          path="/book/prep-coaching-program-book"
          element={<PrepCoachingProgramBook />}
        />
        <Route
          path="/book/fitness-courses-book"
          element={<FitnessCoursesBook />}
        />
        <Route
          path="/book/in-home-exercise-machine"
          element={<InHomeExerciseMachine />}
        />
        <Route
          path="/book/bachelor-nutrition"
          element={<BachelorOfNutrition />}
        />
        {/* Book */}
        {/* FWG Routes Start*/}
        <Route
          path="/fitnesswithgomzi/weight-loss-programs"
          element={<HomePageFwg />}
        />{" "}
        {/* FWG main page */}
        <Route
          path="/fitnesswithgomzi/rapid-weight-loss"
          element={<OnlineRapidWeightLoss />}
        />
        {/* RTP 1.0 */}
        <Route
          path="/fitnesswithgomzi/online-personal-training"
          element={<OnlinePersonalTraining />}
        />
        {/* RTP 2.0 */}
        <Route
          path="/community/dietitian-for-clinical-illness"
          element={<OnlineClinicalDietProgram />}
        />
        {/* RTP 3.0 */}
        <Route
          path="/corporate-fitness-programs"
          element={<OnlineCorporateFitnessProgram />}
        />
        {/* RTP 4.0 */}
        <Route
          path="/fitnesswithgomzi/prep-coaching-for-bodybuilding"
          element={<PrepCoachingForBodybuilding />}
        />
        {/* RTP 5.0 */}
        <Route
          path="/fitnesswithgomzi/health-and-fitness-books"
          element={<HealthAndFitnessBooks />}
        />
        {/* Fitness Book */}
        <Route
          path="/fitnesswithgomzi/flexible-fitness-plans"
          element={<FlexibleFitnessPlans />}
        />
        {/* Fitness Plans */}
        <Route
          path="/fitnesswithgomzi/flexible-weight-loss-program"
          element={<FlexibleWeightLossProgram />}
        />
        <Route
          path="/fitnesswithgomzi/flexible-weight-managment"
          element={<FlexibleWeightManagment />}
        />
        <Route
          path="/fitnesswithgomzi/flexible-clinical-diets"
          element={<FlexibleClinicalDiets />}
        />
        <Route
          path="/fitnesswithgomzi/flexible-corporate-wellness"
          element={<FlexibleCorporateWellness />}
        />
        <Route
          path="/fitnesswithgomzi/flexible-prep-coaching-for-bodybuilding"
          element={<FlexiblePrepCoachingForBodybuilding />}
        />
        <Route
          path="/fitnesswithgomzi/fwg-form-page"
          element={<FWGFormPage />}
        />
        <Route
          path="/fitnesswithgomzi/light-weight-vs-heavy-weight"
          element={<LightWeightVsHeavyWeight />}
        />
        <Route
          path="/fitnesswithgomzi/how-to-perform-deadlift"
          element={<HowToPerformDeadlift />}
        />
        <Route
          path="/fitnesswithgomzi/good-carbs-bad-carbs"
          element={<GoodCarbsBadCarbs />}
        />
        <Route
          path="/fitnesswithgomzi/workout-split"
          element={<WorkoutSplit />}
        />
        <Route
          path="/fitnesswithgomzi/full-body-warmup"
          element={<FullBodyWarmup />}
        />
        <Route
          path="/fitnesswithgomzi/benefits-of-vegan-diet"
          element={<BenefitsOfVeganDiet />}
        />
        <Route
          path="/fitnesswithgomzi/macros-calculation"
          element={<MacrosCalculation />}
        />
        <Route
          path="/fitnesswithgomzi/benefits-of-sprouts"
          element={<BenefitsOfSprouts />}
        />
        {/* FWG Routes End*/}
        {/* FGIIT Routes Start*/}
        <Route path="/fgiit/thank-you-book" element={<ThankYouPageBook />} />
        <Route path="/fgiit/check-out" element={<CheckOutCourse />} />
        <Route path="/fgiit/chatbot" element={<ChatBotFGIIT />} />
        <Route path="/fitnesswithgomzi/fwg-chatbot" element={<ChatBotFWG />} />
        <Route
          path="/fgiit/thank-you-purchase-book"
          element={<ThankYouPage />}
        />
        <Route
          path="/fgiit/thank-you-purchase-flexible"
          element={<ThankYouPage />}
        />
        {/* FGIIT thank you page Book */}
        <Route
          path="/fgiit/thank-you-flexible"
          element={<ThankYouPageFlexible />}
        />
        <Route
          path="/fgiit/thank-you-international"
          element={<ThankYouPageInternational />}
        />
        <Route
          path="/fgiit/thank-you-online"
          element={<ThankYouPageOnline />}
        />
        <Route
          path="/fgiit/thank-you-offline"
          element={<ThankYouPageOffline />}
        />
        <Route
          path="/fitnesswithgomzi/thank-you-fwg"
          element={<ThankYouPageFWG />}
        />
        {/* FGIIT thank you page Flexible */}
        <Route path="/fgiit/fitness-courses" element={<FitnessCourses />} />
        {/* FGIIT main page */}
        <Route
          path="/fgiit/fitness-and-nutrition-courses"
          element={<FitnessAndNutritionCourses />}
        />
        {/* Offline Courses */}
        <Route path="/fgiit/online-fitness-courses" element={<OnlineFitnessCourses />} />
        {/* Online Courses */}
        <Route
          path="/fgiit/flexible-fitness-courses"
          element={<FlexibleFitnessCourses />}
        />
        {/* Flexible Learning */}
        <Route
          path="/book/health-books"
          element={<HealthBooks />}
        />
        {/* Study Material */}
        <Route path="/student-corner" element={<StudentCorner />} />
        {/* Study Material */}
        <Route
          path="/fgiit/course-of-dietician"
          element={<CourseOfDietician />}
        />
        <Route
          path="/fgiit/online-fitness-and-nutrition-courses"
          element={<OnlineFitnessAndNutritionCourses />}
        />
        <Route
          path="/fgiit/personal-trainer-courses"
          element={<PersonalTrainerCourses />}
        />
        <Route
          path="/fgiit/course-for-dietician"
          element={<CourseForDietician />}
        />
        <Route
          path="/fgiit/anabolic-steroids-course"
          element={<AnabolicSteroidsCourse />}
        />
        <Route
          path="/fgiit/offline-trx-and-workshop"
          element={<FitnessInstructorCourse />}
        />
        <Route
          path="/fgiit/fitness-instructor-course"
          element={<OfflineGroupInstructor />}
        />
        <Route
          path="/fgiit/offline-tabata-workshop"
          element={<OfflineTabataWorkshop />}
        />
        <Route
          path="/fgiit/offline-functional-training-workshop"
          element={<OfflineFunctionalTrainingWorkshop />}
        />
        <Route path="/fgiit/offline-check-out" element={<OfflineCheckOut />} />
        {/* <Route
          path="/fitnesswithgomzi/fwg-homepage"
          element={<HomePageFwg />}
        /> */}
        {/* start RTP 1 to 5 */}
        {/* <Route
          path="/fitnesswithgomzi/online-weight-management"
          element={<OnlineWeightManagement />}
        />
        <Route
          path="/fitnesswithgomzi/online-clinical-diet-program"
          element={<OnlineClinicalDietProgram />}
        /> */}
        {/* <Route
          path="/fitnesswithgomzi/online-rapid-weight-loss"
          element={<OnlineRapidWeightLoss />}
        /> */}
        {/* End RTP 1 to 5 */}
        <Route path="/fgiit/online-check-out" element={<OnlineCheckOut />} />
        <Route
          path="/fitnesswithgomzi/check-out"
          element={<OnlineProgramCheckOut />}
        />
        <Route
          path="/fgiit/offline-mix-martial-arts-workshop"
          element={<OfflineMixMartialArtsWorkshop />}
        />
        <Route
          path="/fgiit/powerlifting-course"
          element={<PowerliftingCourse />}
        />
        <Route
          path="/fgiit/injury-rehabilitation-program"
          element={<InjuryRehabilitationProgram />}
        />
        <Route
          path="/fgiit/clinical-dietitian"
          element={<ClinicalDietitian />}
        />
        <Route
          path="/fgiit/online-personal-training-course"
          element={<OnlinePersonalTrainingCourse />}
        />
        <Route
          path="/fgiit/food-and-nutrition-course"
          element={<FoodAndNutritionCourse />}
        />
        <Route
          path="/fgiit/anabolic-steroid-testosterone"
          element={<AnabolicSteroidTestosterone />}
        />
        <Route
          path="/fgiit/online-trx-band-workshop"
          element={<OnlineTrxBandWorkshop />}
        />
        <Route
          path="/fgiit/online-fitness-instructor-course"
          element={<OnlineFitnessInstructorCourse />}
        />
        <Route
          path="/fgiit/online-tabata-workshop"
          element={<OnlineTabataWorkshop />}
        />
        <Route
          path="/fgiit/online-functional-training-workshop"
          element={<OnlineFunctionalTrainingWorkshop />}
        />
        <Route
          path="/fgiit/online-martial-arts-workshop"
          element={<OnlineMartialArtsWorkshop />}
        />
        <Route
          path="/fgiit/online-powerlifting-course"
          element={<OnlinePowerliftingCourse />}
        />
        <Route
          path="/fgiit/course-of-physiotherapy"
          element={<CourseOfPhysiotherapy />}
        />
        <Route
          path="/fgiit/clinical-diets-for-health-and-wellness"
          element={<ClinicalDietsForHealthAndWellness />}
        />
        <Route
          path="/fgiit/international-course"
          element={<InternationalCourse />}
        />
        <Route
          path="/fgiit/nutrition-and-fitness-courses"
          element={<NutritionAndFitnessCourses />}
        />
        <Route
          path="/fgiit/personal-training-course"
          element={<PersonalTrainingCourse />}
        />
        <Route
          path="/fgiit/dietician-course-online"
          element={<DieticianCourseOnline />}
        />
        <Route
          path="/fgiit/anabolic-androgenic-steroids"
          element={<AnabolicAndrogenicSteroids />}
        />
        <Route
          path="/fgiit/physiotherapy-course"
          element={<PhysiotherapyCourse />}
        />
        <Route
          path="/fgiit/online-group-instructor-masterclass"
          element={<OnlineGroupInstructorMasterclass />}
        />
        <Route
          path="/fgiit/clinical-nutrition-course"
          element={<ClinicalNutritionCourse />}
        />
        <Route
          path="/fgiit/gym-management-course"
          element={<GymManagementCourse />}
        />
        <Route
          path="/fgiit/english-diploma-in-personal-training-course"
          element={<EnglishDiplomaInPersonalTrainingCourse />}
        />
        <Route
          path="/fgiit/english-diploma-in-nutrition-course"
          element={<EnglishDiplomaInNutritionCourse />}
        />
        <Route
          path="/fgiit/english-anabolic-androgenic-steroids"
          element={<EnglishAnabolicAndrogenicSteroids />}
        />
        <Route
          path="/fgiit/english-tabata-workshop"
          element={<EnglishTabataWorkshop />}
        />
        <Route
          path="/fgiit/english-course-physiotherapy"
          element={<EnglishCoursePhysiotherapy />}
        />
        <Route
          path="/fgiit/english-clinical-dietitian"
          element={<EnglishClinicalDietitian />}
        />
        <Route
          path="/fgiit/english-trx-and-workshop"
          element={<EnglishTrxAndWorkshop />}
        />
        <Route
          path="/fgiit/english-functional-training-workshop"
          element={<EnglishFunctionalTrainingWorkshop />}
        />
        <Route
          path="/fgiit/english-mix-martial-arts-workshop"
          element={<EnglishMixMartialArtsWorkshop />}
        />
        <Route
          path="/fgiit/english-powerlifting-coach-workshop"
          element={<EnglishPowerliftingCoachWorkshop />}
        />
        <Route
          path="/fgiit/english-recorded-diploma-in-personal-training"
          element={<EnglishRecordedDiplomaInPersonalTraining />}
        />
        <Route
          path="/fgiit/english-recorded-diploma-in-nutrition-course"
          element={<EnglishRecordedDiplomaInNutritionCourse />}
        />
        <Route
          path="/fgiit/english-recorded-anabolic-androgenic-steroids"
          element={<EnglishRecordedAnabolicAndrogenicSteroids />}
        />
        <Route
          path="/fgiit/english-recorded-tabata-workshop"
          element={<EnglishRecordedTabataWorkshop />}
        />
        <Route
          path="/fgiit/english-recorded-course-physiotherapy"
          element={<EnglishRecordedCoursePhysiotherapy />}
        />
        <Route
          path="/fgiit/english-recorded-clinical-dietitian"
          element={<EnglishRecordedClinicalDietitian />}
        />
        <Route path="/fgiit/fgiit-all-links" element={<FgiitAllLinks />} />
        <Route
          path="/fgiit/fitness-training-and-placement"
          element={<FitnessTrainingAndPlacement />}
        />
        {/* <Route
          path="/fgiit/bodybuilding_competition"
          element={<BodybuildingCompetition />}
        /> */}
        <Route
          path="/fgiit/become-member-at-fgiit"
          element={<BecomeMemberAtFgiit />}
        />
        <Route path="/fgiit/lead-form" element={<LeadForm />} />
        {/* FGIIT Routes End*/}
        {/* FG Digital Routes Start*/}
        <Route
          path="/fgdigital/online-digital-marketing-training"
          element={<OnlineDigitalMarketingTraining />}
        />
        {/* FG Digital main page*/}
        <Route
          path="/fgdigital/gym-management-software"
          element={<GymManagementSoftware />}
        />
        {/* CRM Software */}
        {/* FG Digital Routes End*/}
        {/* Webinar Routes Start*/}
        <Route path="/fgiit-webinar-page" element={<FGIITLanding />} />
        {/* Webinar Routes End*/}
        {/* User Profile */}
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        {/* Add a catch-all route for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
