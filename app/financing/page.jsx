import Hero from "../layout/Hero";
import photo from "../../public/images/insurance.jpeg";
import WhyUsBanner from "../layout/WhyUsBanner";
import Info from "../layout/Info";
import photo1 from "../../public/images/kabddsPatient3.jpg";
import photo2 from "../../public/images/kabddsPatient2.jpg";
import topPhoto from "../../public/images/kabddsDentist1.jpg";

export default function Financing() {
  return (
    <div>
      <Hero
        image={photo}
        title="Making Dental Care Affordable"
        subtitle="We promise to give you the most affordable dental care we can offer.
        We can also assist you in finding a financing program tailored to your
        needs and budget."
      />
      <WhyUsBanner />
      <Info ImageTop={topPhoto} Image1={photo1} Image2={photo2} />
    </div>
  );
}
