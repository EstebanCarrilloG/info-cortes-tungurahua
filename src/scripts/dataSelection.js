import thisWeek from "../data/thisWeek.json";
import nextWeek from "../data/nextWeek.json";
import thisWeekIndustrias from "../data/thisWeekIndustrias.json";
import nextWeekIndustrias from "../data/nextWeekIndustrias.json";
export default function dataSelection(week) {
  return week == "thisWeek"
    ? { general: thisWeek, industrias: thisWeekIndustrias }
    : { general: nextWeek, industrias: nextWeekIndustrias };
}
