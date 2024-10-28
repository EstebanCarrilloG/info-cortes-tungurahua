import data from "../data/data.json";
import clearString from "../helpers/clearString";
export default function dataFiltered(value){
    

    let newData = data.map((e) =>
        e.table_data.filter((e) => e["CANTÓN"] == "AMBATO")
    )

    console.log(newData)


}