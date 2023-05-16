import Hero from "../layout/Hero";
import photo from "../../public/images/kabddsPatient5.jpg";

export default function FAQs() {
  return (
    <div>
      <Hero
        image={photo}
        title="Frequently Asked Questions"
        subtitle="We promise to give you the most affordable dental care we can offer.
        We can also assist you in finding a financing program tailored to
        your needs and budget."
      />
    </div>
  );
}
