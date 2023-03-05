import FadeInSection from "../../FadeInSection";

import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function AllHealthFactors() {
  return (
    <ul className="pl-10 ">
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Genes{" "}
            <span className={`${oswald.className} text-xl `}>
              [Specfic genes play an important role for different diseases.]
            </span>
          </h4>
        </li>
      </FadeInSection>
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Lifestyle{" "}
            <span className={`${oswald.className} text-xl `}>
              [The choices we make in our daily lives, such as drug use, sleep
              habits and activity, have a decisive influence.]
            </span>
          </h4>
        </li>
      </FadeInSection>
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Environment{" "}
            <span className={`${oswald.className} text-xl `}>
              [The environment in which we live and work can affect our health.
              Poor air quality, polluted water and unhealthy working conditions
              can lead to health problems.]
            </span>
          </h4>
        </li>
      </FadeInSection>
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Mental State{" "}
            <span className={`${oswald.className} text-xl `}>
              [Mental health can also have a significant impact on our health.
              Stress, anxiety, depression and other mental illnesses can affect
              our physical health.]
            </span>
          </h4>
        </li>
      </FadeInSection>
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Social, economic factors{" "}
            <span className={`${oswald.className} text-xl `}>
              [Factors such as education, income, employment, access to health
              care and social support can all have an impact on our health.]
            </span>
          </h4>
        </li>
      </FadeInSection>
      <FadeInSection>
        <li className="factor">
          <h4
            className={`${oswald_bold.className} text-center md:text-start text-xl md:text-3xl pt-8 `}
          >
            👉 Medical care{" "}
            <span className={`${oswald.className} text-xl `}>
              [Access to quality health care can help prevent diseases or detect
              and treat them at an early stage.]
            </span>
          </h4>
        </li>
      </FadeInSection>
    </ul>
  );
}
