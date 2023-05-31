import { AboutMe } from "../sections/AboutMe";
import { Contact } from "../sections/Contact";
import { Data } from "../sections/Data";
import { Eligible } from "../sections/Eligible";
import { Home } from "../sections/Home";
import { Plans } from "../sections/Plans";
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
  { id: "1", name: "Home", component: <Home />, bgColor: "primary" },

  {
    id: "2",
    name: "About Us",
    component: <Data />,
    bgColor: "secondary",
  },
  {
    id: "2",
    name: "Eligible",
    component: <Eligible />,
    bgColor: "secondary",
  },
  {
    id: "2",
    name: "About Us",
    component: <AboutMe />,
    bgColor: "secondary",
  },
  {
    id: "3",
    name: "Plans",
    component: <Plans />,
    bgColor: "primary",
    haveIsMobile: true,
  },
  {
    id: "4",
    name: "Testimonials",
    component: <Testimonials />,
    bgColor: "secondary",
    haveIsMobile: true,
  },
  {
    id: "5",
    name: "Contact",
    component: <Contact />,
    bgColor: "primary",
    haveIsMobile: true,
  },
];
