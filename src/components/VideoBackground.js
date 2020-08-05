import React from "react";

const VideoBackground = ({ currentVideo }) => {
  const videoProps =
    "?autoplay=1&fullframe=1&controls=0&disablekb=1&loop=1&mute=1&playlist=" +
    currentVideo.videoId +
    "&start=" +
    currentVideo.start +
    "&end=" +
    currentVideo.end;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "100%",
        right: "100%",
        height: "100%",
        width: "100%",
      }}
    >
      <iframe
        title={currentVideo.location}
        key={currentVideo.id}
        width="100%"
        height="100%"
        src={
          "https://www.youtube.com/embed/" + currentVideo.videoId + videoProps
        }
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="1"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
