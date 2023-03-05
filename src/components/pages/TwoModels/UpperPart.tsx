import React from "react";
import FadeInSection from "../../FadeInSection";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function UpperPart() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <FadeInSection>
          <div>
            <h3
              className={`${oswald_bold.className} text-xl md:text-4xl text-center md:text-start  pt-8`}
            >
              Salutogenesis-Model
            </h3>
            <p
              className={`${oswald.className} text-lg md:text-3xl text-[#717171] pt-4 max-w-[700px] text-center md:text-start`}
            >
              The salutogenesis model is a concept that deals with the
              understanding of health and well-being. The model describes the
              factors that contribute to a healthy life and emphasises the
              importance of resources and skills that a person possesses to cope
              with stress and challenges. The salutogenesis model is a
              preventive concept that focuses on creating healthy living
              conditions and helping people to use their resources and skills to
              stay healthy.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="">
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] "
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_zdjUpn36hX.json"
            ></Player>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
