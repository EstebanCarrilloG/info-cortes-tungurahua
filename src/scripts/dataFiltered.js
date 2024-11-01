import data from "../data/data.json";
export default function dataFiltered(key,value) {
  let newData = [];
  
  data.map((e) => {
    e.table_data.map((e) => {
      if (e[key] == value) {
        newData.push(e);
      }
    });
    
  });
  return newData;
}
