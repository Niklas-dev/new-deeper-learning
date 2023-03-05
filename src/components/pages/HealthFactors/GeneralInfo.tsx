import React from "react";
import FadeInSection from "../../FadeInSection";

import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
export default function GeneralInfo() {
  return (
    <>
      <FadeInSection>
        <h3
          className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
        >
          Something in common?
        </h3>
        <p
          className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
        >
          Even if the the WHO definition and the salutogenenis model state
          different points, they still need to rely on factors. The
          salutogenesis model defines them as risk and protection factors, while
          the WHO definition defines them in the three pillars of physical,
          mental and social well-being.
        </p>
      </FadeInSection>

      <FadeInSection>
        <h3
          className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-20`}
        >
          The general factors that play into health
        </h3>
      </FadeInSection>
    </>
  );
}
