import Factors from "@/components/pages/Factors/Factors";
import HealthFactors from "@/components/pages/HealthFactors/HealthFactors";
import Landing from "@/components/pages/Landing/Landing";
import SalutogenesisRating from "@/components/pages/SalutogenesisRating/SalutogenesisRating";
import SalutogenesisReview from "@/components/pages/SalutogenesisReview/SalutogenesisReview";
import TwoModels from "@/components/pages/TwoModels/TwoModels";
import WhatsHealth from "@/components/pages/WhatsHealth/WhatsHealth";
import WHOReview from "@/components/pages/WHOReview/WHOReview";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-black overflow-y-auto min-h-[3000px] ">
      <Landing />
      <TwoModels />
      <WHOReview />
      <SalutogenesisReview />
      <WhatsHealth />
      <HealthFactors />
      <Factors />
      <SalutogenesisRating />
    </div>
  );
}
