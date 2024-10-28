import { useState } from "react";
import "./App.css";

import cantones from "./scripts/cantonFilter";
import thFilter from "./scripts/thFilter";
import clearString from "./helpers/clearString";
import dataFiltered from "./scripts/dataFiltered";

function App() {
  const[data, setData] = useState({})
  const cantonesList = cantones();
  const thItems = thFilter();

  const handleChange = (e)=>{
    e.preventDefault();
    const {name, key} = e.target;

    console.log(e.key);

    dataFiltered(key);

  }
  return (
    <>
      <h1>Horarios de cortes de luz para la provincia de tungurahua</h1>
      <p>Consulata los hoarios de cortes de luz en tu sector aqui</p>
      <form onChange={handleChange}>
        <select name="cantones" id="cantones">
          {cantonesList.map((canton) => {
            return (
              canton !== null && <option name={canton} key={canton}> {clearString(canton)}</option>
            );
          })}
        </select>
      </form>
      <table>
        <thead>
          <th>
          {
            thItems.map((item) =>
              <td>{item.toUpperCase()}</td>
            )
          }
            
          </th>
        </thead>
        <tbody>
          <tr>
           
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
