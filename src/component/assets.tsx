import type { MenusProp } from "../lib/types";

const customers = "/cu.jpg";
const customers1 = "/cu1.jpg";
const customers2 = "/cu2.jpg";
const customers3 = "/cu3.avif";
const customers4 = "/cu4.avif";
const backgroundimg = "/bg.webp";
const hand = "/h.jpg";
const hand1 = "/h1.jpg";
const money = "/m.jpg";
const flag = "/f.png";

export const Photos = {
  customers,
  customers1,
  customers2,
  customers3,
  customers4,
  backgroundimg,
  hand,
  hand1,
  money,
  flag,
};

export const Menus: MenusProp[] = [
  {
    path: "#",
    title: "Features",
  },
  {
    path: "#",
    title: "Accounts",
  },
  {
    path: "#",
    title: "Company",
  },
  {
    path: "#",
    title: "Insight",
  },
];

export const YSlideIn: any = (
  n: any,
  dur: number,
  del: number,
  index: number
) => {
  return {
    hidden: {
      y: n,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      },
    },

    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: dur * index,
        delay: del,
        ease: "easeInOut",
      },
    },
  };
};
export const XSlideIn: any = (
  n: any,
  dur: number,
  del: number,
  index: number
) => {
  return {
    hidden: {
      x: n,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: dur * index,
        delay: del,
        ease: "easeInOut",
      },
    },
  };
};

export const Even = (index: number) => index % 2 === 0;
export const boxcolor1 = "#1C3F3A";
export const boxcolor2 = "#E0EAE8";
export const boxcolor3 = "#EBE8D8";
export const boxcolor4 = "#0A0C29";
