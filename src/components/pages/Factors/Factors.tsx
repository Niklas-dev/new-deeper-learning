import React from "react";
import FadeInSection from "../../FadeInSection";
import { Player } from "@lottiefiles/react-lottie-player";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";
import LottiePlayer from "@/components/LottiePlayer";

const oswald_bold = Oswald({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Factors() {
  return (
    <div className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px] pb-20">
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
                Your genes play an important role in determining your risk for
                certain diseases and conditions. There are many genetic diseases
                that are caused by a change or mutation in a single gene. But
                more complex diseases such as diabetes, cancer or heart disease
                also have a genetic influence. Although you cannot change your
                genes, you can still take steps to reduce your risk of these
                diseases with a good Lifestyle.
              </p>
            </div>
            <LottiePlayer
              src="https://assets7.lottiefiles.com/packages/lf20_hogyzwkh.json"
              loop
              autoplay
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
            />
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
                Your daily choices have a significant impact on your health. A
                healthy diet, enough physical activity, proper sleeping habits
                and reduced alcohol and tobacco consumption can help reduce the
                risk of heart disease, cancer and other health problems. But
                everything that is considered healthy should always be
                considered carefully. An unhealthy lifestyle, on the other hand,
                can lead to obesity, diabetes and other serious health problems.
                It is important to make conscious choices to contribute to a
                healthy lifestyle and protect your health.
              </p>
            </div>
            <LottiePlayer
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_ocGoFt.json"
            />
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
                The environment in which you live and work can affect your
                health. Air pollution, polluted water and unhealthy working
                conditions can lead to a variety of health problems, from
                breathing problems to cancer. It is important to ensure that the
                environment you live in is safe and healthy. This can be
                achieved through government rules and regulations as well as
                individual efforts, such as buying environmentally friendly
                products or avoiding polluting environmental factors.
              </p>
            </div>
            <LottiePlayer
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_cs0ptqy9.json"
            />
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
                Mental health can have a significant impact on your physical
                health. Stress, anxiety, depression and other mental illnesses
                can affect your immune system and increase the risk of physical
                illness. It is important to look after your own mental health
                and seek support and treatment where necessary to ensure optimal
                health.
              </p>
            </div>
            <LottiePlayer
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_fCKkXdwO3V.json"
            />
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
                healthcare and social support can all have an impact on your
                health. People with higher education and higher income tend to
                have better health prospects and usually have better access to
                health care. Social support and strong social networks can
              </p>
            </div>
            <LottiePlayer
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets7.lottiefiles.com/private_files/lf30_oOGQFY.json"
            />
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
                Good medical care can save lives and help people stay healthy or
                get better faster. Regular check-ups, vaccinations and prompt
                diagnosis and treatment of diseases can help reduce the risk of
                serious complications. However, it is also important to note
                that overuse of medical services and overuse of medicines and
                other medical procedures can also have negative effects on
                health. Balanced use of medical care, based on individual needs
                and health risks, is therefore crucial for maintaining health.
              </p>
            </div>
            <LottiePlayer
              classes="w-[470px] h-[200px] md:w-[350px] md:h-[350px]   lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] "
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_4FGi6N.json"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
