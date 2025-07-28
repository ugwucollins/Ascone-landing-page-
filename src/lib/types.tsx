import type { ReactElement } from "react";

export type MenusProp = {
  path: string;
  title: string;
};

export type BRAND = {
  icon?: ReactElement;
  name: string;
};

export type VALUES = {
  icon: ReactElement;
  ttile: string;
  text: string;
};

export type FAQs = {
  title: string;
  text: string;
  line: boolean;
};
