import data from "../data/data.json";
export default function searchFilter(value) {
  let newData = [];
  const regex = new RegExp(`${value}`, "i");

  data.map((e) => {
    e.table_data.map((e) => {
      if (e["canton"]?.match(regex) || e["parroquias"]?.match(regex)|| e["alimentador"]?.match(regex) || e["sectores"]?.match(regex)) {
        newData.push(e);
      }
    });
  });
  return newData;
}
