import { FaShoppingBag } from "react-icons/fa";
import { Starts } from "./Stars";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../rtk/features/cartSlice";

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div key={item?.id} className="bg-[#F2F0F1] p-2 shadow-md rounded-md">
      <Link to={`/shop/${item?.id}`}>
        <img
          className="w-full h-60 object-cover  rounded-md"
          src={item?.thumbnail}
          alt={item?.title}
        />
      </Link>
      <h3 className="my-2 text-lg capitalize font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        {item?.title}
      </h3>

      <Starts rate={item?.rating} />
      <div className="flex items-center justify-between mt-2">
        <span className="block text-lg font-semibold">{item?.price}$</span>
        <FaShoppingBag
          onClick={() => {
            dispatch(addCart(item));
          }}
          className="text-lg cursor-pointer opacity-80 hover:opacity-100"
        />
      </div>
    </div>
  );
};
