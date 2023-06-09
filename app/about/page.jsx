import Hero from "../layout/Hero";
import photo from "../../public/images/kabddsDentist2.jpg";
import WhyUsBanner from "../layout/WhyUsBanner";
import Introduction from "./Introduction";
import Fellow from "./Fellow";

export default function About() {
  return (
    <div>
      <Hero
        image={photo}
        title="Dr. Keith Brown DDS, FAGD"
        subtitle="Dr. Brown is one of Chicagolands most experienced and dedicated dentists. With more than 40 years treating patients in Naperville, Il., he is a doctor you can trust."
        alt="altphoto"
      />
      <Introduction />
      <Fellow />
    </div>
  );
}
