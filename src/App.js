import React, { useState } from "react";
import VideoBackground from "./components/VideoBackground";
import SidePanel from "./components/SidePanel";
import rollerCoasters from "./content/rollerCoasters.json";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(rollerCoasters[0]);
  const [muted, setMuted] = useState(true);

  function onSelect(id) {
    setCurrentVideo(rollerCoasters[id]);
  }

  function onMute() {
    setMuted(!muted);
  }

  return (
    <div>
      <VideoBackground currentVideo={currentVideo} muted={muted} />
      <SidePanel
        onRollerCoasterSelect={onSelect}
        currentVideo={currentVideo}
        onMute={onMute}
        muted={muted}
      />
    </div>
  );
};

export default App;
