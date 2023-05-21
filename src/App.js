import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { test_data } from "./testData";

function App() {
  const { data: serverData } = useFetch(
    "https://assessments.reliscore.com/api/cric-scores/"
  );
  const testData = JSON.parse(test_data);
  const [source, setSource] = useState("test");
  const [sourceData, setSourceData] = useState(testData);
  const [searchText, setSearchText] = useState("");
  const [avg, setAvg] = useState("a");

  const sourceHandler = (e) => {
    setSource(e.target.value);
  };

  useEffect(() => {
    if (source === "test") {
      setSourceData(testData);
    } else if (source === "server") {
      setSourceData(serverData);
    }
  }, [source]);

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    calculateAvg();
  }, [searchText, sourceData]);

  const calculateAvg = () => {
    let arr = sourceData.map((el) => {
      if (el.includes(searchText)) {
        return el[1];
      }
      return "a";
    });
    let ansArr = arr.filter((item) => {
      if (item !== "a") {
        return item;
      }
    });

    setAvg(ansArr[0] || "a");
  };

  return (
    <div className="app">
      <form>
        Source of data:
        <input
          id="src-test"
          type="radio"
          name="data-source"
          value="test"
          onChange={sourceHandler}
          checked={source === "test"}
        />
        <label htmlFor="src-local">Test Data</label>
        <input
          id="src-server"
          type="radio"
          name="data-source"
          value="server"
          checked={source === "server"}
          onChange={sourceHandler}
        />
        <label htmlFor="src-server">Server Data</label>
      </form>
      <div className="row">
        <div className="country">
          <form>
            The Country:{" "}
            <input
              className="country-input"
              type="text"
              value={searchText}
              onChange={inputHandler}
            />
          </form>
        </div>
        <div className="average">The Average: {avg}</div>

        {avg !== "a" && (
          <div className="horiz-bar" style={{ width: `${2 * avg}px` }}>
            &nbsp;
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
