import TestimonialCard from "../components/TestimonialCard";
export default function TestimonialSection() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-8 py-12 lg:px-20 min-h-75vh bg-primary text-primary-content">
        <div className="px-2 text-center">
          <h2 className="text-2xl font-semibold text-accent-content">
            Don't Just Take Our Word For It. Hear Directly From{" "}
            <span className="font-bold text-secondary text-body">
              {" "}
              Our Patients
            </span>
          </h2>
        </div>
        <TestimonialCard />
      </section>
    </>
  );
}
