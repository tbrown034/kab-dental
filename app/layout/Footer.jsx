import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="p-10 footer bg-base-200 text-base-contents">
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
          <Link href="/">General</Link>
          <Link href="/">Cosmetic</Link>
          <Link href="/">Surgicalt</Link>
          <Link href="/">FAQs</Link>
        </div>
        <div>
          <span className="footer-title">Why Us</span>
          <Link href="/">Meet Dr. Brown</Link>
          <Link href="/">Affordable Care</Link>
          <Link href="/">Conveint Location</Link>
          <Link href="/">Personalized Care</Link>
        </div>
      </footer>
      <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
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
    </>
  );
}
