import Link from "next/link";
export default function Footer() {
  return (
    <>
      <section className="bg-primary text-primary-content">
        <footer className="p-10 footer ">
          <div>
            <span className="footer-title">Contact</span>
            <a className="link link-hover">
              1295 Rickert Drive, Naperville, IL 60564
            </a>
            <a className="link link-hover">(630) 555-5555</a>
            <a className="link link-hover">kabdds@aol.com</a>
            <a className="link link-hover">Facebook</a>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link href="/general">General</Link>
            <Link href="/dental-services">Cosmetic</Link>
            <Link href="/dental-services">Surgicalt</Link>
            <Link href="/faqs">FAQs</Link>
          </div>
          <div>
            <span className="footer-title">Why Us</span>
            <Link href="/about">Meet Dr. Brown</Link>
            <Link href="/financing">Affordable Care</Link>
            <Link href="/location">Conveint Location</Link>
            <Link href="/dental-services">Personalized Care</Link>
          </div>
        </footer>
        <hr className="w-2/4 h-px mx-5 border-0 bg-primary-content"></hr>

        <footer className="p-6 footer ">
          <div className="items-center grid-flow-col">
            <p>
              © 2023 Keith Brown DDS FAGD <br />
              Website Created and Maintained by{" "}
              <a
                href="https://www.helloimtrevor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TB Web and Design
              </a>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
