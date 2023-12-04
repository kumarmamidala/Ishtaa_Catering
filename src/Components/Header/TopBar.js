import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import { FaDharmachakra } from "react-icons/fa";
import "./TopBar.css";
import logo from "./../Media/logo.avif";
import logo2 from "./ishtaalogo.png";

import { BsFillPersonFill, BsHandbagFill } from "react-icons/bs";

function TopBar() {
  const [showHambuger, setShowHambuger] = useState(false);
  return (
    <div>
      <div className="flex flex-col Topbarmain ">
        <div className="flex items-center sm:py-2 topbar-small">
          {/* <Link to="/" className="Nav-linkk123">
            Home
          </Link> */}
          <Link to="/" className=" Nav-linkk !font-light">
            Home
          </Link>
          <Link to="/" className=" Nav-linkk !font-light">
            Menu
          </Link>
          <Link to="/Delicious" className=" Nav-linkk !font-light">
            Catering
          </Link>

          <div className="flex w-full justify-center">
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex space-x-8 justify-around items-end space-y-2 text-[18px] pb-2 mr-4 font-[Marcellus] ">
                {/* <FaDharmachakra className="topbar-main-icon" />
                 */}
                <img src={logo2} alt="" className="h-[80px]" />
              </div>
              {/* USER ACC  */}
            </div>
          </div>
          <Link to="/" className=" Nav-linkk !font-light">
            Locations
          </Link>

          <Link to="/" className=" Nav-linkk !font-light">
            Gallery
          </Link>
          <Link to="/" className=" Nav-linkk !font-light">
            Contact
          </Link>
          {/* <Link to="/" className="hidden md:block">
            <button class="paragraph">
              <BsFillPersonFill className="text-[#044b61] topbar-icon" />
            </button>
          </Link>
          <Link to="/" className="hidden md:block">
            <button class="paragraph">
              <BsHandbagFill className="text-[#044b61] topbar-icon" />
            </button>
          </Link> */}

          <div className="flex space-x-2 ">
            <div class="hidden md:hidden">
              <button class="custom-btn main-button login-btn1">Login</button>
              <button
                type="button"
                className=" flex justify-center items-center p-2 xs:mt-2 lg:!mt-0 sm:px-2 sm:py-2 pl-0 sm:!pl-2 rounded-md bg-[#fbcb04] text-white hover:bg-[#ffe053] transition-all loginbtn "
              >
                <div className="hidden sm:block text-xl font-semibold loginbtn-hover:!text-black ">
                  Login
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 !xs:pl-0 !xs:pr-2 items-start loginbtn-hover:color-black"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
            <div class="md:hidden">
              <button class="auction-login-small-screen">
                <BsPersonFill fontSize={"22px"} />
              </button>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setShowHambuger(true)}
                className="p-2 xs:!mt-2 rounded-md bg-gray-200 hover:bg-gray-300 auction-login-small-screen1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          show={showHambuger}
          enter="transition ease-in-out duration-800"
          enterFrom="transform opacity-0 translate-x-[999px]"
          enterTo="transform opacity-100 translate-x-0"
          leave="transition ease-in duration-800"
          leaveFrom="transform opacity-100 translate-x-0"
          leaveTo="transform opacity-0 translate-x-[999px]"
        >
          <div className="h-[670px] w-full absolute right-0 top-0 bottom-0 left-0 justify-start items-end z-30 flex flex-col bg-[#f2f4f5] space-y-2 text-xl font-semibold pr-4 !mt-0 !pt-10">
            <button
              type="button"
              onClick={() => setShowHambuger(false)}
              className="flex space-x-1 items-center p-2 rounded-md hover:bg-gray-200"
            >
              <p>Close</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col w-1/2 px-2 pl-4 text-[#fbcb04]">
              <Link
                to="/"
                className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
              >
                Jewelry
              </Link>
              <Link
                to="/"
                className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
              >
                About Us
              </Link>

              <Link
                to="/"
                className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Transition>
      </div>
      <br />
      <br />
      {/* <br /> */}
    </div>
  );
}

export default TopBar;
