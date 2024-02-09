import logo from "../assets/logo.png";
import { headerData } from "../data";
import { LuShoppingCart } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";
// import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  return (
    <div className=" fixed bg-white z-50 top-0 left-0 right-0 shadow-md">
      <div className="navbar h-20 flex items-center container justify-between gap-5">
        <div className="flex items-center gap-3">
          {isOpen ? (
            <IoMdClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="md:hidden text-2xl cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => {
                setIsOpen(true);
              }}
              className="md:hidden text-2xl cursor-pointer"
            />
          )}
          <img
            src={logo}
            className="md:max-w-28 max-w-24 block"
            alt="Shop.co"
          />
        </div>

        <ul
          className={`nav-links flex items-center gap-3 ${
            isOpen ? "left-0" : "-left-full"
          } `}
        >
          {headerData.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={({ isActive }) =>
                    [
                      "capitalize text-[15px] font-semibold  hover:text-black",
                      isActive ? "text-black" : "text-gray-500",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* <div className="relative">
          <IoIosSearch className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-gray-400" />
          <input
          type="text"
          className="pl-10 py-1 md:w-96 border outline-none rounded-lg"
          placeholder="Type To Search"
          />
        </div> */}
        <div className="flex items-center gap-3 text-xl">
          <div className="relative">
            <span className="absolute -top-2 -right-2 text-xs font-semibold bg-black text-white w-4 h-4 flex justify-center items-center rounded-full">
              {cart.length}
            </span>
            <Link to="/cart">
              <LuShoppingCart className="cursor-pointer" />
            </Link>
          </div>
          <Link to="/login">
            <LuUserCircle2 className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
