import Image from "next/image";

export default function Hero({ image, title, description }) {
  return (
    <>
      <div className="relative overflow-hidden min-h-75vh hero">
        <Image
          src={image}
          quality={100}
          alt="Hero Image"
          className="opacity-50"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content dark:text">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
