import Link from "next/link";
export default function WhyUsBanner() {
  const data = [
    {
      id: 1,
      icon: "medical_services",
      title: "40+ Years of Experience",
      buttonText: "Meet Dr. Brown, D.D.S., F.A.G.D.",
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
      buttonText: "Check Your Financing Options",
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
      <div className="p-4 text-center bg-secondary">
        <div className="grid gap-2 lg:grid-cols-4 ">
          {data.map((item) => (
            <div key={item.id}>
              <span className="material-icons">{item.icon}</span>
              <p>{item.title}</p>
              <Link href={item.path} className="btn btn-primary">
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
