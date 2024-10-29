import data from "../data/data.json";
export default function thFilter() {
    let keys = Object.keys(data[0].table_data[0]);

  return keys;
}
