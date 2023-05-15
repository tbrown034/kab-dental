import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-xl normal-case btn btn-ghost">Keith Brown DDS</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/financing">Financing</Link>
          </li>
          <li>
            <Link href="/location">Location</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <Link href="/services">General Dentistry</Link>
              </li>
              <li>
                <Link href="/services">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link href="/services">Surgical Dentistry</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Financing</Link>
            </li>
            <li>
              <Link href="/">Location</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
          </ul>
        </div>
        <div className="hidden space-x-1 lg:flex">
          <a className="btn">Make an Appointment</a>
          <a className="btn">Call us</a>
        </div>
      </div>
    </div>
  );
}
