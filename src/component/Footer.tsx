import { boxcolor1, Photos, FooterLink } from "./assets";
import { Year } from "./Navbar";

const Footer = () => {
  return (
    <div className=" pb-5 px-16 max-md:px-11 max-sm:px-8 max-[250px]:px-2">
      <div className="w-full flex flex-wrap justify-between items-start gap-10">
        {FooterLink.map((item) => (
          <div key={item.title}>
            <h1 className="text-base font-bold py-5">{item.title}</h1>
            <div className="flex flex-col gap-2">
              {item.text.map((item: any) => (
                <p className="text-sm cursor-pointer hover:font-bold font-semibold capitalize text-gray-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex gap-5 flex-col">
          <div
            className="text-[min(20vw,50px)] font-semibold capitalize cursor-pointer"
            style={{ color: boxcolor1 }}
          >
            <span className="text-[min(20vw,60px)] font-bold">A</span>scone
          </div>
          <div className="flex flex-row max-[299px]:flex-col justify-around gap-10">
            <p className="text-sm font-semibold text-gray-500 w-[70%] max-sm:w-full text-balance">
              110 Bay StreetBay williams Tower, suite 297, Toronto Onsyyig
              M5J2T3
            </p>
            <div className="flex gap-1 text-base font-semibold text-gray-500">
              <img src={Photos.flag} className="size-5" alt="flag" />
              English(UK)
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <hr className="border-gray-400" />
        <div className="flex py-4 justify-between gap-2 flex-wrap">
          <div className="text-gray-500 font-semibold text-base">
            &copy; Ascone Finance Ltd {Year}
          </div>
          <div className="flex gap-5 flex-wrap">
            {["privacy policy", "Terms of use", "disclosure"].map((item) => (
              <p className="text-balance capitalize font-bold">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
