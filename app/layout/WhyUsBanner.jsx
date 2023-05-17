import Link from "next/link";
export default function WhyUsBanner() {
  const data = [
    {
      id: 1,
      icon: "medical_services",
      title: "40+ Years of Experience",
      buttonText: "Meet Dr. Brown",
      path: "/about",
    },
    {
      id: 2,
      icon: "emergency",
      title: "24/7 Emergency Services",
      buttonText: "Emergency? Contact Us Now",
      path: "/contact",
    },
    {
      id: 3,
      icon: "account_balance",
      title: "Affordable Care",
      buttonText: "Your Financing Options",
      path: "/financing",
    },
    {
      id: 4,
      icon: "business",
      title: "State of the Art Facilities",
      buttonText: "Take a Tour of our Office",
      path: "/location",
    },
  ];

  return (
    <>
      <div className="p-4 text-center bg-primary text-primary-content">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div
              className="p-4 border-b-2 lg:border-r-2 lg:border-b-0 sm:border-b-0"
              key={item.id}
            >
              <span className="material-icons">{item.icon}</span>
              <p className="p-2">{item.title}</p>
              <Link href={item.path} className="btn btn-accent">
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
