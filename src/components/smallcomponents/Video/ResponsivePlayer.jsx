import React from "react";
import ReactPlayer from "react-player";

function ResponsivePlayer({ videolink }) {
  return (
    <ReactPlayer
      width="100%"
      controls={true}
      url={videolink}
      origin="http://localhost:3000"
    />
  );
}

export default ResponsivePlayer;
