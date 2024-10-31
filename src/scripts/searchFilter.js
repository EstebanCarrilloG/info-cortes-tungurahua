import dataSelection from "./dataSelection";

export default function searchFilter(value,week) {
  const dataInfo =  dataSelection(week)
    
  let newData = [];
  const regex = new RegExp(`${value}`, "i");

  dataInfo?.map((e) => {
    e.table_data.map((e) => {
      if (e["canton"]?.match(regex) || e["parroquias"]?.match(regex)|| e["alimentador"]?.match(regex) || e["sectores"]?.match(regex)) {
        newData.push(e);
      }
    });
  });
  return newData;
}
