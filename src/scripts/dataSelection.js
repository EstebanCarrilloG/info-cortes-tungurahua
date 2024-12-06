import thisWeek from "../data/thisWeek.json";
import nextWeek from "../data/nextWeek.json";
import thisWeekIndustrias from "../data/thisWeekIndustrias.json";
import nextWeekIndustrias from "../data/nextWeekIndustrias.json";
export default function dataSelection(id) {
  let dataObject = {
    "01Week": thisWeek, 
    "02Week": nextWeek,
    "01WeekIndustrias": thisWeekIndustrias,
    "02WeekIndustrias": nextWeekIndustrias
  };
  return { general: dataObject[id + "Week"], industrias: dataObject[id  + "WeekIndustrias"]};
}
