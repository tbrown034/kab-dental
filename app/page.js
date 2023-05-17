import Hero from "./layout/Hero";
import dentist from "../public/images/kabddsToothbrush.jpg";
import WhyUsBanner from "./layout/WhyUsBanner";
import Info from "./layout/Info";
import photo1 from "../public/images/kabddsPatient1.jpg";
import photo2 from "../public/images/kabddsPatient2.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        image={dentist}
        title="Let us Brigthen Your Smile"
        subtitle="Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and the Chicagoland area for more than 40 years. Schedule a cleaning or appointment today!"
      />
      <WhyUsBanner />
      <Info Image1={photo1} Image2={photo2} />
    </div>
  );
}
