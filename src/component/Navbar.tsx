import { FiX } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { boxcolor1, boxcolor3, Menus, XSlideIn, YSlideIn } from "./assets";
import { useState } from "react";
import type { MenusProp } from "../lib/types";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [selectedIndex, setselectedIndex] = useState<Number>(3);
  return (
    <div className="fixed top-0 w-full z-[3]">
      <Desktop
        selectedIndex={selectedIndex}
        setselectedIndex={setselectedIndex}
      />
      <Mobile
        selectedIndex={selectedIndex}
        setselectedIndex={setselectedIndex}
      />
    </div>
  );
};

export default Navbar;

export const Desktop = ({ selectedIndex, setselectedIndex }: any) => {
  const [ads, setads] = useState(true);

  return (
    <div className="w-full max-sm:hidden">
      <AdsHeader ads={ads} setads={setads} />
      <div className="w-full bg-white shadow drop-shadow-sm py-4 flex justify-between items-center align-middle px-12 max-md:px-10 ">
        <div className="flex gap-11 max-md:gap-8 ">
          <Logo />
          <div className="flex gap-5 items-center">
            {Menus.map((item: MenusProp, index: number) => {
              return (
                <motion.div
                  key={index}
                  variants={YSlideIn(100, 0.6, 0.8, index)}
                  whileInView={"show"}
                  initial={"hidden"}
                  onClick={() => {
                    setselectedIndex(index);
                  }}
                  className={`capitalize hover:font-bold cursor-pointer text-base ${
                    selectedIndex === index ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3.5 items-center">
          <button className="font-medium cursor-pointer">
            <p>Login</p>
          </button>
          <button
            className="px-5 cursor-pointer py-3 font-medium text-white rounded-full hover:font-semibold"
            style={{ backgroundColor: boxcolor1 }}
          >
            <p>Sign Up</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Mobile = ({ selectedIndex, setselectedIndex }: any) => {
  const [open, setopen] = useState<boolean>(false);
  const handleClose = () => setopen(!open);
  return (
    <div className="hidden relative max-sm:flex w-full flex-col justify-center items-center h-auto">
      <div className="w-full bg-white shadow drop-shadow-sm py-4 flex justify-between items-center align-middle px-12 max-[200px]:px-2 ">
        <Logo />
        {open ? (
          <FiX
            className="text-2xl transition-all duration-200 font-bold cursor-pointer"
            onClick={handleClose}
          />
        ) : (
          <RxHamburgerMenu
            className="text-2xl transition-all duration-200 font-bold cursor-pointer"
            onClick={handleClose}
          />
        )}
      </div>

      {open && (
        <motion.div
          variants={XSlideIn(500, 0.8, 0.1, 0.1)}
          whileInView={"show"}
          initial={"hidden"}
          className="transition-all z-[2] duration-200 fixed top-16 h-full w-full min-h-screen"
          style={{ backgroundColor: boxcolor3 }}
        >
          <div className="flex gap-14 flex-col items-center py-10">
            {Menus.map((item: MenusProp, index: number) => (
              <motion.div
                key={index}
                variants={YSlideIn(100, 0.5, 0.5, index)}
                whileInView={"show"}
                initial={"hidden"}
                onClick={() => {
                  handleClose();
                  setselectedIndex(index);
                }}
                className={`capitalize hover:font-bold cursor-pointer text-base ${
                  selectedIndex === index ? "font-bold" : "font-medium"
                }`}
              >
                {item.title}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={YSlideIn(100, 1, 0.6, 0.5)}
            whileInView={"show"}
            initial={"hidden"}
            onClick={handleClose}
            className="flex flex-col-reverse pt-6 gap-7 items-center"
          >
            <button
              onClick={handleClose}
              className="font-medium cursor-pointer"
            >
              <p>Login</p>
            </button>
            <button
              onClick={handleClose}
              className="px-5 cursor-pointer py-3 font-medium text-white rounded-full hover:font-semibold"
              style={{ backgroundColor: boxcolor1 }}
            >
              <p>Sign Up</p>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Logo = () => {
  return (
    <div
      className="text-xl font-semibold capitalize cursor-pointer"
      style={{ color: boxcolor1 }}
    >
      <span className="text-2xl font-semibold">A</span>scone
    </div>
  );
};

export const AdsHeader = ({ setads, ads }: { setads: any; ads: boolean }) => {
  return (
    <>
      {ads && (
        <div
          className="flex max-sm:hidden w-full py-1 text-white h-10 justify-center items-center text-center relative"
          style={{ backgroundColor: boxcolor1 }}
        >
          <div className="flex items-center gap-x-2 text-sm font-semibold align-middle justify-center">
            🚀 Session {Year} <GoDotFill />
            Early-bird registration now open{" "}
            <IoIosArrowForward className="mt-1" />
          </div>
          <span
            className="absolute font-bold text-base top-3.5 right-4 cursor-pointer "
            onClick={() => setads(!ads)}
          >
            <FiX />
          </span>
        </div>
      )}
    </>
  );
};

const date = new Date();
export const Year = date.getFullYear();
