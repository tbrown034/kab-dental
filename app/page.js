import Hero from "./layout/Hero";
import dentist from "../public/images/kabddsToothbrush.jpg";
import WhyUsSection from "../app/home/WhyUsSection.jsx";
import ServicesSection from "../app/home/ServicesSection.jsx";
import MapSection from "../app/home/MapSection.jsx";
import Features from "./components/features";

export default function Home() {
  return (
    <div>
      <Hero
        image={dentist}
        title="Let us Brigthen Your Smile"
        subtitle="Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and the Chicagoland area for more than 40 years. Schedule a cleaning or appointment today!"
      />
      <WhyUsSection />
      <ServicesSection />
      <MapSection />
      <Features />
    </div>
  );
}
