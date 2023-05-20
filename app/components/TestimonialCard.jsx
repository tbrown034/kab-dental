export default function TestimonialCard() {
  return (
    <>
      <div className="card bg-primary text-primary-content">
        <div className="text-center card-body">
          <h2>
            "I had a wonderful experience at the dentist from the initial phone
            call to the scheduling of my appointment to the final tooth
            extraction. Dr. Brown and the entire office staff provided me with
            the best care and treatment."
          </h2>
          <p>- Danile Johnson</p>
          <p>Naperville</p>
          <div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
