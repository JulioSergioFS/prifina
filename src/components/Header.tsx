import { useScrollSection, useScrollSections } from "react-scroll-section";
import { headerSections } from "../constants/sections";
import { useState } from "react";
import Hamburger from "hamburger-react";
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
  const [isMenuOpen, setIsMenuOpen] =useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ul className="header header-background">
      <li
        className="header_logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src="prifina-logo.svg" alt="Prifina logo" height={50} />
        Prifina
      </li>
      {isMobile && (
        <li className="menu">
          <Hamburger 
          toggled={isMenuOpen} 
          toggle={toggleMenu} 
          /> 
          {isMenuOpen && (
          <ul className="mobile-menu">
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
            <li>
              <button 
                className="mobile-menu-button" 
                onClick={goToContact.onClick}>
                  Contact Us
              </button>
            </li>
          </ul>
          )}
        </li>
      )}
      {!isMobile && (
        <li className="menu">
          <ul className="non-mobile-menu">
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
      )}
    </ul>
  );
}
