import React from "react";

function LandingVideo() {
  return (
    <div className="relative h-[180px] w-full overflow-hidden sm:h-[230px] md:h-[250px]">
      <video
        className="absolute left-0 h-auto w-full lg:top-[-225px]"
        autoPlay
        muted
        loop
      >
        <source src="/landing-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute right-0 top-0 p-2 md:p-4">
        <img
          className="h-14 w-14 rounded md:h-20 md:w-20 lg:h-24 lg:w-24"
          src="cap-app.png"
        />
      </div>
    </div>
  );
}

export default LandingVideo;
