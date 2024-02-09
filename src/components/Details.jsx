import { useState } from "react";
import { Starts } from "./Stars";
import { Counter } from "./Counter";
import { addCart } from "../rtk/features/cartSlice";
import { useDispatch } from "react-redux";

export const Details = ({ product }) => {
  const [image, setImage] = useState(product.thumbnail);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5 flex-col lg:flex-row">
      <div className="flex flex-col  gap-3 lg:flex-row-reverse justify-between">
        {/* images */}
        <div>
          <img
            src={image}
            className="lg:w-[450px] lg:h-[450px] w-80 h-80 object-contain m-auto"
            alt={product.title}
          />
        </div>
        {/* cover */}
        <div className="flex lg:flex-col flex-row gap-2 lg:h-[450px] justify-center overflow-auto">
          {product?.images.map((img, index) => {
            return (
              <img
                key={index}
                className="w-28 h-fit p-2 bg-[#F2F0F1] cursor-pointer"
                src={img}
                onClick={() => {
                  setImage(img);
                }}
                alt="product details"
              />
            );
          })}
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <Starts rate={product?.rating} />
        <span className="block font-semibold text-xl">{product.price} $</span>

        <p className="text-balance opacity-80 ">{product.description}</p>

        <button
          onClick={() => {
            dispatch(addCart(product));
          }}
          className="bg-gray-800 hover:bg-black text-white py-2 px-6 capitalize rounded-md"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};
