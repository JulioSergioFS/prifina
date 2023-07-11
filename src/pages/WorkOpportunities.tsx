import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "react-scroll-section";
import { Header } from "../components/Header";
import { Contact } from "../sections/Contact";
import { Home } from "../sections/work-opportunities/Home";
import { Jobs } from "../sections/work-opportunities/Jobs";

export function WorkOpportunities() {
  const [hidden, setHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1100);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 834);
  const [isXS, setIsXS] = useState(window.innerWidth <= 490);
  const offsetHeightBackground = 450;

  const hideSection1 = () => {
    if (window.scrollY > offsetHeightBackground) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const changeHeaderBackgroundOnScroll = () => {
    if (window.scrollY > offsetHeightBackground) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      hideSection1();
      changeHeaderBackgroundOnScroll();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    window.onresize = () => {
      setIsTablet(window.innerWidth <= 1100);
      setIsMobile(window.innerWidth <= 820);
      setIsXS(window.innerWidth <= 430);
    };
  }, [window.innerWidth]);

  return (
    <>
      <Header
        hidden={hidden}
        hasBackground={hasBackground}
        isMobile={isMobile}
      />
      <Section id="1">
        <section className="section home-section">
          <m.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Home isTablet={isTablet} isMobile={isMobile} isXS={isXS} />
          </m.div>
        </section>
      </Section>
      <Section id="2">
        <section className="section without-padding">
          <m.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Jobs />
          </m.div>
        </section>
      </Section>
      <Section
        id="3"
        style={{
          zIndex: 2,
        }}
      >
        <section
          className={`section background-primary`}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Contact isMobile={isMobile} />
        </section>
      </Section>
    </>
  );
}
