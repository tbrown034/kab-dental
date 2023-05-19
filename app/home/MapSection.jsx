import Map from "../components/Map";

export default function MapSection() {
  return (
    <>
      <section className="p-14 bg-secondary text-secondary-content">
        <div className="px-2 text-center lg:px-14">
          <h2 className="font-semibold text-accent-content">Our Location</h2>
          <p className="mt-2 text-4xl font-bold">
            Conveniently Located in the Heart of Naperville
          </p>
          <p className="mt-4 text-lg">
            Our dental office is located in the third floor of the Fifth Third
            Bank at 75th St. and Rickert Drive in Naperville, Illinois. We're
            easily accessible and have ample parking. We look forward to
            welcoming you to our office!
          </p>
        </div>
        <div className="mt-8">
          <Map />
        </div>
      </section>
    </>
  );
}
