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

export default function Features() {
  return (
    <div className="py-24 bg-secondary sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Why You Should Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Dental Difference: Extracting the Best in Care
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville
            and the Chicagoland area for more than 40 years. Schedule a cleaning
            or appointment today!
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg">
                    <span className="w-6 h-6 material-icons" aria-hidden="true">
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
      </div>
    </div>
  );
}
