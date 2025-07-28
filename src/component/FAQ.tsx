import { useState } from "react";
import { boxcolor1, XSlideIn, YSlideIn } from "./assets";
import { FaPlus } from "react-icons/fa6";
import { BiX } from "react-icons/bi";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selectIndex, setselectIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden py-4 flex flex-row max-md:flex-col gap-5 justify-between">
      <motion.div
        variants={YSlideIn(-150, 0.8, 0.6, 0.5)}
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
        {[1, 2, 3].map((item, index: number) => {
          const even = index % 2 === 0;
          return (
            <motion.div
              variants={XSlideIn(even ? -300 : 300, 0.8, 0.6, index)}
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
                <h1 className="text-base font-semibold">
                  How sending a bank transfer
                </h1>
                {selectIndex === index ? (
                  <BiX className="text-2xl cursor-pointer" />
                ) : (
                  <FaPlus />
                )}
              </div>
              {selectIndex === index && (
                <p className="text-gray-500 px-2.5 font-medium">
                  gydhygygfyhrhsyow sending a bank transfe ow sending a bank
                  transfe.ow sending a bank transfe
                </p>
              )}
              <hr className="w-full h-[1px] bg-gray-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
