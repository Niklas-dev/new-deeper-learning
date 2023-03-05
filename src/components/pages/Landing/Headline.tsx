import React from "react";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import ScrollDown from "./ScrollDown";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "700" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function Headline() {
  return (
    <h2
      className={`${oswald.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
    >
      Deeper Learning
    </h2>
  );
}
