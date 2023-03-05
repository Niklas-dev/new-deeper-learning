import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function WHOReviewBody() {
  return (
    <FadeInSection>
      <div className="flex flex-col md:flex-row items-center">
        <div className="">
          <h3
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-8`}
          >
            WHO Definition Critics
          </h3>
          <p
            className={`${oswald.className} text-center md:text-start text-lg md:text-3xl pt-4 text-[#717171]`}
          >
            The definition has received appreciation for its holistic
            perspective, which acknowledges that social, psychological, and
            physical elements all play a role in one&apos;s health and
            well-being. Also, it emphasizes a proactive method of maintaining
            health that emphasizes the advancement of wellbeing rather than only
            the absence of illness. Furthermore, the definition offers a
            universal vocabulary and comprehension of health and has been
            endorsed by governments, health organizations, and scholars around
            the world. The definition does, however, include some restrictions.
            It establishes an aspirational norm for health that may not be
            attainable for everyone, particularly in underprivileged or
            low-income areas. Moreover, measurement and assessment may be
            challenging due to the definition&apos;s unclear definition of
            &quot;full physical, mental, and social well-being&quot;. The
            various factors that affect health outcomes may not be fully
            captured by the term, which could restrict attempts to work towards
            health equity and eradicate health inequities. Despite these
            drawbacks, the WHO definition of health continues to be an important
            resource general approach to health and wellbeing.
          </p>
        </div>
        <div className="">
          <Player
            className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] "
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_qq6gioyz.json"
          ></Player>
        </div>
      </div>
    </FadeInSection>
  );
}
