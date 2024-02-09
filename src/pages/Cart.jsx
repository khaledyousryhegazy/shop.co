import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Counter } from "../components/Counter";
import { removeCart } from "../rtk/features/cartSlice";
import { Link, Outlet } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const subTotal = cart.reduce(
    (acc, curr) => (acc + curr.price) * curr.productQuantity,
    0
  );
  const taxes = 5;
  const delivery = 10;
  const total = subTotal + taxes + delivery;

  const dispatch = useDispatch();

  window.scrollTo({ top: 0, behavior: "auto" }); // open page on top
  return (
    <div className="container min-h-screen">
      <h1 className="text-3xl font-bold uppercase mt-5 mb-10">Cart</h1>
      <div className="flex gap-5 w-full flex-col md:flex-row">
        {cart.length > 0 ? (
          <div className="md:flex-[1.5] flex-1">
            {cart.length > 0 &&
              cart.map((pro) => {
                return (
                  <div key={pro.id} className="flex gap-5 mb-5">
                    <img
                      src={pro.thumbnail}
                      className="w-20 rounded-md"
                      alt={pro.title}
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-5">
                        <h1 className="  capitalize text-sm md:text-lg">
                          {pro.title}
                        </h1>
                        <RiDeleteBin5Fill
                          onClick={() => {
                            dispatch(removeCart(pro));
                          }}
                          className="text-red-600 text-xl cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-sm md:text-lg capitalize">
                          {pro.price} $
                        </h1>
                        <Counter
                          quantity={pro?.productQuantity}
                          product={pro}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <h1 className="md:flex-[1.5] flex-1 flex justify-center items-center text-3xl font-bold uppercase">
            your cart is empty <FaRegSadTear className="ms-4" />
          </h1>
        )}

        {/* check out section */}

        <div className="md:w-1/4 md:flex-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{subTotal} $</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>{taxes} $</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>{delivery} $</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between mb-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{total} $</span>
            </div>

            <Link
              disabled={total <= 15}
              to={total <= 15 ? "/cart" : "/cart/checkout"}
              className={`bg-black text-white py-2 px-4 rounded-lg mt-6 w-full disabled:opacity-50 block text-center`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <Outlet context={[total]} />
    </div>
  );
};
