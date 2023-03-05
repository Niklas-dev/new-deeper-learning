"use client";
import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import Typed from "react-typed";
import LottiePlayer from "@/components/LottiePlayer";
const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function WhatsHealth() {
  return (
    <main className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px] overflow-y-visible">
      <div className="max-w-[1920px]   md:min-h-[800px]    w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <FadeInSection>
          <h2
            className={`${oswald_bold.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
          >
            But what determines health?
          </h2>
        </FadeInSection>

        <div className="h-screen  flex flex-col justify-center items-center">
          <Typed
            className={`${oswald_bold.className} text-2xl text-center sm:text-4xl md:text-4xl lg:text-5xl`}
            loop
            smartBackspace
            startDelay={500}
            typeSpeed={60}
            backSpeed={50}
            strings={[
              "Is it your doctor?",
              "Is it your mind?",
              "Is it your general constitution?",
              "There must be factors to determine health!",
              "But what are the factors?",
              "How can we summarize health",
            ]}
          />
          <LottiePlayer
            classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] "
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_vvx2gjpt.json"
          />
        </div>
      </div>
    </main>
  );
}
