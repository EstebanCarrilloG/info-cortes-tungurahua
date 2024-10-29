import data from "../data/data.json";
export default function getAllData() {
  let allData = [];
  data.map((e) => {
    e.table_data.map((e) => {
      allData.push(e);
    });
  });

  return allData;
}
