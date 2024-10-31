import { useEffect, useState } from "react";
import "./App.css";
import tableHeadersFilter from "./scripts/tableHeadersFilter";
import dataFiltered from "./scripts/dataFiltered";
import optionsFilter from "./scripts/optionsFilter"
import getAllData from "./scripts/getAllData";
import searchFilter from "./scripts/searchFilter";

function App() {
  
  
  const [isVisible, setIsVisible] = useState(false);
  const [week, setWeek] = useState("thisWeek")
  const [data, setData] = useState(getAllData(week));
  const options = tableHeadersFilter().filter((key) => key != "sectores");
  const [option, setOption] = useState(options[0]);

  useEffect(() => {
    
   setData(getAllData(week))
  }, [week])
  
  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setData(searchFilter(value,week));
    console.log(searchFilter(value));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setData(dataFiltered(name, value,week));
  };
  return (
    <>
      <header>
        <div className="header-container container">
          <h1>
            Programación cortes del servicio de energía eléctrica para
            Tungurahua
          </h1>
          <p>Del 31 de octubre al 03 de noviembre del 2024.</p>
          <p className="info">
            *Recuerda que debido a la mejora de las condiciones hidrológicas,
            los cortes de energía pueden reducirse dentro del periodo de corte
            programado.
          </p>
        </div>
      </header>

      <main>
        <div className="main-container container">
        <div>
          <button onClick={() => setWeek("thisWeek")}> 1 oct - 3 nov</button>
          <button onClick={() => setWeek("nextWeek")}> 4 nov - 7 nov</button>
        </div>
          <div className="forms-section">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search">Buscar: </label>
              <input
                type="search"
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
                {options.map((option) => (
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
                  {optionsFilter(option,week).map((e) => {
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
            <div className="industrias-container">
              <p
                className="industrias-header"
                onClick={() => setIsVisible(!isVisible)}
              >
                Sectores industriales <span>{isVisible ? "▲" : "▼"}</span>
              </p>
              <div className={`industrias-table-container`}>
                {isVisible && (
                  <table className={`industrias-table`}>
                    <thead>
                      {tableHeadersFilter("industrias").map((item) => (
                        <th>{item.toUpperCase()}</th>
                      ))}
                    </thead>
                    <tbody>
                      {getAllData("industrias")?.map((item) => (
                        <tr>
                          {tableHeadersFilter("industrias").map((key) => (
                            <td>{item[key]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  {tableHeadersFilter().map((item) => (
                    <th>{item.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.map((item) => (
                  <tr>
                    {tableHeadersFilter().map((key) => (
                      <td>{item[key]}</td>
                    ))}
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
