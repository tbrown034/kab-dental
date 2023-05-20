import Hero from "../layout/Hero";
import photo from "../../public/images/bank.jpeg";
import WhyUsBanner from "../layout/WhyUsBanner";

import MapSection from "../home/MapSection";
import OfficeShowcase from "../home/OfficeShowcase";

export default function Location() {
  return (
    <div>
      <Hero
        image={photo}
        title="Your New Home for Dental Care"
        subtitle="Located in the thrid floor of the Fifth Third Bank at 75th St. and
        Rickert Drive in Naperville, Illinois"
        src="altphotodfd"
      />
      <WhyUsBanner />
      <MapSection />
      <OfficeShowcase />
    </div>
  );
}
