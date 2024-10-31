import dataSelection from "./dataSelection";
export default function tableHeadersFilter(week,industrias = "") {
  const data = dataSelection(week)
  return industrias == "industrias"
    ? Object.keys(data.industrias[0].table_data[0])
    : Object.keys(data.general[0].table_data[0]);
}
