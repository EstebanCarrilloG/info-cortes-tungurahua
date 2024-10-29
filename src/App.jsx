import { useState } from "react";
import "./App.css";
import thFilter from "./scripts/thFilter";
import dataFiltered from "./scripts/dataFiltered";
import getAllData from "./scripts/getAllData";
import optionsFilter from "./scripts/optionsFilter";
import searchFilter from "./scripts/searchFilter";

function App() {
  const [data, setData] = useState(getAllData());
  const thItems = thFilter();
  const options = thFilter().filter(key => key != 'sectores');
  const [option, setOption] = useState(options[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setData(searchFilter(value));
    console.log(searchFilter(value));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setData(dataFiltered(name, value));
  };
  return (
    <>
      <header>
        <div className="header-container container">
          <h1>
            Programación cortes del servicio de energía eléctrica Tungurahua
          </h1>
          <p>Del 28 al 30 de octubre del 2024</p>
          <p className="info">*Recuerda que debido a la mejora de las condiciones hidrológicas, los cortes de energía
          pueden reducirse dentro del periodo de corte programado.</p>
        </div>
      </header>

      <main>
        <div className="main-container container">
          <div className="forms-section">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search">Buscar: </label>
              <input
                type="search"
                name="CANTÓN"
                id="search"
                placeholder="canton, parroquias, alimentador o sectores"
                onChange={(e) => handleSearch(e)}
              />
            </form>

            <form className="options-form">
              <label htmlFor="options">Filtrar por: </label>
              <select
                name="options"
                id="options"
                onChange={(e) => setOption(e.target.value)}
              >
                {options.map((option, i) => (
                  <>
                    <option value={option} key={option}>
                      {option}
                    </option>
                  </>
                ))}
              </select>
            </form>
            {option && (
              <form className="data-filter-form" onChange={handleChange}>
                <label htmlFor={option.toLowerCase()}>{option + ": "}</label>
                <select name={option} id={option.toLowerCase()}>
                  {optionsFilter(option).map((e) => {
                    return (
                      e !== null && (
                        <option value={e} key={e}>
                          {e}
                        </option>
                      )
                    );
                  })}
                </select>
              </form>
            )}
          </div>

          <div className="table-container">
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
                    <td>{item["canton"]}</td>
                    <td>{item["parroquias"]}</td>
                    <td>{item["alimentador"]}</td>
                    <td>{item["sectores"]}</td>
                    <td>{item["lun 28"]}</td>
                    <td>{item["mar 29"] || item["Mar-29"]}</td>
                    <td>{item["mier 30"] || item["Miérc 30"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
