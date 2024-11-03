import dataSelection from "./dataSelection";


export default function optionsFilter(key,week) {
  const data = dataSelection(week);
  let options = [];
  options.push("");

  data.general.map((e) => {
    e.table_data.map((e) => {
      options.push(e[key]);
    });
  });

  options = [...new Set(options)];
  return options.sort();
}