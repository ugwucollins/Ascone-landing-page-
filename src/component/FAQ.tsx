import { useState } from "react";
import { boxcolor1, FAQArray, Photos, XSlideIn, YSlideIn } from "./assets";
import { FaPlus } from "react-icons/fa6";
import { BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import type { FAQs } from "../lib/types";
import { GiNorthStarShuriken } from "react-icons/gi";

const FAQ = () => {
  const [selectIndex, setselectIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden py-10 flex flex-row max-md:flex-col gap-5 justify-between">
      <motion.div
        variants={YSlideIn(-100, 0.8, 0.6, 0.5)}
        whileInView={"show"}
        initial={"hidden"}
      >
        <p
          className="text-sm font-medium text-shadow"
          style={{ color: boxcolor1 }}
        >
          FAQ
        </p>
        <h1 className="text-[min(10vw,30px)] font-medium">
          Frequently asked questions
        </h1>
      </motion.div>

      <div className="flex-col flex gap-y-4">
        {FAQArray.map((item: FAQs, index: number) => {
          const even = index % 2 === 0;
          return (
            <motion.div
              variants={XSlideIn(even ? -200 : 200, 1, 0.5, index)}
              whileInView={"show"}
              initial={"hidden"}
              className="flex flex-col px-2 py-2 gap-3 text-left"
              key={index}
              onClick={() => setselectIndex(index)}
            >
              <div
                className={`flex justify-between items-center  cursor-pointer rounded-md bg-white  px-2 py-2 ${
                  selectIndex === index
                    ? "shadow-none drop-shadow-none"
                    : "shadow drop-shadow"
                }`}
              >
                <h1 className="text-base font-semibold text-black ">
                  {item.title}
                </h1>
                {selectIndex === index ? (
                  <BiX className="text-2xl cursor-pointer text-black " />
                ) : (
                  <FaPlus className="text-black " />
                )}
              </div>
              {selectIndex === index && (
                <p className="text-gray-500 px-2.5 font-medium">{item.text}</p>
              )}
              {item.line && <hr className="w-full h-[1px] border-gray-500" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

export const BGImage2 = () => {
  return (
    <div
      className="flex flex-row max-[530px]:flex-col gap-4 items-center py-10 px-4 max-sm:px-2 justify-between rounded"
      style={{ backgroundColor: boxcolor1 }}
    >
      <motion.div
        variants={YSlideIn(100, 1, 0.5, 0.5)}
        whileInView={"show"}
        initial={"hidden"}
        className="flex items-start text-white w-full gap-y-8 flex-col"
      >
        <h1 className="text-[min(10vw,35px)] font-medium text-balance">
          Change the way you use your <span className="font-serif">money</span>
        </h1>
        <p className="text-base font-medium">
          Join over million people who choose Ascone for fast and secure future
          banking
        </p>

        <button className="px-5 py-2.5 text-black font-medium bg-white rounded-full capitalize cursor-pointer">
          <p>Get Started Now</p>
        </button>
      </motion.div>

      <motion.div
        variants={YSlideIn(-100, 1, 0.5, 0.5)}
        whileInView={"show"}
        initial={"hidden"}
        className="flex w-1/2 max-sm:w-full flex-col gap-y-10 items-end max-[530px]:items-center justify-end-safe"
      >
        <div className="flex gap-1.5 text-white items-center  text-[70px]">
          <GiNorthStarShuriken />
          <GiNorthStarShuriken />
        </div>
        <motion.div
          whileHover={{
            cursor: "pointer",
            scale: 1.05,
            transition: {
              delay: 0.1,
              duration: 0.6,
            },
          }}
          className="pt-8 pb-4 px-5 rounded-[3px] bg-gray-50 overflow-hidden rounded-tr-[100px]"
        >
          <img
            src={Photos.money}
            className="size-32 rounded-tr-[100px] rounded-[3px]"
            alt="money image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
