import googleGmail from "@iconify/icons-logos/google-gmail";
import instagramIcon from "@iconify/icons-skill-icons/instagram";
import linkedinIcon from "@iconify/icons-skill-icons/linkedin";
import { Icon } from "@iconify/react";

export const socials = [
  {
    name: "Linkedin",
    icon: <Icon icon={linkedinIcon} height={22} />,
  },
  {
    name: "contact@foreverlearning.com",
    icon: <Icon icon={googleGmail} height={22} />,
  },
  {
    name: "Instagram",
    icon: <Icon icon={instagramIcon} height={22} />,
  },
];

export const socialsMobile = [socials[0], socials[2], socials[1]];
