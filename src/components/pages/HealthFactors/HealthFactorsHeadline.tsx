import React from "react";
import FadeInSection from "../../FadeInSection";

import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function HealthFactorsHeadline() {
  return (
    <FadeInSection>
      <h2
        className={`${oswald_bold.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
      >
        Health Factors
      </h2>
    </FadeInSection>
  );
}
