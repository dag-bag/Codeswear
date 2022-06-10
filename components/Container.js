import React from "react";

export default function Container(props) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex justify-center items-center">
          <div className="flex flex-wrap -m-4 justify-center items-center ">
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
}
