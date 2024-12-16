import thisWeek from "../data/thisWeek.json";
import nextWeek from "../data/nextWeek.json";
import third from "../data/third.json";
import thisWeekIndustrias from "../data/thisWeekIndustrias.json";
import nextWeekIndustrias from "../data/nextWeekIndustrias.json";
import thirdIndustrias from "../data/thirdIndustrias.json";
export default function dataSelection(id) {
  let dataObject = {
    "01Week": thisWeek, 
    "02Week": nextWeek,
    "03Week": third,
    "01WeekIndustrias": thisWeekIndustrias,
    "02WeekIndustrias": nextWeekIndustrias,
    "03WeekIndustrias": thirdIndustrias
  };
  return { general: dataObject[id + "Week"], industrias: dataObject[id  + "WeekIndustrias"]};
}
