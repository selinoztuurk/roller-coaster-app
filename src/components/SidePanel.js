import React, { useState } from "react";
import Selector from "./Selector";

const SidePanel = ({ onRollerCoasterSelect, currentVideo, onMute, muted }) => {
  const [panelActive, setPanelActive] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: panelActive ? "block" : "none",
          alignSelf: "left",
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "absolute",
          top: "0",
          right: "0",
          width: "25%",
          height: "100%",
        }}
      >
        <h1
          className="ui header"
          style={{
            margin: "5%",
            background: "-webkit-linear-gradient(#33FF99, #33B5FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "40px",
          }}
        >
          Buckle Up!
        </h1>
        <p style={{ margin: "5%", fontSize: "15px" }}>
          A place to hang out for some virtual adrenaline rush.
        </p>
        <div style={{ display: "inline" }}>
          <div style={{ marginLeft: "5%" }}>
            <Selector
              onRollerCoasterSelect={onRollerCoasterSelect}
              currentVideo={currentVideo}
            />
          </div>
          {true ? null : (
            <button
              style={{
                marginLeft: "10%",
              }}
              className="ui basic button"
              onClick={() => onMute()}
            >
              {muted ? "Unmute" : "Mute"}
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "right",
          justifyContent: "right",
          position: "absolute",
          top: "2%",
          right: "0",
          width: "5%",
        }}
      >
        <img
          onClick={() => {
            setPanelActive(!panelActive);
          }}
          alt="Hide Button"
          src={
            panelActive
              ? "https://image.flaticon.com/icons/svg/747/747515.svg"
              : "https://image.flaticon.com/icons/svg/747/747516.svg"
          }
          style={{ width: "60%", margin: "20%" }}
        ></img>
      </div>
    </div>
  );
};

export default SidePanel;
