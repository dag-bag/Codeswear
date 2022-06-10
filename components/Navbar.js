import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

import { FaShopify } from "react-icons/fa";
import Link from "next/link";

export default function Navbar({
  Cart,
  addToCart,
  removeFromCart,
  clearCart,
  SubTotal,
  cookie,
  logout,
}) {
  const [Dropdown, setDropdown] = useState(false);
  // console.log(SubTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  const ref = useRef();
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center flex-wrap md:justify-start md:py-2 md:px-2 mb-1 shadow-md ">
          <div className="1st logo">
            <Link href={"/"}>
              <a>
                <Image src="/logo.webp" alt="" width={200} height={40} />
              </a>
            </Link>
          </div>
          <div className="2nd flex justify-center items-center p-2 md:absolute md:right-0 md:top-2 ">
            <Link href={"/login"}>
              <a>
                {!cookie.value && (
                  <button className="bg-pink-600 text-white rounded-xl px-2 py-1">
                    Login
                  </button>
                )}{" "}
              </a>
            </Link>
            {cookie.value && (
              <li
                className="list-none"
                onMouseOver={() => {
                  setDropdown(true);
                }}
                onMouseLeave={() => {
                  setDropdown(false);
                }}
              >
                <MdAccountCircle className="text-lg md:text-2xl lg:text-3xl cursor-pointer " />
                {Dropdown && (
                  <div className="absolute right-10 top-9">
                    <ul
                      className="
          dropdown-menu
          min-w-max
          
          
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          
          m-0
          bg-clip-padding
          border-none
          px-4
        "
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link href={"/myaccount"}>
                          <a
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          >
                            My Account
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/orders"} className="cursor-pointer">
                          <a
                            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          >
                            Orders
                          </a>
                        </Link>
                      </li>
                      <li>
                        <button
                          className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              text-left
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}

            <AiOutlineShoppingCart
              className="ml-2 text-1xl md:text-3xl cursor-pointer"
              onClick={toggleCart}
            />
          </div>
          <div className="3rd w-full flex justify-center items-center md:w-auto md:ml-4">
            <ul className="flex justify-center items-center space-x-4 pb-4 shadow-2xl md:pb-0 md:text-md">
              <Link href={"/tshirt"}>
                <a className="hover:text-pink-600">
                  <li className="font-bold">Tshirts</li>
                </a>
              </Link>
              <Link href={"/hoodies"}>
                <a className="hover:text-pink-600">
                  <li className="font-bold">Hoodies</li>
                </a>
              </Link>
              <Link href={"/stickers"}>
                <a className="hover:text-pink-600">
                  <li className="font-bold">Stickers</li>
                </a>
              </Link>
              <Link href={"/mugs"}>
                <a className="hover:text-pink-600">
                  <li className="font-bold">Mugs</li>
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      {/* Shopping Cart  */}
      <div
        ref={ref}
        className={
          "sideCart absolute top-0 right-0 bg-pink-100 p-10 transform  transition-transform translate-x-full z-10 h-full"
        }
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <ol className="list-decimal">
          {Object.keys(Cart).length === 0 && (
            <div>
              No items in the cart. <br /> Please add few items in the cart
            </div>
          )}
          {Object.keys(Cart).map((k) => {
            return (
              <>
                <li key={k}>
                  <div className="flex my-3">
                    <div className="w-2/3 font-semibold">
                      {Cart[k].name}({Cart[k].size}/{Cart[k].va})
                    </div>
                    <div className="flex w-1/3 justify-center items-center space-x-2">
                      <AiFillMinusCircle
                        className="mr-2 cursor-pointer  text-xl text-pink-600"
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            Cart[k].size,
                            Cart[k].name,
                            Cart[k].price,
                            Cart[k].variant
                          );
                        }}
                      />
                      {Cart[k].qty}
                      <AiFillPlusCircle
                        className="cursor-pointer  text-xl text-pink-600"
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            Cart[k].size,
                            Cart[k].name,
                            Cart[k].price,
                            Cart[k].variant
                          );
                        }}
                      />{" "}
                    </div>
                  </div>
                </li>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                  Subtotal<span className="ml-2">₹{SubTotal}</span>
                </div>
              </>
            );
          })}
        </ol>
        <AiFillCloseCircle
          className="cursor-pointer absolute top-5 right-3 text-xl text-pink-600"
          onClick={toggleCart}
        />
        <div className="btns flex space-x-2">
          <Link href={"/checkout"}>
            <a>
              <button className="flex items-center  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-base">
                <FaShopify /> checkout
              </button>
            </a>
          </Link>
          <button
            className="flex items-center  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-base"
            onClick={clearCart}
          >
            <AiFillCloseCircle /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
