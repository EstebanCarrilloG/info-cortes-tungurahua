import dataSelection from "./dataSelection";
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapa todos los caracteres especiales
}

export default function searchFilter(value, week) {
  const dataInfo = dataSelection(week);
  let newData = [];

  const escapedValue = escapeRegExp(value);
  const regex = new RegExp(`(${escapedValue})`, "gi");



  dataInfo.general?.map((e) => {
    e.table_data.map((e) => {
      if(!value){
        newData.push(e)
      }else{
     
      if (e["canton"]?.match(regex) || e["parroquias"]?.match(regex) || e["alimentador"]?.match(regex) || e["sectores"]?.match(regex)) {
        let highlightedData = { ...e };
        
        highlightedData["canton"] = highlightedData["canton"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["parroquias"] = highlightedData["parroquias"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["alimentador"] = highlightedData["alimentador"]?.replace(regex, "<span className='highlight'>$1</span>");
        highlightedData["sectores"] = highlightedData["sectores"]?.replace(regex, "<span className='highlight'>$1</span>");

        newData.push(highlightedData);
      }
    }
    });
  });

  return newData;
}