import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
const Navbar = () => {
  const [sidebar, SetSidebar] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => SetSidebar(!sidebar)} className="cursor-pointer">
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

      {/*/**mobile */}
      {sidebar ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/*sidemenu*/
      /** */}
      <div
        className={
          sidebar
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => SetSidebar(!sidebar)}
          size={30}
          className="absolute  right-4 top-4 cursor-pointer"
        />
        <nav>
          <ul className="flex flex-col p-4 text-grey-800">
            <li className="text-xl py-4 px-4 mt-6 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 px-4 mt-6 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 px-4 mt-6 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 px-4 mt-6 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
