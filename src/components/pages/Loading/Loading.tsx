import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export default function Loading() {
  return (
    <div className="h-[99%] w-[99%] flex justify-center items-center absolute bg-white z-20 overflow-x-hidden">
      <Player
        className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] "
        autoplay
        src="https://assets10.lottiefiles.com/packages/lf20_poqmycwy.json"
      ></Player>
    </div>
  );
}
