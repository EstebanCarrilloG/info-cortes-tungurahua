import data from "../data/data.json";
import clearString from "../helpers/clearString";
export default function thFilter(){

    let tableHeaders = []

   let keys = Object.keys(data[0].table_data[0])

   return keys.map((e) =>{
    return clearString(e,true)
   } )

    

}