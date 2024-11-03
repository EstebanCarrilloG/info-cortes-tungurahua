import dataSelection from "./dataSelection";

export default function optionsFilter(key) {
  let options = [];
  options.push("");

  data.map((e) => {
    e.table_data.map((e) => {
      options.push(e[key]);
    });
  });

  options = [...new Set(options)];
  return options.sort();
}
