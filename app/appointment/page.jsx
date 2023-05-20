import Hero from "../layout/Hero";
import photo from "../../public/images/appointment.webp";
import WhyUsBanner from "../layout/WhyUsBanner";

export default function Appointment() {
  return (
    <div>
      <Hero
        image={photo}
        title="Schedule Your Next Appointment"
        subtitle="We are excited to see and help assist you. Your journey to a healthier, brighter smile starts today!"
        alt="altphoto"
      />
      <WhyUsBanner />
    </div>
  );
}
