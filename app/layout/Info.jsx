import Image from "next/image";

export default function Info({ Image1, Image2, ImageTop }) {
  return (
    <>
      <div className="bg-secondary">
        <div className="">
          <Image src={ImageTop} alt="altText"></Image>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Image src={Image1} alt="alttext1"></Image>
          <Image src={Image2} alt="alttext2"></Image>
        </div>
      </div>
    </>
  );
}
