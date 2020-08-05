import React from "react";
import SelectorItem from "./SelectorItem";
import rollerCoasters from "../content/rollerCoasters.json";

const SelectorList = ({ onRollerCoasterSelect }) => {
  const renderedList = rollerCoasters.map((item) => {
    return (
      <SelectorItem
        key={item.id}
        location={item.location}
        id={item.id}
        onRollerCoasterSelect={onRollerCoasterSelect}
        countryCode={item.countryCode}
      />
    );
  });

  return renderedList;
};

export default SelectorList;
