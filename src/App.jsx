import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import "./App.css";
import tableHeadersFilter from "./scripts/tableHeadersFilter";
import getAllData from "./scripts/getAllData";
import searchFilter from "./scripts/searchFilter";
import pageInfo from "./data/pageInfo.json";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [week, setWeek] = useState("03");
  const [data, setData] = useState(getAllData(week));
  const [tabActive, setTabActive] = useState(week);
  const [searchValue, setSearchValue] = useState("");
  const mainRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setData(searchFilter(searchValue, week));
  }, [week, searchValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setSearchValue(value);

    setData(searchFilter(searchValue, week));
    setError("");
  };
  const handleScrollToSection = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div className="header-container container">
          <h1>
            Programación cortes del servicio de energía eléctrica para
            Tungurahua
          </h1>
          <p>{pageInfo[0].pageDescription}</p>
          <p className="info">
            *Recuerda que debido a la mejora de las condiciones hidrológicas,
            los cortes de energía pueden reducirse dentro del periodo de corte
            programado.
          </p>
        </div>
      </header>

      <main>
        <div className="main-container container" id="main" ref={mainRef}>
          <div>
            {pageInfo[0].tabsText.map((e) => (
              <button
                className={`buttons-selection ${tabActive === e.id ? "active" : ""}`}
                onClick={() => {
                  setWeek(e.id);
                  setTabActive(e.id);
                }}
              >
                {e.text}
              </button>
            ))}
          </div>
          <div className="forms-section">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search">
                Ingrese el cantón, parroquia, alimentador o sector del cual
                desee obtener información.
              </label>
              <div className="search-bar-container">
                <input
                  type="search"
                  id="search"
                  placeholder="Ejemplo: huachi loreto"
                  onChange={(e) => handleSearch(e)}
                  onClick={handleScrollToSection}
                />
                <IoSearchSharp />
              </div>
              <span>{error}</span>
            </form>
          </div>

          <div className="tables-container">
            <div className="general-data-container">
              {data.length > 0 ? (
                <table className="general-data-table">
                  <thead>
                    <tr>
                      {tableHeadersFilter(week).map((item, index) => (
                        <th key={index}>{item}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((item, trIndex) => (
                      <tr key={trIndex}>
                        {tableHeadersFilter(week).map((key, tdIndex) => (
                          <td
                            key={tdIndex}
                            dangerouslySetInnerHTML={{ __html: item[key] }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="no-results-found">
                  <b>
                    <span>ERROR: </span>No se encontraron resultados para el
                    termino de busqueda:{" "}
                    <span>{searchValue.toUpperCase()}</span>
                  </b>
                </p>
              )}
            </div>
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
                      <tr>
                        {tableHeadersFilter(week, "industrias").map(
                          (item, index) => (
                            <th key={index}>{item}</th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {getAllData(week, "industrias").map((item, trIndex) => (
                        <tr key={trIndex}>
                          {tableHeadersFilter(week, "industrias").map(
                            (key, tdIndex) => (
                              <td key={tdIndex}>{item[key]}</td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>
          Programación cortes del servicio de energía eléctrica para Tungurahua
          | ©2024
        </p>
        <p>Todos los derechos reservados.</p>
        <p></p>
        <br />
        <p>
          Desarrollado por:{" "}
          <a href="https://github.com/EstebanCarrilloG">Esteban Carrillo</a>
        </p>
      </footer>
    </>
  );
}

export default App;
