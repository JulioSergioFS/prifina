import { useScrollSections } from "react-scroll-section";
import { headerSections } from "../constants/sections";
import "../styles/header.scss";

export function Header({
  hasBackground,
  isMobile,
  hidden,
}: {
  hasBackground: boolean;
  isMobile: boolean;
  hidden: boolean;
}) {
  const scrollSection = useScrollSections();

  return (
    <ul
      className={`header${
        !isMobile || hasBackground ? " header-background" : ""
      }`}
    >
      <li className="header_logo">
        <img src="prifina-logo.svg" alt="Prifina logo" height={50} />
        Prifina
      </li>
      {!isMobile ? (
        <li className="menu">
          <ul>
            {headerSections.map((item, index) => (
              <li
                key={item.id}
                onClick={
                  item.id ? scrollSection[Number(item.id)]?.onClick : () => {}
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </li>
      ) : null}
      <li>
        <button>Contact Us</button>
      </li>
    </ul>
  );
}
