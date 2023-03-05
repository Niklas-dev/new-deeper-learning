import React, { useState } from "react";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function SelfAssesment({
  onContinue,
}: {
  onContinue: () => void;
}) {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <h3
          className={`${oswald_bold.className} text-start text-2xl md:text-4xl `}
        >
          Self Assesment
        </h3>
        <p
          className={`${oswald.className} text-start text-lg md:text-xl text-[#717171]`}
        >
          Before we start with the questions you need to estimate your health by
          using the slider. Zero represents bad and 100 displays good. You can
          choose a value between those numbers.
        </p>
      </div>
      <div className="h-40 flex flex-col justify-center">
        <div className="flex flex-row items-center">
          <input
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            id="default-range"
            type="range"
            max={100}
            min={0}
            className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500  rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-[#13005A]"
          />
          <div className="px-6">
            <p
              className={`${oswald_bold.className} w-12 text-center text-lg bg-white question-modal-shadow  px-3 rounded-lg`}
            >
              {value}
            </p>
          </div>
        </div>
      </div>
      <p
        className={`${oswald.className} text-start text-lg md:text-xl  text-[#717171]`}
      >
        This will be saved so you can later compare your estimation with the
        estimations calculated based on the answers. After pressing on CONTINUE
        you will get to the questions. Answer them briefly and make sure you
        read them carefully.
      </p>
      <div className="flex flex-row justify-end">
        <button
          onClick={() => onContinue()}
          className={`${oswald_bold.className} text-start text-lg md:text-2xl text-[#13005A] bg-[#03C988] rounded-lg px-4 pb-2 pt-1 transition-transform hover:scale-105`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
