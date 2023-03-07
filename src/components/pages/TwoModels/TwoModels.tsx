import React from "react";

import TwoModelsHeadline from "./TwoModelsHeadline";
import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";

export default function TwoModels() {
  return (
    <div className="flex justify-center   items-center bg-white min-h-[500px] md:min-h-[750px] pt-10">
      <div className="max-w-[1920px]  max-h-[1080px] min-h-[800px]    w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <TwoModelsHeadline />

        <UpperPart />
        <LowerPart />
      </div>
    </div>
  );
}
