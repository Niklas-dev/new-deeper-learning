import { Oswald } from "@next/font/google";
import React from "react";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function RatingSubtitle() {
  return (
    <div className="">
      <h3
        className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl `}
      >
        Rating
      </h3>
      <p
        className={`${oswald.className} text-center md:text-start text-lg md:text-2xl text-[#717171]`}
      >
        Get your personal rating based on the salutogenesis model by answering
        questions to determine your health risk.
      </p>
    </div>
  );
}
