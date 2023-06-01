import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Data } from "../sections/Data";
import { Eligible } from "../sections/Eligible";
import { Features } from "../sections/Features";
import { Home } from "../sections/Home";
import { Testimonials } from "../sections/Testimonials";

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
  { id: "1", component: <Home />, bgColor: "primary" },

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
    id: "3",
    component: <Features />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "4",
    component: <Testimonials />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "5",
    component: <Contact />,
    bgColor: "primary",
    haveIsMobile: true,
  },
];
