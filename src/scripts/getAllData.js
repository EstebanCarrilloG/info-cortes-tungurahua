import dataSelection from "./dataSelection";
export default function getAllData(week,industrias = "") {
  let allData = [];
  const data = dataSelection(week)

  if (industrias == "industrias") {
    data.industrias[0].table_data.map((e) => {
      allData.push(e);
    });
  }else{
    data.general?.map((e) => {
      e.table_data.map((e) => {
        allData.push(e);
      });
    });
  }

  return allData;
}
