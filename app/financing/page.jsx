import Hero from "../layout/Hero";
import photo from "../../public/images/insurance.jpeg";
import WhyUsBanner from "../layout/WhyUsBanner";

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
    </div>
  );
}
