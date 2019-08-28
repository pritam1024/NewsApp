import React from "react";

const Sources = ({ sources, value, onHandleChange }) => {
  return (
    <div className="sources">
      <select value={value} onChange={onHandleChange}>
        {sources.map(source => (
          <option value={source.id} key={source.id}>
            {source.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sources;
