import data from "../data/data.json";

export default function optionsFilter(key) {
  let cantonesArray = [];
  cantonesArray.push("");

  data.map((e) => {
    e.table_data.map((e, i) => {
      cantonesArray.push(e[key]);
    });
  });

  cantonesArray = [...new Set(cantonesArray)];
  return cantonesArray.sort();
}