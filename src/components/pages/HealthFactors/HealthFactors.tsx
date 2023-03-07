import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import AllHealthFactors from "./AllHealthFactors";
import GeneralInfo from "./GeneralInfo";
import HealthFactorsHeadline from "./HealthFactorsHeadline";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function HealthFactors() {
  return (
    <div className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px]">
      <div className="max-w-[1920px]   md:min-h-[800px]   w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <HealthFactorsHeadline />
        <GeneralInfo />

        <AllHealthFactors />
      </div>
    </div>
  );
}
