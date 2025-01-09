import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoySharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Header = () => {
  const [toggel, setatoggel] = useState(false);
  const links = [
    {
      icon: <LuSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offer",
      sup: "New"
    },
    {
      icon: <IoHelpBuoySharp />,
      name: "Help",
    },
    {
      icon: <CiUser />,
      name: "Sign In",
    },
    {
      icon: <PiShoppingCartSimpleLight />,
      name: "Cart",
      sup:"0"
    },
  ];
  return (
    <>
      <div
        className="fixed w-full h-full duration-500 bg-blackoverlay "
        onClick={() => {
          setatoggel(false);
        }}
        style={{
          opacity: toggel ? 1 : 0,
          visibility: toggel ? "visible" : "hidden",
        }}
      >
        <div
          className="bg-white w-[500px] h-full absolute duration-700 "
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            left: toggel ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="w-full p-10 shadow-md">
        <div className="max-w-[100%]  flex items-center  ">
          <div className="w-[80px]">
            <img src="images/logo.png" alt="" className="w-full" />
          </div>
          <div
            className="ml-2 cursor-pointer"
            onClick={() => {
              setatoggel(true);
              console.log("hiii");
            }}
          >
            <span className="font-bold border-b-[2px] border-[black] hover:text-[#fc8019]">
              other
            </span>{" "}
            <span className="ml-4 text-[#686b78]">
              Nashik,Maharashtra,India{" "}
              <MdKeyboardArrowDown className="inline text-[25px] text-[#fc8019] font-extrabold hover:text-[black]" />
            </span>
          </div>
          <nav className="flex  gap-10 ml-auto font-semibold list-none text-[17px]">
            {links.map((links, index) => {
              return (
                <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                  {links.icon}
                  {links.name}
                  <sup className="text-[#fc8019]">{links.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
