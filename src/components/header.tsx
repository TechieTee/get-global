import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../assets/index";
import { CiUnlock } from "react-icons/ci";
import { PiWallet } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { LiaWeightSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  const navItems = [
    { name: "About Us", link: "/#about" },
    { name: "Our Expertise", link: "/#expertise" },
    { name: "Contact Us", link: "/#contact" }
  ];
  
  const [isOpen, setisOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectedIndex !== -1 &&
        dropdownRefs.current[selectedIndex] &&
        !dropdownRefs.current[selectedIndex]?.contains(event.target)
      ) {
        setSelectedIndex(-1);
      }
    };
  
    window.addEventListener("click", handleClickOutside);
  
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectedIndex]);
  
  const handleItemClick = (index: number, link: string) => {
    setSelectedIndex(index);
    navigate(link);
     // Scroll to section if the link contains a hash (#)
  if (link.includes("#")) {
    const sectionId = link.split("#")[1];
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
  };






  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="py-[10px] px-[5%] flex items-center justify-between bg-white z-50 fixed w-full">
      <img
        src={Image.logo}
        alt="logo"
        onClick={() => navigate('/')}
        className="lg:w-[280px] md:w-[180px] w-[150px] cursor-pointer"
      />

      <div className="hidden md:flex items-center gap-[20px]">
        {navItems.map((item, index) => (
          <div
            className="text-[#A4B3C1] hover:text-[#0C394B] text-[16px] relative cursor-pointer"
            key={index}
            onClick={() => handleItemClick(index, item.link)}
            id={`navItem-${index}`}
            ref={(ref) => (dropdownRefs.current[index] = ref)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <button className="md:hidden" onClick={toggleDropdown}>
        <div className="relative w-5">
          <span
            className={`absolute h-0.5 w-5 bg-black transition-transform ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transition-all ${
              isOpen ? "w-0" : "w-5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-black transition-transform ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute w-full bottom-0 transition-transform px-[8%] py-[20px] z-10 grid bg-white ${
          isOpen ? "translate-y-full" : "translate-y-[-100vh]"
        }`}
      >
        {navItems.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(index, item.link)}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
