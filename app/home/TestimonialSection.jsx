import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <section className="p-24 bg-primary text-primary-content">
        <div className="px-2 text-center">
          <h2 className="font-semibold text-accent-content ">
            Hear Directly From Our Patients
          </h2>
          <p className="mt-2 text-3xl font-bold ">
            Don't Just Take Our Word For It
          </p>
        </div>
        <TestimonialCard />
      </section>
    </>
  );
}
