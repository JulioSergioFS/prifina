import Hamburger from "hamburger-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const scrollSection = useScrollSections();
  const goToContact = useScrollSection(
    pathname === "/work-opportunities" ? "3" : "9"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (id?: string | undefined) => {
    if (id) {
      if (pathname === "/work-opportunities") {
        return () => navigate("/");
      } else {
        return scrollSection[Number(id) - 1]?.onClick;
      }
    }
    //
    else {
      return () => navigate("/work-opportunities");
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/work-opportunities") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <ul className="header header-background">
      <li className="header_logo" onClick={handleLogoClick}>
        <img src="prifina-logo.svg" alt="Prifina logo" height={50} />
        Prifina
      </li>
      {isMobile ? (
        <li className="menu">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
          {isMenuOpen && (
            <ul className="mobile-menu">
              {headerSections.map((item, index) => (
                <li key={index} onClick={handleItemClick(item.id)}>
                  {item.name}
                </li>
              ))}
              <li>
                <button
                  className="mobile-menu-button"
                  onClick={goToContact.onClick}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          )}
        </li>
      ) : (
        <>
          <li className="menu">
            <ul className="non-mobile-menu">
              {headerSections.map((item, index) => (
                <li key={item.id} onClick={handleItemClick(item.id)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </li>

          <li>
            <button className="button-secondary" onClick={goToContact.onClick}>
              Contact Us
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
