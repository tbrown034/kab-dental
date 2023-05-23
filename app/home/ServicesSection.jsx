import Link from "next/link";
import Image from "next/image";
import generalPhoto from "../../public/images/kabddsPatient4.jpg";
import sugicalPhoto from "../../public/images/kabddsTeeth.jpg";
import cosmeticPhoto from "../../public/images/kabddsPatient2.jpg";

export default function ServicesSection() {
  return (
    <>
      <section className="px-8 py-10 lg:px-20 bg-primary text-primary-content ">
        <div className="px-2 text-center">
          <p className="mt-2 text-4xl font-bold ">
            A Full Service Dental Office
          </p>
          <p className="mt-4 text-lg ">
            We provide a range of dental services to take the best care of you
            and your family's dental health for life. Whether it's your child's
            first cleaning or an emergnecy procedure, we got you covered.
          </p>
          <Link
            className="flex items-center justify-center py-2 font-bold text-accent focus:text-accent-focus"
            href="/dental-services"
          >
            Learn more about our services{" "}
            <span className="material-icons">chevron_right</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-3 ">
          <div className="transition-transform duration-200 transform rounded-lg shadow-2xl hover:scale-105 card bg-secondary text-secondary-content">
            <figure>
              <Image src={generalPhoto} alt="alt text"></Image>
            </figure>
            <div className=" card-body">
              <h2 className="card-title">General Dentistry</h2>
              <p>
                We offer comprehensive general and preventive dentistry services
                including routine cleaning, fillings, root canalas, regular
                check-up and more!
              </p>
              <div className="justify-center card-actions">
                <Link href="/dental-services" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="transition-transform duration-200 transform rounded-lg shadow-2xl hover:scale-105 card bg-secondary text-secondary-content">
            <figure>
              <Image src={cosmeticPhoto} alt="alt text"></Image>
            </figure>
            <div className=" card-body">
              <h2 className="card-title">Cosmetic Dentistry</h2>
              <p>
                We are proud to offer a number of services including teeth
                whitenting (Invisalign), bonding, veneers and more to get your
                smile brighter than ever before!
              </p>
              <div className="justify-center card-actions">
                <Link href="/dental-services" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="transition-transform duration-200 transform rounded-lg shadow-2xl hover:scale-105 card bg-secondary text-secondary-content">
            <figure>
              <Image src={sugicalPhoto} alt="alt text"></Image>
            </figure>
            <div className=" card-body">
              <h2 className="card-title">Surgical & Emergency Dentistry</h2>
              <p>
                We are your home for emergency and surgical care. If you are in
                urgent need of an extraction, bridge, implant or dentures, we'll
                be there for you!{" "}
              </p>
              <div className="justify-center card-actions">
                <Link href="/dental-services" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
