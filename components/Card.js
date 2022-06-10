import React from "react";
import Link from "next/link";
export default function Card({ src, title, size, price, color, slug }) {
  return (
    <div className="shadow-lg m-5 w-80">
      <Link href={`/product/${slug}`}>
        <div className=" p-4 w-full ">
          <a className="block relative h-auto rounded overflow-hidden">
            <img
              alt="ecommerce"
              className=" h-[45vh] m-auto w-10/12  "
              src={src}
            />
          </a>
          <div className="mt-4 text-center md:text-left ">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {title}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
            <p className="mt-1">₹{price}</p>
            {size && (
              <p className="mt-1 space-x-2">
                {size.includes("SM") && (
                  <span className="border border-black px-1">SM</span>
                )}
                {size.includes("XL") && (
                  <span className="border border-black px-1">XL</span>
                )}
                {size.includes("LG") && (
                  <span className="border border-black px-1">LG</span>
                )}
                {size.includes("XXL") && (
                  <span className="border border-black px-1">XXL</span>
                )}
              </p>
            )}

            {color && (
              <div className="colors">
                {color.includes("Pink") && (
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Green") && (
                  <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Yellow") && (
                  <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Orange") && (
                  <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Black") && (
                  <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Red") && (
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
                {color.includes("Blue") && (
                  <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
