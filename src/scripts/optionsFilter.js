import dataSelection from "./dataSelection";


export default function optionsFilter(key,week) {
  const data = dataSelection(week);
  let cantonesArray = [];
  cantonesArray.push("");

  data.general.map((e) => {
    e.table_data.map((e) => {
      cantonesArray.push(e[key]);
    });
  });

  cantonesArray = [...new Set(cantonesArray)];
  return cantonesArray.sort();
}
