import { AnimateComponent } from "../components/AnimateComponent";
import { socials, socialsMobile } from "../constants/contact";
import "../styles/sections/contact.scss";

export function Contact({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content contact">
      <AnimateComponent
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
          },
          hidden: { opacity: 0, y: 70 },
        }}
      >
        <h4 className="title-variant">Contact</h4>
      </AnimateComponent>
      <div className="socials">
        {(isMobile ? socialsMobile : socials).map((social, index) => (
          <AnimateComponent
            key={social?.name || index}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 * ((index + 1) / 4) },
              },
            }}
          >
            <div>
              {social?.icon}
              <p className="redirect-link">{social?.name}</p>
            </div>
          </AnimateComponent>
        ))}
      </div>
    </div>
  );
}
