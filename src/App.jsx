import { useState } from "react";
import "./App.css";
import thFilter from "./scripts/thFilter";
import clearString from "./helpers/clearString";
import dataFiltered from "./scripts/dataFiltered";
import getAllData from "./scripts/getAllData";
import optionsFilter from "./scripts/optionsFilter";

function App() {
  const [data, setData] = useState(getAllData());
  const thItems = thFilter();
  const options = ["", "CANTÓN", "PARROQUIAS", "ALIMENTADOR"];
  const [option, setOption] = useState(options[0]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(dataFiltered(name, value));
  };
  return (
    <>
      <h1>
        Horarios de cortes de luz para la provincia de tungurahua: lun - 28 a
        miercoles - 30
      </h1>
      <p>Consulata los hoarios de cortes de luz en tu sector aqui</p>
      <form className="options-form">
        <p>Filtrar por:</p>
        <select
          name="options"
          id="options"
          onChange={(e) => setOption(e.target.value)}
        >
          {options.map((option, i) => (
            <>
              <option value={option} key={option}>
                {clearString(option)}
              </option>
            </>
          ))}
        </select>
      </form>
      {option && (
        <form onChange={handleChange}>
          <label htmlFor={option.toLowerCase()}>{option.toLowerCase()}</label>
          <select name={option} id={option.toLowerCase()}>
            {optionsFilter(option).map((e) => {
              return (
                e !== null && (
                  <option value={e} key={e}>
                    {clearString(e)}
                  </option>
                )
              );
            })}
          </select>
        </form>
      )}

      <table>
        <thead>
          <tr>
            {thItems.map((item) => (
              <th>{item.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item["CANTÓN"]}</td>
              <td>{item["PARROQUIAS"]}</td>
              <td>{item["ALIMENTADOR"]}</td>
              <td>{item["SECTORES"]}</td>
              <td>{item["Lun 28"]}</td>
              <td>{item["Mar 29"] || item["Mar-29"]}</td>
              <td>{item["Miér 30"] || item["Miérc 30"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
