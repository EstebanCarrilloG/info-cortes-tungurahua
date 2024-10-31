import data from "../data/data.json";
import dataIndustrias from "../data/data-industrias.json";
export default function getAllData(industrias = "") {
  let allData = [];

  if (industrias == "industrias") {
    dataIndustrias[0].table_data.map((e) => {
      allData.push(e);
    });
  }else{
    data.map((e) => {
      e.table_data.map((e) => {
        allData.push(e);
      });
    });
  }

  return allData;
}
