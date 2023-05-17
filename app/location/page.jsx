import Hero from "../layout/Hero";
import photo from "../../public/images/bank.jpeg";
import WhyUsBanner from "../layout/WhyUsBanner";
import Info from "../layout/Info";
import photo1 from "../../public/images/kabddsOffice1.jpg";
import photo2 from "../../public/images/kabddsOffice2.jpg";

export default function Location() {
  return (
    <div>
      <Hero
        image={photo}
        title="Your New Home for Dental Care"
        subtitle="Located in the thrid floor of the Fifth Third Bank at 75th St. and
        Rickert Drive in Naperville, Illinois"
      />
      <WhyUsBanner />
      <Info Image1={photo1} Image2={photo2} />
    </div>
  );
}
