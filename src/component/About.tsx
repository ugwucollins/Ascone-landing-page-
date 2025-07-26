import { motion } from "framer-motion";
import { boxcolor1, boxcolor2, YSlideIn } from "./assets";
import { FaArrowUp } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-full py-14 text-center flex justify-center items-center align-middle">
      <div className="w-full flex flex-col gap-4">
        <motion.div
          variants={YSlideIn(100, 0.5, 0.5, 1)}
          whileInView={"show"}
          initial={"hidden"}
          className="w-full py-4"
        >
          <p
            className="text-sm py-2 text-shadow-2xs font-bold uppercase"
            style={{ color: boxcolor1 }}
          >
            About Us
          </p>
          <h1 className="font-semibold text-[min(10vw,38px)] text-balance">
            One app for all your money things
          </h1>
          <p className="text-sm font-semibold  opacity-90 text-gray-700 text-balance">
            Remove all the friction that stands in the way of your money goals.
          </p>
        </motion.div>

        <div className="flex flex-row max-[0px]:flex-col gap-3 items-center justify-center">
          <motion.div
            variants={YSlideIn(100, 0.5, 0.5, 0.6)}
            whileInView={"show"}
            initial={"hidden"}
            className="w-full max-w-xl px-4 max-sm:px-1 relative py-10 h-80"
            style={{ backgroundColor: boxcolor1 }}
          >
            <h1 className="font-bold text-white text-[min(10vw,30px)] text-balance">
              Grow Savings Faster
            </h1>
            <div className="flex absolute gap-0 bottom-10 w-full justify-center flex-row">
              <div className="gap-4 justify-center items-end flex ">
                {[1, 2, 3].map((item, index: number) => (
                  <div
                    key={index}
                    className="w-3 bg-gray-300"
                    style={{ height: 20 * item }}
                  />
                ))}
              </div>
              <div className="flex items-center flex-col">
                <h1 className="text-gray-100 text-[min(10vw,30px)] font-semibold py-2">
                  $12,000
                </h1>
                <FaArrowUp className="text-gray-300 text-[100px]" />
              </div>
              <div className="gap-5 items-end flex -ml-3.5 ">
                {[2, 5].map((item, index: number) => (
                  <div
                    key={index}
                    className="w-3 bg-gray-300"
                    style={{ height: 15 * item }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={YSlideIn(-100, 0.5, 0.5, 0.6)}
            whileInView={"show"}
            initial={"hidden"}
            className="w-full py-10 px-4 max-sm:px-1 overflow-hidden relative h-80 rounded-bl-[150px] "
            style={{ backgroundColor: boxcolor2 }}
          >
            <h1 className="text-[min(10vw,25px)] font-normal">
              Send across the global
            </h1>

            <div className="w-full absolute bottom-10 flex flex-wrap justify-center gap-2">
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
