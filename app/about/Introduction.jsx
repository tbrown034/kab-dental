import Image from "next/image";
import photo from "../../public/images/keith2.jpeg";
export default function Introduction() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen px-8 lg:px-20 bg-secondary text-secondary-content">
        <div className="px-2 text-center lg:px-14">
          <h2 className="font-semibold text-accent-content ">
            Meet Your Next Dentist
          </h2>
          <p className="mt-2 text-4xl font-bold ">
            Where Experience Meets Innovation in Dentistry
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-8 lg:px-8 lg:py-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center ">
            <div className="py-6 avatar">
              <div className=" rounded-xl">
                <Image src={photo} alt="dentist"></Image>
              </div>
            </div>

            <p className="text-lg font-bold ">Keith Brown DDS FAGD</p>
            <hr className="my-4 border-2 rounded-lg w-14 border-cyan-800" />

            <ul className="flex flex-col list-disc list-inside">
              <li>
                <span className="font-bold"> Education: </span>
                Bachelor of Arts in Chemistry and Biology from North Central
                College
              </li>
              <li>
                <span className="font-bold"> Post Grad:</span> Doctor of Dental
                Surgery from Loyola Dental School
              </li>
              <li>
                <span className="font-bold"> Memberships:</span> America
                Dentistry Assocation (Fellow of General Dentistry), American
                Equilibrium Society, Chicago Dental Society
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center py-6 pt-2 border-t-2 border-indigo-800 lg:border-t-0 lg:border-l-2 lg:pl-4 font-lg">
            <p>
              Keith A. Brown DDS FAGD is an experienced dentist with over 42
              years of experience in the field. Since 1980, he has been
              providing top-notch dental care to patients of all ages. Dr.
              Brown's passion for dentistry is driven by his commitment to
              staying current with the latest techniques and technology.
            </p>
            <br></br>
            <p>
              Dr. Brown is committed to providing you with caring, comprehensive
              dental care and works hard to ensure your visits are comfortable.
              Even when it is necessary to pull infected or wisdom teeth, we use
              techniques to eliminate the pain.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
