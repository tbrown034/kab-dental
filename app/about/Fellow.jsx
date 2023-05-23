import Image from "next/image";
import logo from "../../public/images/AGD.png";
import Link from "next/link";

export default function Fellow() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 px-8 py-20 text-center min-h-75vh bg-primary text-secondary-content">
        <h2 className="text-5xl font-semibold text-accent-content">
          Did You Know?
        </h2>
        <p className="text-2xl">
          Dr. Brown is among the{" "}
          <span className="font-bold text-accent-content">six percent</span> of
          U.S. dentists who have earned the prestigious{" "}
          <span className="font-bold text-accent-content">
            Fellow of the Academy of General Dentistry{" "}
          </span>
          designation. We think that's pretty cool, but don't take our word for
          it.
        </p>
        <div className="relative p-6 bg-secondary-content rounded-xl text-primary-content">
          <blockquote className="relative text-2xl font-bold lg:text-4xl">
            "If your dentist is a <span className="text-accent">Fellow </span>
            or Master of the Academy of General Dentistry, they are the{" "}
            <span className="text-accent">best of the best in the field</span>.
            You can rest assured that your dentist cares about knowing the
            latest techniques and best practices in dentistry. Your dentist
            practices these techniques in a classroom setting multiple times a
            year —{" "}
            <span className=" text-accent">not every dentist does this</span>
            ."
          </blockquote>
          <div className="flex flex-col items-center justify-center gap-4 pt-8">
            <p className="text-lg text-accent">
              Source:{" "}
              <Link
                className="sunderline underline-offset-4"
                href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist"
              >
                Academy of General Dentistry
              </Link>
            </p>
          </div>

          <div className="flex items-center justify-center py-8">
            <Image
              className="p-4 rounded-2xl bg-secondary "
              src={logo}
              alt="logo"
            ></Image>
          </div>
          <Link
            className="py-2 w-54 text-accent btn btn-primary"
            href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist"
          >
            Learn more <span className="material-icons">chevron_right</span>
          </Link>
        </div>
      </section>
    </>
  );
}
