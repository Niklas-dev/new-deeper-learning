import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Factors() {
  return (
    <main className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px] pb-20">
      <div className="max-w-[1920px]   md:min-h-[800px]   w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <FadeInSection>
          <h2
            className={`${oswald_bold.className} text-[40px]  text-center md:text-start pt-20 md:pt-0 md:text-[40px] lg:text-[48px] `}
          >
            What these factors mean...
          </h2>
        </FadeInSection>

        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your Genetics
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                Our genes play an important role in determining our risk for
                certain diseases and conditions. There are many genetic diseases
                that are caused by a change or mutation in a single gene, such
                as cystic fibrosis or sickle cell anaemia. But more complex
                diseases such as diabetes, cancer or heart disease also have a
                genetic influence. Although we cannot change our genes, we can
                still take steps to reduce our risk of these diseases. For
                example, we can maintain a healthy lifestyle, exercise regularly
                and eat a balanced diet to improve our overall health levels.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_hogyzwkh.json"
            ></Player>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your Lifestyle
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                Our daily choices have a significant impact on our health. A
                healthy diet, sufficient physical activity, adequate sleep
                habits and reduced alcohol and tobacco consumption can help
                reduce the risk of heart disease, cancer and other health
                problems. An unhealthy lifestyle, on the other hand, can lead to
                obesity, diabetes and other serious health problems. It is
                important to make conscious choices to promote a healthy
                lifestyle and protect your health.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_ocGoFt.json"
            ></Player>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your Environment
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                The environment in which we live and work can affect our health.
                Air pollution, polluted water and unhealthy working conditions
                can lead to a variety of health problems, from respiratory
                diseases to cancer. It is important to ensure that the
                environment we live in is safe and healthy. This can be achieved
                through government rules and regulations as well as individual
                efforts, such as buying environmentally friendly products or
                avoiding polluting environmental factors.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_cs0ptqy9.json"
            ></Player>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your Mental Health
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                Mental health can have a significant impact on our physical
                health. Stress, anxiety, depression and other mental illnesses
                can affect our immune system and increase the risk of physical
                illness. It is important to look after your own mental health
                and seek support and treatment where necessary to ensure optimal
                health.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_fCKkXdwO3V.json"
            ></Player>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your Social and Economic position
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                Factors such as education, income, employment, access to
                healthcare and social support can all have an impact on our
                health. People with higher education and higher income tend to
                have better health prospects and usually have better access to
                health care.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets7.lottiefiles.com/private_files/lf30_oOGQFY.json"
            ></Player>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex md:flex-row flex-col items-center">
            <div>
              <h3
                className={`${oswald_bold.className} text-center md:text-start text-xl md:text-4xl pt-16`}
              >
                Your access to Medical Care
              </h3>
              <p
                className={`${oswald.className} text-center md:text-start text-lg md:text-2xl pt-4 text-[#717171]`}
              >
                Medical care is an important factor in the health of an
                individual and a society as a whole. Access to quality medical
                care can help prevent or detect and treat diseases early, which
                improves people&apos;s quality of life and survival.
              </p>
            </div>
            <Player
              className="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_4FGi6N.json"
            ></Player>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
