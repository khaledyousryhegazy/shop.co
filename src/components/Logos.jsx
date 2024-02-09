import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvinKlein.png";

export const Logos = () => {
  return (
    <div className=" bg-black px-6">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] place-items-center sm:place-items-start gap-10 py-10">
        <img src={versace} alt="versage" />
        <img src={gucci} alt="gucci" />
        <img src={zara} alt="zara" />
        <img src={prada} alt="prada" />
        <img src={calvinKlein} alt="calvinKlein" />
      </div>
    </div>
  );
};
