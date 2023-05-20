export default function TestimonialCard() {
  return (
    <>
      <div className="card bg-primary text-primary-content">
        <div className="text-center lp-6 card-body">
          <blockquote className="text-2xl font-bold lg:text-4xl text-primary-content">
            "I had a wonderful experience at the dentist from the initial phone
            call to the scheduling of my appointment to the final tooth
            extraction. Dr. Brown and the entire office staff provided me with
            the best care and treatment."
          </blockquote>

          <div className="mt-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="bg-primary-content mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-primary-content mask mask-star-2"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-primary-content mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-primary-content mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-primary-content mask mask-star-2"
                checked
              />
            </div>
            <p className="mt-4 text-lg font-bold text-accent-content">
              - Danile Johnson
            </p>
            <p className="text-sm text-accent-content">Naperville</p>
          </div>
        </div>
      </div>
    </>
  );
}
