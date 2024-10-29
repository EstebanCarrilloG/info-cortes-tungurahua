import data from "../data/data.json";
import clearString from "../helpers/clearString";

export default function cantones() {
  let cantonesArray = [];

  data.map((e) => {
    e.table_data.map((e, i) => {
      //console.log(casa)

      cantonesArray.push(e["CANTÓN"]);
    });
  });

  cantonesArray = [...new Set(cantonesArray)];
  //console.log(cantonesArray)

  return cantonesArray;
}
