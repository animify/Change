import React from "react";
import { SEMANTIC_COMMIT_TYPES } from "../../lib/constants";

const Root: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {Object.values(SEMANTIC_COMMIT_TYPES).map(data => (
          <div key={data.type}>
            <p>Type: {data.type}</p>
            <p>Description: {data.description}</p>
            <p>Action: {data.action}</p>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Root;
