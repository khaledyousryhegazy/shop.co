import { FaStar } from "react-icons/fa";

export const Starts = ({ rate }) => {
  const rateNum = Math.round(Number(rate));
  const array = new Array(rateNum).fill(1);

  return (
    <div className="flex gap-1 items-center">
      {array.map((item, index) => (
        <FaStar className="text-yellow-400" key={index} />
      ))}
    </div>
  );
};
