import photo1 from "../../public/images/kabddsDentist1.jpg";
import photo2 from "../../public/images/kabddsDentist2.jpg";
import Image from "next/image";

const features = [
  {
    name: "40+ Years of Experience",
    description:
      "Dr. Brown is one of Chicagolands most experienced and dedicated dentists and one of the few to earn the prestigious Fellow of General Dentistry (FAGD). He is a doctor you can trust.",
    icon: "medical_services",
  },
  {
    name: "Affordable Care",
    description:
      "We promise to give you the most affordable dental care we can offer. We can also assist you in finding a financing program tailored to your needs and budget.",
    icon: "account_balance",
  },
  {
    name: "24/7 Emergnecy Services",
    description:
      "We'll work with you to get you in to see us as fast as possible if you have an emergency! Give us a call and we'll work to meet your needs!",
    icon: "emergency",
  },

  {
    name: "Convenient Location",
    description:
      "Located in the thrid floor of the Fifth Third Bank at 75th St. and Rickert Drive in Naperville, Illinois",
    icon: "business",
  },
];

export default function WhyUsSection() {
  return (
    <>
      <section className=" p-14 bg-secondary text-secondary-content">
        <div className="px-2 text-center lg:px-14">
          <h2 className="font-semibold text-accent-content ">
            Your Partner in Dental Health
          </h2>
          <p className="mt-2 text-4xl font-bold ">
            The Dental Difference: Extracting the Best in Care
          </p>
          <p className="mt-4 text-lg ">
            Keith Brown, DDS FAGD, is an experienced and trusted dentist who
            serves Naperville, Auroura and the Greater Chicagoland Areas.
            Schedule a cleaning or appoitnment today!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
          <Image src={photo1} alt="doctor looking at images"></Image>
          <Image src={photo2} alt="dentist treating patient"></Image>
        </div>

        <div className="mt-16">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 ">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg">
                    <span
                      className="text-accent-content material-icons"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
