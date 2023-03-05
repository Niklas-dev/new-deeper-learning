import React from "react";
import FadeInSection from "../../FadeInSection";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Headline() {
  return (
    <FadeInSection>
      <h2
        className={`${oswald_bold.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
      >
        The Two Models
      </h2>
    </FadeInSection>
  );
}
