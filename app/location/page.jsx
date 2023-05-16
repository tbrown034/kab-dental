import Hero from "../layout/Hero";
import photo from "../../public/images/bank.jpeg";

export default function Location() {
  return (
    <div>
      <Hero
        image={photo}
        title="Your New Home for Dental Care"
        subtitle="Located in the thrid floor of the Fifth Third Bank at 75th St. and
        Rickert Drive in Naperville, Illinois"
      />
    </div>
  );
}
