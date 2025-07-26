import { GiEarrings } from "react-icons/gi";
import { boxcolor1 } from "./assets";
import { FiArrowUpRight } from "react-icons/fi";
import type { ReactElement } from "react";

const Values = () => {
  return (
    <div className="py-10 w-full">
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

      <div className="flex justify-center flex-wrap items-center py-8">
        <div className="px-6 py-10 flex-col gap-y-5 ring-1 ring-gray-300 hover:shadow-md shadow drop-shadow hover:drop-shadow-lg flex justify-center items-start w-full bg-white hover:rounded-lg transition-all duration-200 rounded-md max-w-64">
          <span className="text-4xl">
            <GiEarrings />
          </span>
          <div>
            <h1 className="text-[min(5vw,18px)] font-semibold py-3">
              Transparency
            </h1>
            <p className="font-medium text-gray-600 pb-3">
              A departure from the industry norm of ambiguity, Montfort, as a
              public and finest company.
            </p>
          </div>
          <button className="px-3 cursor-pointer py-3 text-xl rounded-full ring-1 ring-gray-300">
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Values;
type VALUES = {
  icon: ReactElement;
  ttile: string;
  text: string;
};

export const ValuesArray: VALUES[] = [
  {
    icon: <></>,
    text: "A departure from the industry norm of ambiguity, Montfort, as a public and finest company.",
    ttile: "Transparency",
  },
];
