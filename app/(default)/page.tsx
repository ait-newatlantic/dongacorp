export const metadata = {
  title: "Dong A Corp",
  description: "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi",
};

import Hero from "@/components/hero-home-i18n";
import FeaturesPlanet from "@/components/features-planet-i18n";
import Cta from "@/components/cta-i18n";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPlanet />
      <Cta />
    </>
  );
}
