import React, { useState } from "react";
import VideoBackground from "./components/VideoBackground";
import SidePanel from "./components/SidePanel";
import rollerCoasters from "./content/rollerCoasters.json";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(rollerCoasters[0]);

  function onSelect(id) {
    setCurrentVideo(rollerCoasters[id]);
  }

  return (
    <div>
      <VideoBackground currentVideo={currentVideo} />
      <SidePanel onRollerCoasterSelect={onSelect} currentVideo={currentVideo} />
    </div>
  );
};

export default App;
