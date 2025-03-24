let AllOfflineCourseData;

if (process.env.REACT_APP_ENV === "production") {
  AllOfflineCourseData = require("./AllOfflineCoursesDataProd");
} else {
  AllOfflineCourseData = require("./AllOfflineCoursesData");
}

const {
  OfflineDiplomaPersonalTrainingCourseData,
  OfflineDiplomaNutritionCourseData,
  OfflineAnabolicAndrogenicCourseData,
  OfflineGroupInstructorMasterClass,
  OfflineTRXBandWorkshopCourseData,
  OfflineTabataWorkshopCourseData,
  OfflineFunctionalWorkshopCourseData,
  OfflineMixMartialArtsWorkshopCourseData,
  OfflinePowerliftingCoachWorkshopCourseData,
  OfflineInjuryRehabilitationWorkshopCourseData,
  OfflineAdvanceClinicalNutritionCourseData,
  OfflineNutriTrainingCourseData,
} = AllOfflineCourseData;

export {
  OfflineDiplomaPersonalTrainingCourseData,
  OfflineDiplomaNutritionCourseData,
  OfflineAnabolicAndrogenicCourseData,
  OfflineGroupInstructorMasterClass,
  OfflineTRXBandWorkshopCourseData,
  OfflineTabataWorkshopCourseData,
  OfflineFunctionalWorkshopCourseData,
  OfflineMixMartialArtsWorkshopCourseData,
  OfflinePowerliftingCoachWorkshopCourseData,
  OfflineInjuryRehabilitationWorkshopCourseData,
  OfflineAdvanceClinicalNutritionCourseData,
  OfflineNutriTrainingCourseData,
};
