import data from "../data/data.json";
import clearString from "../helpers/clearString";
export default function dataFiltered(key,value) {
  let newData = [];
  data.map((e) => {
    e.table_data.map((e) => {
      if (e[key] == value) {
        newData.push(e);
      }
    });
  });
  //e.table_data.filter((e) => e["CANTÓN"] == value)
  return newData;
}
