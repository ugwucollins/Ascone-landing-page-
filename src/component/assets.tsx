import { HiOutlineSquares2X2 } from "react-icons/hi2";
import type { FAQs, MenusProp, VALUES } from "../lib/types";
import { GiCircleClaws, GiMaterialsScience } from "react-icons/gi";

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

export const ValuesArray: VALUES[] = [
  {
    icon: <HiOutlineSquares2X2 />,
    text: "A departure from the industry norm of ambiguity, Montfort, as a public and finest company.",
    ttile: "Transparency",
  },
  {
    icon: <GiMaterialsScience />,
    text: "Ascone propietary fintech platform helps our subsidiaries locate and manage investments.",
    ttile: "Creative Expansion",
  },
  {
    icon: <GiCircleClaws />,
    text: "We provide access to unique private credit investments a rare but valueable part  of a sound investment portfolio",
    ttile: "Private Credit Investments",
  },
];

export const FAQArray: FAQs[] = [
  {
    title: "How sending a bank transfer",
    text: "Sending a bank transfer is a simple process. You can send a bank transfer to anyone in the world. It is fast, easy and secure.",
    line: true,
  },

  {
    title: "What is the scheduled payments feature?",
    text: "The scheduled payments feature allows you to set up automatic payments for your accounts. You can set up payments for a specific date or a recurring schedule.",
    line: true,
  },
  {
    title: "How can i reactivate a terminated card?",
    text: "If you have terminated a card, you can reactivate it by following the steps below Here.",
    line: true,
  },
  {
    title: "How about with a refund?",
    text: "Refunds are processed within 24 hours. If you have any questions, please contact our customer support team.",
    line: false,
  },
];

export const FooterLink = [
  {
    title: "Account",
    text: ["saving", "join account", "crypto", "freelance", "commodities"],
  },
  {
    title: "Help",
    text: ["customer help", "community", "blog"],
  },
  {
    title: "Finance",
    text: ["cards", "linked accounts", "payment"],
  },
  {
    title: "Company",
    text: ["About Us", "contact", "sustainability", "career"],
  },
];
export const Even = (index: number) => index % 2 === 0;
export const boxcolor1 = "#1C3F3A";
export const boxcolor2 = "#E0EAE8";
export const boxcolor3 = "#EBE8D8";
export const boxcolor4 = "#0A0C29";
