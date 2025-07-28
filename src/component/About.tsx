import { motion } from "framer-motion";
import { boxcolor1, boxcolor2, Photos, YSlideIn } from "./assets";
import { FaArrowUp } from "react-icons/fa6";
import { PiGlobeLight } from "react-icons/pi";

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

            <div className="w-full justify-center items-center flex absolute  left-1/2 -translate-x-1/2 top-20">
              <div className="max-md:size-58 size-[25vw] ring-1 flex justify-center items-center ring-gray-400/75 rounded-full bg-transparent">
                <div className="max-md:size-44 ring-1 size-[18vw] flex justify-center items-center ring-gray-400/75 rounded-full bg-transparent">
                  <div className="size-30 ring-1 ring-gray-400/75 rounded-full bg-transparent" />
                </div>
              </div>
            </div>

            <div className="w-full absolute bottom-10 max-sm:bottom-2 flex flex-wrap max-sm:justify-center gap-2 px-2 py-2 justify-around">
              <div className="flex flex-col gap-1 items-start">
                <div className="flex flex-col w-[150px]">
                  <img src={Photos.money} alt="money image" />
                  <div className="bg-white p-3">
                    <h1
                      className="text-[min(5vw,20px)] font-medium"
                      style={{ color: boxcolor1 }}
                    >
                      $25,000
                    </h1>
                    <p>Sent bro</p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    src={Photos.customers3}
                    className="w-10 h-10 ring-1 ring-white rounded-full "
                    alt="customers imgae"
                  />
                  <img
                    src={Photos.customers2}
                    className="w-10 h-10 ring-1 ring-white rounded-full "
                    alt="customers imgae"
                  />
                </div>
              </div>

              <div className="relative">
                <PiGlobeLight
                  className="text-[min(20vw,150px)] absolute  -left-24 -bottom-10 pt-1 capitalize  font-extralight"
                  style={{ color: boxcolor1 }}
                />
              </div>
              <div className="flex flex-col gap-y-14 max-sm:gap-5">
                <div className="flex flex-col text-left gap-0.5">
                  <div
                    className="py-3 px-5 text-white font-medium"
                    style={{ backgroundColor: boxcolor1 }}
                  >
                    <h1 className="text-[min(5vw,20px)]  font-medium">
                      $40,000
                    </h1>
                    <p>Thanks Chirs</p>
                  </div>
                  <img
                    src={Photos.customers3}
                    className="w-10 h-10 ring-1 ring-white rounded-full "
                    alt="customers imgae"
                  />
                </div>
                <div className="flex items-center-safe justify-end">
                  <img
                    src={Photos.flag}
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
