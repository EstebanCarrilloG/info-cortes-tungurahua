import dataSelection from "./dataSelection";

export default function searchFilter(value, week) {
  const dataInfo = dataSelection(week);
  let newData = [];
  const regex = new RegExp(`(${value})`, "gi");

  dataInfo.general?.map((e) => {
    e.table_data.map((e) => {
     
      if (e["canton"]?.match(regex) || e["parroquias"]?.match(regex) || e["alimentador"]?.match(regex) || e["sectores"]?.match(regex)) {
        let highlightedData = { ...e };
        
        highlightedData["canton"] = highlightedData["canton"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["parroquias"] = highlightedData["parroquias"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["alimentador"] = highlightedData["alimentador"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["sectores"] = highlightedData["sectores"]?.replace(regex, "<span className='highlight'>$1</span>");

        newData.push(highlightedData);
      }
    });
  });

  return newData;
}