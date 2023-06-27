import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Data } from "../sections/Data";
import { Eligible } from "../sections/Eligible";
import { FAQ } from "../sections/FAQ";
import { Features } from "../sections/Features";
import { Home } from "../sections/Home";
import { Providers } from "../sections/Providers";
import { Reviews } from "../sections/Reviews";

export const headerSections = [
  {
    id: "4",
    name: "About",
  },
  {
    id: "8",
    name: "FAQ",
  },
  {
    id: "7",
    name: "Reviews",
  },
  {
    url: "/work-opportunities",
    name: "Work Opportunities",
  },
];

export const sections = [
  { id: "1", component: <Home />, bgColor: "primary", haveIsXS: true },

  {
    id: "2",
    component: <Data />,
    bgColor: "secondary",
  },
  {
    id: "3",
    component: <Eligible />,
    bgColor: "secondary",
  },
  {
    id: "4",
    component: <About />,
    bgColor: "primary",
  },
  {
    id: "5",
    component: <Features />,
    bgColor: "secondary tablet-background-change",
    haveIsMobile: true,
  },
  {
    id: "6",
    component: <Providers />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "7",
    component: <Reviews />,
    bgColor: "secondary mobile-background-change",
    haveIsMobile: true,
  },
  {
    id: "8",
    component: <FAQ />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "9",
    component: <Contact />,
    bgColor: "primary",
    haveIsMobile: true,
  },
];
