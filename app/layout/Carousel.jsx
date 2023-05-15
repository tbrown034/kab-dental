import Card from "./Card";
import Card2 from "./Card2";

export default function Carousel() {
  return (
    <div className="w-full py-4 carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <Card />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide4" className="opacity-50 btn btn-circle bg-slate-400">
            ❮
          </a>
          <a href="#slide2" className="opacity-50 btn btn-circle bg-slate-400">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <Card2 />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide1" className="opacity-50 btn btn-circle bg-slate-400">
            ❮
          </a>
          <a href="#slide3" className="opacity-50 btn btn-circle bg-slate-400">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
