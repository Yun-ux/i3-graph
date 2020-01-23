import React, { useState } from "react";
import Graph from "./components/Graph";

function App() {
  // states
  const [data, setData] = useState([90, 78, 93, 78, 8]);
  // methods
  const handleChange = (val, idx) => {
    const newData = [...data];
    newData[idx] = +val;
    setData(newData);
  };
  // jsx
  return (
    <>
      {data.map((v, i) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          <span>HTML skills:</span>
          <input
            type="range"
            defaultValue={v}
            onChange={e => handleChange(e.target.value, i)}
          />
          <span>{`${v}/100`}</span>
          <Graph />
        </div>
      ))}
    </>
  );
}
export default App;
