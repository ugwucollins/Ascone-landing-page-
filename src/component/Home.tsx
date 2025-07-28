import { GiNorthStarShuriken } from "react-icons/gi";
import {
  boxcolor1,
  boxcolor2,
  boxcolor3,
  Photos,
  XSlideIn,
  YSlideIn,
} from "./assets";
import { motion } from "framer-motion";
import { PiGlobeLight } from "react-icons/pi";

import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import About from "./About";
import { useState } from "react";
import type { BRAND } from "../lib/types";
import { LiaSunSolid } from "react-icons/lia";
import { RiOpenaiFill } from "react-icons/ri";
import { BiLogoAudible } from "react-icons/bi";
import { DiZend } from "react-icons/di";
import Values from "./Values";
import FAQ, { BGImage2 } from "./FAQ";

const Home = () => {
  return (
    <>
      <div className="px-16 max-md:px-11 max-sm:px-8 max-[250px]:px-2 py-28">
        <FirstBanner />
        <About />
        <Values />
      </div>
      <BGImage />
      <div className="px-16  max-md:px-11 max-sm:px-8 max-[250px]:px-2 py-28">
        <FAQ />
        <BGImage2 />
      </div>
    </>
  );
};

export default Home;

export const FirstBanner = () => {
  const [indexS, setindexS] = useState(2);
  return (
    <>
      <div className="w-full flex flex-row justify-center gap-y-10 gap-5 max-[830px]:flex-col items-center-safe pb-10">
        <motion.div
          variants={XSlideIn(-300, 0.8, 0.6, 0.5)}
          whileInView={"show"}
          initial={"hidden"}
          className="w-full max-w-4xl"
        >
          <span
            className="text-sm font-medium py-2 uppercase"
            style={{ color: boxcolor1 }}
          >
            Try it now
          </span>
          <h1 className="text-[min(15vw,45px)] pt-2 pb-14 text-balance font-medium">
            Change the way you use your{" "}
            <span className="font-serif">money</span>
          </h1>
          <motion.div
            variants={YSlideIn(100, 1, 0.6, 0.5)}
            whileInView={"show"}
            initial={"hidden"}
            className=" text-sm font-semibold opacity-70 pb-10"
          >
            from your everyday spending, to planning for your future with
            savings and investments, Ascone helps you get more frome your money.
          </motion.div>

          <div className="flex flex-wrap gap-3.5 items-center">
            <button
              style={{ backgroundColor: boxcolor1 }}
              className="px-5 py-3 font-normal rounded-full cursor-pointer text-white hover:font-medium text-base"
            >
              <p>Get started now</p>
            </button>
            <div>
              <div className="flex items-center gap-1 text-yellow-700">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-base font-semibold px-1 text-black">
                  5.0
                </span>
              </div>
              <div>
                <p>
                  from 120+ <span>reviews</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full px-1 py-4 h-[58vh] max-sm:h-screen"
          variants={XSlideIn(300, 0.8, 0.7, 0.7)}
          whileInView={"show"}
          initial={"hidden"}
        >
          <div className="grid grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-2 grid-cols-2 max-sm:gap-2 h-full shadow drop-shadow">
            <div
              className="relative overflow-hidden "
              style={{ backgroundColor: boxcolor2 }}
            >
              <img
                src={Photos.hand}
                className="absolute w-full h-full right-0 top-6 rotate-6 left-5 rounded-full z-0"
                alt="image"
              />
              <div className="absolute w-full h-full bg-black/20 top-0 left-0 z-[0.5]" />
              <div className="max-w-[100px] w-full h-2 absolute right-5 top-2 z-[1] bg-white" />
              <div className="max-w-[60px] w-full h-2 absolute right-5 top-6 z-[1] bg-white" />
            </div>

            <div
              className="rounded-l-full relative overflow-hidden"
              style={{ backgroundColor: boxcolor3 }}
            >
              <div className="w-full h-full relative">
                <h1 className="text-[min(10vw,35px)] font-semibold absolute right-10 top-3">
                  56+
                </h1>

                <p className="text-[min(10vw,27px)] font-medium absolute left-5 top-[40%] pt-1 capitalize">
                  {" "}
                  Currencies
                </p>

                <PiGlobeLight
                  className="text-[min(20vw,90px)] absolute  right-8 bottom-0 pt-1 capitalize  font-extralight"
                  style={{ color: boxcolor1 }}
                />
              </div>
            </div>

            <div
              className=" overflow-hidden rounded-tr-full relative"
              style={{ backgroundColor: boxcolor2 }}
            >
              <div className="w-full h-full relative py-3 px-2">
                <div
                  className="flex gap-1.5 items-center absolute left-2 top-3 text-5xl"
                  style={{ color: boxcolor1 }}
                >
                  <GiNorthStarShuriken />
                  <GiNorthStarShuriken />
                </div>
                <h1
                  className="text-[min(10vw,25px)] capitalize font-normal absolute right-12 top-[40%]"
                  style={{ color: boxcolor1 }}
                >
                  Users Active
                </h1>
                <div className="absolute left-3 bottom-2">
                  <div className="flex items-center-safe">
                    <img
                      src={Photos.customers}
                      alt="customers image"
                      className="size-10 ring-2  ring-white rounded-full"
                    />
                    <img
                      src={Photos.customers2}
                      alt="customers image"
                      className="size-10 ring-2 -ml-1.5 ring-white rounded-full"
                    />
                    <img
                      src={Photos.customers3}
                      alt="customers image"
                      className="size-10 ring-2 -ml-1.5 ring-white rounded-full"
                    />
                    <img
                      src={Photos.customers4}
                      alt="customers image"
                      className="size-10 ring-2 -ml-1.5 ring-white rounded-full"
                    />
                    <div
                      className="size-12 px-2.5 text-2xl text-white ring-2  ring-white rounded-full -ml-2.5 relative font-bold"
                      style={{ backgroundColor: boxcolor1 }}
                    >
                      <BsArrowRight className="-rotate-45 absolute top-3 left-3 font-bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden"
              style={{ backgroundColor: boxcolor1 }}
            >
              <div className="w-full h-full">
                <div className="flex text-[min(10vw,35px)] font-normal text-white justify-between items-center px-4 py-4">
                  <h1>$196,000</h1>
                  <BsArrowUp />
                </div>

                <p className=" absolute right-4 bottom-4 text-white text-[min(10vw,25px)] font-normal ">
                  Saving
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-4 gap-y-6 py-8 w-full justify-between px-2 max-sm:px-0.5 max-sm:justify-center items-center align-middle text-center  border border-t-2 border-b-2 border-gray-300 border-r-0 border-l-0">
        {Brands.map((logo: BRAND, index: number) => {
          const even = index % 2 === 0;
          return (
            <motion.div
              variants={YSlideIn(even ? 130 : -130, 0.5, 0.5, index)}
              initial={"hidden"}
              whileInView={"show"}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.4,
                  delay: 0.1,
                  ease: "easeInOut",
                },
              }}
              key={index}
              className={`flex flex-row items-center cursor-pointer ${
                indexS === index && "text-green-800"
              }`}
              onClick={() => setindexS(index)}
            >
              <span className="text-3xl font-bold">{logo.icon}</span>
              <p className="text-base font-bold">{logo.name}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export const Brands: BRAND[] = [
  {
    icon: <LiaSunSolid />,
    name: "Loom",
  },
  {
    name: "HubSpot",
  },
  {
    icon: <RiOpenaiFill />,
    name: "OpenAI",
  },
  {
    icon: <BiLogoAudible />,
    name: "Raycast",
  },
  {
    icon: <DiZend />,
    name: "Zenefits",
  },
];

export const BGImage = () => {
  return (
    <div className="relative bg-[url('/bg.webp')] text-white justify-between bg-cover bg-no-repeat">
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-black/20" />
      <div className=" px-16 max-md:px-11 flex-wrap items-center max-sm:px-8 max-[250px]:px-2 max-[950px]:h-[60vh] relative h-[45vh] w-full flex z-[1] py-1">
        <motion.div
          variants={XSlideIn(-300, 0.8, 0.6, 0.5)}
          whileInView={"show"}
          initial={"hidden"}
          className="flex items-center-safe gap-6 flex-wrap"
        >
          <div className="flex flex-col gap-4">
            <span className="text-[min(10vw,80px)] font-medium">$14B</span>
            <p className="text-gray-200 font-medium">Funds and Syndicates</p>
          </div>
          <div>
            <span className="text-[min(10vw,80px)] font-medium">23K+</span>
            <p className="text-gray-200 font-medium">
              Raised by active startups
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={XSlideIn(300, 0.8, 0.6, 0.5)}
          whileInView={"show"}
          initial={"hidden"}
          className="pt-4 -mt-20 max-[1500px]:mt-0 max-md:w-full flex  text-left max-md:text-right justify-end "
        >
          <div className="flex flex-col-reverse w-[70%] max-[1400px]:w-full justify-end items-end  text-right ">
            <span className="text-[min(10vw,60px)] w-full text-balance font-medium">
              Market and build the solutions
            </span>
            <p className="text-gray-200/95 pl-28 max-[1400px]:pl-0 font-medium text-left max-[950px]:text-right w-full">
              NUMBERS
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
