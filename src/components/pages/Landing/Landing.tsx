import React from "react";

import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import ScrollDown from "./ScrollDown";
import Headline from "./Headline";
import CenterText from "./CenterText";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "700" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function Landing() {
  return (
    <div className="flex justify-center h-screen items-center bg-white min-h-[500px] md:min-h-[750px] overflow-y-visible">
      <div className="max-w-[1920px]  max-h-[1080px] min-h-[800px] h-screen w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <Headline />
        <CenterText />

        <ScrollDown />
      </div>
    </div>
  );
}
