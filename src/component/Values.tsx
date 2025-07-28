import { boxcolor1, boxcolor3, ValuesArray, YSlideIn } from "./assets";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import type { VALUES } from "../lib/types";

const Values = () => {
  const [Sindex, setSindex] = useState(2);

  return (
    <div className="py-14 w-full">
      <h1
        className="text-sm uppercase font-medium"
        style={{ color: boxcolor1 }}
      >
        Values
      </h1>
      <div className=" flex justify-between flex-wrap gap-y-5 items-center max-sm:items-end-safe">
        <h1 className="text-balance text-[min(10vw,25px)] font-medium">
          Make your spend, well-spent
        </h1>
        <p className="text-base font-semibold pb-10 text-gray-600">
          Manages a diversified group of specialized private credit brands with
          efficient tech-enabled processes.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-10 items-center py-8">
        {ValuesArray.map((item: VALUES, index: number) => {
          const even = index % 2 === 0;
          return (
            <motion.div
              variants={YSlideIn(even ? 100 : -100, 1, 0.5, index)}
              whileInView={"show"}
              onClick={() => setSindex(index)}
              initial={"hidden"}
              whileHover={{
                cursor: "pointer",
                scale: 1.05,
                transition: {
                  delay: 0.1,
                  duration: 0.1,
                  ease: "easeInOut",
                },
              }}
              key={index}
              className={`px-6 py-10 flex-col gap-y-5 ring-1 ring-gray-300 hover:shadow-md shadow drop-shadow hover:drop-shadow-lg flex justify-center items-start w-full hover:rounded-lg transition-all duration-200 rounded-md max-w-sm ${
                index === Sindex && "rounded-tr-[150px]"
              }`}
              style={{
                backgroundColor: `${index === Sindex ? boxcolor3 : "white"}`,
              }}
            >
              <span className="text-4xl text-black">{item.icon}</span>
              <div>
                <h1
                  className="text-[min(5vw,18px)] font-semibold capitalize py-3"
                  style={{
                    color: `${index === Sindex && boxcolor1}`,
                  }}
                >
                  {item.ttile}
                </h1>
                <p className="font-medium text-gray-600 pb-3">{item.text}</p>
              </div>

              <button
                className="px-3 cursor-pointer py-3 text-xl rounded-full ring-1 ring-gray-300"
                style={{
                  backgroundColor: `${index === Sindex ? boxcolor1 : "white"}`,
                  color: `${index === Sindex ? "white" : "black"}`,
                }}
              >
                <FiArrowUpRight />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
