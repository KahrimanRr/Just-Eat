import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Just <span className="font-bold">Eat</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]">
          <p className="bg-green-500 text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/*right side*/}

      {/*search input*/}
      <div className="bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search your food "
        />
      </div>

      {/*card item*/}
      <button className="bg-green-500 text-green-100 hidden md:flex items-center py-2 rounded-full ">
        <BsFillCartFill size={27} />
      </button>
    </div>
  );
};

export default Navbar;
