import { useScrollSection, useScrollSections } from "react-scroll-section";
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
  const goToContact = useScrollSection("9");

  return (
    <ul
      className={`header${
        !isMobile || hasBackground ? " header-background" : ""
      }`}
    >
      <li
        className="header_logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
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
                  item.id
                    ? scrollSection[Number(item.id) - 1]?.onClick
                    : () => {}
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        </li>
      ) : null}
      <li>
        <button onClick={goToContact.onClick}>Contact Us</button>
      </li>
    </ul>
  );
}
