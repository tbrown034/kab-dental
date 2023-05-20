import Hero from "../layout/Hero";
import photo from "../../public/images/kabddsTeeth2.jpg";
import WhyUsBanner from "../layout/WhyUsBanner";

export default function Contact() {
  return (
    <div>
      <Hero
        image={photo}
        title="Have Questions? We have Answers!"
        subtitle="Let us know if you have any questions or need more information about
        our office, what services we provice, financing or insurance
        questions or anything on how we can make your visit go as pleasently
        as possible!"
        alt="altphoto"
      />
      <WhyUsBanner />
    </div>
  );
}
