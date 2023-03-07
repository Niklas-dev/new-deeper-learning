import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import LottiePlayer from "@/components/LottiePlayer";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function SalutogenesisReview() {
  return (
    <div className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px]">
      <div className="max-w-[1920px]   md:min-h-[800px]    w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <FadeInSection>
          <h2
            className={`${oswald_bold.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
          >
            Review of Salutogenesis Model
          </h2>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center">
            <div className="">
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-8`}
              >
                Salutogenesis Model Critics
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-3xl pt-4 text-[#717171]`}
              >
                The Salutogenesis model has been resounded for its special path
                to gathering the coinage and conservation of health. still, it
                has also faced examens. One review is the lack of clarity in
                some areas of the model. The language exercised may be delicate
                fornon-experts to understand, making it less workable for
                certain prey groups. Another review is that the model may
                complexify the complication of reality. criticizers argue that
                the reality of mortal health and well- being is much more daedal
                than the model portrays. Equally, the model focuses primarily on
                individual factors, similar to particular stages and pieces, and
                often ignores structural and community factors that can have an
                impact on health and well-being, similar to deprivation and
                community inequality. Although the model acknowledges pressure
                as an important procurator for health and well- being, some
                criticizers argue that it doesn&apos;t completely explain how
                pressure affects the body and what procurators contribute to
                pressure.
              </p>
            </div>
            <div className="">
              <LottiePlayer
                classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] "
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_wusrjror.json"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
