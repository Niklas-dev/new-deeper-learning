"use client";
import React, { useEffect, useState } from "react";
import FadeInSection from "../../FadeInSection";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";
import SelfAssesment from "./QuizStates/SelfAssesment";
import QuestionDisplay from "./QuizStates/QuestionDisplay";
import RatingHeadline from "./RatingHeadline";
import questionStates from "./questions";
import ModalWrapper from "./ModalWrapper";
import RatingSubtitle from "./RatingSubtitle";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Landing() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  return (
    <main className="flex justify-center h-screen items-center bg-white min-h-[500px] md:min-h-[1050px] pt-10 overflow-y-visible">
      <div className="max-w-[1920px]  max-h-[1080px] min-h-[800px]   h-screen w-screen md:px-20 lg:px-40 pt-10 px-12">
        <RatingHeadline />
        <div className="pt-4 ">
          <RatingSubtitle />

          <ModalWrapper>
            <div className="p-6 h-full ">
              {currentQuestion === -1 ? (
                <SelfAssesment
                  onContinue={() => setCurrentQuestion((prev) => prev + 1)}
                />
              ) : (
                <QuestionDisplay
                  onContinue={() => setCurrentQuestion((prev) => prev + 1)}
                  currentNum={currentQuestion}
                  question={questionStates[currentQuestion]}
                />
              )}
            </div>
          </ModalWrapper>
        </div>
      </div>
    </main>
  );
}
