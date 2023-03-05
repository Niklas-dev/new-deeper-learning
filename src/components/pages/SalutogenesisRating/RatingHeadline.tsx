import { Oswald } from "@next/font/google";
import React from "react";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function RatingHeadline() {
  return (
    <h2
      className={`${oswald_bold.className} text-[40px]  text-center md:text-start md:text-[40px] lg:text-[48px] `}
    >
      Salutogenesis
    </h2>
  );
}
