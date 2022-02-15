import React from "react";

function GIFCanvas({ ref, background, body, head, eyes, limbs }) {
  return (
    <div
      ref={ref}
      className="relative w-[450px] flex flex-col justify-center items-center"
    >
      <img
        src={background}
        alt="background"
        className="h-full w-[450px] object-cover absolute z-0"
      />
      <img src={body} alt="body" className="absolute z-10" />
      <img src={limbs} alt="limbs" className="absolute z-20" />
      <img src={head} alt="head" className="absolute z-30" />
      <img src={eyes} alt="heeyesad" className="absolute z-30" />
    </div>
  );
}

export default GIFCanvas;
