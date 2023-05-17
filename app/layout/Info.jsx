import Image from "next/image";
import photo1 from "../../public/images/kabddsPatient1.jpg";
import photo2 from "../../public/images/kabddsPatient2.jpg";

export default function Info() {
  return (
    <>
      <div className=" bg-secondary">
        <div className="grid grid-cols-2">
          <Image src={photo1}></Image>
          <Image src={photo2}></Image>
        </div>
      </div>
    </>
  );
}
