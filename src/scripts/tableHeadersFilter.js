import data from "../data/data.json";
import dataIndustrias from "../data/data-industrias.json";
export default function tableHeadersFilter(industrias = "") {
  return industrias == "industrias"
    ? Object.keys(dataIndustrias[0].table_data[0])
    : Object.keys(data[0].table_data[0]);
}
