import Link from "next/link";
import Image from "next/image";
import topPhoto from "../../public/images/bank.jpeg";
import photo1 from "../../public/images/kabddsOffice1.jpg";
import photo2 from "../../public/images/kabddsOffice2.jpg";
import photo3 from "../../public/images/kabddsOffice3.jpg";
import photo4 from "../../public/images/Reception.jpeg";

export default function OfficeShowcase() {
  return (
    <>
      <section className="p-24 bg-secondary text-secondary-content">
        <div className="px-2 text-center">
          <h2 className="font-semibold text-accent-content ">
            Anxiety-Free Dental Care
          </h2>
          <p className="mt-2 text-4xl font-bold ">
            State-of-the-art Facilities Designed For Your Comfort
          </p>
          <p className="mt-4 text-lg ">
            We provide a range of dental services to take the best care of you
            and your family's dental health for life. Whether it's your child's
            first cleaning or an emergnecy procedure, we got you covered.
          </p>
          <Link
            className="flex items-center justify-center py-2 font-bold text-accent-content focus:text-accent-focus"
            href="/dental-services"
          >
            Take a Virtual Tour of Our Office{" "}
            <span className="material-icons">chevron_right</span>
          </Link>
        </div>
        <div className="flex justify-center py-8">
          <Image src={topPhoto} alt="topImage"></Image>
        </div>
        <div className="grid gap-4 grid-col-1 lg:grid-cols-4 ">
          <Image
            src={photo2}
            alt="topImage"
            className="h-auto max-w-full rounded-lg"
          ></Image>
          <Image
            src={photo3}
            alt="topImage"
            className="h-auto max-w-full rounded-lg"
          ></Image>
          <Image
            src={photo4}
            alt="topImage"
            className="h-auto max-w-full rounded-lg"
          ></Image>
          <Image
            src={photo1}
            alt="topImage"
            className="h-auto max-w-full rounded-lg"
          ></Image>
        </div>
      </section>
    </>
  );
}
