let AllOnlineCourseData;

if (process.env.REACT_APP_ENV === "production") {
  AllOnlineCourseData = require("./AllOnlineCourseDataProd");
} else {
  AllOnlineCourseData = require("./AllOnlineCourseData");
}

const {
  OnlineDiplomaPersonalTrainingCourseData,
  OnlineDiplomaNutritionCourseData,
  OnlineAnabolicAndrogenicCourseData,
  OnlineGroupInstructorMasterClass,
  OnlineTRXBandWorkshopCourseData,
  OnlineTabataWorkshopCourseData,
  OnlineFunctionalWorkshopCourseData,
  OnlineMixMartialArtsWorkshopCourseData,
  OnlinePowerliftingCoachWorkshopCourseData,
  OnlineInjuryRehabilitationWorkshopCourseData,
  OnlineAdvanceClinicalNutritionCourseData,
  OnlineNutriTrainingCourseData,
} = AllOnlineCourseData;

export {
  OnlineDiplomaPersonalTrainingCourseData,
  OnlineDiplomaNutritionCourseData,
  OnlineAnabolicAndrogenicCourseData,
  OnlineGroupInstructorMasterClass,
  OnlineTRXBandWorkshopCourseData,
  OnlineTabataWorkshopCourseData,
  OnlineFunctionalWorkshopCourseData,
  OnlineMixMartialArtsWorkshopCourseData,
  OnlinePowerliftingCoachWorkshopCourseData,
  OnlineInjuryRehabilitationWorkshopCourseData,
  OnlineAdvanceClinicalNutritionCourseData,
  OnlineNutriTrainingCourseData,
};
