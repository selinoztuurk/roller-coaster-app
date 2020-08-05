import React from "react";
import SelectorList from "./SelectorList";

const Selector = ({ onRollerCoasterSelect, currentVideo }) => {
  return (
    <div>
      <div
        className="ui compact menu"
        style={{
          margin: "5%",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <div className="ui simple dropdown item">
          {currentVideo.location}
          <i className="dropdown icon"></i>
          <div
            className="menu"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          >
            <SelectorList onRollerCoasterSelect={onRollerCoasterSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
