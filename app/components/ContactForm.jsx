export default function ServicesSection() {
  return (
    <>
      <section className="p-4 bg-primary text-primary-content ">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center text-secondary lg:mb-16 sm:text-xl">
            We understand that going to the dentist's office can be a stressful
            and confusing experience for some. That's why we are committed to
            answering all your questions before, during and after your visit!
            Let us know how we can help!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="(###) ###-####"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" className="p-2 rounded-md btn-secondary">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
