import data from "../data/thisWeek.json";
export default function dataFiltered(key,value,week) {
  let dataInfo ={};

  console.log(week)

  week == "thisWeek" ? dataInfo = data : dataInfo = "";

  let newData = [];
  
  dataInfo.map((e) => {
    e.table_data.map((e) => {
      if (e[key] == value) {
        newData.push(e);
      }
    });
    
  });
  return newData;
}
