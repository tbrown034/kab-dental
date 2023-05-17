export default function WhyUsBanner() {
  const data = [
    {
      id: 1,
      icon: "user md",
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
      icon: "money bill alternate outline",
      title: "Affordable Care",
      buttonText: "Check Your Financing Options",
      path: "/financing",
    },
    {
      id: 4,
      icon: "heartbeat",
      title: "State of the Art Facilities",
      buttonText: "Take a Tour of our Office",
      path: "/location",
    },
  ];

  return (
    <>
      <div className="p-4 text-center min-h-25vh bg-secondary">
        <h1>The Dental Difference: Extracting the Best in Care</h1>
        <div className="grid grid-cols-4 gap-2 ">
          <div>
            <div>
              <span className="material-icons">emergency</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
