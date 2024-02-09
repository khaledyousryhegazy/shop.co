import { Link } from "react-router-dom";
import landing from "../assets/landing.png";
import vec1 from "../assets/Vector.png";
import vec2 from "../assets/Vector2.png";
import { Logos } from "./Logos";

export const Landing = () => {
  return (
    <div className="bg-[#F2F0F1] pt-20">
      <div className="container flex gap-5 flex-col md:flex-row items-center">
        <div className="md:mb-3">
          <h1 className="font-bold text-3xl md:text-5xl text-balance mb-7">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-80 text-balance">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            to="/shop"
            className="bg-black text-white py-3 px-6 block w-fit mt-7"
          >
            Shop Now
          </Link>
        </div>
        <div className="relative">
          <img src={landing} alt="Shop.co landing" />

          <img
            src={vec1}
            className="absolute top-0 right-0 md:w-24 w-20"
            alt="Shop.co Vec"
          />

          <img
            src={vec2}
            className="absolute bottom-1/2 left-0"
            alt="Shop.co Vec2"
          />
        </div>
      </div>
      <Logos />
    </div>
  );
};
