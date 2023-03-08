import Factors from "@/components/pages/Factors/Factors";
import HealthFactors from "@/components/pages/HealthFactors/HealthFactors";
import Landing from "@/components/pages/Landing/Landing";
import SalutogenesisRating from "@/components/pages/SalutogenesisRating/SalutogenesisRating";
import SalutogenesisReview from "@/components/pages/SalutogenesisReview/SalutogenesisReview";
import TwoModels from "@/components/pages/TwoModels/TwoModels";
import WhatsHealth from "@/components/pages/WhatsHealth/WhatsHealth";
import WHOReview from "@/components/pages/WHOReview/WHOReview";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <main
      style={{ overflowX: "hidden" }}
      className="flex flex-col h-screen overflow-y-scroll"
    >
      <SectionWrapper>
        <Landing />
        <TwoModels />
        <WHOReview />
        <SalutogenesisReview />
        <WhatsHealth />
        <HealthFactors />
        <Factors />
        <SalutogenesisRating />
      </SectionWrapper>
    </main>
  );
}
