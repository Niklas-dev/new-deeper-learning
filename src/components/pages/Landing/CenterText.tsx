import React from "react";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";
import LottiePlayer from "@/components/LottiePlayer";
const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "700" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function CenterText() {
  return (
    <div className="min-h-[500px] h-[300px] lg:h-[500px] xl:h-[650px] flex flex-row justify-center md:justify-start gap-32 ">
      <div className="flex flex-col justify-center h-full ">
        <h1
          className={`${oswald.className} text-center md:text-start sm:text-[40px] text-[38px] md:text-[56px]  lg:text-[66px] xl:text-[112px] leading-[1.05] w-fit`}
        >
          Something about <span className="text-[#03C988]">health </span>
          insurance
        </h1>
        <div className="pt-24 md:flex flex-row justify-center md:flex-row md:justify-start hidden ">
          <button
            className={`${oswald.className} bg-[#03C988] text-[#13005A] text-lg md:text-4xl rounded-lg px-4 p-y1 md:px-5 md:py-2 hover:scale-105 transition-transform`}
          >
            Get Started
          </button>
        </div>
        <div className="md:hidden pt-10">
          <LottiePlayer
            classes="w-[200px] h-[200px]"
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_xgdvjjxc.json"
          />
        </div>
      </div>
      <div className="md:flex hidden">
        <LottiePlayer
          classes="w-30 h-30 lg:w-[28rem] lg:h-[28rem] "
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_xgdvjjxc.json"
        />
      </div>
    </div>
  );
}
