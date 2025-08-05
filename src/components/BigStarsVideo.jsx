import React from "react";

const BigStarsVideo = () => {
  const videoId = "1085027360";
  return (
    <div className="relative lg:w-[40rem] lg:h-[23rem] h-60 md:h-[30rem] sm:h-96 3xl:w-[60rem] 3xl:h-[35rem]">
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    src="https://www.youtube.com/embed/XWL73o0z0vw?autoplay=1&mute=1&loop=1&modestbranding=1&controls=0&rel=0&showinfo=0"
    // <iframe width="914" height="514" src="https://www.youtube.com/embed/XWL73o0z0vw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    title="BIG STARS"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
  <div className="absolute top-0 left-0 w-full h-full bg-black/10 pointer-events-none z-20"></div>
  <div className="absolute top-0 left-0 w-full h-7 bg-white pointer-events-none z-20"></div>
  <div className="absolute bottom-0 left-0 w-full h-7 bg-white pointer-events-none z-20"></div>
</div>

  );
};

export default BigStarsVideo;
