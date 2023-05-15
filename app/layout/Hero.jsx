import Image from "next/image";

export default function Hero({ image, title, description }) {
  return (
    <>
      <div className="relative overflow-hidden min-h-75vh hero">
        <Image
          src={image}
          quality={100}
          alt="Hero Image"
          className="opacity-70"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content ">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold text-primary-content">
              {title}
            </h1>
            <p className="mb-5 text-lg font-bold text-neutral-content">
              {description}
            </p>
            <div className="flex space-x-2">
              <button className=" btn-primary btn">Make an Appoitnment</button>
              <button className=" btn-primary btn">Call Us Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
