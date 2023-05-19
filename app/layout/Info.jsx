import Image from "next/image";

export default function Info({ Image1, Image2, ImageTop }) {
  return (
    <>
      <div className="bg-secondary">
        <div className="">
          <Image src={ImageTop}></Image>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Image src={Image1}></Image>
          <Image src={Image2}></Image>
        </div>
      </div>
    </>
  );
}
