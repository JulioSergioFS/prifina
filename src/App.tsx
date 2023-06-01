import { m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import { Header } from "./components/Header";
import MotionLazyContainer from "./components/MotionLazyContainer";
import { sections } from "./constants/sections";
import "./styles/global.scss";

function App() {
  const [hidden, setHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
  const offsetHeightBackground = 450;

  const hideSection1 = () => {
    if (window.pageYOffset > offsetHeightBackground) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const changeHeaderBackgroundOnScroll = () => {
    if (window.pageYOffset > offsetHeightBackground) {
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
    window.onresize = () => setIsMobile(window.innerWidth <= 820);
  }, [window.innerWidth]);

  return (
    <MotionLazyContainer>
      <ScrollingProvider scrollBehavior="smooth">
        <div className="app">
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
                {React.cloneElement(sections[0].component)}
              </m.div>
            </section>
          </Section>
          <Section id="2">
            <section className="section second-section">
              <m.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                }}
              >
                {React.cloneElement(sections[1].component)}
              </m.div>
            </section>
          </Section>
          {sections.map((section, index) =>
            index > 1 ? (
              <Section
                id={(index + 1).toString()}
                key={index}
                style={{
                  zIndex: 2,
                }}
              >
                <section
                  className={`section background-${section.bgColor}`}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {section.haveIsMobile
                    ? React.cloneElement(section.component, {
                        isMobile,
                      })
                    : section.component}
                </section>
              </Section>
            ) : null
          )}
        </div>
      </ScrollingProvider>
    </MotionLazyContainer>
  );
}

export default App;
