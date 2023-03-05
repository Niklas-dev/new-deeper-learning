import React, { useState } from "react";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import { Question } from "../types";
const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function QuestionDisplay({
  currentNum,
  question,
  onContinue,
}: {
  currentNum: number;
  question: Question;
  onContinue: () => void;
}) {
  const [currentSelectedNum, setCurrentSelectedNum] = useState(-1);

  const handleContinue = () => {
    onContinue();
    setCurrentSelectedNum(-1);
  };
  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div>
          <h3
            className={`${oswald_bold.className} text-start text-2xl md:text-4xl `}
          >
            Question {currentNum + 1}
          </h3>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3
              className={`${oswald_bold.className} text-start pt-20 text-2xl md:text-3xl `}
            >
              {question.question}
            </h3>
            <a
              href="https://www.youtube.com/"
              className="flex flex-row items-center gap-2 cursor-pointer"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <svg
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"
                  fill="#03C988"
                />
              </svg>
              <p
                className={`${oswald.className} text-start text-basr md:text-lg text-[#717171]`}
              >
                {question.hint} (Click for more info)
              </p>
            </a>
          </div>
          <ul className="pt-4">
            {question.options.map((option, index) => (
              <button
                onClick={() => setCurrentSelectedNum(index)}
                className="flex flex-row gap-4 h-10 items-center"
                key={index}
              >
                <input
                  className="accent-[#03C988]"
                  checked={currentSelectedNum === index}
                  type={"radio"}
                />
                <h4
                  className={`${oswald.className} text-start text-xl md:text-2xl `}
                >
                  {option.text}
                </h4>
              </button>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <button
          onClick={() => handleContinue()}
          className={`${oswald_bold.className} text-start text-lg md:text-2xl text-[#13005A] bg-[#03C988] rounded-lg px-4 pb-2 pt-1 transition-transform hover:scale-105`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
