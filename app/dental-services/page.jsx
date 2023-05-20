import Hero from "../layout/Hero";
import photo from "../../public/images/kabddsToothbrush2.jpg";
import WhyUsBanner from "../layout/WhyUsBanner";

export default function Services() {
  return (
    <div>
      <Hero
        image={photo}
        title="We'll Take Care of Your Teeth"
        subtitle="Our goal is to have your teeth looking great and free of pain or
        discomfort in as short a time as possible."
        alt="altphoto"
      />
      <WhyUsBanner />
    </div>
  );
}
