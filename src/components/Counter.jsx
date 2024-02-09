import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart, decreaseCart } from "../rtk/features/cartSlice";
export const Counter = ({ quantity, product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F2F0F1] rounded-md w-fit p-1 flex gap-3 items-center">
      <FaMinus
        onClick={() => {
          dispatch(decreaseCart(product));
        }}
        className="cursor-pointer"
      />
      <span className="font-semibold block">{quantity || 1}</span>
      <FaPlus
        onClick={() => {
          dispatch(addCart(product));
        }}
        className="cursor-pointer"
      />
    </div>
  );
};
