import React from "react";

const SelectorItem = ({ location, id, onRollerCoasterSelect, countryCode }) => {
  const src = "https://www.countryflags.io/" + countryCode + "/flat/64.png";

  return (
    <div className="item" onClick={() => onRollerCoasterSelect(id)}>
      <img src={src}></img>
      {location}
    </div>
  );
};

export default SelectorItem;
